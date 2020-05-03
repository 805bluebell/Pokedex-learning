import React, { Component } from "react";
import "./CenterStage.css";
import { Tab } from "semantic-ui-react";
import PokeProfile from "./PokeProfile";

const panes = [
  {
    menuItem: "All",
    render: () => <Tab.Pane attached={false}>All</Tab.Pane>,
  },
  {
    menuItem: "Category 1",
    render: () => <Tab.Pane attached={false}>Category 1 Content</Tab.Pane>,
  },
  {
    menuItem: "Category 2",
    render: () => <Tab.Pane attached={false}>Category 2 Content</Tab.Pane>,
  },
];

class CenterStage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          categoryName: "All",
          contents: [{ name: "bubasour" }, { name: "charmelon" }],
        },
        { categoryName: "Category 1", contents: [{ name: "ivankasour" }] },
        { categoryName: "Category 2", contents: [{ name: "vinegarsour" }] },
      ],
    };
  }

  render() {
    var paneData = this.state.data.map((e) => {
      return {
        menuItem: e.categoryName,
        render: () => <PokeProfile contents={e.contents} />,
      };
    });
    return (
      <div className="stage-area">
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={paneData}
          color={"red"}
        />
      </div>
    );
  }
}

export default CenterStage;

/*
data = {
  "categoryNumber" : 1,
  "ids" : [1,4,7,10],
}


*/
