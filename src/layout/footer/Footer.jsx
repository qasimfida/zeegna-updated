import React from "react";
import FacebookIcon from "../../assets/icons/footerIcons/Facebook";
import LinkedinIcon from "../../assets/icons/footerIcons/Linkedin";
import TwiterIcon from "../../assets/icons/footerIcons/Twitter";
import FooterLogo from "../../assets/icons/footerIcons/FooterLogo";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-[#1C1C1C] pt-16	px-9 max-sm:px-[15px] poppin overflow-hidden	">
      <div class=" 	 text-gray-400">
        <div class=" px-4 max-sm:px-0 mx-auto">
          <div class="-mx-4 flex flex-wrap justify-between">
            <div class="px-4 my-4 w-full xl:w-[550px]">
              <Link to="/" class="block w-56 mb-4">
                <FooterLogo />
              </Link>

              <div>
                <p class="text-justify text-sm	font-medium	text-[#BBBBBB] xl:w-[550px]">
                  At Zeegna, we’re inspired by the strength of families choosing
                  to age in their homes, where every memory holds meaning. Aging
                  in place is about preserving dignity, independence, and love.
                  Our mission is to support families through this journey with
                  confidence, and help reshape healthcare so seniors can live
                  with grace in a more caring, connected community.
                </p>
                <div className="flex gap-11	items-center mt-5 cursor-pointer max-md:pb-[25px] max-md:border-b border-[#484848]">
                  <p>Follow us:</p>
                  <Link to="#" class="hover:text-white">
                    <LinkedinIcon />
                  </Link>
                  <Link to="#" class="hover:text-white">
                    <FacebookIcon />
                  </Link>
                  <Link to="#" class="hover:text-white">
                    <LinkedinIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex max-sm:mx-[16px] max-sm:w-full">
              <div class="px-4 max-sm:px-0 max-sm:mx-[0px] my-4 w-full sm:w-auto">
                <div>
                  <h2 class="inline-block text-white mb-2.5   font-semibold	text-lg max-sm:text-[17px]	">
                    Find help (1/2)
                  </h2>
                </div>
                <ul class="leading-8 max-sm:leading-0 text-base mb-2.5	text-[#BBBBBB] font-medium max-sm:text-[14px]		">
                  <li>
                    <Link to="#" class="hover:text-white">
                      Personal care
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="hover:text-white">
                      Home maintenance
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="hover:text-white">
                      Transportation
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="hover:text-white">
                      Moving and storage
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="hover:text-white">
                      Wellness
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="px-4 max-sm:px-0 max-sm:mx-[0px] my-4 w-full sm:w-auto">
                <div>
                  <h2 class="inline-block text-white mb-2.5   font-semibold	text-lg max-sm:text-[17px] ">
                    Find help (2/2)
                  </h2>
                </div>
                <ul class="leading-8 max-sm:leading-0 text-base mb-2.5	text-[#BBBBBB] font-medium max-sm:text-[14px]	">
                  <li>
                    <Link to="#" class="hover:text-white">
                      Medical equipment
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="hover:text-white">
                      Professional services
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="hover:text-white">
                      Pet care
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="hover:text-white">
                      End-of-life planning{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="hover:text-white">
                      All service categories{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 class="inline-block text-white mb-2.5   font-semibold	text-lg max-sm:text-[17px] ">
                  Take action
                </h2>
              </div>
              <ul class="leading-8 max-sm:leading-0 text-base mb-2.5	text-[#BBBBBB] font-medium max-sm:text-[14px]	">
                <li>
                  <Link to="/recources-page" class="hover:text-white">
                    Find help
                  </Link>
                </li>
                <li>
                  <Link to="/recources-page" class="hover:text-white">
                    Become a partner
                  </Link>
                </li>
                <li>
                  <Link to="/recources-page" class="hover:text-white">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link to="/guiding-hero" class="hover:text-white">
                    Guiding principles
                  </Link>
                </li>
                <li>
                  <Link to="/help-center" class="hover:text-white">
                    Help center
                  </Link>
                </li>
                <li>
                  <Link to="/get-in-touch" class="hover:text-white">
                    Get in touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class=" md:flex md:flex-grow justify-center py-5	border-t border-b border-[#484848]">
        <ul class="flex justify-center space-x-4 max-sm:justify-around text-base	font-semibold	 text-[#BBBBBB]">
          <li>
            <Link to="/" class="hover:text-secondary">
              Home{" "}
            </Link>
          </li>

          <li>
            <Link to="/get-in-touch" class="hover:text-secondary">
              Privacy
            </Link>
          </li>
          <li>
            <Link to="/get-in-touch" class="hover:text-secondary">
              Terms of use
            </Link>
          </li>
        </ul>
      </div>
      <div class=" py-4 text-[#BBBBBB]">
        <div class="container mx-auto px-4">
          <div class=" flex flex-col items-center flex-wrap justify-between gap-2">
            <div class="px-4 w-full text-center sm:w-auto sm:text-left max-sm:text-[14px]">
              Made with ❤️ in Boston
            </div>
            <div class="px-4 w-full text-center sm:w-auto sm:text-left max-sm:text-[14px]">
              2024 ZyraHealth. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
