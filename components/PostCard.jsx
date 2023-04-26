import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import moment from "moment/moment";

function PostCard({ post }) {
  // console.log(post);
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="flex flex-col group cursor-pointer bg-[#fde2e4] mt-8 rounded-lg hover:scale-105 transition-transform duration-200 ease-out ">
        <div className="relative w-full h-80 drop-shadow-xl ">
          <Image
            className="object-cover object-left rounded-t-lg lg:object-center"
            src={post.featuredImage.url}
            alt={post.title}
            fill
            // width="600"
            // height="500"
          />
          <div className="absolute w-full bottom-0 bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
            <div className="">
              {/* flex flex-col items-start justify-center */}
              <p className="font-bold group-hover:underline">{post.title}</p>
              <p className="text-sm">
              {moment(post.createdAt).format('MMM DD, YYYY')}
                {/* {new Date(post.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })} */}
              </p>
            </div>
            {/* gap-x-1 */}
            <div className="flex items-center gap-x-2 px-3 ">
              <Image
                alt={post.author.name}
                width="200"
                height="200"
                className="rounded-full w-10 h-10"
                src={post.author.photo.url}
              />
              <p className="text-xs">{post.author.name}</p>
            </div>
          </div>
        </div>
        {/* <div className="mt-5 flex-1"> */}
        {/* <p className="underline text-lg font-bold">{post.title}</p> */}
        <p className="mt-4 px-2 line-clamp-2 text-gray-600">{post.excerpt}</p>
        {/* </div> */}
        <p className="px-2 flex items-center text-gray-600 font-semibold mt-4 group-hover:underline group-hover:text-[#f08080]">
          Read Post
          <ArrowUpRightIcon className="ml-1 h-4 w-4" />
        </p>
      </div>
    </Link>
  );
}

export default PostCard;
//relative overflow-hidden shadow-md pb-80 mb-6
//shadow-lg rounded-lg p-0 lg:p-8 pb-12 mx-2
{
  /* <h1>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div>
        <div>
          <Image
            alt={post.author.name}
            width="200"
            height="200"
            className="rounded-full w-8 h-8"
            src={post.author.photo.url}
          />
          <p className="">{post.author.name}</p>
        </div>
        <div>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p>{post.excerpt}</p>
      <div>
        <Link href={`/post/${post.slug}`}>
          <span className="bg-[#f08080] border px-4 py-1 rounded-full">
            Continue
          </span>
        </Link>
      </div> */
}
