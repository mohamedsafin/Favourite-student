import { useContext } from "react";
import { StudentContext } from "../context/Studentcontext";

function StudentList() {
  const { favourites, addToFavourite } = useContext(StudentContext);

  const students = [
    { id: 1, name: "Mohamed", roll: "101" },
    { id: 2, name: "Rahul", roll: "102" },
    { id: 3, name: "Aisha", roll: "103" },
    { id: 4, name: "Arun", roll: "104" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {students.map((student) => {
        const alreadyAdded = favourites.find(
          (item) => item.id === student.id
        );

        return (
          <div
            key={student.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{student.name}</h3>
            <p className="text-gray-600">Roll No: {student.roll}</p>

            <button
              onClick={() => addToFavourite(student)}
              disabled={alreadyAdded}
              className={`mt-3 px-4 py-2 rounded text-white ${
                alreadyAdded
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {alreadyAdded ? "Added" : "Add to Favourite"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default StudentList;