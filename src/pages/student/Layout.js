import React from "react";


import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import Head from "./Head";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <header id="header">
      <Head />
      </header>
      <main  className="main-content"  style={{ minHeight: "60vh" }}>
        <Toaster />
        {children}
      </main>
      
    </div>
  );
};
Layout.defaultProps = {
  title: "e-Home - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Henotic",
};
export default Layout;