import ExpertCard from "../expertCard/ExpertCard";
import person1 from "../../../public/images/personIcon.png";
import person2 from "../../../public/images/personQuiz.png";
import radio from "../../../public/images/radioButton.png";
import radio2 from "../../../public/images/radioQuiz.png";

const Quiz18 = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center poppins text-center bg-[#F7F7F7]">
        <h1 className="pt-[51px] font-bold text-[21px]">
          Expert guidance, your way
        </h1>
        <p className="pt-[5px] text-[#5E5E6F] text-[18px] font-medium md:w-[659px]">
          Choose between a virtual or in-home consultation to get personalized
          recommendations for your home
        </p>
      </div>
      <div className="flex px-[16px] md:px-[180px] gap-[20px] pt-[50px] pb-[215px] flex-col md:flex-row bg-[#F7F7F7]">
        <ExpertCard
          Img={person1}
          radio={radio}
          bgColor="bg-[#DFF4FF]"
          price="250$"
          title="Virtual Consultation"
          details="Customers looking for quick advice or planning remotely Those who prefer convenience and affordability"
          gain1="Personalized evaluation of your home via video call"
          gain2="Expert advice tailored to your specific needs and goals"
          gain3="Customized recommendations for home modifications"
          gain4="A detailed follow-up summary with actionable next steps"
        />
        <ExpertCard
          Img={person2}
          radio={radio2}
          bgColor="bg-[#F3EDFF]"
          price="300$"
          title="In-Home Consultation"
          details="Customers who need a hands-on evaluation
Those planning significant or immediate modifications."
          gain1="In-person evaluation of your home by an expert"
          gain2="Expert advice tailored to your specific needs and goals"
          gain3="Customized recommendations for home modifications"
          gain4="A detailed follow-up summary with actionable next steps."
        />
      </div>
    </>
  );
};
export default Quiz18;
