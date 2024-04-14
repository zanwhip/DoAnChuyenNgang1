import { StyleSheet, Text, View , ImageBackground, TextInput, ScrollView, Image} from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const backgroundImage = require('../assets/image/nen.jpg');


const Homepages = () => {
  return (
<View style={styles.container}>
 <ImageBackground blurRadius={40} source={backgroundImage} style={styles.backgroundImage}>
    <ScrollView>
        <View style={{ flexDirection : 'row', height : 40, margin : 30, justifyContent : 'flex-end'  }}>
    {/* <View style={{  backgroundColor : 'rgba(255,255,255,0.4)', width : 50, height:  50, justifyContent : 'center', alignItems : 'center', borderRadius : 10,  }}>
    <Entypo name="menu" size={40} color="white"  />
    </View> */}
    <View style={{ width : 50, height:  50, justifyContent : 'center', alignItems : 'center', borderRadius : 10,  }}>
    <Ionicons name="notifications" size={36} color="white" />
    </View>
    
    </View>

    <View style={styles.head}>
{/* logo  */}
    <View style={styles.logoArea}> 
   
    
    </View>
    <Text style={{ fontSize : 25, fontWeight : '700' }}>AiLish - AI for English</Text>
       {/* search  */}
    <TextInput placeholder='Search ....' style={styles.searchInput}></TextInput>
    </View>

    {/* Cac thanh phan */}
    <View style={{ flexDirection : 'row', justifyContent : 'center'}}>
        <View style={styles.component}>
        <Image source={require('../assets/image/listen.png')} style={styles.ImageComponents} />
        <Text>LISTENING</Text>
        </View>
        <View style={styles.component}>
        <Image source={require('../assets/image/read.png')} style={styles.ImageComponents} />
        <Text>READING</Text>
        </View>
    </View>
    <View style={{ flexDirection : 'row' , justifyContent : 'center'}}>
    <View style={styles.component}>
        <Image source={require('../assets/image/speak.png')} style={styles.ImageComponents} />
        <Text>SPEAKING</Text>
        </View>
        <View style={styles.component}>
        <Image source={require('../assets/image/write.png')} style={styles.ImageComponents} />
        <Text>WRITING</Text>
        </View>
    </View>
    </ScrollView>
    </ImageBackground>
    </View>
  )
}

export default Homepages

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#0000000"

    },
    backgroundImage: {
        flex: 1,
    
        resizeMode: 'cover', // Đảm bảo hình ảnh phủ toàn bộ không gian của màn hình
      },
    head: {
        width : '100%', 
        height: 300,
        justifyContent : 'center',
        alignItems : 'center',
        alignContent : "center"
    },
    logoArea : {
        backgroundColor : '#fff', 
        width : 150, 
        height : 150,
         borderRadius : 90,
    },
   searchInput : { 
     width : 360,
     height : 50, 
     backgroundColor : 'rgba(255,255,255,0.4)', 
     margin : 20, 
     borderRadius : 45, 
     justifyContent : 'center', 
     alignContent : 'center', 
     padding : 10  },


   component : {
    backgroundColor : 'rgba(255,255,255,0.4)', 
    width : '42%',
    height : 180,
    borderRadius : 30,
    margin : 5,
    justifyContent :'center',
    alignItems :'center'

    },
    ImageComponents : {
        width : '50%',
        height : '50%'
    }

})