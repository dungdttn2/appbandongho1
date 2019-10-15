import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,ActivityIndicator,Alert,
    TextInput, StyleSheet} from 'react-native';
    import Drawer from 'react-native-drawer';
    import User from './thongtin'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    
      componentDidMount(){
        return fetch('http://192.168.1.92:8080/Baicuadung/hienthi.php')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    
    
    
      closeControlPanel = () => {
        this._drawer.close()
      };
      openControlPanel = () => {
      
        this._drawer.open()
      
      };
    
  render() {
    return (
        <View style = {Styles.viewAll}>
        <View style={{flex:7 ,}}>
                <Drawer
                      openDrawerOffset={0.3}
                      tapToClose={true}
                   ref={(ref) => this._drawer = ref}
                   content={
                     <User/>
                   }>


                 <TouchableOpacity onPress={()=>this.openControlPanel()}>
                   <Image  style={{width:30,height:30,padding:3}} source ={require("../src/anh/iconstack.png")}/>

                 </TouchableOpacity>
                 <TextInput placeholder ='tìm kiếm' style={Styles.ipuser}/>

                      <View style={{flex:6,backgroundColor:"white",padding:5,justifyContent: 'center',alignItems: 'center'}}>
                          <FlatList
                          data={this.state.dataSource}
                          renderItem={({item}) => (
                             <TouchableOpacity>
                               <View  style = {Styles.viewItem}>
                                 <View style = {Styles.viewImage}>
                                 <Image style={{width:150,height:250,}} source={{uri: item.hinhanh}} />
                                 </View>
                                 <View style = {Styles.viewText}>
                                   <Text style={{fontSize:17}}>{item.tensp }</Text>
                                   <Text style={{marginTop:14}}> Giá : {item.gia} $</Text>
                                   <View style={{ flexDirection:'row'}}>
                                      <Image  style={{width:35,height:39,marginLeft:10,marginTop:20 }} source ={require("../src/anh/likee.png")}/>
                                      <Image  style={{width:35,height:39,marginLeft:10,marginTop:20 }} source ={require("../src/anh/tim.png")}/>
                                     
                                      </View>
                                      <TouchableOpacity  onPress={()=>Alert.alert("thành công")}
                                      style={{marginTop:30,width:70,height:30 ,backgroundColor:'#336666', justifyContent: 'center',}}>
                                      <Text style={{color:'white'}}>Đặt hàng</Text>
                                      </TouchableOpacity>
                                    
                                  
                                 </View>
                               </View>
                             </TouchableOpacity>
                             
                           )}
                       />
                        </View>
               </Drawer>
               
             </View>

         <View style={{flex:1/2,backgroundColor:'white',  borderWidth:1,borderColor:'gray',flexDirection:'row'}}>
            <Image  style={{width:35,height:39,marginLeft:10 }} source ={require("../src/anh/iconhome.png")}/>
           
          <View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Thoats')}> 
                <Image  style={{width:32,height:39,marginLeft:120 }} source ={require("../src/anh/iconuser.png")}/>  
            </TouchableOpacity>
          </View>
            
         </View>
   </View>
    );
  }
}
const Styles = StyleSheet.create({
    viewAll:{
        flex:1,
        backgroundColor:'#336666',
        flexDirection:'column'},

    viewItem:{padding:20, borderBottomColor:'white',borderBottomWidth:1,flex:1,flexDirection:'row'},
    viewImage:{},
    viewText:{ marginLeft:20, alignItems:'flex-start',marginTop:20},
    ipuser:{
       height: 36,width:320, borderColor: 'gray', borderWidth: 1,justifyContent: 'center',marginLeft:35,marginBottom:5,backgroundColor:'white'
        
    },
  })

