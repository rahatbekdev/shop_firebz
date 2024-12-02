import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2022-08/VC_2022-RTG-Shop-Local-SF-Mercantile-Supplied_1280x640.jpg.webp?itok=bhVNawzF",
    "https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1521566652839-697aa473761a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/1945012869/photo/woman-doing-grocery-shopping-and-checking-information-on-a-product-label.webp?a=1&b=1&s=612x612&w=0&k=20&c=dlPgbQMKribZv_ijwwqNIP4VziCY0wb94hFIJkLC0-Q=",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  console.log(currentSlide);

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
          }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            src={data[0]}
            alt="image-one"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={data[1]}
            alt="image-two"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={data[2]}
            alt="image-three"
            className="w-screen h-full object-cover"
            loading="priority"
          />
          <img
            src={data[3]}
            alt="image-for"
            className="w-screen h-full object-cover"
            loading="priority"
          />
        </div>

        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center
        hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center
        hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
