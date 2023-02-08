const changeColor = (sector) => {
  switch (sector) {
    case 1:
      return 'fill-[#AB8185]';
    case 2:
      return 'fill-[#B06890]';
    case 3:
      return 'fill-[#919C64]';
    case 4:
      return 'fill-[#D1CCB4]';
  }
};

export default changeColor;
