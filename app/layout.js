import "./globals.css";

export const metadata = {
  title: "Reborn Studios",
  description: "Creative agency portfolio and project showcase.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
