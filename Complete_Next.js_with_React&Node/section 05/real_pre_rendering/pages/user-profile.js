import { Fragment } from "react";

export default function UserProfile(props) {
  const { username } = props;
  return (
    <Fragment>
      <h1>{username}</h1>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      username: "Max",
    },
  };
}
