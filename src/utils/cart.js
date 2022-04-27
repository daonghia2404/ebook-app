const KEY_STORAGE = 'karaCarts';

export const parseCartData = (data) => {
  return {
    id: data._id,
    amount: data.amount,
    thumbnail: data.thumbnail,
  };
};

export const addCartToLocalStorage = () => {
  const cartsData = getCartsLocalStorage();
  const newData = [];
};

export const getCartsLocalStorage = () => {
  const data = localStorage.getItem(KEY_STORAGE);
  return data ? JSON.parse(data) : [];
};

export const setCartsLocalStorage = (data) => {
  localStorage.setItem(KEY_STORAGE, JSON.stringify(data));
};
