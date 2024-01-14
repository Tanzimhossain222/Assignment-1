import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StudentsTable from "./components/StudentsTable";

const App = () => {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Navbar />
      <Hero />
      <StudentsTable />
    </div>
  );
};

export default App;
