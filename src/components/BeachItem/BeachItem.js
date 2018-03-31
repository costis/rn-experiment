import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

export default class BeachesItem extends Component {

  _onBeachSelected = (evt) => {
    this.props.selected(this.props.beach.id);
  };

  render() {
    return (
      <View style={styles.beach} key={this.props.beach.id}>
        <TouchableHighlight
          style={styles.button}
          onPress={this._onBeachSelected}
        >
          <Text style={styles.beachTitle}>{this.props.beach.name}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  beach: {
    width: '100%'
  },
  beachTitle: {
    backgroundColor: 'blue',
    fontSize: 24,
    color: 'white',
    padding: 25,
    margin: 5,
  }
});

