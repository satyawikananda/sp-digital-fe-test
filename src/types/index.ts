export interface IPizzaList {
  image: string
  title: string
  price: number
  isDiscount: boolean
  discountPrice?: number | null
}

export interface ITopping {
  topping: string
  price: number
}

export interface IDataModal {
  image: string
  title: string
  price: number
}

export interface ICart {
  topping: ITopping[]
  image: string
  title: string
  price: number
}
