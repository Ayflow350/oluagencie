import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Metadata for the document
export const metadata = {
  title: "Next Gen", //
  description: "Dev_Lion Project",
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
