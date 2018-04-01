import React from 'react';
import { View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Das zuper app',
  };

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Button
          title="Beaches"
          onPress={() => navigation.navigate('BeachesList')}
        />
        <Button
          title="Places of interest"
          onPress={() => navigation.navigate('BeachesList')}
        />
        <Button
          title="History"
          onPress={() => navigation.navigate('BeachesList')}
        />
        <Button
          title="Usefull numbers"
          onPress={() => navigation.navigate('BeachesList')}
        />
        <Button
          title="Things to do"
          onPress={() => navigation.navigate('BeachesList')}
        />
      </View>
    );
  }
}
