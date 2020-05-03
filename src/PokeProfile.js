import React, { Component } from "react";
import { Tab } from "semantic-ui-react";

class PokeProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var pokelist = (e) => {
      return e.map((ee) => (
        <Tab.Pane attached={false}>{ee.name + " yikes"}</Tab.Pane>
      ));
      // return <Tab.Pane attached={false}>{e[0].name}</Tab.Pane>;
    };
    return (
      <Tab.Pane attached={false}>{pokelist(this.props.contents)}</Tab.Pane>
    );
  }
}

export default PokeProfile;
