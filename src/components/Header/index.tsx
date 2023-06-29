import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userPhoto from '../../assets/image/userPhoto.png';
import { ChefIcon } from '../../assets/image';

import { styles } from './styles';

interface HeaderState {
  userName: string | null;
}

class Header extends Component<{}, HeaderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userName: null,
    };
  }

  async componentDidMount() {
    const userName = await AsyncStorage.getItem('userName');
    this.setState({ userName });
  }

  render() {
    return (
      <View style={styles.userContainer}>
        <View style={styles.userInfo}>
          <Image source={ChefIcon} style={styles.userImage} />
          <Text style={styles.userName}>{this.state.userName}</Text>
        </View>
      </View>
    );
  }
}

export default Header;
