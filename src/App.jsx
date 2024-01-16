import BooksSection from "./pages/BooksSection";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="my-10 lg:my-14">
        <BooksSection />
      </main>
      <Footer />
    </>
  );
};

export default App;