import React from 'react';

function Resume() {
  return (
    <div className="Resume">
      <div className="Resume-basickInfo">
          <span className="Resume-userName">
            [Github username]
          </span>
          <span className="Resume-whichUser">
            A passionate Github user
          </span>
          <a href="#">
            https://www.example.com
          </a>
          <span className="Resume-addingInfo">
          On GitHub since [YEAR], [USERNAME] is a developer based in [CITY], [COUNTRY] with [XXX] public repositories and [XX] followers.
          </span>
      </div>
    </div>
  );
}

export default Resume;
