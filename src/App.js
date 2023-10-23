import React from "react";
import Traveldata from "./Traveldata";
import Cards from "./Cards";
import Header from "./Header";
import "./style.css";

function App() {
  const kort = Traveldata.map((item) => {
    return <Cards key={item.id} {...item} />;
  });

  return (
    <div>
      <Header />
      {kort}
    </div>
  );
}
export default App;
