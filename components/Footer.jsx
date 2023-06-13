import React from "react";
import { SocialIcon } from "react-social-icons";
import { ShareIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

function Footer() {
  return (
    <footer className="px-5 pt-5 mb-0 mt-5 bg-gradient-to-br from-pink-300 to-orange-300 border-y border-orange-500">
      <div className="flex flex-col text-gray-600 md:flex-row lg:flex-row">
        <div id="about">
          <h3 className="font-semibold text-xl pb-2">About</h3>This is a blog
          app created with Nextjs and Hygraph. Readers can read articles and
          leave their comments.There are a different categories of posts one can
          explore. Hope you have fun!
        </div>
        <div
          id="contact"
          className="flex justify-center cursor-pointer font-semibold text-xl items-end"
        >
          <SocialIcon
            url="https://www.instagram.com/"
            fgColor="#f08080"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.pinterest.com/"
            fgColor="#f08080"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.twitter.com/"
            fgColor="#f08080"
            bgColor="transparent"
          />
          <SocialIcon fgColor="#f08080" bgColor="transparent" />
          <SocialIcon network="email" fgColor="#f08080" bgColor="transparent" />
        </div>
      </div>
      <span className="pt-2 text-xs text-[#f08080]">
        Copyright ©2023 Vanathi Rajasekar
      </span>
    </footer>
  );
}

export default Footer;
//md:py-16 lg:py-18
