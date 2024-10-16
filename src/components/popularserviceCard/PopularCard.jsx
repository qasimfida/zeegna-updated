import React from "react";

const PopularCard = ({ image, title }) => {


    return (
        <div className="max-w-xl bg-white border rounded-lg border-[#EAEAF1] relative group cursor-pointer poppin mx-4 xl:mx-0">
            <a href="#">
                <img className="rounded-t-lg" src={image} alt={title} />
            </a>

            <div className="px-5 py-[15px] flex items-center justify-between">

                <h5 className=" text-base font-semibold text-[#1C1C1C] ">
                    {title}
                </h5>
                <div className="flex items-center gap-2">
                    <p className="text-[#5E5E6F]">Find help</p>

                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.86323 0.19527C9.12358 -0.06509 9.54569 -0.06509 9.80603 0.19527L15.1394 5.5286C15.3997 5.78895 15.3997 6.21106 15.1394 6.4714L9.80603 11.8048C9.54569 12.0651 9.12358 12.0651 8.86323 11.8048C8.60287 11.5444 8.60287 11.1223 8.86323 10.8619L13.0585 6.66667H1.33464C0.966449 6.66667 0.667969 6.36819 0.667969 6C0.667969 5.63182 0.966449 5.33334 1.33464 5.33334H13.0585L8.86323 1.13807C8.60287 0.877723 8.60287 0.455617 8.86323 0.19527Z" fill="#109088" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;
