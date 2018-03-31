import React from 'react';
import {StackNavigator} from 'react-navigation'

import BeachesList from './src/components/BeachesList/BeachesList';
import BeachDetail from './src/components/BeachDetail/BeachDetail'

import AppState from './src/db/db';

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
  state = AppState;

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
