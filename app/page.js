export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          My IELTS App
        </h1>

        <p style={{ fontSize: "18px", color: "#666", marginBottom: "40px" }}>
          Learn IELTS step by step
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          <a href="/vocabulary" style={linkStyle}>
            <div style={cardStyle}>
              <div style={{ fontSize: "42px" }}>📚</div>
              <h2>Vocabulary</h2>
              <p>Learn and review IELTS vocabulary.</p>
            </div>
          </a>

          <div style={cardStyle}>
            <div style={{ fontSize: "42px" }}>🎤</div>
            <h2>Speaking</h2>
            <p>Practice IELTS speaking questions.</p>
          </div>

          <div style={cardStyle}>
            <div style={{ fontSize: "42px" }}>✍️</div>
            <h2>Writing</h2>
            <p>Practice IELTS writing tasks.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

const cardStyle = {
  background: "white",
  padding: "30px 20px",
  borderRadius: "16px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  textAlign: "left",
  height: "100%",
  boxSizing: "border-box",
};

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};
