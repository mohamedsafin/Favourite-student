import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "./context/Studentcontext";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";

function App() {
  const { favourites } = useContext(StudentContext);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="flex justify-between items-center bg-white p-4 rounded shadow mb-6">
          <Link to="/" className="font-bold text-xl text-blue-600">
            Student List
          </Link>

          <Link
            to="/favourites"
            className="relative bg-blue-600 text-white px-4 py-2 rounded"
          >
            Favourites
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">
              {favourites.length}
            </span>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/favourites" element={<FavouriteStudents />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;