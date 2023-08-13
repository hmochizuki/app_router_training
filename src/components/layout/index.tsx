import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const RootLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
};
