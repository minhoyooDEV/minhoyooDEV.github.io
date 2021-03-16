import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import fs from "fs";
import ReactMarkdown from "react-markdown";

interface HomeProps {
  data: string[];
}
export default function Home({ data }: HomeProps) {
  const languages = ["Javascript", "Python", "Java"];
  useEffect(() => {
    // console.log(__dirname + "/samples");
    // console.log(fs);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>WELCOME✋ I LOVE YOU 😍</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"p-12"}>
        <h1 className={"container mx-auto mb-10 text-center text-7xl"}>
          Welcome to&nbsp;
          <a
            className="text-red-400 font-mono"
            href="https://github.com/minhoyooDEV"
          >
            MY_GITHUB
          </a>
        </h1>
        <div className={"container mx-auto grid grid-cols-2 sm:grid-cols-3"}>
          {languages.map((language) => {
            return (
              <div
                key={language}
                className="text-center border-2  border-purple-500"
              >
                <ul>
                  {language}
                  <li></li>
                </ul>
              </div>
            );
          })}
        </div>
        {data.map((markdown, i) => {
          return <ReactMarkdown key={i} children={markdown} />;
        })}
      </main>

      <footer className={styles.footer}>
        Powered by&nbsp;
        <b>
          <a href="mailto:minho.yoo.dev@gmail.com">MYNO</a>
        </b>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");
  const blogs = files.filter((fn) => fn.endsWith(".md"));
  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });
    return rawContent;
  });
  return {
    props: {
      data,
    },
  };
}
