import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Head>
        <title>VR Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-gradient-to-br from-pink-300 to-orange-300 border-y border-gray-500 p-10 space-y-5 text-center items-center md:py-16 lg:py-18">
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-serif">
          A Space for Curious and Creative Minds
        </h1>
        <h2 className="md:text-xl lg:text-xl">
          Join in the fun by sharing your thoughts and exploring new ideas.
        </h2>
      </div>
    </main>
  );
}

// export const getServerSideProps = async () => {};

/* const posts = [
//   { title: "React testing", excerpt: "learn react testing" },
//   { title: "React and tailwind", excerpt: "learn react with tailwindcss" },
// ];
// {
//    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//         <div>
//           {posts.map((post, index) => (
//             <div key={index}>
//               {post.title}
//               {post.excerpt}
//             </div>
//           ))}
//         </div>
//         <div className="lg:col-span-4 col-span-1"></div>
//       </div> 
// }*/
