import { Fragment } from "react";

export default function ProductDetailPage(props) {
  const { username } = props;

  // if (!loadedProduct) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Fragment>
      <h1>{username}</h1>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  return {
    props: {
      username: "user-id " + params.uid,
    },
  };
}
