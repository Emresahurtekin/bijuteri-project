import { useEffect, useState } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = ({ categoryList, productList }) => {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState([]);
  const [productLimit, setProductLimit] = useState(3);

  useEffect(() => {
    setFilter(
      productList.filter(
        (product) =>
          product.category === categoryList[active].title.toLowerCase()
      )
    );
  }, [categoryList, productList, active]);
  return (
    <div className="container mx-auto  mb-16">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-[40px]">Ürünlerimiz</Title>
        <div className="mt-10 grid grid-cols-5 gap-4"> 
        <button inset-y-0 left-0 class="text-white bg-secondary hover:bg-secondary  rounded-3xl font-mediumss text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">KADIN</button>
        <button inset-y-0 left-0 class="text-white bg-secondary hover:bg-secondary  rounded-3xl font-mediumss text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">ERKEK</button>
        <button inset-y-0 left-0 class="text-white bg-secondary hover:bg-secondary  rounded-3xl font-mediumss text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">ÇOCUK</button>
        <button inset-y-0 left-0 class="text-white bg-secondary hover:bg-secondary  rounded-3xl font-mediumss text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">KOZMETİK</button>
        <button inset-y-0 left-0 class="text-white bg-secondary hover:bg-secondary  rounded-3xl font-mediumss text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">HEDİYE</button>
        {categoryList && 
            categoryList.map((category, index) => (
              <button 
                className={`px-6 py-2  rounded-3xl ${
                  index === active && "bg-secondary text-white"
                }`}
                key={category._id}
                onClick={() => {
                  setActive(index);
                  setProductLimit(3);
                }}
              >
                {category.title}
              </button>
            ))}
        </div>
       </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 min-h-[450px]">
        {filter.length > 0 &&
           filter
           .slice(0, productLimit)
           .map((product) => <MenuItem key={product._id} product={product} />)}
     </div>
     <div className="flex items-center justify-center w-full mt-8">
       <button
         className="btn-primary"
         onClick={() => setProductLimit(productLimit + 3)}
       >
         Daha Fazla Göster
       </button>
      </div>
    </div>
  );
};

export default MenuWrapper;