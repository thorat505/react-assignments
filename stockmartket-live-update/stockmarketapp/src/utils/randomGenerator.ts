export const generateRandomStockData = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
    value: Math.floor(Math.random() * 100)
  }));
};