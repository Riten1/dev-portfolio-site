import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { NavProvider } from "@/context/navContext";
import {
  ModalProvider,
  ModalBody,
  ModalContent,
} from "@/components/ui/AnimatedModal";
import { ResumeModal } from "@/components/modal/ResumeModal";
import { SkillsModal } from "@/components/modal/SkillsModal";
import { ExperienceModal } from "@/components/modal/ExperienceModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavProvider>
          <ModalProvider>
            <div className="min-h-screen bg-gray-50 relative">
              <Navbar />
              {children}

              <ModalBody
                modalId="resume"
                className="max-w-[98vw] max-h-[98vh] w-full h-full"
              >
                <ModalContent className="p-0 overflow-hidden">
                  <ResumeModal />
                </ModalContent>
              </ModalBody>

              <ModalBody
                modalId="skills"
                className="max-w-[98vw] max-h-[98vh] w-full h-full bg-pink-500"
              >
                <ModalContent className="p-0 overflow-hidden bg-pink-500 border-pink-500">
                  <SkillsModal />
                </ModalContent>
              </ModalBody>

              <ModalBody
                modalId="experience"
                className="max-w-[98vw] max-h-[98vh] w-full h-full bg-orange-500"
              >
                <ModalContent className="p-0 overflow-hidden bg-orange-500 border-orange-500">
                  <ExperienceModal />
                </ModalContent>
              </ModalBody>
            </div>
          </ModalProvider>
        </NavProvider>
      </body>
    </html>
  );
}
