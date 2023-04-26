import React from "react";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const AdjacentPostCard = ({ post, position }) => (
  <>
    <Link href={`/post/${post.slug}`}>
      <span className="z-10 cursor-pointer" />

      {position === "LEFT" && (
        <ArrowLeftCircleIcon className="w-14 h-14 text-[#f08080] transition duration-500 ease hover:text-orange-300" />
      )}
      {position === "RIGHT" && (
        <ArrowRightCircleIcon className="w-14 h-14 text-[#f08080] transition duration-500 ease hover:text-orange-300" />
      )}
    </Link>
  </>
);

export default AdjacentPostCard;
