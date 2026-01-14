interface Props {
  productName: string;
  quantity: number | undefined;
}

export const ItemCounter = ({ productName, quantity }: Props) => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
      }}
    >
      <span style={{ width: 100 }}>{productName}</span>
      <button>+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  );
};
