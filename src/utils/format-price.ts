const formatPrice = (price: number | bigint): string => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export default formatPrice;
