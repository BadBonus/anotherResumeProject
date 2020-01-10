import React from 'react';

function Reps() {
  return (
    <div className="Reps">
      <span className="Resume-title">
        Popular Repositories
      </span>
      <div className="Reps-content">
        <div className="Reps-content-item">
          <div className="Reps-content-item-baseInfo">
            <span className="RepoName">
              [Repo name]
            </span>
            <span className="Age">
              [Year from] – [Year to]
            </span>
          </div>
          <span className="langAndRights">
            [Lang] – [Repo rights]
          </span>
          <span className="description">
            [Description]
          </span>
          <span className="Reps-content-addingInfo">
          This repository has [XXX] stars and [XXX] forks. If you would like more information about this repository and my contributed code, please visit [the repo] on GitHub.
          </span>
        </div>
        <div className="Reps-content-item">
          <div className="Reps-content-item-baseInfo">
            <span className="RepoName">
              [Repo name]
            </span>
            <span className="Age">
              [Year from] – [Year to]
            </span>
          </div>
          <span className="langAndRights">
            [Lang] – [Repo rights]
          </span>
          <span className="description">
            [Description]
          </span>
          <span className="Reps-content-addingInfo">
          This repository has [XXX] stars and [XXX] forks. If you would like more information about this repository and my contributed code, please visit [the repo] on GitHub.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Reps;
