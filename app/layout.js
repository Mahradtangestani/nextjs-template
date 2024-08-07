
import Body from "@/components/Body";
import "./globals.css";
import MainContextProvider from "@/context/MainContext";



export const metadata = {
  title: "Nextjs Template",
  description: "Nextjs Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MainContextProvider>
      <Body>
        {children}
      </Body>
      </MainContextProvider>
    </html>
  );
}
