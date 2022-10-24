const ship = (size) => {
  return {
    size: size,
    hits: 0,
    isSunk() {
      return this.hits >= size ? true : false;
    },
    hit() {
      this.hits += 1;
    },
  };
};

export { ship };
