import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import colors from "../assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";

const height = Dimensions.get("window").height;

function Details({ route, navigation }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <Entypo name='chevron-left' size={32} color={colors.white} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.descriptionWrapper}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.6,
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.black,
    marginTop: -20,
    borderRadius: 25,
  },
});

export default Details;
