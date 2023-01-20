const buildLowerCompare = () => {
  const lowerCompare = (a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return a === b;
  };
  return lowerCompare;
}

export { buildLowerCompare };