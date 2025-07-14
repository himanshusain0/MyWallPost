// app/layout.js
// import "../styles/globals.css"; // optional if you have global CSS
import "./globals.css"; 
import Layout from "../component/layout/layout";
import {Boxes} from "../component/ui/background-boxes" // apna custom layout

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Boxes className="opacity-80" />

        <Layout>
          {children} {/* All pages will come here */}
        </Layout>
      </body>
    </html>
  );
}
