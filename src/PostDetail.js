import React, {useState} from "react"

function PostDetail({ posts }){
  const [ comments, setComments ] = useState([])
  
  const clickHandler = (post) => {
   const postId = post.id
   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
   .then((response) => response.json())
   .then(setComments)
   .catch((error) =>{
     console.log(error)
   })
  }
  
  const postElements = posts.map((post, index) => <div key={index}><h1>{post.title}</h1><button onClick={() => clickHandler(post)}>{post.body}</button></div> )
  
  const commentElements = comments.map((comment, index) => <div key={index}><p>{comment.body}</p></div>)
  
  return(
    <div>
      {postElements}
      {commentElements}
    </div>
  )
  
}

export default PostDetail