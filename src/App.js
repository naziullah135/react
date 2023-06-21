import { useEffect, useState } from "react";
import Apartment from "./components/Apartment";
import { FiMonitor } from "react-icons/fi";
import { TbAirConditioningDisabled } from "react-icons/tb";
import Icons from "./components/Icons";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  const [icons, setIcons] = useState([
    { id: 1, icon: <FiMonitor /> },
    { id: 2, icon: <TbAirConditioningDisabled /> },
  ]);
  const [positionIcons, setPositionIcons] = useState([]);

  useEffect(() =>{
    let array = localStorage.getItem("positionIcons");

    if(array){
      setPositionIcons(array);
    }
  },[])
  return (
    <DndProvider backend={HTML5Backend} className="h-[120vh]">
      <div className="flex flex-wrap items-center ">
        <div className="">
          <Apartment positionIcons={positionIcons} />
        </div>
        <div className="self-center mx-auto">
          <div className="flex gap-2">
            {icons.map((icon) => (
              <Icons icon={icon} positionIcons={positionIcons} key={icon.id} />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
