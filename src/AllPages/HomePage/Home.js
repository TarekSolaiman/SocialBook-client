import React from "react";
import PostForm from "./PostForm";
import PostView from "./PostView";

const Home = () => {
  return (
    <div className="mx-10 my-10">
      <section>
        <PostForm />
      </section>
      <section>
        <PostView />
      </section>
    </div>
  );
};

export default Home;
