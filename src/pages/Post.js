// Post.js
import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../data/blogs'; // Assuming you're importing an array of blog posts

function Post() {
  const { slug } = useParams();
  const blog = blogs.find(post => post.slug === slug);

  return (
    <div className="container mx-auto p-8">
      {blog ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <div>{blog.content}</div>  {/* Replace this with actual content */}
        </>
      ) : (
        <p>Blog post not found.</p>
      )}
    </div>
  );
}

export default Post;
