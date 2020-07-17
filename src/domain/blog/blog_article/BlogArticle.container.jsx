import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { blogsURL } from '../../../utils/constants';
import Blog from './BlogArticle.component';

const BlogArticleContainer = () => {

    const { params } = useRouteMatch();
    const history = useHistory();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const resp = await fetch(`${blogsURL}/${params.id}`);
                const blog = await resp.json();
                setBlog(blog?.data ? blog.data : blog);
            } catch (error) {
                history.push("/404");
            }
        };
        fetchBlog();
    }, [params.id, history]);

    if(!blog) return null;
    return <Blog blog={blog} />;
}

export default BlogArticleContainer;
