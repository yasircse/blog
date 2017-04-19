import React from 'react';
import Post from '../Post/Post'
// import posts from '../../../blog-posts.json'

const Home = (props) => {
    return (
        <div>
            {props.posts.length ? props.posts.map((post)=>{
                return <Post {...post} key={post.id} titleLink/> 
            }):<p>Waitting....!</p>}
            
        </div>
    );
};

export default Home;