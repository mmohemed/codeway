// واجهة محاكي Excel: جدول الخلايا، وشريط الصيغة، وتبويبات الأوراق، والرسوم البيانية، والفحص
// المحرك نفسه في js/xl-engine.js، و Power Query (لغة M) في js/m-engine.js
(function (root) {
  const CW = root.CW = root.CW || {};
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const MAX_ROWS = 60;

  // ---------- الرسوم البيانية (SVG) ----------
  const PALETTE = ["#2c7be5", "#e5732c", "#2ca05c", "#d64545", "#8e5cd9", "#999999"];
  CW.xlChartSvg = function (book, ch) {
    const rows = book.values(ch.range, ch.sheet);
    const head = rows[0].slice(1).every(v => v !== "" && isNaN(+v.replace("%", "")));
    const series = (head ? rows[0].slice(1) : rows[0].slice(1).map((_, i) => "Series " + (i + 1)));
    const data = (head ? rows.slice(1) : rows).filter(r => r[0] !== "");
    const labels = data.map(r => r[0]);
    const vals = series.map((_, j) => data.map(r => parseFloat(String(r[j + 1]).replace(/[%,]/g, "")) || 0));
    const W = 520, H = 280, L = 52, R = 12, T = ch.title ? 34 : 14, B = 44;
    let svg = `<svg viewBox="0 0 ${W} ${H}" class="xl-chart" role="img" aria-label="${esc(ch.title)}" dir="ltr">`;
    svg += `<rect width="${W}" height="${H}" fill="#fff"/>`;
    if (ch.title) svg += `<text x="${W / 2}" y="22" text-anchor="middle" font-size="14" font-weight="600" fill="#1a2233">${esc(ch.title)}</text>`;
    if (ch.type === "pie") {
      const v = vals[0], tot = v.reduce((a, b) => a + b, 0) || 1, cx = 170, cy = (H + T) / 2, r = Math.min(110, (H - T - 20) / 2);
      let a0 = -Math.PI / 2;
      v.forEach((x, i) => {
        const a1 = a0 + 2 * Math.PI * x / tot, big = a1 - a0 > Math.PI ? 1 : 0;
        svg += `<path d="M${cx},${cy} L${cx + r * Math.cos(a0)},${cy + r * Math.sin(a0)} A${r},${r} 0 ${big} 1 ${cx + r * Math.cos(a1)},${cy + r * Math.sin(a1)} Z" fill="${PALETTE[i % 6]}" stroke="#fff"/>`;
        svg += `<rect x="320" y="${T + 10 + i * 20}" width="12" height="12" fill="${PALETTE[i % 6]}"/><text x="338" y="${T + 20 + i * 20}" font-size="12" fill="#333">${esc(labels[i])} (${Math.round(100 * x / tot)}%)</text>`;
        a0 = a1;
      });
      return svg + "</svg>";
    }
    const horiz = ch.type === "bar";
    const all = vals.flat(), max = Math.max(0, ...all), min = Math.min(0, ...all);
    const nice = x => { const p = Math.pow(10, Math.floor(Math.log10(Math.abs(x) || 1))); return Math.ceil(x / p) * p; };
    const top = nice(max || 1), bot = min < 0 ? -nice(-min) : 0;
    const pw = W - L - R, ph = H - T - B;
    const sx = v => L + (v - bot) / (top - bot) * pw, sy = v => T + ph - (v - bot) / (top - bot) * ph;
    for (let k = 0; k <= 4; k++) {
      const v = bot + (top - bot) * k / 4;
      const lbl = Math.abs(v) >= 1000 ? (v / 1000) + "k" : String(+v.toFixed(2));
      if (horiz) svg += `<line x1="${sx(v)}" x2="${sx(v)}" y1="${T}" y2="${T + ph}" stroke="#e3e7ee"/><text x="${sx(v)}" y="${T + ph + 16}" font-size="11" text-anchor="middle" fill="#666">${lbl}</text>`;
      else svg += `<line x1="${L}" x2="${W - R}" y1="${sy(v)}" y2="${sy(v)}" stroke="#e3e7ee"/><text x="${L - 6}" y="${sy(v) + 4}" font-size="11" text-anchor="end" fill="#666">${lbl}</text>`;
    }
    const n = labels.length, band = (horiz ? ph : pw) / Math.max(n, 1);
    if (ch.type === "line") {
      vals.forEach((v, j) => {
        const pts = v.map((y, i) => `${L + band * (i + 0.5)},${sy(y)}`).join(" ");
        svg += `<polyline points="${pts}" fill="none" stroke="${PALETTE[j % 6]}" stroke-width="2.5"/>`;
        v.forEach((y, i) => { svg += `<circle cx="${L + band * (i + 0.5)}" cy="${sy(y)}" r="3.5" fill="${PALETTE[j % 6]}"/>`; });
      });
    } else {
      const bw = band * 0.7 / vals.length;
      vals.forEach((v, j) => v.forEach((y, i) => {
        if (horiz) { const y0 = T + band * i + band * 0.15 + bw * j; svg += `<rect x="${sx(Math.min(0, y))}" y="${y0}" width="${Math.abs(sx(y) - sx(0))}" height="${bw}" fill="${PALETTE[j % 6]}"/>`; }
        else { const x0 = L + band * i + band * 0.15 + bw * j; svg += `<rect x="${x0}" y="${sy(Math.max(0, y))}" width="${bw}" height="${Math.abs(sy(y) - sy(0))}" fill="${PALETTE[j % 6]}"/>`; }
      }));
    }
    labels.forEach((lb, i) => {
      if (horiz) svg += `<text x="${L - 6}" y="${T + band * (i + 0.5) + 4}" font-size="11" text-anchor="end" fill="#333">${esc(lb)}</text>`;
      else svg += `<text x="${L + band * (i + 0.5)}" y="${T + ph + 16}" font-size="11" text-anchor="middle" fill="#333">${esc(lb)}</text>`;
    });
    if (series.length > 1) series.forEach((s, j) => { svg += `<rect x="${L + j * 110}" y="${H - 14}" width="10" height="10" fill="${PALETTE[j % 6]}"/><text x="${L + j * 110 + 14}" y="${H - 5}" font-size="11" fill="#333">${esc(s)}</text>`; });
    return svg + "</svg>";
  };

  // ---------- جدول الخلايا ----------
  CW.renderWorkbook = function (container, book, opts = {}) {
    if (!container) return;
    const { wb, calc } = book, xl = CW.xl;
    const inputs = new Set(wb.inputs.map(i => i.sheet.toLowerCase() + "!" + xl.addr(i.r, i.c)));
    let active = opts.sheet && wb.sheets[opts.sheet] ? opts.sheet : (wb.inputs[0] ? Object.keys(wb.sheets).find(k => k.toLowerCase() === wb.inputs[0].sheet.toLowerCase()) : wb.order[0]);
    const draw = () => {
      const sh = wb.sheets[active];
      const spills = new Map();
      for (const cell of sh.cells.values()) if (cell.spill) for (let i = 0; i < cell.spill.h; i++) for (let j = 0; j < cell.spill.w; j++) spills.set(xl.addr(cell.r + i, cell.c + j), { owner: cell, edge: [i === 0, j === cell.spill.w - 1, i === cell.spill.h - 1, j === 0] });
      const maxR = Math.min(Math.max(sh.maxR, 3), MAX_ROWS), maxC = Math.max(sh.maxC, 3);
      let h = `<div class="xl-bar"><span class="xl-name" dir="ltr">A1</span><span class="xl-fx" dir="ltr">fx</span><code class="xl-formula" dir="ltr"></code></div>`;
      h += `<div class="xl-scroll"><table class="xl-grid" dir="ltr"><thead><tr><th></th>`;
      for (let c = 1; c <= maxC; c++) h += `<th>${xl.colName(c)}</th>`;
      h += `</tr></thead><tbody>`;
      for (let r = 1; r <= maxR; r++) {
        h += `<tr><th>${r}</th>`;
        for (let c = 1; c <= maxC; c++) {
          const a = xl.addr(r, c), cell = sh.cells.get(a), sp = spills.get(a);
          const v = calc.cellValue(sh, r, c), fmt = calc.cellFmt(sh, r, c);
          const txt = xl.display(v, fmt);
          const cls = [typeof v === "number" ? "n" : "", xl.isErr(v) ? "e" : "", cell && cell.src ? "f" : "", inputs.has(active.toLowerCase() + "!" + a) ? "mine" : "", sp ? "sp" : "", r === 1 && typeof v === "string" ? "hd" : ""].filter(Boolean).join(" ");
          const style = sp ? ` style="${["top", "right", "bottom", "left"].map((s, k) => sp.edge[k] ? `border-${s}:2px solid #2c7be5` : "").filter(Boolean).join(";")}"` : "";
          const f = cell && cell.src ? "=" + cell.src : cell ? String(cell.input ?? "") : sp && sp.owner ? `=${sp.owner.src} (منسكبة)` : "";
          h += `<td class="${cls}"${style} data-a="${a}" data-f="${esc(f)}" title="${esc(f)}">${esc(txt)}</td>`;
        }
        h += `</tr>`;
      }
      h += `</tbody></table></div>`;
      if (wb.order.length > 1) h += `<div class="xl-tabs">${wb.order.map(n => `<button class="${n === active ? "on" : ""}" data-s="${esc(n)}">${esc(n)}</button>`).join("")}</div>`;
      const charts = wb.charts.filter(c => c.sheet.toLowerCase() === active.toLowerCase());
      if (charts.length) h += `<div class="xl-charts">${charts.map(c => { try { return CW.xlChartSvg(book, c); } catch (e) { return `<div class="err">${esc(e.message)}</div>`; } }).join("")}</div>`;
      container.innerHTML = h;
      const nameEl = container.querySelector(".xl-name"), fEl = container.querySelector(".xl-formula");
      const pick = td => { container.querySelectorAll("td.sel").forEach(x => x.classList.remove("sel")); td.classList.add("sel"); nameEl.textContent = td.dataset.a; fEl.textContent = td.dataset.f; };
      container.querySelectorAll("td[data-a]").forEach(td => td.onclick = () => pick(td));
      const first = container.querySelector("td.mine.f") || container.querySelector("td.f");
      if (first) pick(first);
      container.querySelectorAll(".xl-tabs button").forEach(b => b.onclick = () => { active = b.dataset.s; draw(); });
    };
    draw();
  };

  // ---------- التشغيل والفحص ----------
  // test: JavaScript بأدوات: print و show("D2:D6") و value("G2") و text و formula و values و charts و spill
  CW.excelExec = function (code, setup, test) {
    const isM = /^\s*(\/\/.*\n\s*)*let\b/i.test(code);
    if (isM && CW.mRun) return CW.mRun(code, setup, test);
    const book = CW.xl.run(setup || "", code);
    const shown = book.defaultLines();
    let graded;
    if (test) {
      graded = [];
      const say = t => String(t).split("\n").forEach(line => graded.push({ kind: "log", text: line }));
      const helpers = {
        print: (...a) => say(a.map(v => typeof v === "string" ? v : JSON.stringify(v)).join(" ")),
        value: (r, s) => book.value(r, s),
        text: (r, s) => book.text(r, s),
        formula: (r, s) => book.formula(r, s),
        values: (r, s) => book.values(r, s),
        show: (r, s) => { const v = book.values(r, s); say(`${r}: ` + (v.length === 1 && v[0].length === 1 ? v[0][0] : v.map(row => row.join(" | ")).join(" / "))); },
        spill: (r, s) => book.spillRange(r, s),
        charts: () => book.wb.charts.map(c => ({ type: c.type, range: c.range, title: c.title, sheet: c.sheet })),
        has: (r, re, s) => re.test(book.formula(r, s))
      };
      try { new Function(...Object.keys(helpers), test)(...Object.values(helpers)); }
      catch (e) { graded.push({ kind: "err", text: e.message }); }
      graded.push(...shown.filter(l => l.kind === "err"));
    }
    return { shown, graded, book };
  };

  CW.runExcel = function (code, setup, test, container, onDone) {
    let r;
    try { r = CW.excelExec(code, setup, test); }
    catch (e) { return onDone([{ kind: "err", text: e.message }]); }
    if (r.book && r.book.wb) CW.renderWorkbook(container, r.book);
    else if (r.steps && CW.renderMTable) CW.renderMTable(container, r);
    onDone(r.shown, r.graded);
  };

  // أمثلة الدروس: كل كتلة excel تُعرض جدولاً محسوباً
  CW.renderXlDemos = function (rootEl, setup) {
    rootEl.querySelectorAll(".xl-preview[data-src]").forEach(el => {
      try {
        const isM = /^\s*(\/\/.*\n\s*)*let\b/i.test(el.dataset.src);
        const r = el.dataset.kind === "dax" ? CW.daxExec(el.dataset.src, setup || "", "") : CW.excelExec(el.dataset.src, isM ? setup || "" : "", "");
        if (r.book && r.book.wb) CW.renderWorkbook(el, r.book);
        else if (r.model && CW.renderDaxModel) CW.renderDaxModel(el, r);
        else if (r.steps && CW.renderMTable) CW.renderMTable(el, r);
      } catch (e) { el.innerHTML = `<div class="err">${esc(e.message)}</div>`; }
    });
  };
})(typeof window !== "undefined" ? window : globalThis);
