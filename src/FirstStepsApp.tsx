import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productNameShop: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productNameShop: "Nintendo Switch 2", quantity: 1 },
  { productNameShop: "Pro Controller", quantity: 4 },
  { productNameShop: "Smash Bros", quantity: 5 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras:</h1>
      {/* <ItemCounter productName="Nintendo Switch 2" quantity={0} />
      <ItemCounter productName="Pro Controller" quantity={0} />
      <ItemCounter productName="Smash Bros" quantity={2} />
      <ItemCounter productName="Super Mario" quantity={4} /> */}

      {itemsInCart.map(({ productNameShop, quantity }) => (
        <ItemCounter
          key={productNameShop}
          productName={productNameShop}
          quantity={quantity}
        />
      ))}
    </>
  );
}
