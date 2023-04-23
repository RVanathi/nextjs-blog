import Head from "next/head";
import { PostCard, Categories, PostWidget } from "@/components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <main className="max-w-7xl mx-auto">
      <Head>
        <title>VR Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-br from-pink-300 to-orange-300 border-y border-orange-500 p-10 space-y-5 text-center items-center md:py-16 lg:py-18 shadow-2xl">
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-serif">
          A Space for Curious and Creative Minds
        </h1>
        <h2 className="md:text-xl lg:text-xl">
          Join in the fun by sharing your thoughts and exploring new ideas.
        </h2>
      </div>

      <div className="flex flex-row gap-2 mt-6">
        <div className="flex flex-2">
          {posts.map((post) => (
            <PostCard key={post.title} post={post.node} />
          ))}
        </div>
        <div className="">
          <div className="flex flex-col lg:sticky relative">
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
