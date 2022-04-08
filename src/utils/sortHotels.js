
function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

export const sortStars = (hotels) => {
  const sortHotels = hotels.sort(byField('stars'));
  return sortHotels
};

export const sortPrice = (hotels) => {
  const sortHotels = hotels.sort(byField('priceAvg'));
  return sortHotels
};