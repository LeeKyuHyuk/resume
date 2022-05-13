import fs from "fs";
import type { NextPage } from "next";
import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export async function getStaticProps() {
  const fileName = fs.readFileSync("resume.md", "utf-8");
  const { content } = matter(fileName);
  return {
    props: {
      resume: content,
    },
  };
}

type ResumeProps = {
  resume: string;
};

const Resume: NextPage<ResumeProps> = ({ resume }: ResumeProps) => {
  return (
    <>
      <Head>
        <title>이규혁 - 이력서</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Header initial="Kh." name="KYUHYUK LEE" />
      <div
        dangerouslySetInnerHTML={{
          __html: md({ html: true }).render(resume),
        }}
      />
      <Footer year="2022" initial="Kh." name="KYUHYUK LEE" />
    </>
  );
};

export default Resume;
