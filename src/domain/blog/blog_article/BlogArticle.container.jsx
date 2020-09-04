import React, { useEffect, useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { blogsURL } from "../../../utils/constants";
import Blog from "./BlogArticle.component";

const BlogArticleContainer = () => {

  const { params } = useRouteMatch();
  const history = useHistory();
  const [blog, setBlog] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const resp = await fetch(`${blogsURL}/${params.id}`);
        const blogJson = await resp.json();
        if (blogJson) {
          setBlog(blogJson.data.blog ? blogJson.data.blog : blogJson.blog);
          if (blogJson.sections) {
            setSections(blogJson.sections);
          }
        }
      } catch (error) {
        history.push("/404");
      }
    };
    fetchBlog();
  }, [params.id, history]);

  if(!blog) return null;
  return <Blog blog={blog} sections={sections} />;
};

export default BlogArticleContainer;
