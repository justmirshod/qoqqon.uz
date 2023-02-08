const changeView = (sector) => {
  switch (sector) {
    case 0:
      return '0 0 800 600';
    case 1:
      return '65 120 420 420';
    case 2:
      return '380 170 420 420';
    case 3:
      return '80 -20 460 450';
    case 4:
      return '355 -20 370 370';
    default:
      return;
  }
};

export default changeView;
