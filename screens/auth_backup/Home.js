import React from 'react';
import { SafeAreaView,View ,StyleSheet,Text,ScrollView} from 'react-native';


const Home =() =>{
    return(
       <SafeAreaView>
           <ScrollView>
                <View style ={StyleSheet.container}>
                    <Text>Hello </Text>
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
