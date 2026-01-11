// import useFetch from "./useFetch";

import useFetch from "./useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import ReactionsOnBlog from "./ReactionsOnBlog";


const Blogs = () => {
  let { data } = useFetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
<<<<<<< HEAD
      
=======
      "x-apikey": "",
>>>>>>> 23cef3199c0d30ccd4c0e5dcd45a674eb5ff01d5
      "Content-type": "application/json",
    },
  });
  console.log(data);
  console.log(localStorage);
  const existed = localStorage.getItem("myBlogs");
  if (existed) data?.push(...[JSON.parse(existed)]);
  return (
    <div className="blogsPage">
      <p
        style={{
          color: "blacl",
          fontSize: "2em",
        }}
      >
        BLOGS
      </p>
      <div className="blogList">
        {data
          ?.slice()
          .reverse()
          .map((blog) => {
            return (
              <div className="eachBlog" key={blog.id}>
                <h4 className="blogTittle">{blog.title} </h4>

                <p className="bodyPreview">
                  {blog.body?.split(" ").slice(0, 10).join(" ")}

                  {blog.body.split(" ").length > 10 && <span>.... </span>}

                  {blog.body?.split(" ").length >= 10 && (
                    <Link to={`/blogs/${blog.id}`}>
                      <span
                        style={{
                          fontSize: "1em",
                          border: "solid slategrey 1px",
                          padding: "0",
                        }}
                      >
                        Read more
                      </span>
                    </Link>
                  )}
                </p>

                <ReactionsOnBlog />
                <h4 className="blogAuthor">
                  {blog.author != undefined ? "- " + blog.author : "json placeholder"}
                </h4>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Blogs;
