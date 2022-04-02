import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Wild card route i.e redirect all the unknown path to welcome page. */}
          {/* <Route path="/*" element={<Navigate to="/quotes" replace />} /> */}
          <Route path="/*" element={<NotFound />} />
          <Route path="/quotes/*" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
          <Route path="/new-quote" element={<NewQuote />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
