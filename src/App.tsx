import "./App.css";
import fullIphone from "./assets/fullIphone.png";

function App() {
  return (
    <div className="bg-slate-100 h-full  flex justify-center items-center ">
      <div className="flex max-h-full h-full pt-10  relative">
        <div className="absolute left-9 top-24 mt-2 w-3/4 h-3/4 cursor-pointer">
          aaa
        </div>
        <img className="" src={fullIphone} />
      </div>
    </div>
  );
}

export default App;
