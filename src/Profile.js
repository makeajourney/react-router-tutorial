import React from "react";

const data = {
  velopert: {
    name: "김민준",
    description: "react를 좋아하는 개발자"
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공"
  }
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>User not exists.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
