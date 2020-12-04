import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("products")) || [
  {
    id: "P1",
    name: "Iphone X",
    price: "1000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque adipisci suscipit vero, minus nemo quidem. Libero corrupti pariatur repudiandae, animi vitae ea, tenetur optio est ad totam quisquam a quod Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus rerum inventore quod sunt esse accusantium quam excepturi, asperiores cupiditate modi expedita error ut eveniet consectetur unde eligendi qui voluptates odit.",
    imagePath: "iphoneX.jpg",
    shopped: false,
    selected: false,
    quantity: 1,
  },
  {
    id: "P2",
    name: "TURBINE GMT WATCH",
    price: "15",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque adipisci suscipit vero, minus nemo quidem. Libero corrupti pariatur repudiandae, animi vitae ea, tenetur optio est ad totam quisquam a quod Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus rerum inventore quod sunt esse accusantium quam excepturi, asperiores cupiditate modi expedita error ut eveniet consectetur unde eligendi qui voluptates odit.",
    imagePath: "turbine-gmt-watch.jpg",
    shopped: false,
    selected: false,
    quantity: 1,
  },
  {
    id: "P3",
    name: "X-laptop",
    price: "1400",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque adipisci suscipit vero, minus nemo quidem. Libero corrupti pariatur repudiandae, animi vitae ea, tenetur optio est ad totam quisquam a quod Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus rerum inventore quod sunt esse accusantium quam excepturi, asperiores cupiditate modi expedita error ut eveniet consectetur unde eligendi qui voluptates odit.",
    imagePath: "X-laptop.jpg",
    shopped: false,
    selected: false,
    quantity: 1,
  },
  {
    id: "P4",
    name: "Y-laptop",
    price: "1500",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque adipisci suscipit vero, minus nemo quidem. Libero corrupti pariatur repudiandae, animi vitae ea, tenetur optio est ad totam quisquam a quod Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus rerum inventore quod sunt esse accusantium quam excepturi, asperiores cupiditate modi expedita error ut eveniet consectetur unde eligendi qui voluptates odit.",
    imagePath: "Y-laptop.jpg",
    shopped: false,
    selected: false,
    quantity: 1,
  },
  {
    id: "P5",
    name: "TURBINE GMT WATCH",
    price: "15",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque adipisci suscipit vero, minus nemo quidem. Libero corrupti pariatur repudiandae, animi vitae ea, tenetur optio est ad totam quisquam a quod Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus rerum inventore quod sunt esse accusantium quam excepturi, asperiores cupiditate modi expedita error ut eveniet consectetur unde eligendi qui voluptates odit.",
    imagePath: "turbine-gmt-watch.jpg",
    shopped: false,
    selected: false,
    quantity: 1,
  },
  {
    id: "P6",
    name: "Y-laptop",
    price: "1500",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque adipisci suscipit vero, minus nemo quidem. Libero corrupti pariatur repudiandae, animi vitae ea, tenetur optio est ad totam quisquam a quod Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus rerum inventore quod sunt esse accusantium quam excepturi, asperiores cupiditate modi expedita error ut eveniet consectetur unde eligendi qui voluptates odit.",
    imagePath: "Y-laptop.jpg",
    shopped: false,
    selected: false,
    quantity: 1,
  },
  {
    id: "P8",
    name: "X-laptop",
    price: "1400",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque adipisci suscipit vero, minus nemo quidem. Libero corrupti pariatur repudiandae, animi vitae ea, tenetur optio est ad totam quisquam a quod Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus rerum inventore quod sunt esse accusantium quam excepturi, asperiores cupiditate modi expedita error ut eveniet consectetur unde eligendi qui voluptates odit.",
    imagePath: "X-laptop.jpg",
    shopped: false,
    selected: false,
    quantity: 1,
  },
  {
    id: "P9",
    name: "Iphone X",
    price: "1000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque adipisci suscipit vero, minus nemo quidem. Libero corrupti pariatur repudiandae, animi vitae ea, tenetur optio est ad totam quisquam a quod Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus rerum inventore quod sunt esse accusantium quam excepturi, asperiores cupiditate modi expedita error ut eveniet consectetur unde eligendi qui voluptates odit.",
    imagePath: "iphoneX.jpg",
    shopped: false,
    selected: false,
    quantity: 1,
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleShopped: (state, action) => {
      return state.map((product) => {
        if (product.id === action.payload.id)
          return { ...product, shopped: action.payload.shopped };
        return product;
      });
    },
    setQuantity: (state, action) => {
      return state.map((product) => {
        if (product.id === action.payload.id)
          return { ...product, quantity: action.payload.quantity };
        return product;
      });
    },
  },
});

export const InCartProductsSelector = (state) => {
  return state.products.filter((product) => product.shopped);
};
export const ProductsLength = (state) => {
  return InCartProductsSelector(state).length;
};
export const totalPriceSelector = (state) => {
  return state.products.reduce((acc, curr) => {
    if (curr.shopped) return acc + parseInt(curr.price) * curr.quantity;
    return acc;
  }, 0);
};

export const {
  toggleSelected,
  toggleShopped,
  setQuantity,
} = productsSlice.actions;
export default productsSlice.reducer;
