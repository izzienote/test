import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      About Page2 입니다!<Link href={"/about"}>About으로 가기</Link>
    </>
  );
};

export default AboutPage;
