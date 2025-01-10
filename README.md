# Express Validator Documentation

## Tổng quan
`express-validator` cung cấp các phương thức mạnh mẽ để xác thực và xử lý các yêu cầu HTTP. Dưới đây là danh sách đầy đủ các phương thức được sử dụng trong thư viện này.

## Các phương thức

### Validation Chain Methods
1. **.not()**
   - Đảo ngược logic của validator hoặc validator chain.
2. **.exists()**
   - Kiểm tra nếu trường tồn tại trong yêu cầu.
3. **.isEmpty()**
   - Kiểm tra nếu trường trống.
4. **.notEmpty()**
   - Kiểm tra nếu trường không trống.
5. **.equals(comparison)**
   - Kiểm tra nếu giá trị trường bằng giá trị cung cấp.
6. **.contains(seed)**
   - Kiểm tra nếu giá trị chứa chuỗi được chỉ định.
7. **.matches(pattern, [modifiers])**
   - Kiểm tra nếu giá trị khớp với regex hoặc chuỗi regex.

### String Validators
1. **.isLength({ min, max })**
   - Kiểm tra nếu chuỗi có độ dài nằm trong khoảng.
2. **.isEmail()**
   - Kiểm tra nếu chuỗi là email hợp lệ.
3. **.isURL([options])**
   - Kiểm tra nếu chuỗi là URL hợp lệ.
4. **.isUUID([version])**
   - Kiểm tra nếu chuỗi là UUID hợp lệ.
5. **.isMobilePhone(locale, [options])**
   - Kiểm tra nếu chuỗi là số điện thoại hợp lệ.
6. **.isCreditCard()**
   - Kiểm tra nếu chuỗi là số thẻ tín dụng hợp lệ.

### Number Validators
1. **.isInt([options])**
   - Kiểm tra nếu giá trị là số nguyên hợp lệ.
2. **.isFloat([options])**
   - Kiểm tra nếu giá trị là số thực hợp lệ.
3. **.isNumeric()**
   - Kiểm tra nếu giá trị chỉ chứa số.
4. **.isDecimal()**
   - Kiểm tra nếu giá trị là số thập phân hợp lệ.
5. **.isDivisibleBy(number)**
   - Kiểm tra nếu giá trị chia hết cho số chỉ định.

### Date Validators
1. **.isDate()**
   - Kiểm tra nếu giá trị là ngày hợp lệ.
2. **.isAfter([date])**
   - Kiểm tra nếu giá trị là ngày sau ngày chỉ định.
3. **.isBefore([date])**
   - Kiểm tra nếu giá trị là ngày trước ngày chỉ định.

### Boolean Validators
1. **.isBoolean()**
   - Kiểm tra nếu giá trị là boolean hợp lệ.
2. **.isIn(values)**
   - Kiểm tra nếu giá trị nằm trong tập hợp cung cấp.

### Array Validators
1. **.isArray()**
   - Kiểm tra nếu giá trị là một mảng.
2. **.isArray({ min, max })**
   - Kiểm tra nếu mảng có số phần tử trong khoảng chỉ định.

### Custom Validators
1. **.custom(validator)**
   - Cho phép viết logic xác thực tùy chỉnh.
2. **.customSanitizer(sanitizer)**
   - Cho phép viết logic làm sạch tùy chỉnh.

### Sanitization Chain Methods
1. **.trim()**
   - Loại bỏ khoảng trắng thừa ở đầu và cuối chuỗi.
2. **.normalizeEmail([options])**
   - Chuẩn hóa email.
3. **.toInt()**
   - Chuyển đổi giá trị thành số nguyên.
4. **.toFloat()**
   - Chuyển đổi giá trị thành số thực.
5. **.toBoolean()**
   - Chuyển đổi giá trị thành boolean.
6. **.escape()**
   - Escape các ký tự HTML để ngăn tấn công XSS.

### Error Handling
1. **.withMessage(message)**
   - Thêm thông báo lỗi tùy chỉnh nếu một validator thất bại.

## Hướng dẫn sử dụng
```javascript
import { check, validationResult } from 'express-validator';

// Routes
app.post('/category', [
  check('name').notEmpty().withMessage('Name is required'),
  check('description').isLength({ min: 10 }).withMessage('Description must be at least 10 characters long'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Xử lý logic thêm danh mục
  res.status(201).json({ message: 'Category created successfully' });
});
```

## Tài liệu tham khảo
- [Express Validator Documentation](https://express-validator.github.io/docs/)

