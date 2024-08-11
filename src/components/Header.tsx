import { Component, ReactNode } from "react";

import Logo from "./Logo";

export default class Header extends Component {
  render(): ReactNode {
    return (
      <header className="header">
        <div className="logo">
          <Logo />
          <h1>To-do list</h1>
        </div>
      </header>
    );
  }
}
