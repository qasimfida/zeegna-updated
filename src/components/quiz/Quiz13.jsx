import ButtonInput from "./ButtonInput";

const Quiz13 = () => {
  return (
    <>
      {" "}
      <div className="px-[16px] md:pl-[26px] pt-[49px] font-poppins  md:pb-[251px]">
        <h1 className="font-semibold text-[18px]">
          Does the person use any mobility aids?
        </h1>
        <div className="grid grid-cols-1 gap-[10px] pt-[15px]">
          <ButtonInput text="Yes, a wheelchair" />
          <ButtonInput text="Yes, a walker or cane" />
          <ButtonInput text="No mobility aids" />
          <ButtonInput text="Other" />
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
export default Quiz13;
