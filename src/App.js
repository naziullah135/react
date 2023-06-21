import Apartment from "./components/Apartment";

const App = () => {
  return <div className="grid grid-cols-3">
    <div className="col-span-2">
  <Apartment />
    </div>
    <div className="col-span-1">

    </div>
  </div>;
};

export default App;
