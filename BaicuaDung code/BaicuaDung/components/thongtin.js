import React, { Component } from 'react';
import { Text, View,Image,TouchableOpacity } from 'react-native';

export default class User extends Component {
  constructor(){
    super();
    this.state={hoten:'Lê  Minh DŨNG',sdt:'0932286178',dc:' p. Tân Thịnh, Tp Thái Nguyên'}
  }
  render() {
    return (
      <View  style={{flex:1 , backgroundColor:'#336666',  borderWidth:1,borderColor:'white'}}>
          <View  style={{flex:2,justifyContent: 'center',alignItems: 'center'}}>
              <Image style={{width:150,height:150,borderRadius:64}}source={require("../src/anh/donghobia.jpg")} />
              <Text style={{color:'white'}}>{this.state.hoten}</Text>
              <Text style={{color:'white'}}>{this.state.sdt}</Text>
              <Text style={{color:'white'}}>{this.state.dc}</Text>
          </View>
         
      </View>
    );
  }
}
