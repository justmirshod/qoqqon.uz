const changeColor = (sector) => {
  switch (sector) {
    case 1:
      return "fill-gray-600";
    case 2:
      return "fill-purple-900";
    case 3:
      return "fill-orange-600";
    case 4:
      return "fill-green-700";
  }
};

export default changeColor;
