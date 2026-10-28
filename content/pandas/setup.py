# ملفات بيانات الدورة: تُكتب في مجلد العمل قبل كل تشغيل، فتقرؤها الأمثلة والتمارين بـ pd.read_csv
def _cw_data():
    products = """product,category,price,cost
Laptop,Electronics,3200,2600
Headphones,Electronics,250,140
Monitor,Electronics,900,650
Keyboard,Accessories,180,90
Mouse,Accessories,95,40
Desk,Furniture,1100,700
Chair,Furniture,750,420
Lamp,Furniture,130,60
"""
    customers = """customer_id,name,city,segment,signup_date
C01,Layla,Riyadh,Premium,2023-02-14
C02,Omar,Jeddah,Regular,2023-05-03
C03,Huda,Dammam,Regular,2023-07-21
C04,Fahad,Riyadh,Premium,2023-08-09
C05,Mona,Mecca,Regular,2023-09-30
C06,Yousef,Jeddah,Regular,2023-11-12
C07,Sara,Riyadh,Regular,2024-01-05
C08,Khalid,Medina,Premium,2024-01-19
C09,Noura,Dammam,Regular,2024-02-02
C10,Ali,Jeddah,Premium,2024-02-25
"""
    import random
    r = random.Random(7)
    names = [l.split(",")[0] for l in products.strip().split("\n")[1:]]
    prices = {l.split(",")[0]: int(l.split(",")[2]) for l in products.strip().split("\n")[1:]}
    weights = [2, 6, 3, 7, 9, 2, 3, 6]
    cities = {"C01": "Riyadh", "C02": "Jeddah", "C03": "Dammam", "C04": "Riyadh", "C05": "Mecca",
              "C06": "Jeddah", "C07": "Riyadh", "C08": "Medina", "C09": "Dammam", "C10": "Jeddah"}
    rows = ["order_id,date,customer_id,city,product,qty,unit_price,status"]
    import datetime
    start = datetime.date(2024, 1, 1)
    for i in range(120):
        d = start + datetime.timedelta(days=int(i * 181 / 120) + r.randint(0, 1))
        c = "C%02d" % r.randint(1, 10)
        p = r.choices(names, weights)[0]
        q = r.choices([1, 1, 1, 2, 2, 3, 4, 5], k=1)[0]
        st = r.choices(["delivered", "returned", "cancelled"], [17, 2, 1])[0]
        rows.append(f"{1001 + i},{d.isoformat()},{c},{cities[c]},{p},{q},{prices[p]},{st}")
    survey = """id,name,city,age,salary,join_date,rating
1,  Ahmed Ali ,riyadh,29,"12,500",2023-01-15,4
2,sara KHALID,Jeddah,,9800,2023-03-02,5
3,Omar Saleh,RIYADH,35,"15,000",2022-11-20,
4,  Ahmed Ali ,riyadh,29,"12,500",2023-01-15,4
5,Mona Fahad,Dammam,41,unknown,2021-07-08,3
6,khalid omar,jeddah ,27,8700,2024-02-11,5
7,Huda Nasser,Mecca,,11200,2023-09-30,2
8,Ali Hassan,Dammam,52,21000,2020-05-17,4
"""
    files = {"products.csv": products, "customers.csv": customers, "orders.csv": "\n".join(rows) + "\n", "survey.csv": survey}
    for name, text in files.items():
        with open(name, "w", encoding="utf-8") as f:
            f.write(text)
_cw_data()
del _cw_data
