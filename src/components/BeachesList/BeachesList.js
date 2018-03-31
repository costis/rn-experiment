import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import BeachItem from '../BeachItem/BeachItem'

export default class BeachesList extends Component {
  state = {
    beaches: this.props.beaches
  };

  render() {
    const beachesList = this.state.beaches.map((beach) => {
      return (
        <View>
          <Text>Hello world</Text>
        <BeachItem beach={beach} key={beach.id}/>
        </View>
      );
    });

    return (
      <View>
        {beachesList}
      </View>
    );
  }
}

