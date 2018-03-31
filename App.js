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
        name: 'Shipwreck',
        description: 'Illum assum in vix, ea nam falli ludus. Nec prompta contentiones eu, no his diam dicant aliquip, quaeque probatus complectitur in mei. His no dicam graece primis, vero atqui eam ex, soleat civibus est eu.',
        type: 'sandy, shallow waters',
        facilities: ['taverns', 'public toilets'],
        image: require('./assets/img/navagio.jpg')
      },
      {
        id: 'b_smaria',
        name: 'Santa Maria',
        description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        type: 'sandy, shallow waters',
        facilities: ['taverns', 'public toilets', 'beach bar'],
        image: require('./assets/img/santa_maria.jpg')
      },
      {
        id: 'b_golden',
        name: 'Golden Beach',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'pebbles, shallow and then deep',
        facilities: ['Children\'s playground', 'beach bar'],
        image: require('./assets/img/golden_beach.jpg')
      },
      {
        id: 'b_pisolivadi',
        name: 'Piso Livadi',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        type: 'rocky, deep waters',
        facilities: ['Children\'s playground', 'beach bar', 'taverns'],
        image: require('./assets/img/piso_livadi.jpg')
      },
    ],
  };

  render() {
    return <MyStack beaches={this.state.beaches}/>
  };

  // render() { return (<BeachesList beaches={this.state.beaches}/>); }

  // const nav = {
  //   state : {
  //     params: {
  //       beach: this.state.beaches[0]
  //     }
  //   }
  // }
  // return <BeachDetail navigation={nav}/>

}
