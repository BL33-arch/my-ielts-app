async function getWords() {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;

  // 1. 先通过 Database ID 获取 Data Source ID
  const databaseResponse = await fetch(
    `https://api.notion.com/v1/databases/${databaseId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": "2025-09-03",
      },
      cache: "no-store",
    }
  );

  if (!databaseResponse.ok) {
    const error = await databaseResponse.text();
    console.error("Notion database error:", error);
    throw new Error("Could not connect to the Notion database.");
  }

  const database = await databaseResponse.json();

  const dataSourceId = database.data_sources?.[0]?.id;

  if (!dataSourceId) {
    throw new Error("Could not find a Notion data source.");
  }

  // 2. 使用 Data Source ID 获取单词
  const response = await fetch(
    `https://api.notion.com/v1/data_sources/${dataSourceId}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": "2025-09-03",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page_size: 100,
      }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const error = await response.text();
    console.error("Notion query error:", error);
    throw new Error("Could not load vocabulary from Notion.");
  }

  const data = await response.json();

  return data.results.map((page) => {
    const properties = page.properties;

    return {
      id: page.id,

      word:
        properties.Word?.title
          ?.map((item) => item.plain_text)
          .join("") || "",

      meaning:
        properties.Meaning?.rich_text
          ?.map((item) => item.plain_text)
          .join("") || "",

      part:
        properties["Part of Speech"]?.select?.name || "",

      example:
        properties.Example?.rich_text
          ?.map((item) => item.plain_text)
          .join("") || "",

      topic:
        properties.Topic?.select?.name || "",

      level:
        properties.Level?.select?.name || "",
    };
  });
}

export default async function VocabularyPage() {
  const words = await getWords();

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
          {words.length} words from my Notion vocabulary database
        </p>

        <div style={{ display: "grid", gap: "18px" }}>
          {words.map((item) => (
            <div
              key={item.id}
              style={{
                background: "white",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
              }}
            >
              <h2 style={{ margin: "0 0 5px" }}>
                {item.word}
              </h2>

              <div
                style={{
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
              >
                {item.meaning}
              </div>

              <div
                style={{
                  color: "#666",
                  marginBottom: "12px",
                }}
              >
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
