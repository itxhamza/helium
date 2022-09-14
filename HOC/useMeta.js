import Head from "next/head";
import React from "react";

const useMeta = (Component, options) => {
  const hoc = () => {
    return (
      <>
        <Head>
          <title>{options.title}</title>
        </Head>
        <Component />
      </>
    );
  };

  return hoc;
};

export default useMeta;
