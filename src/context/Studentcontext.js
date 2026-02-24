import { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();

function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourite = (student) => {
    const alreadyExists = favourites.find(
      (item) => item.id === student.id
    );

    if (!alreadyExists) {
      setFavourites([...favourites, student]);
    }
  };

  const removeFromFavourite = (id) => {
    const updatedList = favourites.filter(
      (student) => student.id !== id
    );
    setFavourites(updatedList);
  };

  return (
    <StudentContext.Provider
      value={{ favourites, addToFavourite, removeFromFavourite }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;