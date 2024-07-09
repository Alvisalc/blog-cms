import { Header } from "../components/Header";
import { getAllPosts } from "../api";
import { PostComponent } from "../components/PostComponent";
import { Post } from "../utils/interfaces";
import TagsBanner from "../components/TagsBanner";

export const revalidate = 60; // revalidate all the data in 60 sec

export default async function Home() {
  const posts: Post[] = await getAllPosts()
  console.log(posts, "posts")

  if (!posts) {
    return null;
  }

  return (
    <div>
      <Header title="Articles"/>
      <TagsBanner/>
      <div>
      {posts && posts.map((post) => <PostComponent key={post._id} post={post} />)}
      </div>
    </div>
  );
}
