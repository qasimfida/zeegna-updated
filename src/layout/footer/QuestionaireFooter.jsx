import React from "react";
import { Link } from "react-router-dom";
function QuestionaireFooter() {
  return (
    <footer className="bg-[#1C1C1C] 	px-[36px] max-sm:px-[15px] poppin overflow-hidden	">
      <div class=" md:flex md:flex-grow justify-center py-5	border-t border-b border-[#484848]">
        <ul class="flex justify-center space-x-4 max-sm:justify-around text-base	font-semibold	 text-[#BBBBBB]">
          <li>
            <Link to="/home-new" class="hover:text-secondary">
              Home
            </Link>
          </li>

          <li>
            <Link to="/privacy" class="hover:text-secondary">
              Privacy
            </Link>
          </li>
          <li>
            <Link to="/terms-of-use" class="hover:text-secondary">
              Terms of use
            </Link>
          </li>
        </ul>
      </div>
      <div class=" py-[30px] text-[#BBBBBB]">
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

export default QuestionaireFooter;
