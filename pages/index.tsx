import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import fs from "fs";
import ReactMarkdown from "react-markdown";
import { Spandable } from "../components/Spandable";

interface HomeProps {
  data: string[];
}
export default function Home({ data }: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>WELCOME✋ I LOVE YOU 😍</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="my-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((v) => {
          return <Spandable key={v} id={v} content={v} />;
        })}
      </div>
    </div>
  );
}

// export async function getStaticProps() {
// const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");
// const blogs = files.filter((fn) => fn.endsWith(".md"));
// const data = blogs.map((blog) => {
//   const path = `${process.cwd()}/content/${blog}`;
//   const rawContent = fs.readFileSync(path, {
//     encoding: "utf-8",
//   });
//   return rawContent;
// });
// return {
//   props: {
//     data,
//   },
// };
// }
