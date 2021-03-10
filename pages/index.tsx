import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const languages = ["Javascript", "Python", "Java"];
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
              <div className="text-center border-2  border-purple-500">
                <ul>
                  {language}
                  <li></li>
                </ul>
              </div>
            );
          })}
        </div>
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
