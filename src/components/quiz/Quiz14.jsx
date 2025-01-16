import ButtonInput from "./ButtonInput";

const Quiz14 = () => {
  return (
    <div className="px-[16px] md:pl-[26px] pt-[49px] font-poppins  md:pb-[251px]">
      <h1 className="font-semibold text-[18px]">
        What is the timeline for implementing modifications?
      </h1>
      <div className="grid grid-cols-1 gap-[10px] pt-[15px]">
        <ButtonInput text="As soon as possible" />
        <ButtonInput text="Within a month" />
        <ButtonInput text="Within 2–3 months" />
        <ButtonInput text="Exploring options, no timeline yet" />
      </div>
      <div className="pt-[50px] flex justify-center md:justify-start max-sm:pb-[50px]">
        <button className="text-[#5E5E6F] font-medium text-[16px]">
          Previous{" "}
        </button>
      </div>
    </div>
  );
};
export default Quiz14;
