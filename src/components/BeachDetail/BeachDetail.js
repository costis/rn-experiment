import React from 'react';
import {Text} from 'react-native';

export default class BeachDetail extends React.Component {

  render() {
    const {params} = this.props.navigation.state;
    const beach = params.beach;

    return <Text>{beach.id} - {beach.name}</Text>
  }
}
