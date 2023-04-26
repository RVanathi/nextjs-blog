import React, { useState, useEffect } from "react";

import { AdjacentPostCard } from "../components";
import { getAdjacentPosts } from "../services";

const AdjacentPosts = ({ createdAt, slug }) => {
  const [adjacentPost, setAdjacentPost] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getAdjacentPosts(createdAt, slug).then((result) => {
      setAdjacentPost(result);
      setDataLoaded(true);
    });
  }, [slug]);

  return (
    <div>
      {dataLoaded && (
        <div className="flex flex-row justify-between">
          {adjacentPost.previous && (
            <div className="flex">
              <AdjacentPostCard post={adjacentPost.previous} position="LEFT" />
            </div>
          )}
          {adjacentPost.next && (
            <div className="flex">
              <AdjacentPostCard post={adjacentPost.next} position="RIGHT" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdjacentPosts;
