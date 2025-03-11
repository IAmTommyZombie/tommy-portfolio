export default function Button({ label, onClick }) {
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
        border: "1px solid #ccc",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
