import React from "react";
import PostForm from "./PostForm";
import PostView from "./PostView";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const {
    data: allPost = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: "allpost",
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allpost");
      const data = await res.json();
      return data;
    },
  });
  console.log(allPost);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="mx-10 my-10">
      <section>
        <PostForm refetch={refetch} />
      </section>
      <section>
        {allPost?.map((post) => (
          <PostView key={post._id} post={post} />
        ))}
      </section>
    </div>
  );
};

export default Home;
