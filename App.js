import React from 'react';
import {StackNavigator} from 'react-navigation'

import BeachesList from './src/components/BeachesList/BeachesList';
import BeachDetail from './src/components/BeachDetail/BeachDetail'

import AppState from './src/db/db';

const MyStack = StackNavigator({
    BeachDetail: {
      screen: BeachDetail,
    },
    BeachesList: {
      screen: (_props) => <BeachesList {..._props} beaches={AppState.beaches}/>,
      navigationOptions: {
        title: "Beaches",
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 34
        },
      }
    }
  },
  {
    initialRouteName: 'BeachesList'
  }
);

export default MyStack


// render() { return (<BeachesList beaches={AppState.beaches}/>); }

// const nav = {
//   state : {
//     params: {
//       beach: this.state.beaches[0]
//     }
//   }
// }
// return <BeachDetail navigation={nav}/>

