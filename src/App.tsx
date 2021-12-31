import React, { useState } from "react";
import clsx from "clsx";
import "./App.css";

function App() {
  const [fullSize, setFullSize] = useState(false);
  return (
    <main className="main">
      <div
        className={clsx("card", fullSize && "card--fullsize")}
        onClick={() => setFullSize((current) => !current)}
      >
        <img src="https://picsum.photos/500" alt="" className="card__image" />
        <p className={clsx("card__title", fullSize && "card__title--fullsize")}>
          Card title
        </p>
        <p className={clsx("card__lead", fullSize && "card__lead--fullsize")}>
          Lorem ipsum dolor sit amet,
        </p>
        {fullSize && (
          <p className="card__text">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        )}
      </div>
    </main>
  );
}

export default App;
