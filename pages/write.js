import Image from "next/image";
import React from "react";
import image from "../public/assets/pexels-japan.jpg";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useForm, SubmitHandler } from "react-hook-form";
import Header from "@/components/Header";
// type Inputs = {
//   name: string,
//   email: string,
//   subject: string,
//   message: string,
// };

function Write() {
  return (
    <>
      <div className="flex flex-col p-12 items-center">
        <Image
          className="h-60  object-cover rounded-lg "
          src={image}
          width="800"
          height="800"
          alt=""
        />
        <form className="relative">
          <div className="flex mx-auto items-center">
            <label htmlFor="file-input">
              <PlusCircleIcon className=" w-8 h-8 text-gray-500 cursor-pointer" />
            </label>
            <input type="file" id="file-input" className="hidden" />
            <input
              type="text"
              placeholder="Title"
              className="outline-none p-5 text-3xl"
              autoFocus={true}
            />
          </div>
          <div>
            <textarea
              className="outline-none p-5 h-96 w-96 text-xl"
              placeholder="Tell your story..."
              type="text"
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex text-white bg-teal-600 border-none rounded-lg p-3 justify-center"
          >
            Publish
          </button>
        </form>
      </div>
    </>
  );
}

export default Write;
