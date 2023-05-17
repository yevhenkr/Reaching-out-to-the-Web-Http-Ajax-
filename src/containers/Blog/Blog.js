import React, { Component } from 'react';
// import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import classes from './Blog.css';
import Posts from './Posts/Posts'

class Blog extends Component {
    render() {
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/new-post'>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                {/* <Routes>
                    <Route path="/" exact element={<h1>Home</h1>} />
                </Routes>
                <Routes>
                    <Route path="/" exact element={<h1>Home 2</h1>} />
                </Routes> */}
                 <Routes>
                    <Route path="/" exact Component={Posts} />
                </Routes>
            </div>
        );
    }
}

export default Blog;