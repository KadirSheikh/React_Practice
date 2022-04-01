import { Route, Routes } from "react-router-dom";
import QuoteDetail from "./QuoteDetail";
const AllQuotes = () => {
  return (
    <div>
      <h1>All Quotes Page</h1>
      <Routes>
        <Route path=":quoteId" element={<QuoteDetail />} />
        {/* <Route path="" element={<OwnUserProfile />} /> */}
      </Routes>
    </div>
  );
};

export default AllQuotes;
