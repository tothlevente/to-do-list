import { Component, ReactNode } from "react";

export default class Footer extends Component {
  render(): ReactNode {
    return (
      <footer>
        <div className="footer-text">
          <p>Created by Levente in 2024</p>
          <p>This project (website) under MIT license, ad-free and does not use cookies.</p>
          <p>For more information please visit the project repository.</p>
        </div>
        <div>
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/tothlevente"
          >
            <i className="bi bi-person-circle"></i>
          </a>
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/tothlevente/to-do-list"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </footer>
    );
  }
}
