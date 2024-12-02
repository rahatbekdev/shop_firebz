import { Link } from "react-router-dom";
import { cart, logoDark } from "../assets";
import { useSelector } from "react-redux";

const Header = () => {
  const productsData = useSelector((state) => state.storeProduct.productData);
  const userInfo = useSelector((state) => state.storeProduct.userInfo);
  console.log(userInfo);

  // console.log(productsData);

  return (
    <div className="w-full h-20 bg-white border-b-[2px] border-b-gray-800 sticky top-0 z-50">
      {/* {} */}
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img src={logoDark} alt="logo" className="w-28" />
          </div>
        </Link>

        <div className="flex items-center">
          <ul className="flex items-center space-x-8">
            <li className="text-base text-black font-bold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] duration-300 cursor-pointer">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] duration-300 cursor-pointer">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] duration-300 cursor-pointer">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] duration-300 cursor-pointer">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] duration-300 cursor-pointer">
              Blog
            </li>
          </ul>

          <Link to="/cart">
            {" "}
            <div className="relative">
              <img
                src={cart}
                alt=""
                className="w-16 cursor-pointer hover:scale-110"
              />
              <span className="absolute -right-1 -top-1 text-xl font-semibold w-6">
                {productsData.length}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <img
              src={
                userInfo
                  ? userInfo.image
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTGVnbpOOjFmSSVVujeGD5z859GlOnWz0Pg&s"
              }
              alt="userLogo"
              className="w-8 h-8 rounded-full border-2 border-black cursor-pointer"
            />
          </Link>
          {userInfo && (
            <p className="text-base font-semibold underline underline-offset-2 ml-4">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
