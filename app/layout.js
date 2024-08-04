
import Body from "@/components/Body";
import "./globals.css";
import MainContextProvider from "@/context/MainContext";



export const metadata = {
  title: "Dark Mode",
  description: "Description of Dark Mode",
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
