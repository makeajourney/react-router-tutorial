import React from "react";
import qs from "qs";

function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>Introduction</h1>
      <p>This is project of example for practicing react router principal.</p>
      {showDetail && <p>setted detail true</p>}
    </div>
  );
}

export default About;
