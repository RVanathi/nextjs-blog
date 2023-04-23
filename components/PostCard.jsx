import React from "react";
import moment from "moment/moment";
import Link from "next/link";
import Image from "next/image";

function PostCard({ post }) {
  console.log(post);
  return (
    <div className="bg-[#fde2e4] shadow-lg rounded-lg p-0 lg:p-8 pb-12 mx-2">
      <div className="">
        <Image
          className="rounded-lg object-cover"
          src={post.featuredImage.url}
          alt={post.title}
          width="600"
          height="500"
        />
      </div>
      <h1>
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
      </div>
    </div>
  );
}

export default PostCard;
//relative overflow-hidden shadow-md pb-80 mb-6
