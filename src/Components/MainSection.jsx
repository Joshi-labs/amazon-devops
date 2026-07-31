import { ProductCard, ProductCard2 } from "./ProductCard";
import { AmazonPay, Upcominglaunches, StylesForMen, assetsImg } from "../Data/data"
import ProductSlider from "./ProductSlider";
// import { ProductDetail } from '../Details/ProductDetail'
import PrimeSlider from "./PrimeSlider";

const MainSection = () => {
  return (
    <>
      <div className="max-w-[1500px] mx-auto">
        <PrimeSlider />
        <div className=" flex justify-start m-2">
          <ProductCard
            title="Up to 70% off | Clearance store"
            img={assetsImg.offerImgB1}
            offer="Shop Now"
          />
          <ProductCard2 Detail={Upcominglaunches} title="Latest and upcoming launches" />
          <ProductCard
            title="Amazon pay Book Travel Tickets"
            img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
            offer="Shop Now"
          />
          <ProductCard2 Detail={AmazonPay} title="Amazon pay Book Travel Tickets" />
        </div>
        <div className="flex justify-start m-2">
          <ProductCard
            title="Bluetooth Calling Smartwatch starts at ₹1,999"
            img={assetsImg.offerImgB2}
            offer="Shop Now"
          />
          <ProductCard2 Detail={StylesForMen} title="Up to 60% off | Styles for men" />
          <ProductCard
            title="Amazon pay Book Travel Tickets"
            img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
            offer="Shop Now"
          />
          <ProductCard2 Detail={AmazonPay} title="Amazon pay Book Travel Tickets" />
        </div>

        <ProductSlider />
      </div>
    </>
  );
};

export default MainSection;
