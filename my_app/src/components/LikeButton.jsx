

// LikeButton.jsx
import { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      style={{ color: liked ? 'red' : 'gray' }}
      onClick={() => setLiked(!liked)}
    >
      {liked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default LikeButton;
