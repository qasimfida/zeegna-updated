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
<<<<<<< HEAD
                  <h2 class="inline-block text-white mb-2.5   font-semibold	text-lg max-sm:text-[17px]	">
                    Find help (1/2)
                  </h2>
                </div>
                <ul class="leading-8 max-sm:leading-0 text-base mb-2.5	text-[#BBBBBB] font-medium max-sm:text-[14px]		">
                  <li>
                    <Link to="/find-help" class="hover:text-white">
                      Home evaluation
                    </Link>
                  </li>
                  <li>
                    <Link to="/find-help" class="hover:text-white">
=======
                  <h2 class="inline-block text-white mb-2.5 font-semibold text-lg max-sm:text-[17px]">
                    Find help (1/2)
                  </h2>
                </div>
                <ul class="leading-8 max-sm:leading-0 text-base mb-2.5 text-[#BBBBBB] font-medium max-sm:text-[14px]">
                  <li>
                    <Link to="#" class="hover:text-white">
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
                      Bathroom safety
                    </Link>
                  </li>
                  <li>
<<<<<<< HEAD
                    <Link to="/find-help" class="hover:text-white">
=======
                    <Link to="#" class="hover:text-white">
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
                      Kitchen accessibility
                    </Link>
                  </li>
                  <li>
<<<<<<< HEAD
                    <Link to="/find-help" class="hover:text-white">
=======
                    <Link to="#" class="hover:text-white">
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
                      Stair modifications
                    </Link>
                  </li>
                  <li>
<<<<<<< HEAD
                    <Link to="/find-help" class="hover:text-white">
                      Entryway adjustments
                    </Link>
                  </li>
=======
                    <Link to="#" class="hover:text-white">
                      Entryway adjustments
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="hover:text-white">
                      Flooring improvements
                    </Link>
                  </li>
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
                </ul>
              </div>
              <div class="px-4 max-sm:px-0 max-sm:mx-[0px] my-4 w-full sm:w-auto">
                <div>
<<<<<<< HEAD
                  <h2 class="inline-block text-white mb-2.5   font-semibold	text-lg max-sm:text-[17px] ">
                    Find help (2/2)
                  </h2>
                </div>
                <ul class="leading-8 max-sm:leading-0 text-base mb-2.5	text-[#BBBBBB] font-medium max-sm:text-[14px]	">
                  <li>
                    <Link to="/find-help" class="hover:text-white">
                      Flooring improvements
                    </Link>
                  </li>
                  <li>
                    <Link to="/find-help" class="hover:text-white">
                      Lighting and electrical
                    </Link>
                  </li>
                  <li>
                    <Link to="/find-help" class="hover:text-white">
                      Installations and mounting
                    </Link>
                  </li>
                  <li>
                    <Link to="/find-help" class="hover:text-white">
                      Home safety & automation
=======
                  <h2 class="inline-block text-white mb-2.5 font-semibold text-lg max-sm:text-[17px]">
                    Find help (2/2)
                  </h2>
                </div>
                <ul class="leading-8 max-sm:leading-0 text-base mb-2.5 text-[#BBBBBB] font-medium max-sm:text-[14px]">
                  <li>
                    <Link to="#" class="hover:text-white">
                      Lighting & electrical
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="hover:text-white">
<<<<<<< HEAD
=======
                      Installations & mounting
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="hover:text-white">
                      Home safety
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class="hover:text-white">
                      Home automation
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" class="hover:text-white">
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
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
<<<<<<< HEAD
                  <Link to="/find-help" class="hover:text-white">
=======
                  <Link to="/help-section" class="hover:text-white">
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
                    Find help
                  </Link>
                </li>
                <li>
<<<<<<< HEAD
                  <Link to="/recources-page" class="hover:text-white">
=======
                  <Link to="/become-partner" class="hover:text-white">
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
                    Become a partner
                  </Link>
                </li>
                <li>
                  <Link to="/resources" class="hover:text-white">
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
<<<<<<< HEAD
            <Link to="/" class="hover:text-secondary">
              Home{" "}
=======
            <Link to="/home-new" class="hover:text-secondary">
              Home
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
            </Link>
          </li>

          <li>
<<<<<<< HEAD
            <Link to="/get-in-touch" class="hover:text-secondary">
=======
            <Link to="/privacy" class="hover:text-secondary">
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
              Privacy
            </Link>
          </li>
          <li>
<<<<<<< HEAD
            <Link to="/get-in-touch" class="hover:text-secondary">
=======
            <Link to="/terms-of-use" class="hover:text-secondary">
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
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
