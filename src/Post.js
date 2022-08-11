import React from 'react'
import './Post.scss'
import { Avatar } from '@mui/material'

function Post({username, caption, imageUrl}) {
  return (
    <div className="post">
        <div className="post__header">
        <Avatar 
        className="post__avatar"
        alt='erendoru'
        src="/static/images/avat/1.jpg"
        />
        <h3>{username}</h3>
        </div>
    


        <img className="post__image" src={imageUrl} alt="image" />


        <h4 className="post__text"><strong>{username}:</strong> {caption}</h4>


    </div>
  )
}

export default Post