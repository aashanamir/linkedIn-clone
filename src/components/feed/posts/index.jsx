import React from 'react'
import "./style.scss";
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const Post = ({name , description , message , avatarUrl}) => {


  return (
    <div className='post'>
        <div className="post-header">
            <div className="post-header-profile">
                <Avatar src={avatarUrl}/>
                <div className="post-header-profile-content">
                <h4>{name}</h4>
                <p>{description}</p>
                </div>
            </div>
            <div className="post-header-option">
                <MoreHorizIcon/>
            </div>
        </div>

        <div className="post-body">
            {message}
        </div>

        <div className="post-footer">
            <div className="post-footer-option">
                <FavoriteBorderIcon/>
                <span>Like</span>
            </div>

            <div className="post-footer-option">
                <CommentIcon/>
                <span>Comment</span>
            </div>

            <div className="post-footer-option">
                <ShareIcon/>
                <span>Share</span>
            </div>
        </div>
      
    </div>
  )
}

export default Post
