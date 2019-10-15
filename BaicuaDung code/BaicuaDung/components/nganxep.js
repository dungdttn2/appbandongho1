import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DangNhap from './dangnhap'
import Home from './home';
import Thoat from './thoat'

const AppNavigator = createStackNavigator({

    DangNhaps:DangNhap,
    Homes:Home,
    Thoats:Thoat,
   
    
},
);

export default createAppContainer(AppNavigator);