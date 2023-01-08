import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const params = useParams();
  const UsersId = params.UsersId;

  return <div>Details about user {UsersId}</div>;
}
export default UserDetails;
