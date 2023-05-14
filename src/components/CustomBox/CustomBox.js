import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const CustomBox = ({ iconSource, text, headerText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <Image source={iconSource} style={styles.icon} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.headerText}>{headerText}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};
export default CustomBox;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  icon: {
    width: 65,
    height: 65,
    fontWeight: "bold",
    tintColor: "black",
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
    backgroundColor: "#3399FF",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    height: 120,
    width: 180,
  },
  iconView: {
    backgroundColor: "#DDDDDD",
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
});
