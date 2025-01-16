import ButtonInput from "./ButtonInput";

const Quiz16 = () => {
  return (
    <>
      <div className="px-[16px] md:pl-[26px] pt-[49px] font-poppins  md:pb-[251px]">
        <h1 className="font-semibold text-[18px]">
          Are you interested in learning about financing options for home
          modifications?
        </h1>
        <div className="grid grid-cols-1 gap-[10px] pt-[15px]">
          <ButtonInput text="Yes, I’d like to explore financing options" />
          <ButtonInput text="No, I’m not interested in financing" />
          <ButtonInput text="Not sure, I’d like more information" />
        </div>
        <div className="pt-[50px] flex justify-center md:justify-start max-sm:pb-[50px]">
          <button className="text-[#5E5E6F] font-medium text-[16px]">
            Previous{" "}
          </button>
        </div>
      </div>
    </>
  );
};
export default Quiz16;
