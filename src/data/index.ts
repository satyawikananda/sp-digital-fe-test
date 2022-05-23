import type { IPizzaList, ITopping } from "@/types/index"

export const dataPizzaList: IPizzaList[] = [
  {
    image: "https://foodish-api.herokuapp.com/images/pizza/pizza24.jpg",
    discountPrice: 10,
    isDiscount: true,
    price: 8,
    title: "american classic cheeseburger",
  },
  {
    image: "https://foodish-api.herokuapp.com/images/pizza/pizza22.jpg",
    discountPrice: null,
    isDiscount: false,
    price: 12,
    title: "grilled beef supreme",
  },
  {
    image: "https://foodish-api.herokuapp.com/images/pizza/pizza20.jpg",
    discountPrice: null,
    isDiscount: false,
    price: 15,
    title: "cheesy meatball blast",
  },
]

export const dataTopping: ITopping[] = [
  {
    topping: "avocado",
    price: 1,
  },
  {
    topping: "lobster",
    price: 2,
  },
  {
    topping: "bacon",
    price: 3,
  },
  {
    topping: "broccoli",
    price: 1,
  },
  {
    topping: "oyster",
    price: 2,
  },
  {
    topping: "duck",
    price: 3,
  },
  {
    topping: "onions",
    price: 1,
  },
  {
    topping: "salmon",
    price: 2,
  },
  {
    topping: "ham",
    price: 3,
  },
  {
    topping: "zucchini",
    price: 1,
  },
  {
    topping: "tuna",
    price: 2,
  },
  {
    topping: "sausage",
    price: 3,
  },
]
