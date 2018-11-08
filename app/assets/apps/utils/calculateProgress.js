import calculateSum from "./calculateSum";

const calculateProgress = (array) =>
  calculateSum(array) / 4 * 100;

export default calculateProgress;