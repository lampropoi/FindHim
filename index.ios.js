import React, {Component} from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';
import Welcome from './app/containers/Welcome/Welcome';
import PlayGame from './app/containers/PlayGame/PlayGame';

/**
 * Main app
**/
export default class FindHim extends Component {
  /**
  * The constructor of Welcome View
  * @param {object} props props
  **/
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
  * This is the navigation of the game
  * @param {string} route next screen to be displayed
  * @param {object} navigator navigator default react component
  * @return {object} navigator screen
  **/
  navigatorRenderScene(route, navigator) {
    switch(route.title) {
    case 'Welcome':
      return (<Welcome navigator={navigator} title='Welcome' />);
    case 'PlayGame':
      return (<PlayGame navigator={navigator} title='PlayGame' />);

    }
  }
  /**
  * Render the welcome view to the user's screen
  * @return {object} the view displayed
  **/
  render() {
    // decide which will be the initial screen
    const title = 'Welcome';
    return (
      <Navigator
        initialRoute={{title: title}}
        renderScene={this.navigatorRenderScene}
        configureScene={() => Navigator.SceneConfigs.FloatFromRight} />
    );
  }
}

AppRegistry.registerComponent('FindHim', () => FindHim);
