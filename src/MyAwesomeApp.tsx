import type { CSSProperties } from "react";

const firstName = "Javier";
const lasName = "Buendía";

const favouriteGames = ["Elden ring", "Dark souls", "Metal Gear"];
const isActive = true;
const adress = {
  zipcode: "ABC-123",
  country: "Canada",
};
const myStyles: CSSProperties = {
  backgroundColor: "#525252",
  borderRadius: isActive ? 10 : 20,
  padding: 10,
  marginTop: 30,
};

export function MyAwesomeApp() {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lasName}</h3>
      <p>{favouriteGames.join(", ")}</p>

      <h1>{isActive ? "Activo" : "No activo"}</h1>
      <p style={myStyles}>{JSON.stringify(adress)}</p>
    </>
  );
}
