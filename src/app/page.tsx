import Image from "next/image";
import HeaderPage from "./component/header/header";

export default function Home() {
  return (
    <div className="h-screen">
      <HeaderPage />
      <div className="flex h-[80%]">
        <div className="w-1/2 gap-6 px-14 pt-20 flex flex-col justify-center items-start m-12">
          <h1 className="leading-[53.25px] w-[548px] h-[51px] text-[44px] font-bold">Welcome To Our Website</h1>
          <p className="leading-[38.73px] text-[#4c4c4c] text-[32px] w-[571px] h-[156px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
          <div className="bg-[#121212] w-[237px] h-[66px] flex justify-center items-center">
          <button className="text-[28px] w-[152px] h-[34px] leading-[33.89px] text-white">Contact US</button>
        </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
        <Image
            src={"/images/Splash.svg"}
            alt="Splash image"
            width={502}
            height={465}
          />
          </div>
        </div>
      </div>
    );
}
