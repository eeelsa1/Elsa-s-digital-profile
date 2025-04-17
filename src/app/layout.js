import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Applejpg from "@/../public/apple.jpg";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "蔡銘元的數位履歷",
  description: "歡迎技術交流!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen h-screen overflow-y-auto flex flex-col sm:flex-row gap-5 bg-gray-200 p-8">
          {/* 側邊欄 */}
          <div
            className="min-w-[320px] w-full sm:w-[320px] h-full rounded-2xl bg-[#fffdf5] flex 
            justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden"
          >
            <Image
              src={Applejpg}
              alt="Avatar"
              className="w-[80px] h-[80px] rounded-full"
            />

            <h1 className="mt-2">蔡銘元 Elsa Tsai</h1>
            <p className="max-w-[380px] text-center">@NCCU</p>

            {/* 社群連結 */}
            <div className="flex gap-2 my-5">
              {/* GitHub */}
              <a
                href="https://github.com/eeelsa1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gray-300 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.304 3.492.997.107-.776.418-1.305.762-1.605-2.665-.303-5.466-1.334-5.466-5.933 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.004-.404c1.02.005 2.048.137 3.004.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.625-5.48 5.922.43.37.823 1.1.823 2.22v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yourname"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gray-300 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zm7.5 0H12v2.53h.07c.63-1.18 2.17-2.42 4.46-2.42C21.4 9.09 24 11.4 24 16.12V24h-5v-6.77c0-1.61-.03-3.69-2.25-3.69-2.25 0-2.59 1.75-2.59 3.56V24H9v-15z" />
                  </svg>
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/yourname"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gray-300 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35C.595 0 0 .6 0 1.337v21.326C0 23.4.595 24 1.325 24h11.49v-9.294H9.692v-3.622h3.122V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.92.001c-1.504 0-1.796.716-1.796 1.766v2.313h3.59l-.467 3.622h-3.123V24h6.116C23.405 24 24 23.4 24 22.663V1.337C24 .6 23.405 0 22.675 0z" />
                  </svg>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/yourname"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-gray-300 w-[40px] h-[40px] rounded-full flex justify-center items-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.41.408a4.9 4.9 0 011.72 1.12 4.9 4.9 0 011.12 1.72c.168.45.352 1.24.408 2.41.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.408 2.41a4.9 4.9 0 01-1.12 1.72 4.9 4.9 0 01-1.72 1.12c-.45.168-1.24.352-2.41.408-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.41-.408a4.9 4.9 0 01-1.72-1.12 4.9 4.9 0 01-1.12-1.72c-.168-.45-.352-1.24-.408-2.41C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.96.408-2.41a4.9 4.9 0 011.12-1.72 4.9 4.9 0 011.72-1.12c.45-.168 1.24-.352 2.41-.408C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.135 0-3.504.012-4.735.068-1.02.048-1.576.21-1.94.35a3.1 3.1 0 00-1.14.74 3.1 3.1 0 00-.74 1.14c-.14.364-.302.92-.35 1.94C3.812 9.496 3.8 9.865 3.8 13s.012 3.504.068 4.735c.048 1.02.21 1.576.35 1.94.18.47.43.862.74 1.14.278.31.67.56 1.14.74.364.14.92.302 1.94.35C8.496 20.188 8.865 20.2 12 20.2s3.504-.012 4.735-.068c1.02-.048 1.576-.21 1.94-.35a3.1 3.1 0 001.14-.74 3.1 3.1 0 00.74-1.14c.14-.364.302-.92.35-1.94.056-1.231.068-1.6.068-4.735s-.012-3.504-.068-4.735c-.048-1.02-.21-1.576-.35-1.94a3.1 3.1 0 00-.74-1.14 3.1 3.1 0 00-1.14-.74c-.364-.14-.92-.302-1.94-.35C15.504 4.012 15.135 4 12 4zm0 3.8a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4zm0 1.8a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm5.25-2.45a1 1 0 110 2 1 1 0 010-2z" />
                  </svg>
                </div>
              </a>
            </div>

            {/* 導覽連結 */}
            <div className="w-full flex flex-col gap-2">
              <Link href="/about">
                <div className="w-full h-[84px] bg-[#97b4de] hover:bg-[#8ca6c8] transition-colors rounded-xl flex items-center justify-center text-white font-semibold">
                  About Me
                </div>
              </Link>

              <Link href="/cate-web">
                <div className="w-full h-[84px] bg-[#97b4de] hover:bg-[#8ca6c8] transition-colors rounded-xl flex items-center justify-center text-white font-semibold">
                  Portfolio
                </div>
              </Link>

              <Link href="/cate-painting">
                <div className="w-full h-[84px] bg-[#97b4de] hover:bg-[#8ca6c8] transition-colors rounded-xl flex items-center justify-center text-white font-semibold">
                  UIUX Project
                </div>
              </Link>
            </div>
          </div>

          {/* 主要內容區 */}
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
