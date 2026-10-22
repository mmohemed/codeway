-- قاعدة بيانات متجر إلكتروني تستخدمها كل دروس SQL في CodeWay

CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT,
  email TEXT UNIQUE,
  joined TEXT
);

CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT,
  price REAL NOT NULL,
  stock INTEGER DEFAULT 0
);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id),
  order_date TEXT,
  status TEXT
);

CREATE TABLE order_items (
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER,
  unit_price REAL
);

CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  department TEXT,
  salary INTEGER,
  manager_id INTEGER REFERENCES employees(id),
  hire_date TEXT
);

INSERT INTO customers VALUES
  (1, 'أحمد', 'الرياض', 'ahmed@mail.com', '2024-01-15'),
  (2, 'سارة', 'جدة', 'sara@mail.com', '2024-02-20'),
  (3, 'خالد', 'الرياض', 'khaled@mail.com', '2024-03-05'),
  (4, 'نورة', 'الدمام', 'noura@mail.com', '2024-03-18'),
  (5, 'فهد', 'جدة', NULL, '2024-05-01'),
  (6, 'ليلى', 'مكة', 'layla@mail.com', '2024-06-12'),
  (7, 'عمر', 'الرياض', 'omar@mail.com', '2024-07-30'),
  (8, 'هند', NULL, 'hind@mail.com', '2024-09-09');

INSERT INTO products VALUES
  (1, 'لابتوب', 'إلكترونيات', 3500, 12),
  (2, 'سماعة', 'إلكترونيات', 250, 40),
  (3, 'شاحن', 'إلكترونيات', 80, 0),
  (4, 'قميص', 'ملابس', 120, 25),
  (5, 'حذاء رياضي', 'ملابس', 300, 8),
  (6, 'رواية', 'كتب', 45, 60),
  (7, 'كتاب طبخ', 'كتب', 70, 15),
  (8, 'ساعة ذكية', 'إلكترونيات', 900, 5),
  (9, 'حقيبة', 'إكسسوارات', 180, 0),
  (10, 'نظارة', 'إكسسوارات', 350, 10);

INSERT INTO orders VALUES
  (101, 1, '2025-01-05', 'مكتمل'),
  (102, 2, '2025-01-09', 'مكتمل'),
  (103, 1, '2025-02-14', 'مكتمل'),
  (104, 3, '2025-02-20', 'ملغي'),
  (105, 4, '2025-03-02', 'مكتمل'),
  (106, 2, '2025-03-15', 'قيد التنفيذ'),
  (107, 6, '2025-04-01', 'مكتمل'),
  (108, 7, '2025-04-11', 'قيد التنفيذ'),
  (109, 1, '2025-05-20', 'مكتمل'),
  (110, 4, '2025-06-03', 'مكتمل');

INSERT INTO order_items VALUES
  (101, 1, 1, 3500),
  (101, 2, 2, 250),
  (102, 4, 3, 120),
  (102, 6, 2, 45),
  (103, 8, 1, 900),
  (104, 5, 1, 300),
  (105, 7, 2, 70),
  (105, 6, 1, 45),
  (106, 10, 1, 350),
  (106, 2, 1, 250),
  (107, 1, 1, 3500),
  (108, 4, 2, 120),
  (108, 5, 1, 300),
  (109, 6, 4, 45),
  (110, 8, 1, 900),
  (110, 3, 2, 80);

INSERT INTO employees VALUES
  (1, 'منصور', 'الإدارة', 25000, NULL, '2019-01-10'),
  (2, 'ريم', 'التقنية', 18000, 1, '2020-03-01'),
  (3, 'ياسر', 'التقنية', 14000, 2, '2021-06-15'),
  (4, 'دانة', 'التقنية', 15500, 2, '2022-01-20'),
  (5, 'سلطان', 'المبيعات', 12000, 1, '2020-09-05'),
  (6, 'لمى', 'المبيعات', 9500, 5, '2023-02-11'),
  (7, 'بدر', 'المبيعات', 9500, 5, '2023-08-01'),
  (8, 'جود', 'الدعم', 8000, 1, '2024-04-14');
