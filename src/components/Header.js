import React from "react";
import {Link} from "react-router-dom"


export default function Header() {
  return (
    <header className="ui-centered">
      <h1 className="ui-center">Rick &amp; Morty Fan Page</h1>
      <div>
      <Link className="headlink" to="/">Home</Link>
      </div>
      <div>
      <Link className="headlink" to="/List">CharacterList</Link>
      </div>
      <div>
      <Link className="headlink" to="/SearchBar">Search Characters</Link>
      </div>
    </header>
  );
}
