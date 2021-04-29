import React from "react";
import ReactDOM from "react-dom";

import Table from "./table";

const App = () => {

  var data = [
          {'fruit': 'Apple', 'cost': 100, 'stock':20},
          {'fruit': 'Orange', 'cost': 50, 'stock':15},
          {'fruit': 'Banana', 'cost': 35, 'stock':11},
          {'fruit': 'Mango', 'cost': 70, 'stock':16},
          {'fruit': 'Pineapple', 'cost': 45, 'stock':18},
          {'fruit': 'Papaya', 'cost': 40, 'stock':25},
          {'fruit': 'Watermelon', 'cost': 35, 'stock':40}
  ]

  return (
    <>
      <Table data={data}/>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
