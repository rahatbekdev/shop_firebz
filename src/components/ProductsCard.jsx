/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/productSlice";
import toast from "react-hot-toast";

const ProductsCard = ({ item }) => {
  // console.log(item);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = item.title;

  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: item,
      },
    });
  };
  return (
    <div className="group relative">
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        <img
          onClick={handleDetails}
          src={item.image}
          alt="item/image"
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
        />
      </div>

      <div className="w-full border-[2px] px-2 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold">
              {item.title.substring(0, 15)}
            </h2>
          </div>
          <div className="relative flex justify-end gap-2 overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-gray-500">${item.oldPrice}</p>
              <p className="font-semibold">${item.price}</p>
            </div>
            <p
              onClick={() => {
                dispatch(
                  addToCart({
                    _id: item._id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    description: item.description,
                    quantity: 1,
                  })
                );
                toast.success("Product added to Card")
              }}
              className="absolute z-20 w-[100px] font-semibold text-gray-600 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32
            group-hover:translate-x-0 transition-transform cursor-pointer duration-500 border-2"
            >
              Add To Cart{" "}
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>

        <div>
          <p>{item.category}</p>
        </div>
        <div className="absolute top-0 right-0">
          {item.isNew && (
            <p className="bg-black text-white font-semibold px-6 py-1">Sale</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
