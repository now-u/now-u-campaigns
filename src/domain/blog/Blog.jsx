import React from 'react';
import classes from './Blog.module.scss';

import { Text, Footer } from '../../components';
import { BlogPost } from './components';

const Blog = () => {

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Text className={classes.title} type="h2">
                    Blog
                </Text>
            </div>
            <div className={classes.content}>
                <div className={classes.blogs}>
                    <BlogPost
                        blogTitle="The impacts of climate change on the water crisis"
                        blogAuthor="Helene McHugh"
                        blogHashtags={["climatechange", "WASH"]}
                        blogImageSrc="https://www.onblastblog.com/wp-content/uploads/2018/05/free-images-for-blogs.jpeg"
                    />
                    <BlogPost
                        blogTitle="What do UK policies mean for refugees, asylum seekers and other migrants?"
                        blogAuthor="Helene McHugh"
                        blogHashtags={["refugee", "migrants", "UK"]}
                        blogImageSrc="https://www.onblastblog.com/wp-content/uploads/2018/05/free-images-for-blogs.jpeg"
                    />
                    <BlogPost
                        blogTitle="The impacts of climate change on the water crisis"
                        blogAuthor="Helene McHugh"
                        blogHashtags={["climatechange", "WASH"]}
                        blogImageSrc="https://www.onblastblog.com/wp-content/uploads/2018/05/free-images-for-blogs.jpeg"
                    />
                    <BlogPost
                        blogTitle="The impacts of climate change on the water crisis"
                        blogAuthor="Helene McHugh"
                        blogHashtags={["climatechange", "WASH"]}
                        blogImageSrc="https://www.onblastblog.com/wp-content/uploads/2018/05/free-images-for-blogs.jpeg"
                    />
                    <BlogPost
                        blogTitle="The impacts of climate change on the water crisis"
                        blogAuthor="Helene McHugh"
                        blogHashtags={["climatechange", "WASH"]}
                        blogImageSrc="https://www.onblastblog.com/wp-content/uploads/2018/05/free-images-for-blogs.jpeg"
                    />
                    <BlogPost
                        blogTitle="The impacts of climate change on the water crisis"
                        blogAuthor="Helene McHugh"
                        blogHashtags={["climatechange", "WASH"]}
                        blogImageSrc="https://www.onblastblog.com/wp-content/uploads/2018/05/free-images-for-blogs.jpeg"
                    />
                </div>
                <div className={classes.blogAds}>
                    Blog ads
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Blog;
