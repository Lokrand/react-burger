export interface IIcons {
  id: string,
  img: string,
  count: number,
}

export interface IOrderIcons {
  icons: IIcons[],
  className?: string,
}