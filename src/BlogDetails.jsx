import useFetch from "./useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import ReactionsOnBlog from "./ReactionsOnBlog";

const BlogDetails = () => {
  let { id } = useParams();


  let blogUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

  


  let { data: blog } = useFetch(blogUrl, {
    method: "GET",
    Headers: {

     

      "Content-type": "application/json",
    },
  });
  console.log(blog);
  return (
    <>
      {" "}
      <div className="blogDetails">
        <h2> {blog?.title}</h2>
        <p>{blog?.body}</p>
        <br />
        <h4 className="blogAuthor">{"By  " + blog?.author}</h4>
        <ReactionsOnBlog blog={blog}></ReactionsOnBlog>
        {/* <MyBlogs></MyBlogs> */}{" "}
      </div>
    </>
  );
};

export default BlogDetails;
