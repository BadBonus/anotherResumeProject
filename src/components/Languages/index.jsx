import React from 'react';

function Languages({data}) {

  let langs = data.map((el)=>{
    return <div className="Languages-content-lang">
  {el.name} <span className="Languages-content-lang__decor">{el.value}%</span>
             <progress value={el.value} max="100"></progress>
           </div>
  });

  const sum = data.reduce((sum, current)=>sum + current.value, 0);

  langs.push(
    <div className="Languages-content-lang">
  Other <span className="Languages-content-lang__decor">{100-sum}%</span>
             <progress value={100-sum} max="100"></progress>
           </div>);

  return (
    <div className="Languages">
        <span className="Resume-title">
          Languages
        </span>
        <div className="Languages-content">
          {/* <div className="Languages-content-lang">
            [Lang] <span className="Languages-content-lang__decor">[XX]%</span>
            <progress value="50" max="100"></progress>
          </div> */}
         {
           langs
         }
        </div>
    </div>
  );
}

export default Languages;
