/* eslint-disable react/prop-types */
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  // console.log(products);

  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
          recusandae, vero quos ipsam veritatis nisi eos optio voluptatem non
          perferendis tempora, tempore officia aperiam inventore eaque corporis
          explicabo id fugit
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((item) => (
          <ProductsCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
