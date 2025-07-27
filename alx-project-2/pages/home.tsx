import { useState } from 'react';
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: "Card 1", content: "This is the content of the first card." },
    { title: "Card 2", content: "Here's some different content for the second card." },
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-start min-h-screen p-6 bg-gray-100 space-y-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setModalOpen(true)}
        >
          New Post
        </button>

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        <PostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  );
};

export default HomePage;
