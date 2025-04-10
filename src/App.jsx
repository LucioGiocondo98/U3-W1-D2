import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import booksData from "./data/books.json";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="d-flex flex-column">
      <main className="flex-grow-1">
        <MyNav tema="dark" />
        <BookList books={booksData} />
        <Welcome />
      </main>
      <MyFooter text="Lucio" />
    </div>
  );
}

export default App;
