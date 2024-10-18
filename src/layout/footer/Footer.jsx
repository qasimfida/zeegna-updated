import React from "react";
import FacebookIcon from "../../assets/icons/footerIcons/Facebook";
import LinkedinIcon from "../../assets/icons/footerIcons/Linkedin";
import TwiterIcon from "../../assets/icons/footerIcons/Twitter";
import FooterLogo from "../../assets/icons/footerIcons/FooterLogo";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-[#1C1C1C] pt-16	px-9 poppin">
      <div class=" 	 text-gray-400">
        <div class=" px-4 mx-auto">
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
                <div className="flex gap-11	items-center mt-5 cursor-pointer">
                  <Link to="#" class="hover:text-blue-400">
                    <LinkedinIcon />
                  </Link>
                  <Link to="#" class="hover:text-blue-400">
                    <FacebookIcon />
                  </Link>
                  <Link to="#" class="hover:text-blue-400">
                    <LinkedinIcon />
                  </Link>
                </div>
              </div>
            </div>

            <div class=" my-4 w-full sm:w-auto">
              <div>
                <h2 class="inline-block text-white mb-2.5   font-semibold	text-lg	">
                  Find help (1/2)
                </h2>
              </div>
              <ul class="leading-8 text-base mb-2.5	text-[#BBBBBB] font-medium		">
                <li>
                  <Link to="#" class="hover:text-blue-400">
                    Personal care
                  </Link>
                </li>
                <li>
                  <Link to="#" class="hover:text-blue-400">
                    Home maintenance
                  </Link>
                </li>
                <li>
                  <Link to="#" class="hover:text-blue-400">
                    Transportation
                  </Link>
                </li>
                <li>
                  <Link to="#" class="hover:text-blue-400">
                    Moving and storage
                  </Link>
                </li>
                <li>
                  <Link to="#" class="hover:text-blue-400">
                    Wellness
                  </Link>
                </li>
              </ul>
            </div>
            <div class="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 class="inline-block text-white mb-2.5   font-semibold	text-lg ">
                  Find help (2/2)
                </h2>
              </div>
              <ul class="leading-8 text-base mb-2.5	text-[#BBBBBB] font-medium	">
                <li>
                  <Link to="#" class="hover:text-blue-400">
                    Medical equipment
                  </Link>
                </li>
                <li>
                  <Link to="#" class="hover:text-blue-400">
                    Professional services
                  </Link>
                </li>
                <li>
                  <Link to="#" class="hover:text-blue-400">
                    Pet care
                  </Link>
                </li>
                <li>
                  <Link to="#" class="hover:text-blue-400">
                    End-of-life planning{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#" class="hover:text-blue-400">
                    All service categories{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div class="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 class="inline-block text-white mb-2.5   font-semibold	text-lg ">
                  Take action
                </h2>
              </div>
              <ul class="leading-8 text-base mb-2.5	text-[#BBBBBB] font-medium	">
                <li>
                  <Link to="/recources-page" class="hover:text-blue-400">
                    Find help
                  </Link>
                </li>
                <li>
                  <Link to="/recources-page" class="hover:text-blue-400">
                    Become a partner
                  </Link>
                </li>
                <li>
                  <Link to="/recources-page" class="hover:text-blue-400">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link to="/guiding-hero" class="hover:text-blue-400">
                    Guiding principles
                  </Link>
                </li>
                <li>
                  <Link to="/help-center" class="hover:text-blue-400">
                    Help center
                  </Link>
                </li>
                <li>
                  <Link to="/get-in-touch" class="hover:text-blue-400">
                    Get in touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class=" md:flex md:flex-grow justify-center py-5	border-t border-b border-white">
        <ul class="flex justify-center space-x-4 text-base	font-semibold	 text-[#BBBBBB]">
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
            <div class="px-4 w-full text-center sm:w-auto sm:text-left">
              Made with ❤️ in Boston
            </div>
            <div class="px-4 w-full text-center sm:w-auto sm:text-left">
              2024 ZyraHealth. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
