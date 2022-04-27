import { ETypeNotification } from '@/utils/constants';
import { showNotification } from '@/utils/functions';
import { v4 as uuidv4 } from 'uuid';

const KEY_STORAGE = 'karaCarts';

export const parseCartData = (data) => {
  return {
    amount: data.amount,
    product: {
      image: data.image,
      name: data.name,
      prePrice: data.prePrice,
      price: data.price,
      _id: data._id,
    },
    productType: data.type,
    _id: uuidv4(),
  };
};

export const handleDeleteCartLocalStorage = (carts, id) => {
  showNotification(ETypeNotification.SUCCESS, 'Xóa sản phẩm khỏi giỏ hàng thành công');
  return carts.filter((item) => item._id !== id);
};

export const handleChangeAmountCartLocalStorage = (carts, id, amount) => {
  return carts.map((item) => {
    if (item._id === id) {
      return {
        ...item,
        amount,
      };
    }

    return item;
  });
};

export const handleAddNewCartLocalStorage = (carts, newItem) => {
  const isItemExistedInCarts = carts.find((item) => item.product._id === newItem.product._id);

  if (isItemExistedInCarts) {
    showNotification(ETypeNotification.ERROR, 'Sản phẩm đã tồn tại trong giỏ hàng');
  } else {
    showNotification(ETypeNotification.SUCCESS, 'Sản phẩm đã được thêm vào giỏ hàng');
    return [...carts, newItem];
  }
};

export const getCartsLocalStorage = () => {
  const data = localStorage.getItem(KEY_STORAGE);
  return data ? JSON.parse(data) : [];
};

export const setCartsLocalStorage = (data) => {
  localStorage.setItem(KEY_STORAGE, JSON.stringify(data));
};

export const syncCartsLocalStorageAndCartsDatabase = (cartsStorage, cartsDatabase) => {
  const existedProductsInCartsDatabase = cartsDatabase.map((item) => item.product._id);

  return cartsStorage.filter((item) => !existedProductsInCartsDatabase.includes(item.product._id));
};
