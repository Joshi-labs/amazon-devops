import { GettoKnowUs, ConnectwithUs, MakeMoneywithUs, LetUsHelpYou, assetsImg } from "../Data/data";
import { Link } from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className=" bg-[#232F3E]">
        <div
          className=" py-4 px-0 text-center bg-[#37475A] hover:bg-[#485769] transition-all duration-300 ease-in-out"
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          Back to top

        </div>
        <div className=" max-w-[1000px] mx-auto">
          <div className=" flex justify-between py-12">
            <FooterUiLi heading='Get to Know Us' FooterItem={GettoKnowUs} />
            <FooterUiLi heading='Connect with Us' FooterItem={ConnectwithUs} />
            <FooterUiLi heading='Make Money with Us' FooterItem={MakeMoneywithUs} />
            <FooterUiLi heading='Let Us Help You' FooterItem={LetUsHelpYou} />
          </div>
        </div>
        <div className=" h-1 w-full bg-[#3a4553]"></div>
      </div>

      {/* Country section */}
      <div className=" bg-[#131921]">
        <div className="max-w-[1000px] mx-auto py-2 flex justify-center items-center">
          <div className=" w-24">
            <Link to={'/'}>
              <img className="w-full h-auto" src={assetsImg.FooterLogoImg} alt="" />
            </Link>
          </div>
          <div className="flex justify-center items-center gap-4 m-4 text-[#cad0d8] border border-[#3a4553] p-2.5 rounded-md">
            <LanguageIcon />
            <span>English</span>
            <span className=" flex justify-center flex-col">
              <ArrowDropUpIcon />
              <ArrowDropDownIcon />
            </span>
          </div>
          <div className="flex justify-center items-center gap-2 m-4 text-[#cad0d8] border border-[#3a4553] p-2.5 rounded-md">
            <img className="p-2 h-[45px]" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/in.svg" />
            <span className="p-2">India</span>
          </div>
        </div>
        {/* Countries */}
        <div className="max-w-[1000px] mx-auto flex justify-center items-center flex-wrap pb-8 gap-2 text-[12px] text-[#cacacb]">
          {[
            "Australia", "Brazil", "Canada", "China", "France", "Germany", "Italy", "Japan",
            "Mexico", "Netherlands", "Poland", "Singapore", "Spain", "Turkey",
            "United Arab Emirates", "United Kingdom", "United States"
          ].map((country) => (
            <span key={country} className="p-1 cursor-pointer hover:underline">{country}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;




export const FooterUiLi = (props) => {
  const { heading, FooterItem } = props;
  return (
    <>
      <ul className=" list-none pb-4">
        <h4 className=" pb-3 font-semibold">{heading}</h4>
        {FooterItem.map((item) => (
          <li className=" p-1 text-[#DDD] transition-all duration-300 ease-in-out cursor-pointer hover:underline"
            key={item.id}>{item.item1}</li>
        ))}
      </ul>
    </>
  );
};
