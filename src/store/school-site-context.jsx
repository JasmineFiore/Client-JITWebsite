import { createContext, useState } from "react";

export const SchoolContext = createContext({
  selected: "",
  setChosenPDFAndName: (choose) => {},
});

function SchoolContextProvider(props) {
  let state = []; //default values
  let findFindPDFinLocal = localStorage.getItem("SelectedPDF"); //this will collect the state if somebody reloads the app
  let findFindPDFTitleinLocal = localStorage.getItem("SelectedPDFTitle");

  if (findFindPDFinLocal && findFindPDFTitleinLocal) {
    state = [findFindPDFinLocal, findFindPDFTitleinLocal];
  }

  const [selectedPDF, setSelectedPDF] = useState(state);

  function setChosenPDFAndName(choose) {
    setSelectedPDF(choose);
    localStorage.setItem("SelectedPDF", choose[0]);
    localStorage.setItem("SelectedPDFTitle", choose[1]);
  }

  const value = {
    selected: selectedPDF,
    setChosenPDFAndName: setChosenPDFAndName,
  };

  return (
    <SchoolContext.Provider value={value}>
      {props.children}
    </SchoolContext.Provider>
  );
}

export default SchoolContextProvider;
