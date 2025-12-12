import "./App.css";
import CuratedPlaylist from "./components/CuratedPlaylist";

function App() {
  return (
    <>
      <p className="flex items-center gap-2 text-sm text-gray-500 m-4 mt-7">
        Artists &gt; <h1 className="text-[#000000] font-regular">Top 2026</h1>
      </p>

      <CuratedPlaylist />
    </>
  );
}

export default App;
