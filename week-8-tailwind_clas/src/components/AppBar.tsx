import { SearchBar } from "../components/SearchBar";

export const AppBar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="basis-1/4">
        Youtube
      </div>
      <div className="basis-1/2 flex justify-center">
        <SearchBar />
      </div>
      <div className="basis-1/4 flex justify-end">
        Sign In
      </div>
    </div>
  );
};
