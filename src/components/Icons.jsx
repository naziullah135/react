import React, { useState } from "react";
import { useDrag, useDragDropManager } from "react-dnd";

const Icons = ({ icon, positionIcons,  }) => {
  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "icon",
    item: { name: icon.icon },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        let tempList = positionIcons;
        tempList.push(item.name);
        localStorage.setItem("setTemplate", tempList);

        // console.log("offset", monitor.getClientOffset());
        // monitor.subscribeToOffsetChange(() => {
        //   const offset = monitor.getClientOffset();
        //   if(offset != null)
        //   setMousePos(offset);
          // do stuff like setState, though consider directly updating style through refs for performance
        // });

        // window.location.reload();
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  //   const dragDropManager = useDragDropManager();
  //   const monitor = dragDropManager.getMonitor();

  //   React.useEffect(() => {
  //     const handleMouseMove = (event) => {
  //       setMousePos({ x: event.clientX, y: event.clientY });
  //     };

  //     window.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       window.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, []);


  return (
    <div
      className="border-2"
      ref={drag}
    //   style={{ left: `50px`, top: `50px)`, position : "absolute"}}
    >
      <div className="p-4">{icon.icon}</div>
    </div>
  );
};

export default Icons;
