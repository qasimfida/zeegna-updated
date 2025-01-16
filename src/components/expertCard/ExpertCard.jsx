import thumb from "../../../public/images/Thumb.png";

const ExpertCard = ({
  price,
  title,
  details,
  gain1,
  gain2,
  gain3,
  gain4,
  Img,
  bgColor,
  radio,
}) => {
  return (
    <div className="border border-[#EAEAF1] rounded-3xl  px-[20px] bg-white">
      <div className="flex gap-[15px] pt-[20px] pb-[15px]">
        <img src={Img} alt="" />
        <div className="">
          <h2 className="text-[21px] font-bold">{title}</h2>
          <p className="text-[16px] font-medium text-[#5E5E6F]">
            Duration: 45 minutes
          </p>
        </div>
      </div>
      <div
        className={`flex gap-[15px] ${bgColor} pl-[10px] pr-[15px] py-[13px] rounded-[8px]`}
      >
        <img src={thumb} alt="" className="w-[42px] h-[42px]" />
        <div>
          <h2 className="text-[16px] font-semibold">Best for:</h2>
          <p className="text-[14px] font-medium">{details}</p>
        </div>
      </div>
      <div className="pt-[15px] pb-[15px]">
        <h2 className="text-[16px] font-semibold">What you’ll gain:</h2>
        <div className="flex pt-[13px] gap-[10px]">
          <img src={radio} alt="" className="w-[22px] h-[22px]" />
          <p className="font-medium text-[16px]">{gain1}</p>
        </div>
        <div className="flex pt-[13px] gap-[10px]">
          <img src={radio} alt="" className="w-[22px] h-[22px]" />
          <p className="font-medium text-[16px]">{gain2}</p>
        </div>
        <div className="flex pt-[13px] gap-[10px]">
          <img src={radio} alt="" className="w-[22px] h-[22px]" />
          <p className="font-medium text-[16px]">{gain3}</p>
        </div>
        <div className="flex pt-[13px] gap-[10px]">
          <img src={radio} alt="" className="w-[22px] h-[22px]" />
          <p className="font-medium text-[16px]">{gain4}</p>
        </div>
      </div>
      <div className=" pb-[20px] border-t border-[#EAEAF1] flex text-center pt-[20px] gap-[10px] justify-center">
        <h2 className="font-semibold text-[24px]">{price}</h2>
        <p className="font-medium text-[14px] text-[#5E5E6F] items-end flex pb-1">
          one-time fee
        </p>
      </div>
    </div>
  );
};
export default ExpertCard;
