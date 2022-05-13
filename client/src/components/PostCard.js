import '../styles/PostCard.css';

function PostCard({post, handleDeletePost, handleLike}) {

    return (
        <div className="postCard">
          <button className="deleteButton" onClick={() => handleDeletePost(post)}>X</button>
          <h4>{"Post: " + post.description + " Likes: " + post.likes}</h4>
          <button className='likeButton' onClick={() => handleLike(post)}>Like</button>
        </div>
      );
}

export default PostCard;