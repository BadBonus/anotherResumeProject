import React from 'react';

function Reps({data}) {
  
  return (
    <div className="Reps">
      <span className="Resume-title">
        Popular Repositories
      </span>
      <div className="Reps-content">
        {
          data.map((el)=>
          <div className="Reps-content-item" key={el.id}>
            <div className="Reps-content-item-baseInfo">
              <span className="RepoName">
                {el.name}
              </span>
              <span className="Age">
                {el.created_at.slice(0,10)} – {el.updated_at.slice(0,10)}
              </span>
            </div>
            <span className="langAndRights">
              {el.language === null ? 'Other' : el.language} – {el.license === null ? 'no license' : el.license.name}
            </span>
            <span className="description">
              {
                el.description
              }
            </span>
            <span className="Reps-content-addingInfo">
            This repository has {el.stargazers_count} stars and {el.forks} forks. If you would like more information about this repository and my contributed code, please visit <a href={el.html_url}><b>the repo</b></a> on GitHub.
            </span>
          </div>)
        }
      </div>
    </div>
  );
}

export default Reps;
