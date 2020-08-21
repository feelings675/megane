import React, { Component } from "react";
import Background from "./background";
import Glasses from "./glasses";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      KinhState: {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "https://i.imgur.com/BnIr82c.png",
        desc:
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
    };
  }
  

  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "https://i.imgur.com/BnIr82c.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "https://i.imgur.com/6rrCQFV.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "https://i.imgur.com/jR9m0Hh.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "https://i.imgur.com/qw55VPz.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "https://i.imgur.com/equXJFn.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "https://i.imgur.com/j8D1dwB.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "https://i.imgur.com/6J4GEcH.png      ",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "https://i.imgur.com/NYpC7bS.png      ",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "https://i.imgur.com/Xkt5rAH.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  renderGlasses = (kinh) => {
    this.setState({
      KinhState: kinh,
    });
  };
  render() {
    let {KinhState} = this.state;
    return (
      <div>
        <Background kinh={this.state.KinhState}/>
        <Glasses glasses={this.arrProduct} render={this.renderGlasses}/>
      </div>
    );
  }
}
