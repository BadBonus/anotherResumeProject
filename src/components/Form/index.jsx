import React from 'react';

function Header() {
  return (
    <form action="#" id="userCheck">
    <div className="userInput">
      <label htmlFor="userName">Github username</label>
      <input type="text" id="userName" placeholder="John Doe" />>
    </div>
    <button form="userCheck" type="submit" className="userCheck-submit">Generieren</button>
  </form>
  );
}

export default Header;
