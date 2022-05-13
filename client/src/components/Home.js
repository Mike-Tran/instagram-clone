import Login from "./Login";
import Posts from "./Posts"

function Home({setCurrentUser, user, loggedIn, logOut, handleDeletePost, posts, handleSubmitPost, handleLike}) {
    if (!loggedIn) {
        return (
          <>
            <Login setCurrentUser={setCurrentUser} />
            {/* <button onClick={routeChange}>Sign up</button> */}
          </>
        )
    } else {
        return ( 
          <>
            <h1>{user.username}</h1>
            {user.posts !== undefined ? < Posts posts={posts} handleDeletePost={handleDeletePost} handleSubmitPost={handleSubmitPost} handleLike={handleLike} /> : <></>}
            <button onClick={logOut}> LogOut </button>
          </>
        )
    }
}

export default Home;