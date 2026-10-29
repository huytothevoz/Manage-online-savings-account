import { StatusBadge } from "../components/StatusBadge.jsx";

const demoAccounts = [
  { code: "STK-001", type: "Kỳ hạn 6 tháng", balance: "50.000.000 ₫", maturity: "15/04/2027", status: "ACTIVE" },
  { code: "STK-002", type: "Không kỳ hạn", balance: "12.500.000 ₫", maturity: "—", status: "ACTIVE" },
];

export function Dashboard() {
  return (
    <main className="dashboard">
      <header>
        <div>
          <p className="eyebrow">TỔNG QUAN</p>
          <h1>Sổ tiết kiệm của tôi</h1>
        </div>
        <button type="button">Mở sổ mới</button>
      </header>
      <section className="card account-list" aria-label="Danh sách sổ tiết kiệm">
        {demoAccounts.map((account) => (
          <article className="account" key={account.code}>
            <div><strong>{account.code}</strong><span>{account.type}</span></div>
            <div><strong>{account.balance}</strong><span>Đáo hạn: {account.maturity}</span></div>
            <StatusBadge status={account.status} />
          </article>
        ))}
      </section>
      <p className="hint">Dữ liệu mẫu phục vụ kiểm tra skeleton UI của Lab 7.</p>
    </main>
  );
}
