const calculateProgress = (array) =>
  array.reduce((acc, {checked}) => acc + Number(checked), 0) / 4 * 100;

export default calculateProgress;