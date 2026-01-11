import useFetch from "./useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MyBlogs from "./MyBlogs";
import ReactionsOnBlog from "./ReactionsOnBlog";

const BlogDetails = () => {
  let { id } = useParams();

<<<<<<< HEAD
  let blogUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
=======
  let blogUrl = `https://suha andyadb-a550.restdb.io/rest/blogs/${id}`;
>>>>>>> 23cef3199c0d30ccd4c0e5dcd45a674eb5ff01d5

  let { data: blog } = useFetch(blogUrl, {
    method: "GET",
    Headers: {
<<<<<<< HEAD
     
=======
      "x-apikey": "",
>>>>>>> 23cef3199c0d30ccd4c0e5dcd45a674eb5ff01d5
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
