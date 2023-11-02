/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "LaoWangGPT",
  description: "Your personal GPT.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "LaoWangGPT",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
          <style>
            a {
                text-decoration: none;
            }
            .container {
               text-align: center;
            }
          </style>
      </head>
      <body>
        <footer>
          <div class="container">
            Copyright © 2021
            <script>
              document.write(" - " + new Date().getFullYear());
            </script>
            <a href="https://www.kda-xinxinzi.com/" target="_blank">刘路大校</a>
          </div>
          <div class="container">
            <a href="https://beian.miit.gov.cn/" target="_blank">吉ICP备2022001026号-1</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
