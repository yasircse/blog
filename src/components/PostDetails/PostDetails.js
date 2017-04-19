import React from 'react';
import Post from '../Post/Post'
const PostDetails = (props) => {
    return (
        <div>
          <Post {...props.post}/>
        </div>
    );
};

export default PostDetails;