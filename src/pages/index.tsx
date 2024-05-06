import { Inter } from "next/font/google"
import Landingpage from "./landingpage";
import Landingviews from "@/components/Views/landingviews";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
    <Landingviews/>
  </>
  );
}
