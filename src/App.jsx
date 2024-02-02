import React from "react";
import { Helmet } from "react-helmet";
import { RouterProvider } from "react-router-dom";
import Router from "./routes";

const App = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;400;600&family=Playfair+Display:ital,wght@1,400;1,500;1,800&family=Quicksand:wght@300;500;600&family=Roboto+Slab&family=Shantell+Sans&family=Space+Grotesk&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
