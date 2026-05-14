// import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Wrapper = () => {
  return (
    <>
      <Navbar />
      {/* <Outlet /> */}

      <div className="flex justify-center items-center h-[85vh]">
        <h4 className="text-4xl">Use Navigation for the project</h4>
      </div>
    </>
  );
};

export default Wrapper;
