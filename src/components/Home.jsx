import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Home | Theodora</title>
        <meta
          name="description"
          content="Welcome! to the homepage of my counter app project"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <h1>Welcome! to my homepage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
        dignissimos doloremque eligendi, excepturi alias temporibus odio officia
        totam animi recusandae deleniti est dolorum atque soluta vel dolorem hic
        possimus ratione, maiores obcaecati iusto. Dolor, dolorum alias.
        Distinctio expedita modi ad? Praesentium, possimus. Enim illum modi,
        temporibus iusto laudantium nihil a!
      </p>
    </main>
  );
};

export default Home;
