import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation'

import BeachesList from './src/components/BeachesList/BeachesList';

const Screen1 = (props) => {
  return <Text>Screen1</Text>
};


const MyStack = (props) => {
  const NavigationStack = StackNavigator({
      Home: {
        screen: (props) => <Screen1 {...props}/>,
        navigationOptions: ({navigation}) => ({
          title: 'Best Beaches',
        })
      },
      Beach: {
        screen: (pops) => <BeachesList {...pops} beaches={props.beaches} />
      }
    },
    {
      initialRouteName: 'Beach'
    }
  );

  return <NavigationStack/>
};

export default class App extends React.Component {
  state = {
    beaches: [
      {
        id: 'b_trg',
        name: 'Tragaki',
        description: 'blah blah',
        type: 'sandy',
        facilities: ['taverns', 'public toilets']
      },
      {
        id: 'b_smaria',
        name: 'Santa Maria',
        description: `boo booblah blah asdfa afdf`,
        type: 'sandy',
        facilities: ['taverns', 'public toilets', 'beach bar']
      },
      {
        id: 'b_foobar',
        name: 'Foo bar',
        description: 'Ze foo bar',
        type: 'rocky',
        facilities: ['Children\'s playground', 'beach bar']
      },
      {
        id: 'b_pisolivadi',
        name: 'Piso Livadi',
        description: 'Ze Piso Livadi',
        type: 'rocky',
        facilities: ['Children\'s playground', 'beach bar', 'taverns']
      },
    ],
  };

  render() {
    return <MyStack beaches={this.state.beaches}/>;
  }
}
