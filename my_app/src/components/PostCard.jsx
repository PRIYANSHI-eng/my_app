import { useState } from 'react';
import LikeButton from './LikeButton';

const PostCard = ({ post }) => (
  <div>
    <img src={post.profilePic} alt={post.username} />
    <h4>{post.username}</h4>
    <LikeButton />
  </div>
);

export default PostCard;
