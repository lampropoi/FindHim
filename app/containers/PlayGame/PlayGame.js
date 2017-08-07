import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Button from '../../components/Button/Button';
import playgameBackground from '../../assets/Winnie/playgameBackground.png';
import winningCard from '../../assets/Winnie/winnerCard.png';
import loserCard from '../../assets/Winnie/loserCard.png';
import loserCard_ from '../../assets/Winnie/loserCard_.png';
import * as Animatable from 'react-native-animatable';
import config from '../../config';

/**
 * This is the initial code that runs and checks if the user is already loggd in:
 * 1. If yes, then he is redirected in the Home View
 * 2. If no, he is redirected to the Register View
 **/
class PlayGame extends Component {

  /**
   * The constructor of Welcome View
   * @param {object} props props
   **/
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  /**
   * Initialization
   **/

  async componentWillMount() {
    const max = 3;
    const min = 1;
    setTimeout(() => {
      const position = Math.floor(Math.random() * (max - min + 1)) + min;
      const images = [winningCard, loserCard, loserCard_];
      const temp = images[position-1];
      images[position-1] = winningCard;
      images[0] = temp;
      this.setState({
        position: position,
        images: images
      });
    }, 2000);
  }

  /**
   * Checks the card pressed
   * @param {object} data card pressed
   **/
  foundHim(data) {
    let result;
    if (data.position === this.state.position) {
      result = `${config().mode} FOUND!!!`;
    } else {
      result = `Try again...${config().mode} NOT FOUND`;
    }
    this.setState({
      clicked: true,
      result: result
    });
  }

  /**
  * The user is redirected to the Play Game
  **/
  redirectWelcome() {
    this.props.navigator.resetTo({title: 'Welcome'});
  }
  /**
  * Render the welcome view to the user's screen
  * @return {object} the view displayed
  **/
  render() {
    if (this.state.position && !this.state.clicked) {
      return(
        <View style={styles.containerLoading}>
          <Animatable.Text animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            style={styles.result}>Press a card!</Animatable.Text>
          <Animatable.View animation="fadeInLeftBig" delay={100} style={styles.card1}>
            <Button type='card' text= '1' data={{position: 1}} onPress={this.foundHim.bind(this)}/>
          </Animatable.View>
          <Animatable.View animation="fadeInLeftBig" delay={1000} style={styles.card2}>
            <Button type='card' text= '2' data={{position: 2}} onPress={this.foundHim.bind(this)}/>
          </Animatable.View>
          <Animatable.View animation="fadeInLeftBig" delay={2000} style={styles.card3}>
            <Button type='card' text= '3' data={{position: 3}} onPress={this.foundHim.bind(this)}/>
          </Animatable.View>
        </View>
      );
    } else if (this.state.clicked) {
      return(
        <View style={styles.containerLoading}>
          <Text style={styles.result}>{this.state.result}</Text>
          <View style={styles.card1}>
            <Animatable.View animation="flipOutY" style={styles.cardDesing} />
            <Animatable.Image animation="flipInY" delay= {500} style={styles.image} source={this.state.images[0]}/>
          </View>
          <View style={styles.card2}>
            <Animatable.View animation="flipOutY" style={styles.cardDesing} />
            <Animatable.Image animation="flipInY" delay= {500} style={styles.image} source={this.state.images[1]}/>
          </View>
          <View style={styles.card3}>
            <Animatable.View animation="flipOutY" style={styles.cardDesing} />
            <Animatable.Image animation="flipInY" delay= {500} style={styles.image} source={this.state.images[2]}/>
          </View>
          <View style={styles.actionButton}>
            <Button type='primary' text= 'Play Again' onPress={this.redirectWelcome.bind(this)}/>
          </View>
        </View>
      );
    } else {
      return(
        <Image source={playgameBackground} style={styles.container}>
          <Text style={styles.loadingText}>Shuffling</Text>
        </Image>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  card1: {
    position: 'absolute',
    top: 90,
    left: 10
  },
  card2: {
    position: 'absolute',
    top: 90,
    left: 135
  },
  card3: {
    position: 'absolute',
    top: 90,
    left: 260
  },
  containerLoading: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  loadingText: {
    color: '#B30000',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 40
  },
  image: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 90,
    height: 140
  },
  cardDesing: {
    width: 100,
    height: 200,
    backgroundColor: '#B30000'
  },
  actionButton: {
    position: 'absolute',
    top: 400,
    left: 135
  },
  result: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
});

PlayGame.propTypes = {
  navigator: PropTypes.object.isRequired
};

export default PlayGame;
