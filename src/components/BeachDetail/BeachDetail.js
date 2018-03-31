import React from 'react';
import {Text, Image, View} from 'react-native';

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

    return <View>
            <Text>{beach.id} - {beach.name}</Text>
            <Image source={beach.image}/>
          </View>
  }
}
