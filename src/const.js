export const TYPES_POINT = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

export const getDefaultPoint = () => (
  {
    basePrice: 0,
    destination: 0,
    isFavorite: false,
    offers: [],
    type: TYPES_POINT[0]
  }
);
