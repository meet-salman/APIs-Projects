import { Josefin_Sans } from "next/font/google";
import '@styles/globals.css';

const font = Josefin_Sans({
  subsets: ["latin"]
});

export const metadata = {
  title: "API's",
  description: "Fake API's for Data Fetching Practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
