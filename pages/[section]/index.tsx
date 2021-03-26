import { useRouter } from "next/router";

const Post = () => {
  const { query } = useRouter();
  const { section } = query;
  return <div>this is {section}</div>;
};

export default Post;
