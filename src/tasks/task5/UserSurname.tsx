import React, { Component } from "react";
import { Text } from "react-native";

class UserSurname extends Component<{ surname: string }> {
  render() {
    return <Text style={{ fontSize: 18 }}>{this.props.surname}</Text>;
  }
}

export default UserSurname;
