import { useRouter } from "next/router";
import posts from '../../posts.json';

export default () => {
  const router = useRouter();
  let post = posts[router.query.id];
  console.log(post);
  return (
    <>
      <h1>Blog Post</h1>
      {/* {post.title} */}
    </>
  );
}