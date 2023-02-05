import { useSelector, useDispatch } from "react-redux";
import SectorMahalla from "./SectorMahalla";
import SectorAll from "./SectorAll";
import { useEffect } from "react";
import { setAnim } from "../MapSlice";

const Sector = () => {
  const { sector } = useSelector((state) => state.map);
  const dispatch = useDispatch();

  return (
    <g id="map" stroke="#fff" strokeWidth="1.3">
      {sector === 0 ? <SectorAll /> : <SectorMahalla />}
    </g>
  );
};

export default Sector;
