// Import global styles and fonts
import "./globals.css";
import { Inter, Google_Sans } from "next/font/google";
import type { Metadata } from "next";
import Image from "next/image";

const googleSans = Google_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={googleSans.className}>
      <body>
        <div className="grid h-screen place-items-center">
          {/* <h1>404 - Page Not Found</h1> */}
          <Image
            src={
              "https://www.vizion.com/wp-content/smush-webp/2018/09/shutterstock_479042983.jpg.webp"
            }
            width={600}
            height={600}
            alt="not found"
          />
          {/* <p>This page does not exist.</p> */}
        </div>
      </body>
    </html>
  );
}
