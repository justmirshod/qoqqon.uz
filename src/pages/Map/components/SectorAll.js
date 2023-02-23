import { useDispatch, useSelector } from 'react-redux';
import { qoqonMap } from '../helpers/qoqonMap';
import {
  setAnim,
  setAnimation,
  setMahallaId,
  setMahallaName,
  setModal,
} from '../MapSlice';
import changeColor from '../helpers/changeColor';
import { useEffect } from 'react';

const SectorAll = () => {
  const dispatch = useDispatch();

  const { anim, sector } = useSelector((state) => state.map);

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

  return qoqonMap.map((items) =>
    items.mahalla.map((item) =>
      item.path({
        className: `${changeColor(
          items.sector
        )} duration-500 hover:opacity-80 cursor-pointer active:opacity-70 ${
          anim ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-10'
        }`,
        onClick: getID,
        hovered: getName,
        mouseOut: mouseOut,
      })
    )
  );
};

export default SectorAll;
