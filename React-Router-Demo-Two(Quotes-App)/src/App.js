import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
// import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
// import Comments from "./components/comments/Comments";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          {/* Wild card route i.e redirect all the unknown path to welcome page. */}
          <Route path="/*" element={<Navigate to="/quotes" replace />} />
          <Route path="quotes/*" element={<AllQuotes />} />
          <Route path="/new-quote" element={<NewQuote />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
