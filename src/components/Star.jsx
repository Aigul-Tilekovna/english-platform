export default function Star({ filled }) {
  return (
    <span style={{ color: filled ? "gold" : "#ccc", fontSize: "24px" }}>
      ★
    </span>
  );
}