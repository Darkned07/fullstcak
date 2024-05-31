import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./pages/Student";
import Create from "./pages/Create";
import Update from "./pages/Update";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
