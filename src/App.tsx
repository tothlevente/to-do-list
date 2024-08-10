import { Component, ReactNode } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";

export default class App extends Component {
  render(): ReactNode {
    return (
      <div className="site-wrapper">
        <Header />
        <main>
          <List />
        </main>
        <Footer />
      </div>
    );
  }
}
