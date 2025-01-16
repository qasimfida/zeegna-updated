import ButtonInput from "./ButtonInput";

const Quiz15 = () => {
  return (
    <div className="px-[16px] md:pl-[26px] pt-[49px] font-poppins  md:pb-[251px]">
      <h1 className="font-semibold text-[18px]">
        What is your budget for potential modifications?
      </h1>
      <div className="grid grid-cols-1 gap-[10px] pt-[15px]">
        <ButtonInput text="Under $1,000" />
        <ButtonInput text="$1,000–$5,000" />
        <ButtonInput text="$5,000–$10,000" />
        <ButtonInput text="Over $10,000" />
        <ButtonInput text="No specific budget" />
      </div>
      <div className="pt-[50px] flex justify-center md:justify-start max-sm:pb-[50px]">
        <button className="text-[#5E5E6F] font-medium text-[16px]">
          Previous{" "}
        </button>
      </div>
    </div>
  );
};
export default Quiz15;
