import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Logo />
          <h1>To-do list</h1>
        </div>
        <div>
          <p style={{ color: "red", maxWidth: "300px" }}>
            Be careful, your to-do list will be lost if you refresh or close the browser window.❗️
          </p>
        </div>
      </header>
    </>
  );
}
