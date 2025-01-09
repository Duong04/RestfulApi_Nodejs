Express-Validator Cheatsheet

Express-validator cung cấp nhiều phương thức để xác thực dữ liệu trong các ứng dụng Node.js. Dưới đây là danh sách các thuộc tính và cách sử dụng chính của express-validator.

1. Core Validation Methods

1.1. Kiểm tra giá trị cơ bản

notEmpty(): Kiểm tra trường không được để trống.

isEmpty(): Kiểm tra trường phải để trống.

isString(): Kiểm tra trường có phải chuỗi.

isNumeric(): Kiểm tra trường có phải số.

isBoolean(): Kiểm tra trường có phải giá trị boolean.

isInt(): Kiểm tra trường có phải số nguyên.

isFloat(): Kiểm tra trường có phải số thực.

isDate(): Kiểm tra trường có phải định dạng ngày.

1.2. Kiểm tra định dạng nâng cao

isEmail(): Kiểm tra định dạng email hợp lệ.

isURL(): Kiểm tra định dạng URL hợp lệ.

isUUID(): Kiểm tra định dạng UUID hợp lệ.

isBase64(): Kiểm tra chuỗi có phải Base64.

1.3. Kiểm tra giá trị trong một tập hợp

isIn(array): Kiểm tra giá trị thuộc tập hợp.

body('status')
  .isIn(['pending', 'approved', 'rejected'])
  .withMessage('Status must be one of: pending, approved, rejected.');

1.4. Tự định nghĩa logic kiểm tra

custom(callback): Tự định nghĩa hàm kiểm tra.

body('category')
  .custom((value) => {
    const validCategories = ['food', 'electronics', 'fashion'];
    if (!validCategories.includes(value)) {
      throw new Error('Invalid category type.');
    }
    return true;
  });

2. Sanitization Methods

trim(): Loại bỏ khoảng trắng ở đầu và cuối chuỗi.

escape(): Loại bỏ các ký tự đặc biệt (HTML entities).

toLowerCase(): Chuyển giá trị về chữ thường.

toUpperCase(): Chuyển giá trị về chữ hoa.

toInt(): Chuyển chuỗi thành số nguyên.

toFloat(): Chuyển chuỗi thành số thực.

3. Validation Error Handling

3.1. Lấy lỗi xác thực

const { validationResult } = require('express-validator');

app.post('/example', [
  body('email').isEmail().withMessage('Invalid email.'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('Validation passed!');
});

4. Ví dụ Validation Enum (Tập hợp giá trị)

4.1. Sử dụng isIn()

const { body } = require('express-validator');

const validateStatus = [
  body('status')
    .isIn(['active', 'inactive', 'pending'])
    .withMessage('Status must be one of: active, inactive, pending.'),
];

4.2. Sử dụng custom() cho enum phức tạp

const { body } = require('express-validator');

const CategoryType = {
  FOOD: 'food',
  ELECTRONICS: 'electronics',
  FASHION: 'fashion',
};

const validateCategory = [
  body('category')
    .custom((value) => {
      if (!Object.values(CategoryType).includes(value)) {
        throw new Error(`Category must be one of: ${Object.values(CategoryType).join(', ')}`);
      }
      return true;
    })
    .withMessage('Invalid category type.'),
];

5. Best Practices

Tách biệt logic validation: Sử dụng middleware để xử lý validation.

Đặt chung validator vào file riêng: Dễ dàng tái sử dụng và quản lý.

Xử lý lỗi tập trung: Kiểm tra validationResult() và phản hồi lỗi theo định dạng JSON.

6. Thư viện Tham khảo

Express Validator Documentation