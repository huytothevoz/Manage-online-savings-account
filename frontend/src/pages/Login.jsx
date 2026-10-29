export function Login({ onLogin }) {
  function handleSubmit(event) {
    event.preventDefault();
    onLogin();
  }

  return (
    <main className="login-layout">
      <form className="card login-card" onSubmit={handleSubmit}>
        <p className="eyebrow">ONLINE SAVINGS</p>
        <h1>Đăng nhập</h1>
        <label>
          Tên đăng nhập
          <input name="username" autoComplete="username" required />
        </label>
        <label>
          Mật khẩu
          <input name="password" type="password" autoComplete="current-password" required />
        </label>
        <button type="submit">Đăng nhập</button>
        <p className="hint">Skeleton UI — chưa kết nối chức năng xác thực.</p>
      </form>
    </main>
  );
}
