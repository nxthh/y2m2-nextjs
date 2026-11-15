import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import { NavbarComponent } from "@/components/layout/navbar/NavbarComponent";
import Image from "next/image";
import localFont from "next/font/local";

const googleSans = localFont({
  src: "../../public/fonts/GoogleSans_17pt-Regular.ttf",
});

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${googleSans.className} h-full antialiased`}>
      <body>
        <NavbarComponent />

        {/* <h1 className=" italic">សួស្ដីកូនខ្មែរ</h1> */}

        <TooltipProvider>
          {children} {modal}
        </TooltipProvider>
      </body>
    </html>
  );
}
