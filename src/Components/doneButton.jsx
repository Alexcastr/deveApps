const done = () => {
  alert("Hecho");
};

const DoneButton = () => {
  return (
      <div className="headerButton" onClick={done}>
        <p>Terminado</p>
        <i className="bi bi-check-circle-fill headerIcon"></i>
      </div>
  );
};

export default DoneButton;
