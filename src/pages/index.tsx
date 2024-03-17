import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/fragments/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <div className="mt-20">
    <h1>Ini Home</h1>
  </div>
  );
}
