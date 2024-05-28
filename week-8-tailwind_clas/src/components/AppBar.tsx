import { SearchBar } from "../components/SearchBar";
import { SignIn } from "./SignIn";

export const AppBar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="basis-1/4">
        <img src="logo1.png" className="w-20 h-15" />
      </div>
      <div className="basis-1/2 flex justify-center">
        <SearchBar />
      </div>
      <div className="basis-1/4 flex justify-end">
        <SignIn />
      </div>
    </div>
  );
};
