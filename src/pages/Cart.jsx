import { useSelector } from "react-redux";
import { cartInImage } from "../assets";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const productData = useSelector((state) => state.storeProduct.productData);
  const userInfo = useSelector((state) => state.storeProduct.userInfo);
  const [totalAmt, setTotalAmt] = useState("");

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
  // console.log(productData);

  return (
    <div>
      <img src={cartInImage} alt="" className="w-full h-60 object-cover" />

      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />

        <div className="w-1/3 border bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[2px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal :<span className="font-bold text-lg">$ {totalAmt}</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping:
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus
              </span>
            </p>
          </div>

          <p className="font-semibold flex justify-between mt-6">
            Total : <span className="text-xl font-bold">${totalAmt}</span>
          </p>
          <button className="text-base bg-black text-white w-full py-2 mt-6 hover:bg-gray-800 duration-300">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
