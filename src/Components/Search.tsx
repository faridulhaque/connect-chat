import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";

type SearchTypes = {
  // setSearchKey: (value: string) => void
  handleSearch: () => void;
  handleClearSearch: () => void;
  setSearchKey: (value: string) => void;
  searchKey: string;
};

const Search = ({ handleSearch, setSearchKey, searchKey, handleClearSearch }: SearchTypes) => {
  return (
    <div className="w-full h-15 relative">
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchKey(e.target.value)
        }
        type="text"
        id="search"
        name="search"
        placeholder="Type your friend's email"
        className="w-full h-full border py-2 px-3 placeholder-gray-400 text-gray-700 focus:outline-none"
        value={searchKey}
      ></input>
      {searchKey && (
        <>
          <AiOutlineSearch
            onClick={handleSearch}
            className="text-xl text-gray-600 top-0 bottom-0 right-8 absolute my-auto cursor-pointer"
          ></AiOutlineSearch>

          <CiCircleRemove 
          onClick={handleClearSearch}
          className="text-xl text-gray-600 top-0 bottom-0 right-3 absolute my-auto cursor-pointer"></CiCircleRemove>
        </>
      )}
    </div>
  );
};

export default Search;
