import { Inter } from "next/font/google"
import Landingpage from "./landingpage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
    <Landingpage/>
  </>
  );
}
