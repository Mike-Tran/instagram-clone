function Posts({posts}) {
    return (
        <div className="Posts">
          {posts.map((post) => (
              <h3>{post.description + " Likes: " + post.likes}</h3>
          ))}
        </div>
      );
}

export default Posts;