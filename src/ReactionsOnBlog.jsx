import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function ReactionsOnBlog({ blog }) {
  return (
    <div>
      <div className="reactions">
        <Link className="likes">
          {blog?.like?.length ? blog?.like.length : 0} likes
        </Link>
        <Link className="comments">
          {blog?.comments?.length ? blog?.comments.length : 0} Comments
        </Link>
      </div>
    </div>
  );
}
