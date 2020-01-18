import React from "react";

interface Props {}

function Page(props: Props) {
  return <p>Pid page works!</p>;
}

Page.getInitialProps = async () => {
  return {};
};

export default Page;
