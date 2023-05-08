import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appendDots: (dots) => (
      <div>
        <ul className="container mx-auto w-full text-start">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-yellow rounded-full mt-10"></div>
    ),
  };
  return (
    <div className="h-screen w-full -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
      <Image
      
            src="/images/slider1.png"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
      </div>
    </div>
    <Slider {...settings}>
        <div>
        <div className="mt-48 container mx-auto  text-black flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">Özel İndirimleriyle TakBunu</Title>
            <p className="text-sm sm:w-2/5 w-full">
            TakBunu Bijuteri Mağazamızdan Dilediğiniz Kadın, Erkek ve Çocuklar için
            saat, kolye, küpe gibi ürünlere ulaşabilirsiniz.
            </p>
          </div>
        </div>
        <div>
        <div className="mt-48 container mx-auto  text-black flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl"> En Trend Takı Modellerine Sahip olun.
              </Title>
              <Title addClass="text-5xl"> 
              Keyifli Alişverişler Dileriz</Title>
            <p className="text-5xl sm:w-2/5 w-full">
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};
 export default Carousel