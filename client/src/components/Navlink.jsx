import React from 'react';
import { Link } from 'react-router-dom';

function Navlink({ path, title }) {
  console.log(path, title);
  console.log(document.title)
  return (
    <Link
      className="hover:underline transition-all ease-in-out duration-300 delay-100 hover:underline-offset-2"
      to={path}
    >
      {title}
    </Link>
  );
}

export default Navlink;
