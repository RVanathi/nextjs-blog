import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

import { getComments } from "@/services";

function Comments({ slug }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  });

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-[#fde2e4] shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b border-[#f08080]/40 pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((comment) => (
            <div key={comment.createdAt} className=" mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {new Date(comment.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="whitespace-pre-line w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Comments;
//#f08080
//#fde2e4
