import React, {PropTypes} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

const handlePress = (onPress, data) => {
  return () => {
    onPress(data);
  };
};

const Button = ({
  data,
  onPress,
  text,
  type
}) => {
  return (
    <TouchableOpacity style={styles[type]}
      onPress={handlePress(onPress, data)}>
      <Text style={styles[`${type}Text`]}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  data: PropTypes.object,
  /**
   * Make the button disabled
   */
  onPress: PropTypes.func,
  /**
   * The button text
   */
  text: PropTypes.string.isRequired,
  /**
 * Define the button type
 */
  type: PropTypes.oneOf(['card', 'primary'])
};

const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 200,
    backgroundColor: '#B30000'
  },
  cardText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5
  },
  primaryText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10
  },
  primary: {
    width: 100,
    height: 50,
    backgroundColor: '#B30000',
    borderRadius: 8,
    borderWidth: 5,
    borderColor: '#B30000'
  }
});

export default Button;
