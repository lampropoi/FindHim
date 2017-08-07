import React, {Component, PropTypes} from 'react';
import {
  Text,
  Image,
  StyleSheet
} from 'react-native';
import backgroundImage from '../../assets/Winnie/background.png';
import Button from '../../components/Button/Button';
import config from '../../config';

/**
 * This is the initial code that runs and checks if the user is already loggd in:
 * 1. If yes, then he is redirected in the Home View
 * 2. If no, he is redirected to the Register View
 **/
class Welcome extends Component {

  /**
   * The constructor of Welcome View
   * @param {object} props props
   **/
  constructor(props) {
    super(props);
  }

/**
* The user is redirected to the Play Game
**/
  redirectPlayGame() {
    this.props.navigator.resetTo({title: 'PlayGame'});
  }

  /**
  * Render the welcome view to the user's screen
  * @return {object} the view displayed
  **/
  render() {
    return(
      <Image style={styles.container}
          source={backgroundImage}>
        <Text style={styles.heading}>
          Find {config().mode}
        </Text>
        <Button type='primary' text= 'Play Game' onPress={this.redirectPlayGame.bind(this)}/>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#B30000'
  }
});

Welcome.propTypes = {
  navigator: PropTypes.object.isRequired
};

export default Welcome;
