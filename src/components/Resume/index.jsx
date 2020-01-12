import React from 'react';

import Languages from './../Languages/index';
import Reps from './../Reps/index';

function Resume({login, bio, html_url, created_at, location, repos=[], followers, country}) {

  const publicReps = repos.filter((el)=>el.private===false).length;
  let setLng = new Set(repos.map((el)=>el.language));
  setLng.forEach((point)=>{
    if (point === null) {
      setLng.delete(point);
    }
  });
  setLng = Array.from(setLng);
  let languages = [];
  function sortByValue(arr) {
    arr.sort((a, b) => a.value > b.value ? -1 : 1);
  }
  setLng.forEach((lang)=>{
    languages.push({name:lang, value: Math.round((repos.filter((el)=>el.language===lang).length / repos.length) * 100)}); //calculated % from all reps to every lang
  })
  sortByValue(languages);

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
          <Languages data={languages}/>
          <Reps data={repos}/>
      </div>
    </div>
  );
}

export default Resume;
