import { useState, useEffect } from "react";
const useFetch = (url) => {
  let [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          console.log(res);
          throw Error("there is a problem");
        }

        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return { data };
};

export default useFetch;
