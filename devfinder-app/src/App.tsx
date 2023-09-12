import Finder from "./components/FinderBar";
import FinderBox from "./components/FinderBox";

function App() {
  return (
    <div className="flex flex-col">
      <h1 className="text-white font-[Source Code Pro] text-[2.5rem] flex pb-[1.5rem]">Git.Finder</h1>
      <Finder></Finder>
      <FinderBox></FinderBox>
    </div>
  );
}

export default App;
