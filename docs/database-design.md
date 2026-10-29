# Thiết kế cơ sở dữ liệu

Thiết kế kế thừa Data Dictionary của Lab 06.

```mermaid
erDiagram
    USERS ||--o| CUSTOMERS : has
    USERS ||--o| STAFF : has
    CUSTOMERS ||--o{ PAYMENT_ACCOUNTS : owns
    CUSTOMERS ||--o{ SAVINGS_ACCOUNTS : owns
    SAVINGS_TYPES ||--o{ SAVINGS_ACCOUNTS : classifies
    SAVINGS_ACCOUNTS ||--o{ TRANSACTIONS : records
    TRANSACTIONS ||--o| OTP_VERIFICATIONS : verifies
    TRANSACTIONS ||--o| PAYMENT_REQUESTS : initiates
    PAYMENT_ACCOUNTS ||--o{ PAYMENT_REQUESTS : uses
```

| Nhóm | Bảng |
|---|---|
| Người dùng | `users`, `customers`, `staff`, `login_sessions` |
| Tiết kiệm | `payment_accounts`, `savings_types`, `savings_accounts`, `transactions` |
| Tích hợp/cấu hình | `otp_verifications`, `payment_requests`, `system_parameters` |

Nguyên tắc chính: số tiền dùng `DECIMAL`, OTP chỉ lưu dạng băm, giao dịch tài chính cập nhật trong một database transaction và báo cáo chỉ lấy giao dịch `SUCCESS`.
