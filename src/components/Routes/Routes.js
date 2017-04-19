import React from 'react';
import NotFound from '../NotFound/NotFound'
import Home from '../Home/Home'
import About from '../About/About'
import PostDetails from '../PostDetails/PostDetails'
import {Route,Switch} from 'react-router-dom'
import posts from '../../../blog-posts.json'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={()=> <Home posts={posts.posts}/>}/>
            <Route exact path='/about' component={About}/>
            <Route path='/post/:id' component={props=>{
                const post= posts.posts.filter(post=>props.match.params.slug === post.slug);
                return <PostDetails post={post[0]} />
            }}/>
            <Route component={NotFound}/>
        </Switch>
    );
};

export default Routes;