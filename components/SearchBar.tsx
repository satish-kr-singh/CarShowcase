'use client';
import React from "react";
import SearchManufacturer from "./SearchManufacturer";


const SearchBar = () => {
    const [manufacturer, setManufacturer] = React.useState("");

  const handleSearch = () => {};
  return <form className="searchbar" onSubmit={handleSearch}>
    <div className="searchbar_item">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
    </div>
  </form>;
};

export default SearchBar;
