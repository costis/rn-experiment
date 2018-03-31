import React from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';

export default class BeachDetail extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;

    return {
      title: params ? `Beach '${params.beach.name}'` : 'A Nested Details Screen',
    }
  };

  render() {
    const {params} = this.props.navigation.state;
    const beach = params.beach;

    return(
    <ScrollView>
    <View>
      <Text style={style.title}>{beach.name}</Text>

      <Text style={style.description}>{beach.description}</Text>

      <View style={style.rowInfo}>
        <Text style={style.label}>Beach type</Text>
        <Text style={style.val}>{beach.type}</Text>
      </View>

      <View style={style.rowInfo}>
        <Text style={style.label}>Facilities</Text>
        <Text style={style.val}>{beach.facilities.join(', ')}</Text>
      </View>

      <View style={style.rowInfo}>
        <Text style={style.label}>Distance</Text>
        <Text style={style.val}>350m</Text>
      </View>

      <Image source={beach.image}/>
    </View>
    </ScrollView>)
  }
}

const style = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 5,
    color: 'white',
    backgroundColor: '#ff0000',
    textShadowColor: 'gray',
    textShadowOffset: {width: 2, height: 1}
  },
  description: {
    padding: 12,
    fontSize: 20,
    lineHeight: 34

  },
  rowInfo: {
    flexDirection: 'row',
    marginTop: 1
  },
  label: {
    backgroundColor: '#6380ad',
    width: '40%',
    padding: 12,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  val: {
    backgroundColor: '#ADADAD',
    width: '60%',
    padding: 12,
    fontSize: 20,
    color: 'white'
  }
});
