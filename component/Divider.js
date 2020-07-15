import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default Divider = ({ list }) => {
  return (
    <View>
      <View style={[styles.divider, { height: 300 - list.paddingTop }]} />
      <View
        style={{
          height: 40,
          width: list.width,
          borderRadius: 10,
          backgroundColor: list.backgroundColor
        }}
      >
        <Text style={{ color: list.color }}>Meeting with Chris</Text>
      </View>
      <View style={[styles.divider, { height: 600 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    width: 1,
    marginLeft: 40,
    backgroundColor: "#D2D2D2"
  }
});
