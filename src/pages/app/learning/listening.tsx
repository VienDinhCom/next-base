import React from "react";

interface Props {}

function Page(props: Props) {
  return <p>Listening page works!</p>;
}

Page.getInitialProps = async () => {
  return {};
};

export default Page;
