import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const LeftMenuBox = ({ title, listDetail }) => {
  return (
    <div className="p-5 text-[#111] border-b border-[#d5dbdb]">
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="list-none">
        {listDetail.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center py-[0.7rem] text-[0.9rem] hover:bg-[#eaeded] rounded-md cursor-pointer"
          >
            <div>{item.menuItem}</div>
            <div>
              <ArrowForwardIosIcon className="text-sm" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};



export const LeftMenuBox2 = ({ title, listDetail }) => {
  return (
    <div className="p-5 text-[#111] border-b border-[#d5dbdb]">
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="list-none">
        {listDetail.map((item) => (
          <li
            key={item.id}
            className="py-[0.7rem] text-[0.9rem] hover:bg-[#eaeded] rounded-md cursor-pointer"
          >
            {item.menuItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

