import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getRecentPosts, getSimilarPosts } from "../services";
import moment from "moment/moment";

function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug, categories]);
  // console.log(relatedPosts);
  return (
    <div className="bg-[#fde2e4] shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-[#f08080]/40 border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              width="200"
              height="200"
              className="w-14 h-14 align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <Link
              href={`/post/${post.slug}`}
              className="text-md hover:underline hover:text-[#f08080]"
            >
              {post.title}
            </Link>
            <p className="text-gray-600 text-s">
              {/* {new Date(post.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })} */}
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostWidget;
