import React from "react";
import github from "../assets/github.png";
import githubDark from "../assets/githubDark.png";

export default function Footer({ dark }) {
  return (
    <footer>
      <div>© 2020 Joe McGrath</div>
      <div className={`${dark ? "dark" : ""}`}>
        <a href="https://github.com/josephmcg/flashcards">
          <img src={`${dark ? githubDark : github}`} alt="Github link" />
        </a>
      </div>
    </footer>
  );
}
