export const metadata = {
  title: "My IELTS App",
  description: "Learn IELTS vocabulary, speaking and writing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
