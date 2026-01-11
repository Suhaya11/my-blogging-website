import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NewBlog = (props) => {
  let history = useHistory();
  let [withKey, setWithKey] = useState(false);
  let [categoryDisabled, setCategoryDisabled] = useState(true);
  let [title, setTitle] = useState(null);
  let [blogCategory, setBlogCategory] = useState(null);
  let [blogPrivacy, setBlogPrivacy] = useState(null);
  let [body, setBody] = useState(null);
  let author = useState(props.currentUser?.fullname);
  let [privateKey, setPrivateKey] = useState(null);
  let [time, setTime] = useState(Date());
  let blogUrl = useState("https://jsonplaceholder.typicode.com/posts");
  let [verifyBlogInput, setVerifyBlogInput] = useState(true);

  const blog = {
    title,
    blogCategory,
    blogPrivacy,
    body,
    privateKey,
    time,
    author,
  };

  let addNewBlog = (url) => {
    fetch(url, {
      method: "POST",
      Headers: {
        "Content-type": "application/json",

       

      },
      body: JSON.stringify(blog),
    });
  };

  function verifyInput() {
    if (title && blogCategory && blogPrivacy && body) {
      setTime(Date());

      console.log(`${props.currentUser.fullname}'s blog were added`);
      console.log(author);
      addNewBlog(blogUrl);
// localStorage.setItem('myBlogs', JSON.stringify(blog));
      history.push("/blogs");
    } else {
      setVerifyBlogInput(false);
    }
  }

  // console.log(Date());
  return (
    <>
      <div className="newBlog">
        <div className="inputFields">
          <form
            action=""
            className="addBlog"
            onSubmit={(a) => a.preventDefault()}
          >
            <label htmlFor="blogName" className="blogLabel">
              Blog tittle
            </label>
            <input
              type="text"
              className={
                verifyBlogInput
                  ? "blogName logingInputs"
                  : "blogName logingInputs wrongInput"
              }
              id="blogName"
              required
              onBlur={(a) => a.target.value && setTitle(a.target.value)}
            />
            <br />
            <select
              name="category"
              id="category"
              onClick={() => setCategoryDisabled(false)}
              onBlur={(a) => {
                a.target.value && setBlogCategory(a.target.value);
              }}
            >
              {categoryDisabled ? (
                <option>Category</option>
              ) : (
                <option disabled>Category</option>
              )}
              <option value="education">Education</option>
              <option value="entertainment">Entertainment</option>
              <option value="islamic">Islamic</option>
              <option value="fun">Sport and Fun</option>
            </select>
            <div className="privacyPart">
              <p>Who can see you blog</p>
              <div className="all">
                {" "}
                <input
                  type="radio"
                  onClick={() => setWithKey(false)}
                  onBlur={(a) =>
                    a.target.value && setBlogPrivacy(a.target.value)
                  }
                  name="privacy"
                  id="All"
                  value={"All"}
                  selected
                />
                <label htmlFor="All">Everyone</label>
              </div>
              <div className="withkey">
                {" "}
                <input
                  type="radio"
                  name="privacy"
                  id="withKey"
                  value={"withKey"}
                  onBlur={(a) =>
                    a.target.value && setBlogPrivacy(a.target.value)
                  }
                  onClick={() => setWithKey(true)}
                />{" "}
                <label htmlFor="withKey">With Key</label>
              </div>
              <div className="me">
                {" "}
                <input
                  type="radio"
                  name="privacy"
                  id="onlyMe"
                  onClick={() => setWithKey(false)}
                  value={"onlyMe"}
                  onBlur={(a) =>
                    a.target.value && setBlogPrivacy(a.target.value)
                  }
                />
                <label htmlFor="onlyMe">Only me</label>
              </div>
              {withKey && (
                <input
                  className="logingInputs"
                  placeholder="Inser your private key"
                  onBlur={(a) =>
                    a.target.value && setPrivateKey(a.target.value)
                  }
                  required
                />
              )}
            </div>
            <div className="textArea">
              <textarea
                name="blogText"
                id="blogBody"
                className={verifyBlogInput ? "bloBody " : "bloBody wrongInput"}
                required
                onBlur={(a) => a.target.value && setBody(a.target.value)}
                placeholder="Write your blog here ..."
              />
            </div>
            <input
              type="submit"
              className="button"
              onClick={() => {
                verifyInput();
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NewBlog;
