import React from 'react';
import {Link} from 'react'

import Languages from './../Languages/index';
import Reps from './../Reps/index';

function Resume({login, bio, html_url, created_at, location, repos, followers, country}) {

  const publicReps = repos.filter((el)=>el.private===false).length;

  return (
    <div className="Resume">
      <div className="Resume-basickInfo">
          <span className="Resume-userName">
            {/* [Github username] */}
            {login}
          </span>
          <span className="Resume-whichUser">
            A passionate Github user
            {/* {bio} */}
          </span>
          <a href={html_url}>
            {/* https://www.example.com */}
            {
              html_url
            }
          </a>
          <span className="Resume-addingInfo">
          On GitHub since {created_at.slice(0,10)}, {login} is a developer based in {location}, {country} with {publicReps} public repositories and {followers} followers.
          </span>
          <Languages />
          <Reps />
      </div>
    </div>
  );
}

export default Resume;
