export function StatusBadge({ status }) {
  const label = status === "ACTIVE" ? "Đang hoạt động" : "Đã đóng";
  return <span className={`status status--${status.toLowerCase()}`}>{label}</span>;
}
