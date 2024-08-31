import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";

export default function App() {
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
