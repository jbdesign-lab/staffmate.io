import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Staffmate.io - Your AI-Powered Virtual Employees",
  description: "Revolutionise your brick-and-mortar business with AI receptionists that provide 24/7 customer support, CRM integration, and human-like interactions. Combat labor shortages and reduce costs with staffmate.io.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script 
          src="https://unpkg.com/@elevenlabs/convai-widget-embed" 
          async 
          type="text/javascript"
        ></script>
      </head>
      <body
        className={`${poppins.variable} antialiased font-sans`}
      >
        {children}
        <div dangerouslySetInnerHTML={{
          __html: '<elevenlabs-convai agent-id="agent_8601kb0vxmv0f6vampv9bq2fekma"></elevenlabs-convai>'
        }} />
      </body>
    </html>
  );
}
