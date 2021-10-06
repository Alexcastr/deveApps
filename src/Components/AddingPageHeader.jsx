import React from "react";
import BackButton from "./BackButton";
const AddingPageHeader = ({ pageTitle, backPage }) => {
  return (
    <header className="header">
      <BackButton backPage={backPage} />
      <h1 className="pageTitle">{pageTitle}</h1>
      <div></div>
    </header>
  );
};

export default AddingPageHeader;
