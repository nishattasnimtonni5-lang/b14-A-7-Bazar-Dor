import AllCards from "@/components/shared/AllCards";
import BannerPage from "@/components/homepage/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BannerPage/>
      <AllCards/>
    </div>
  );
}
