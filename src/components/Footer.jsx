import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaPaypal,
  FaSearchLocation,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { footerLogo, logoLight } from "../assets";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-14">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-4">
          <img src={logoLight} alt="" className="w-32" />
          <p className="text-white text-lg tracking-wide">&copy; React.com</p>
          <img src={footerLogo} alt="" className="w-56" />
          <div className="flex space-x-5 text-lg text-gray-400">
            <FaGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-white font-semibild mb-4">Locate</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Bishkek 996</p>
            <p>Mobile: +996 12345</p>
            <p>Phone: 312 12345</p>
            <p>Email: jsshop@gmail.com</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-white font-semibild mb-4">Profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaUser />
              </span>
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaPaypal />
              </span>
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              Order Tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaSearchLocation />
              </span>
              Help & Support
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <input
            type="text"
            placeholder="Enter email..."
            className="bg-transparent border text-lg py-4 px-4"
          />
          <button className="text-lg border text-white hover:bg-gray-900 active:bg-white active:text-black py-2 mt-4">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
