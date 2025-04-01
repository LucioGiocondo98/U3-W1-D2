import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <main className="flex-grow-1">
        <MyNav tema="dark"></MyNav>
        <Welcome></Welcome>
        <AllTheBooks></AllTheBooks>
      </main>
      <MyFooter text="Lucio"></MyFooter>
    </>
  );
}
export default App;
