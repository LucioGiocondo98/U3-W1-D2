import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
//import AllTheBooks from "./components/AllTheBooks"; components dove vedere tutti i books
import SingleBook from "./components/SingleBook";
import booksData from "./data/books.json";
import BookList from "./components/BookList";
function App() {
  const bookToView = booksData[0];
  return (
    <div className="d-flex flex-column">
      <main className="flex-grow-1">
        <MyNav tema="dark"></MyNav>
        <SingleBook book={bookToView}></SingleBook>
        <BookList books={booksData} />
        <Welcome></Welcome>
      </main>
      <MyFooter text="Lucio"></MyFooter>
    </div>
  );
}
export default App;
