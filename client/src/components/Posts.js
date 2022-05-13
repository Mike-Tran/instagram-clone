import PostCard from './PostCard';
import React, { useState } from 'react';


function Posts({posts, handleDeletePost, handleSubmitPost, handleLike}) {
    const [newPost, setNewPost] = useState("");
    return (
        <div className="Posts">
          {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                handleDeletePost={handleDeletePost}
                handleLike={handleLike}
              />
          ))}
          <form onSubmit={handleSubmitPost} id="post_form">
            <input 
                type="text" 
                placeholder="New post"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
            ></input>
          </form>
        </div>
      );
}

export default Posts;