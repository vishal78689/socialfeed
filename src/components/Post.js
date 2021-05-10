import React from 'react'
import './Post.css'

function Post({post_heading,content,date,category}) {
    return (
        <div className="post">
        <h3 className="post_heading"> {post_heading}</h3>
        <div> <h4> </h4> </div>
        <p className="content"> {content} </p>
            
        </div>
    )
}

export default Post
