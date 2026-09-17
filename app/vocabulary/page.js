const words = [
  {
    word: "environment",
    meaning: "环境",
    part: "noun",
    example: "We need to protect the environment.",
    topic: "Environment",
    level: "Beginner",
  },
  {
    word: "pollution",
    meaning: "污染",
    part: "noun",
    example: "Air pollution is a serious problem.",
    topic: "Environment",
    level: "Beginner",
  },
  {
    word: "climate",
    meaning: "气候",
    part: "noun",
    example: "Climate change affects many countries.",
    topic: "Environment",
    level: "Beginner",
  },
];

export default function VocabularyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "850px", margin: "0 auto" }}>
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#555",
          }}
        >
          ← Back to Home
        </a>

        <h1 style={{ fontSize: "38px", marginBottom: "8px" }}>
          📚 IELTS Vocabulary
        </h1>

        <p style={{ color: "#666", marginBottom: "30px" }}>
          Learn and review useful IELTS words.
        </p>

        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          {words.map((item) => (
            <div
              key={item.word}
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
              }}
            >
              <h2 style={{ margin: "0 0 5px" }}>{item.word}</h2>

              <div style={{ fontSize: "20px", marginBottom: "10px" }}>
                {item.meaning}
              </div>

              <div style={{ color: "#666", marginBottom: "12px" }}>
                {item.part} · {item.topic} · {item.level}
              </div>

              <div>
                <strong>Example:</strong> {item.example}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
