import React from "react";

function Header({ setIsAdding }) {
  return (
    <div>
      <h1>Medicine Stock Data</h1>
      <button onClick={() => setIsAdding(true)}>Add Medicine</button>
    </div>
  );
}

export default Header;
