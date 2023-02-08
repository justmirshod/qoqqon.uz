import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { qoqonMap } from '../helpers/qoqonMap';
import {
  setAnimation,
  setAnim,
  setMahallaId,
  setMahallaName,
  setModal,
} from '../MapSlice';
import changeColor from '../helpers/changeColor';

const SectorMahalla = () => {
  const dispatch = useDispatch();

  const { sector, mahallaId, anim } = useSelector((state) => state.map);

  const getName = (name) => {
    dispatch(setMahallaName(name));
  };

  const mouseOut = () => {
    dispatch(setMahallaName(''));
  };

  const getID = (id) => {
    dispatch(setMahallaId(id));
    dispatch(setModal(true));
    setTimeout(() => {
      dispatch(setAnimation(true));
    }, 15);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAnim(true));
    }, 15);
  }, [sector]);

  console.log(mahallaId);

  return qoqonMap[sector - 1].mahalla.map((item, index) =>
    item.path({
      className: `${
        mahallaId === ''
          ? changeColor(sector)
          : item.id === mahallaId
          ? 'fill-gray-800'
          : changeColor(sector)
      } duration-500 hover:opacity-80 cursor-pointer active:opacity-70 focus:fill-black ${
        anim ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-10'
      }`,
      onClick: getID,
      hovered: getName,
      mouseOut: mouseOut,
    })
  );
};

export default SectorMahalla;
