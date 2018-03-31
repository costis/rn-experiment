import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

export default class BeachButton extends Component {

  _onBeachSelected = (evt) => {
    this.props.selected(this.props.beach.id);
  };

  render() {
    return (
      <View style={styles.beach} key={this.props.beach.id}>

        <TouchableHighlight
          style={styles.button}
          onPress={this._onBeachSelected}>
          <Text style={styles.beachTitle}>{this.props.beach.name}</Text>
        </TouchableHighlight>

        <Text style={styles.beachTitleDistance}>150m</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  beach: {
    flexDirection: 'row',
    width: '100%'
  },
  button: {
    width: '80%'
  },
  beachTitle: {
    backgroundColor: 'blue',
    fontSize: 28,
    color: 'white',
    padding: 15,
    margin: 2
  },
  beachTitleDistance: {
    backgroundColor: '#aaaaaa',
    fontSize: 18,
    color: 'white',
    padding: 15,
    margin: 2,
    width: '20%'

  },

});

