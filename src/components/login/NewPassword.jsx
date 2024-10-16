import React from "react";

function NewPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full poppin ">
      <div className="   px-8 py-6 max-w-lg	">
        <h1 className="text-[32px]	 font-semibold text-center mb-2 ">
          Let's set a new password for you
        </h1>
        <p className="text-center text-[17px]	text-[#5E5E6F] font-medium mb-10">
          Please enter new password
        </p>
        <form action="#">
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-[#5E5E6F]  mb-2"
            >
              New password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm text-sm rounded-full w-full px-4 py-3.5	 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter a new password"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block  text-sm font-semibold text-[#5E5E6F]  mb-2"
            >
              Confirm new password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm text-sm rounded-full w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div class="max-w-md mx-auto p-2">
            <h2 class="text-lg font-semibold text-gray-700 ">
              Your password must:
            </h2>
            <ul class="list-disc pl-5 text-gray-600">
              <li>Have at least 8 characters</li>
              <li>Contain a special character</li>
              <li>Not be commonly used and easy to guess</li>
            </ul>
          </div>

          <button
            onClick={() => alert("hello")}
            type="submit"
            className="w-full flex justify-center py-3.5	mt-8	mb-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#1C1C1C] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewPassword;
