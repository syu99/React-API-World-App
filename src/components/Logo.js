import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      <img src="./logo192.png" alt="logo react" />
      {/* Les images importées depuis la balise IMG sont accecible dans "public" */}
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
