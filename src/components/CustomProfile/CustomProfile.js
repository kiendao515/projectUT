import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const CustomProfile = ({ imageSource, text, headerText, infoText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.infoText}>{infoText}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.headerText}>{headerText}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};
export default CustomProfile;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 190,
    height: 200,
    borderRadius: 10,
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 5,
  },
  text: {
    fontSize: 14,
    marginLeft: 5,
  },
  textView: {
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    height: 120,
    width: 180,
  },
  imageView: {
    width: 180,
    justifyContent: "space-between",
    alignItems: "center",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  infoText: {
    fontWeight: "bold",
  },
});
