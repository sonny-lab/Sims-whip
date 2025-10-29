import React from "react";
import ReactMarkdown from "react-markdown";
import blogContent from "./content/blog-markdown-files/the-very-first-idea.md";

const BlogContentLoader = () => {
  return (
    <div className="bg-[url('./assets/blog-room.png')] bg-cover bg-center min-h-screen flex items-center justify-center p-6">
      <div className="bg-[rgba(66,47,29,0.85)] text-amber-200 w-[70%] max-h-[80vh] overflow-y-auto rounded-lg shadow-2xl border border-amber-800 p-6 backdrop-blur-sm">
        <ReactMarkdown>{blogContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogContentLoader;

