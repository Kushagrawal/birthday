import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default TodoList = ({ list }) => {
  return (
    <View
      style={[
        styles.listContainer,
        {
          backgroundColor: "#FFFF",
          shadowOpacity: 1 / 10,
          marginTop: 20,
          elevation: 10,
          shadowOffset: { width: 2, height: -2, width: -2, height: 2 }
        }
      ]}
    >
      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
      </Text>
      <View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.count}>July</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginHorizontal: 12,
    marginBottom: 10,
    alignItems: "center",
    width: 60,
    height: 60
  },
  listTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6B6969"
  },
  count: {
    fontSize: 10,
    fontWeight: "500",
    color: "#6B6969"
  }
});
