import React from 'react';
import {StackNavigator} from 'react-navigation'

import BeachesList from './src/components/BeachesList/BeachesList';
import BeachDetail from './src/components/BeachDetail/BeachDetail'

const MyStack = (props) => {
  const NavigationStack = StackNavigator({
      BeachDetail: {
        screen: BeachDetail,
      },
      BeachesList: {
        screen: (pops) => <BeachesList {...pops} beaches={props.beaches}/>
      }
    },
    {
      initialRouteName: 'BeachesList'
    }
  );

  return <NavigationStack/>
};

export default class App extends React.Component {
  state = {
    beaches: [
      {
        id: 'b_navagio',
        name: 'Tragaki',
        description: 'blah blah',
        type: 'sandy',
        facilities: ['taverns', 'public toilets'],
        image: require('./assets/img/navagio.jpg')
      },
      {
        id: 'b_smaria',
        name: 'Santa Maria',
        description: `boo booblah blah asdfa afdf`,
        type: 'sandy',
        facilities: ['taverns', 'public toilets', 'beach bar'],
        image: require('./assets/img/santa_maria.jpg')
      },
      {
        id: 'b_golden',
        name: 'Golden Beach',
        description: 'Ze foo bar',
        type: 'rocky',
        facilities: ['Children\'s playground', 'beach bar'],
        image: require('./assets/img/golden_beach.jpg')
      },
      {
        id: 'b_pisolivadi',
        name: 'Piso Livadi',
        description: 'Ze Piso Livadi',
        type: 'rocky',
        facilities: ['Children\'s playground', 'beach bar', 'taverns'],
        image: require('./assets/img/piso_livadi.jpg')
      },
    ],
  };

  render() {
    return <MyStack beaches={this.state.beaches}/>;
  }
}
