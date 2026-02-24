import { useContext } from "react";
import { StudentContext } from "../context/Studentcontext";

function FavouriteStudents() {
  const { favourites, removeFromFavourite } = useContext(StudentContext);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Favourite Students</h2>

      {favourites.length === 0 ? (
        <div className="bg-white p-6 rounded shadow text-center text-gray-500">
          No favourite students added yet
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {favourites.map((student) => (
            <div
              key={student.id}
              className="bg-white p-4 rounded shadow"
            >
              <h3 className="text-lg font-semibold">{student.name}</h3>
              <p className="text-gray-600">Roll No: {student.roll}</p>

              <button
                onClick={() => removeFromFavourite(student.id)}
                className="mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavouriteStudents;