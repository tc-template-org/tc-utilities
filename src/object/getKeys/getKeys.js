const buildGetKeys = (isObject) => {
  return (obj) => {
    if (!isObject(obj)) {
      return [];
    }

    return Object.keys(obj);
  };
}