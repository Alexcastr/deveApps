import React from "react";
import BackButton from "./BackButton";
import DoneButton from "./doneButton";
const AddingPageHeader = ({ pageTitle, backPage }) => {
  return (
    <header className="header">
      <BackButton backPage={backPage} />
      <h1 className="pageTitle">{pageTitle}</h1>
      <DoneButton/>
    </header>
  );
};

export default AddingPageHeader;
