import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
        <div className="relative sm:w-[445px] sm-h-[600px]  flex justify-center w-[300px] h-[450px]">
            <Image src="/images/about.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">Biz Kimiz?</Title>
          <p className="my-5 flex flex-col items-center">
          2019 Yılında işine aşık, modayı yakından takip eden ve bu işte en iyi olduğunu düşünen büyük  bir ekiple yönetilen, en büyük online bijuteri saat ve aksesuar mağazasıdır.
          Takbunu önde gelen bijuteri sitesi olarak, kolye, küpe, bilezik vb. ürünlerini sunan bir alışveriş sitesidir. Müşterilerine trend ürünleri sunar.
          Tüm takı ve aksesuar ihtiyaçlarınızı karşılayabileceğiniz TakBunu 2019 yılından itibaren sizlere hizmet vermekten gurur duymaktadır..</p>
        </div>
      </div>
    </div>
  );
};

export default About;