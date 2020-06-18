import React from 'react';
import classes from './Blog.module.scss';

import { Text, Footer } from '../../components';

const Blog = () => {

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Text className={classes.title} type="h2">
                    Blog
                </Text>
            </div>
            <div>

            </div>
            <Footer/>
        </div>
    );
}

export default Blog;
