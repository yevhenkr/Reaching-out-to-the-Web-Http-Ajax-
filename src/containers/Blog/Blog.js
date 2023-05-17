import React, { Component } from 'react';
// import axios from 'axios';
import { Routes, Link, Route } from 'react-router-dom';

import classes from './Blog.css';
import Posts from './Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';

class Blog extends Component {
    render() {
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul> 
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                 <Routes>
                    <Route path="/" exact Component={Posts} />
                    <Route path="/new-post" Component={NewPost} />
                </Routes>
            </div>
        );
    }
}

export default Blog;