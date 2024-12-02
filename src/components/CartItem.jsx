import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { HiArrowNarrowLeft } from "react-icons/hi";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/productSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const CartItem = () => {
  const productData = useSelector((state) => state.storeProduct.productData);
  const dispatch = useDispatch();

  return (
    <div className="w-2/3 pr-10 border">
      <div className="w-full">
        <h2 className="text-2xl">Shopping Cart</h2>
      </div>

      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.title} removed`)
                }
                className="text-xl text-gray-600 hover:text-red-800 cursor-pointer duration-300"
              />
              <img src={item.image} alt="" className="w-32 h-32 object-cover" />
            </div>
            <h2 className="w-52 border">{item.title}</h2>
            <p className="w-10 border">${item.price}bb</p>

            <div className="flex items-center gap-4 text-sm font-semibold border p-2 bg-yellow-300">
              <span
                onClick={() =>
                  dispatch(
                    decrementQuantity({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      description: item.description,
                    })
                  )
                }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                -
              </span>
              <span>{item.quantity}</span>
              <span
                onClick={() =>
                  dispatch(
                    incrementQuantity({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      description: item.description,
                    })
                  )
                }
                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                +
              </span>
            </div>

            <p className="w-14">${item.quantity * item.price}aa</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => dispatch(resetCart())}
        className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800"
      >
        Reset Cart
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiArrowNarrowLeft />
          </span>
          go shopping
        </button>
      </Link>
    </div>
  );
};

export default CartItem;
