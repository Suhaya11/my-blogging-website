import useFetch from "./useFetch";
import ReactionsOnBlog from "./ReactionsOnBlog";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";

const MyBlogs = ({ currentUser }) => {
  let history = useHistory();
  let blogUrl = "https://suhayadb-a550.restdb.io/rest/blogs";

  let { data: blogs } = useFetch(blogUrl);
  let handleDelete = (id) => {
    fetch(blogUrl + id, {
      method: "DELETE",
    });
    history.go(0);
  };

  return (
    <>
      <div className="myBlogs">
        <div>
          <h2>My blogs</h2>
          {blogs?.map((blog) => {
            if (blog.author == currentUser?.fullname) {
              console.log(blog);

              return (
                <div className="eachMyBlog" key={blog.id}>
                  <h3> {blog.author}</h3>

                  <h2>{blog.title}</h2>
                  <p>{blog.body}</p>
                  <div
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <button
                      className="button deleteBlog"
                      onClick={() => {
                        confirm(
                          "Do you really want to delete " + blog.title + " ?"
                        ) && handleDelete(blog.id);
                      }}
                    >
                      delete
                    </button>
                  </div>
                  <ReactionsOnBlog />
                </div>
              );
            }

            if (!blogs?.some((blog) => blog.author == currentUser?.fullname)) {
              return (
                <div className="myBlogsOops" key={`${blog.id}`}>
                  <h2>Oops you don't have any blog </h2>
                  <Link to="/newblog">
                    {" "}
                    <h4
                      className="button"
                      style={{
                        display: "inline-block",
                        paddingBottom: "10px",
                      }}
                    >
                      create +{" "}
                    </h4>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default MyBlogs;
