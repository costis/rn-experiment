import React, {Component} from 'react';
import {View} from 'react-native';
import BeachItem from '../BeachItem/BeachItem'

export default class BeachesList extends Component {
  selected = (beach_id) => {
    this.props.navigation.navigate('Home');
  };

  render() {
    const {beaches} = this.props;

    const beachesList = beaches.map((beach) => {
      return (
        <BeachItem beach={beach} key={beach.id} selected={this.selected}/>
      );
    });

    return (
      <View>
        {beachesList}
      </View>
    );
  }
}

