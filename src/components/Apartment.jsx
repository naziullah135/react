import React, { useEffect, useState } from "react";
import flatImg from "../assets/apartment.jpg";
import { useDrop } from "react-dnd";
import Drop from "./Drop";

const Apartment = ({ positionIcons }) => {
  const [mousePos, setMousePos] = useState({});
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: "icon",
      drop: () => ({ name: "icon" }),
      collect: (monitor) => {
        return {
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop(),
        };
      },
      hover: (item, monitor) => {
        const offset = monitor.getClientOffset();
        if (offset != null) setMousePos(offset);
      },
    }),
    []
  );

  return (
    <div
      ref={drop}
      className="relative w-[500px] h-[500px] bg-contain bg-no-repeat bg-my-custom-image"
    >
      {/* <img src={flatImg} alt="flatImg" /> */}
      {positionIcons.map((icon) => (
        <Drop mousePos={mousePos} icon={icon} />
      ))}
    </div>
  );
};

export default Apartment;
