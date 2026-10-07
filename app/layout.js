export const metadata = {
  title: "API Practice",
  description: "A simple Next.js API practice app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
