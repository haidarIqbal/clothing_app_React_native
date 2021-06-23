import * as React from "react";
import { StyleSheet ,Image} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View, } from "../components/Themed";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export default function TabTwoScreen() {
  return (
    <View style={[styles.container, {
    
      flexDirection: "row"
    }]}>
      <View style={styles.containerRight} >
        <View style={styles.back}><Icon name="chevron-left" size={40} />
        <Text style={styles.text}>Add Clothing</Text></View>
        <View style={styles.hoods}>
          <View style={styles.backgroundView}>
            <Text>DOLCE</Text>
            <View style={styles.hoodContainer}>
            <Image
              source={require('../assets/images/black.png') }
              width={50}
              height={50}
              resizeMode={'contain'}
              style={styles.hoodImage}
              />
              </View>
          </View>
          <View style={styles.backgroundView}>
            <Text>PRADA</Text>
            <View style={styles.hoodContainer}>
            <Image
              source={require('../assets/images/white.png') }
              width={50}
              height={50}
              resizeMode={'contain'}
              style={styles.hoodImage}
              />
              </View>
          </View>
       </View>
        <View style={styles.hoods}>
          <View style={styles.backgroundView}>
            <Text>DOLCE</Text>
            <View style={styles.hoodContainer}>
            <Image
              source={require('../assets/images/black.png') }
              width={50}
              height={50}
              resizeMode={'contain'}
              style={styles.hoodImage}
              />
              </View>
          </View>
          <View style={styles.backgroundView}>
            <Text>PRADA</Text>
            <View style={styles.hoodContainer}>
            <Image
              source={require('../assets/images/white.png') }
              width={50}
              height={50}
              resizeMode={'contain'}
              style={styles.hoodImage}
              />
              </View>
          </View>
       </View>
        <View style={styles.hoods}>
          <View style={styles.backgroundView}>
            <Text>DOLCE</Text>
            <View style={styles.hoodContainer}>
            <Image
              source={require('../assets/images/black.png') }
              width={50}
              height={50}
              resizeMode={'contain'}
              style={styles.hoodImage}
              />
              </View>
          </View>
       </View>
      </View>
      <View style={styles.containerLeft} >
        <MaterialIcons name="bookmark-outline" style={styles.bookMark} />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
  },
  containerLeft: {
    flex: 1.7, backgroundColor: "#BFBFBF" 
   
  },
  bookMark: {
    fontSize: 30,
    marginTop: 30,
    marginLeft: 50,
    borderRadius: 40,
    padding: 10,
    width:50,
    height:50,
    justifyContent:'center',
    backgroundColor:'rgba(0, 0, 0, 0.1)'  
  },
  containerRight: {
    marginTop: 20,
    flex: 3,
    flexDirection:'column'
  },
  text: {
    fontWeight: 'bold',
    marginTop: 5,
    fontSize:17
  },
  back: {
    flexDirection:'row'
  },
  backgroundView: {
    backgroundColor: '#F0F0F0',
    padding:5,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent:'flex-start'
  },
  hoods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginRight:10

  },
  hoodContainer: {
    backgroundColor: '#F0F0F0',
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  hoodImage: {
    marginTop: 20,
    paddingBottom: 10,
  }
});

