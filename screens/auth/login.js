import React from 'react';
import { SafeAreaView,View ,StyleSheet,ScrollView,ImageBackground} from 'react-native';


const login =() =>{
    return(
       <SafeAreaView>
           <ScrollView>
                <View style ={StyleSheet.container}>
                    <ImageBackground source={require('../thirdproject/assets/logo.jpg')}/>  
                </View>
            </ScrollView>
       </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    }
});

export default login;
