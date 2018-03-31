import React, {Component} from 'react';
import {View} from 'react-native';
import BeachButton from '../BeachButton/BeachButton'

export default class BeachesList extends Component {
  beachSelected = (beachId) => {
    const {beaches} = this.props;
    beach = beaches.find((beach) => beach.id == beachId ? true : false)

    this.props.navigation
      .navigate('BeachDetail', {beach: beach});
  };


  render() {
    const {beaches} = this.props;

    const beachesList = beaches.map((beach) => {
      return <BeachButton
        beach={beach}
        key={beach.id}
        selected={this.beachSelected}
      />;
    });

    return <View>
      {beachesList}
    </View>;
  }
}
