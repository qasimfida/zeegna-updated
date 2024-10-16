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
        <div class="container px-4 mx-auto">
          <div class="-mx-4 flex flex-wrap justify-between">
            <div class="px-4 my-4 w-full xl:w-2/4">
              <Link to="/" class="block w-56 mb-4">
                <FooterLogo />
              </Link>

              <div>
                <p class="text-justify text-sm	font-medium	text-white">
                  At ZyraHealth, we're inspired by the strength and resilience
                  of families who choose to age in their homes, where every
                  memory and every familiar corner holds meaning. Aging in place
                  is more than just staying home—it’s about preserving dignity,
                  independence, and the love that defines us. Our mission is to
                  make that choice easier for families, providing the support
                  they need to navigate this journey with confidence and peace
                  of mind. We're not just imagining a future where aging in your
                  home is possible—we're creating a movement to reshape
                  healthcare, so seniors can live with grace, and society
                  embraces this important stage of life. Together, we can build
                  a world where aging in your home is at the heart of a more
                  caring, connected community.
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

            <div class="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 class="inline-block text-white mb-2.5   font-semibold	text-lg	">
                  Find help (1/2)
                </h2>
              </div>
              <ul class="leading-8 text-base mb-2.5	text-white	">
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
              <ul class="leading-8 text-base mb-2.5	text-white">
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
              </ul>
            </div>
            <div class="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 class="inline-block text-white mb-2.5   font-semibold	text-lg ">
                  Take action
                </h2>
              </div>
              <ul class="leading-8 text-base mb-2.5	text-white">
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
      <div class=" md:flex md:flex-grow justify-center mt-10	py-5	border-t border-b border-white">
        <ul class="flex justify-center space-x-4 text-base	font-semibold	 text-white">
          <li>
            <Link to="/" class="hover:text-secondary">
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to="/get-in-touch" class="hover:text-secondary">
              Site map
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
      <div class=" py-4 text-gray-100">
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
