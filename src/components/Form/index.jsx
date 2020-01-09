import React from 'react';

function Header() {
  return (
    <form action="#" id="userCheck">
    <div class="userInput">
      <label for="userName">Github username</label>
      <input type="text" id="userName" placeholder="John Doe" />>
    </div>
    <button form="userCheck" type="submit" class="userCheck-submit">Generieren</button>
  </form>
  );
}

export default Header;
