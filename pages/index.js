import Head from "next/head";
import { Categories, PostWidget, PostCard } from "@/components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <main>
      <Head>
        <title>VR Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sticky bg-gradient-to-br from-pink-300 to-orange-300 border-y border-orange-500 p-10 space-y-5 text-center items-center md:py-16 lg:py-18 shadow-2xl">
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-serif">
          A Space for Curious and Creative Minds
        </h1>
        <h2 className="md:text-xl lg:text-xl">
          Join in the fun by sharing your thoughts and exploring new ideas.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
        <div className="lg:col-span-4 col-span-1 grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-20">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-2 col-span-1 mt-8">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}
//fetching data using getStaticProps in nextjs
export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
};
// import Categories from "@/components";
// import PostCard from "@/components";
// import PostWidget from "@/componets";
//flex flex-row gap-2 mt-6
//flex flex-2
//flex-1
//line 21 -ss "grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-20"
//  21-js       "grid grid-cols-1 lg:grid-cols-12 gap12"
//line 28 flex flex-col
//js line 27 lg:col-span-4 col-span-1
