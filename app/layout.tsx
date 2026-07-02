import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
});

export const metadata = {
  title: "SHRI RAMANACHALA TRANSPORTS",
  description: "Fleet Owners & ODC Transporters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}