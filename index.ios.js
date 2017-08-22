import React from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';

import FirstTab from './components/FirstTab.js';
import SecondTab from './components/SecondTab.js';
import FirstScreen from './components/FirstScreen.js';
import TabScreen from './components/TabScreen.js';

const FirstProject = StackNavigator({
     Home: {
          screen: FirstScreen
     },
     Tabs: {
          screen: TabScreen
     }
});

AppRegistry.registerComponent('FirstProject', () => FirstProject);
