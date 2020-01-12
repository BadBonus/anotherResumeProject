import React, {useState} from 'react';

const Form = ({createResume}) => {

  const [name, setName] = useState('');

  return (
    <form 
    onSubmit={
      (e)=>{
        e.preventDefault();
        // createResume(name);
        createResume('badbonus') //на время разработки
      }
    } 
    id="userCheck"
    >
    <div className="userInput">
      <label htmlFor="userName">Github username</label>
      <input type="text" 
      id="userName" 
      placeholder="JohnDoe" 
      value={name}
      onChange={
        (e)=>{
          let newName = e.target.value;
          setName(newName.replace(/\s+/g, ' ').trim());
      }
        }/>>
    </div>
    <button form="userCheck" type="submit" className="userCheck-submit">Generieren</button>
  </form>
  );
}

export default Form;
