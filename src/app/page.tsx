import AllCards from "@/components/shared/AllCards";
import BannerPage from "@/components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BannerPage/>
      <AllCards/>
    </div>
  );
}
