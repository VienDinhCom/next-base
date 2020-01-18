import React from 'react';

interface Props {}

function Page(props: Props) {
  return <p>Index page works!</p>;
}

Page.getInitialProps = async () => {
  return { hello: 'world' };
};

export default Page;
