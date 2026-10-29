# Manage Online Savings Account

Skeleton code cho hệ thống quản lý sổ tiết kiệm online của nhóm Voz. Dự án áp dụng kiến trúc 3 lớp: giao diện React, REST API Node.js/Express và MySQL.

## Cấu trúc

```text
backend/    REST API, nghiệp vụ và truy cập dữ liệu
frontend/   giao diện React/Vite
docs/       kiến trúc, cơ sở dữ liệu, giao diện và Git Flow
```

## Yêu cầu môi trường

- Node.js 20 trở lên và npm
- MySQL 8 trở lên
- Git

## Chạy backend

```bash
cd backend
cp .env.example .env
npm install
npm test
npm run dev
```

Tạo CSDL `online_savings`, sau đó cập nhật các biến `DB_*` trong `.env`. Kiểm tra kết nối tại `GET http://localhost:8080/api/health`.

## Chạy frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Truy cập địa chỉ Vite hiển thị trên Terminal. Tạo bản production bằng `npm run build`.

## Biến môi trường

Không commit `.env`, mật khẩu, OTP, khóa API hoặc dữ liệu khách hàng thật. Chỉ commit `.env.example` với giá trị minh họa.

## Quy trình Git

- `main`: phiên bản ổn định.
- `develop`: nhánh tích hợp.
- `feature/*`: mỗi chức năng hoặc hạng mục độc lập.
- Mọi `feature/*` được tích hợp vào `develop` qua Pull Request và code review.

Chi tiết: [Git Flow](docs/git-flow.md).
