import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { TrashIcon, UserCircleIcon } from "@heroicons/react/24/outline";
function Settings() {
  return (
    <>
      <Header />
      <div className="flex flex-col p-5 max-w-7xl mx-auto justify-center">
        <div className="flex flex-row items-center justify-between">
          <span className="text-2xl mb-5 text-[#f08080]">
            Update Your Account
          </span>
          <span className="flex text-sm text-red-700 cursor-pointer">
            <TrashIcon className="w-6 h-6" />
            Delete Account
          </span>
        </div>
        <form className="flex flex-col space-y-2 mx-auto w-fit">
          <label className="mt-5 text-xl">Profile Picture</label>
          <div className="flex items-center my-3">
            <Image
              className="rounded-full object-cover w-24 h-24"
              src="/../public/assets/bitmoji-2.png"
              width="200"
              height="200"
              alt=""
            />
            <label className="mt-2 text-xl" htmlFor="file-input">
              <UserCircleIcon className="w-7 h-7 text-gray-500 ml-2 cursor-pointer" />
            </label>
            <input
              className="settings-input hidden"
              type="file"
              id="file-input"
            />
          </div>
          <label className="mt-5 text-xl">Username</label>
          <input
            className="settings-input"
            type="text"
            placeholder="Your Name"
          />
          <label className="mt-5 text-xl">Email</label>
          <input
            className="settings-input"
            type="email"
            placeholder="email@example.com"
          />
          <label className="mt-5 text-xl">Password</label>
          <input className="settings-input" type="password" />
          <button className="flex bg-teal-600 text-white border-none rounded-lg px-2 py-2 justify-center hover:opacity-60">
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default Settings;
