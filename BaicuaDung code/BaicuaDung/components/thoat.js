import React, { Component } from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';

export default class Thoat extends Component {
  render() {
    return (
      <View>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('DangNhaps')}>
           <Text  style={{fontSize:20, color:'red'}}>Đăng Xuất</Text>
           </TouchableOpacity>
          
      </View>
    );
  }
}
