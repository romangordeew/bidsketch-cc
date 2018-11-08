const calculateSum = (array) =>
  array.reduce((acc, {checked}) => acc + Number(checked), 0);

export default calculateSum;