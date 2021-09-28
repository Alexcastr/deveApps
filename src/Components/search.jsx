const Search = () => {
  return (
    <div className="headerButton">
      <div className="searchButton">
        <form className="searchForm">
          <button className="searchButton">
            <i class="bi bi-search searchIcon"></i>
          </button>
          <input
            type="text"
            name="Search"
            className="searchField"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
