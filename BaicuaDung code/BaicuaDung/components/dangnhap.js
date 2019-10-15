import React, { Component } from 'react';
import {   SafeAreaView,TextInput,
    StyleSheet,TouchableOpacity,
    ScrollView,Image, ImageBackground,
    View,Alert,
    Text,
    StatusBar, } from 'react-native';

export default class Dangnhap extends Component {
    constructor (props) {
        super(props),
        this.state = {
          Email: '',
          pass:'',
          oldEmail: 'dung',
          oldPass: '123',
        }
     }
    
     _ChangeEmail= (text) => {
      this.setState({ Email: text })
    }
    _Changepass= (text) => {
      this.setState({ pass: text })
    }
    _onpress=() =>{
      if(this.state.Email == "" || this.state.pass == ""){
        Alert.alert("vui lòng nhập user name và password");
      }else if(this.state.Email==this.state.oldEmail && this.state.pass == this.state.oldPass){
        
        this.props.navigation.navigate('Homes')
      }else{
        Alert.alert("Bạn đã nhập sai tài khoản hoặc mật khẩu!");
        this.setState({
          Email: "",
          pass: "",
        });
      }
    
    }
  render() {
    return (
        <View style={style.khung}>
        <ImageBackground source={require("../src/anh/donghobia.jpg")} style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <View style={style.khung2}>
            <View style={style.khunglog}>
              <Text style={style.label}>User Name</Text>
              <TextInput onChangeText={this._ChangeEmail} placeholder=' abc@gamil.com' style={style.ipuser}/>
              <Text style={style.label}>PassWord</Text>
              <TextInput  onChangeText={this._Changepass}  secureTextEntry={true} style={style.ipuser}/>
            </View>

            <View style={style.bt}>
            <TouchableOpacity onPress={this._onpress}>
              <View style={style.btlog}>
                   <Text style={{textAlign:'center',marginTop:7,color:'white'}}>Đăng Nhập</Text>
              </View>
          </TouchableOpacity>
         
            </View>
        </View>
        </ImageBackground>




    </View>
    );
  }
}
const style = StyleSheet.create({
    khung:{
        flex:1,
        alignItems: 'center'
    },
    khung1:{

    },
    label:{
  color:'white',fontSize:17
    },
    khung2:{
        backgroundColor:'rgba(255,255,255,0)',justifyContent: 'center',alignItems: 'center'
    },
    khung3:{
        backgroundColor:'red'
    },
    ipuser:{
        borderRadius:14,height: 35,width:220, borderColor: 'white', borderWidth: 1
    },
    bt:{
        
        flexDirection:'row'
    },
    btlog:{
        width:110,height:40,backgroundColor:'gray',marginTop:5,borderRadius:14,opacity:0.8,marginLeft:8
    }

})