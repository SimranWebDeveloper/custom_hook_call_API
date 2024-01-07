import { useEffect } from "react";
import axios from "../apis/jsonPH";
import UseAxiosFunction from "../hooks/UseAxiosFunction";

export default function Post() {
  const [posts, error, loading, axiosFetch]: any = UseAxiosFunction();
console.log('post:',posts);

  const getData = () => {
    axiosFetch({
      axiosIntance: axios,
      method: "GET",
      url: "/posts",
      
    });
  };
  useEffect(() => {
    getData();

  }, []);

  const handleSubmit = () => {
    axiosFetch({
      axiosIntance: axios,
      method: "POST",
      url: "/posts",
      requestConfig: {
        data: {
          userId: 10,
          title: "Jane",
          body: "Today ",
        },
      },
    });
  };
  return (
    <div className="bg">
      <h2>Post sehivesi</h2>

      <div className="row" style={{color:'white'}}>
        {/* post request */}
        <button onClick={handleSubmit}>post request</button>
        {/* get request */}
        <button onClick={getData}> get request</button>
      </div>

      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}

{/* get */}
      {!loading && !error && posts?.length && (
        <ul>
          {posts.map((post: any,i:number) => {
            return <li key={i}>{`${post.id} - ${post.title}`}</li>;
          })}
        </ul>
      )}
      {/* post */}
      {!loading && !error &&  posts?.data && (
        <p >{`userId: ${posts.data?.userId} + title: ${posts.data?.title} + body: ${posts.data?.body}`}</p>
      )}
      {!loading && !error && !posts && <p>Hec bir   POST gonderilmeyib</p>}


    </div>
  );
}
