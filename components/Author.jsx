import Image from "next/image";
import React from "react";

function Author({ author }) {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black shadow-xl bg-opacity-30">
      <div className="absolute -top-12 mx-auto">
        <Image
          unoptimized
          alt={author.name}
          height="200"
          width="200"
          className="w-24 h-24 align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
}

export default Author;
//#f08080
//#fde2e4
