import React, {Component} from 'react';
import {View} from 'react-native';
import BeachButton from '../BeachButton/BeachButton'

export default class BeachesList extends Component {
  selected = (beach_id) => {
    this.props.navigation.navigate('Home');
  };

  render() {
    const {beaches} = this.props;

    const beachesList = beaches.map((beach) => {
      return (
        <BeachButton beach={beach} key={beach.id} selected={this.selected}/>
      );
    });

    return (
      <View>
        {beachesList}
      </View>
    );
  }
}

