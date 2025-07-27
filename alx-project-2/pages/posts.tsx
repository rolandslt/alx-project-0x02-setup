import { useEffect, useState } from 'react';
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-start min-h-screen p-6 bg-gray-100 space-y-4">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {posts.map((post) => (
          <PostCard key={post.id} userId={post.userId} title={post.title} body={post.body} id={post.id} />
        ))}
      </main>
    </>
  );
};

export default PostsPage;
