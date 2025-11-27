import useFetch from "./useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MyBlogs from "./MyBlogs";
import ReactionsOnBlog from "./ReactionsOnBlog";

const BlogDetails = () => {
  let { id } = useParams();

  let blogUrl = `https://suha andyadb-a550.restdb.io/rest/blogs/${id}`;

  let { data: blog } = useFetch(blogUrl, {
    method: "GET",
    Headers: {
      "x-apikey": "",
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
