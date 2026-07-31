import React, { useState, useEffect, useContext } from "react";
import StarIcon from '@mui/icons-material/Star';
import {
  ProductDetail,
  WatchDetail,
  LaptopDetail,
  headphonesDetail,
} from "../Data/ProductDetail";
import { TodaysDeals } from "../Data/SliderDetail";
import { shippingDetail } from "../Data/data";
import { Link, useParams } from "react-router-dom";
import CartContext from "../ContextApi/CartContext";

const ProductPaga = () => {
  const { addtoCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedColorImage, setSelectedColorImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const items = [...ProductDetail, ...WatchDetail, ...LaptopDetail, ...headphonesDetail, ...TodaysDeals];
    const found = items.find(item => item.id == id);
    if (found) setProduct(found);
  }, [id]);

  return (
    <div className=" bg-white">
      <main className="max-w-[1500px] mx-auto">
        <div className=" text-black text-xs font-semibold py-2">
          <p>{product.pagination}</p>
        </div>
        <div className=" flex justify-between items-start text-black text-sm leading-5 py-2 px-2">

          {/* Small product thumbnails */}
          <div className=" w-[90px] p-4 cursor-pointer">
            {/* <SmallProduct colors={product.colors} /> */}
            <SmallProduct
              smallImg={product.smallImg}
              onImageClick={(img) => setSelectedColorImage(img)}
            />
          </div>

          {/* Main Product Image */}

          <div className=" w-[30%] mt-15">
            <img className=" w-full"
              src={selectedColorImage ? selectedColorImage : product.image}
              alt=""
            />
          </div>

          {/* Product Details */}
          <div className=" w-[40%] p-4">
            <div className="border-b border-gray-300 pb-2">
              <p className="font-semibold capitalize text-lg leading-6">{product.name}</p>
              <a
                href="https://www.apple.com/in/"
                className="!text-[#007185] text-sm leading-5">
                {product.store}
              </a>
              <div className=" flex items-center gap-2 cursor-pointer justify-start">
                <span className=" flex">
                  <StarIcon className="text-yellow-500" />
                  <StarIcon className="text-yellow-500" />
                  <StarIcon className="text-yellow-500" />
                  <StarIcon />
                  <StarIcon />
                </span>
                <div className="text-[#007185] text-sm leading-5 cursor-pointer p-2">
                  {product.rating} ratings
                </div>
                <div className="w-[2px] h-4 bg-black"></div>
                <div className="text-[#007185] text-sm px-2 cursor-pointer">
                  587 answered questions
                </div>
              </div>
            </div>

            <div className="border-b border-gray-300 pb-2">
              <p className="text-red-600 font-semibold text-sm leading-5">Ends in 03h 28m 15s</p>
              <p className=" text-[28px] font-semibold py-2">
                <sup className="text-sm p-1">₹</sup>
                {product.price}
                {/* <sup className="text-xs p-1">00</sup> */}
              </p>
              <div className="py-2">Inclusive of all taxes</div>
              <div>
                <span className="font-semibold capitalize">EMI</span> starts at ₹{product.emi}. No Cost EMI available <span className="text-[#007185] text-sm leading-5 cursor-pointer">EMI options</span>
              </div>
            </div>

            <div className="border-b border-gray-300 pb-2">
              <div className="flex justify-center items-center gap-1">
                <EmiSection /><EmiSection /><EmiSection /><EmiSection />
              </div>
            </div>

            <div className="border-b border-gray-300 pb-2">
              <div className=" flex justify-center items-center gap-1">
                <ShippingIcon Product={shippingDetail} />
              </div>
            </div>

            {/* Dynamic Color Section */}
            <div className=" cursor-pointer">
              <ColorSelector colors={product.colors} setSelectedColorImage={setSelectedColorImage} />
            </div>

            <div className="border-b border-gray-300 pb-2">
              <h3 className="py-2">About this item</h3>
              <ul>
                <li>{product.about}</li>
              </ul>
            </div>
          </div>



          {/* Buy Now Section */}
          <div className="border border-gray-300 rounded w-[20%] p-4">
            <p className=" text-[28px] font-semibold">
              <sup className="text-xs p-1">₹</sup>
              {product.price}
              <sup className="text-xs p-1">00</sup>
            </p>
            <p className="font-semibold capitalize py-2">
              <span className="text-[#007185] text-sm leading-5 cursor-pointer">FREE delivery</span>
              {product.delivery}
              <span className="text-[#007185] text-sm leading-5 cursor-pointer">Details</span>
            </p>
            <p className="font-semibold capitalize py-2">
              Or fastest delivery Tomorrow.
              <span className="text-[#007185] text-sm leading-5 cursor-pointer">Details</span>
            </p>
            <span className="text-[#007600] text-[18px] leading-6">
              {product.status}
            </span>
            <div className=" text-center">
              <Link to='/CartPage'>
                <CartButton
                  name="Add to Cart"
                  color={""}
                  onClick={() => addtoCart(product.id, product.name, product.price, product.status, product.image)}
                />
              </Link>
              <CartButton name="Buy Now" color={"#FFA41C"} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPaga;










export const CartButton = ({ name, color, onClick }) => (
  <button
    className="rounded-[20px] px-8 py-2 border-none text-sm leading-5 w-[80%] my-2 mx-4 shadow-[0_2px_5px_0_rgba(213,217,217,0.5)] hover:opacity-50"
    style={{ backgroundColor: `${color || "#FFD814"}` }}
    onClick={onClick}
  >
    {name}
  </button>
);



export const EmiSection = () => (
  <div className="rounded-sm px-2 py-1 border flex-1 m-1 shadow-[0_0_4px_0_rgba(0,0,0,0.3)]">
    <p className="font-semibold capitalize">No Cost EMI</p>
    <p>Upto ₹85.51 EMI interest savings on Amazon Pay ICICI…</p>
    <span className="text-[#007185] text-sm leading-5 cursor-pointer">2 offers</span>
  </div>
);




export const ShippingIcon = ({ Product }) => (
  <>
    {Product.map((item) => (
      <div className=" flex justify-center items-center flex-col text-center py-1"
        key={item.id}>
        <img
          src={item.image}
          alt={item.image}
          className="w-12 object-cover" />
        <p className="text-[#007185] text-sm leading-5 cursor-pointer">{item.name}</p>
      </div>
    ))}
  </>
);




export const ColorSelector = ({ colors = [], setSelectedColorImage }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0] || null);

  if (!colors.length) return null;

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setSelectedColorImage(color.image);
  };

  return (
    <div className="border-b border-gray-300 pb-2">
      <p>Colour: <span className="font-semibold capitalize">{selectedColor?.color || "N/A"}</span></p>
      <ul className=" flex justify-start items-center gap-1 py-2">
        {colors.map((item) => (
          <li className=" text-center" key={item.id}>
            <img
              onClick={() => handleColorClick(item)}
              src={item.image}
              alt={item.color}
              className=" w-[100px] border p-1 rounded-[3px] mx-1 border-[#bbbfbf] hover:border-blue-500 mb-1"
            />
            <p>₹ {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};




export const SmallProduct = ({ smallImg = [], onImageClick }) => {
  if (!smallImg.length) return null;

  return (
    <div className=" flex flex-col gap-1">
      {smallImg.map((item) => (
        <div
          className=" m-2 rounded-[8px] p-2 border border-black hover:border-blue-500"
          key={item.id}
          onClick={() => onImageClick(item.image)}
        >
          <img
            src={item.image}
            alt={`product-${item.id}`}
            className=" w-12 h-10" />
        </div>
      ))}
    </div>
  );
};



// export const SmallProduct = ({ colors = [] }) => {
//   // if (!colors.length) return null;

//   return (
//     <>
//       {.map((item) => (
//         <div className="small-product" key={item.id}>
//           <img src={item.image} alt={item.color} />
//         </div>
//       ))}
//     </>
//   );
// };

