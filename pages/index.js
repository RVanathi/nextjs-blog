import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";

const posts = [
  { title: "React testing", excerpt: "learn react testing" },
  { title: "React and tailwind", excerpt: "learn react with tailwindcss" },
];
export default function Home() {
  return (
    <main className="">
      <Head>
        <title>VR Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </main>
  );
}
{
  /* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div>
          {posts.map((post, index) => (
            <div key={index}>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1"></div>
      </div> */
}
