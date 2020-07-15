import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
// import { Divider } from "react-native-elements";
import TreeView from "react-native-final-tree-view";

import TodoList from "./component/TodoList";
import Divider from "./component/Divider";
import Map from "./component//Map";

tempData = [
  {
    name: "13",
    backgroundColor: "#F9EF8E",
    color: "#E6A803",
    paddingTop: 240,
    width: 100
  },
  {
    name: "14",
    backgroundColor: "#C4F8A3",
    color: "#3D9405",
    paddingTop: 80,
    width: 120
  },
  {
    name: "15",
    backgroundColor: "#F88484",
    color: "#A20303",
    paddingTop: 40,
    width: 90
  },
  {
    name: "16",
    backgroundColor: "#909DFA",
    color: "#040F5C",
    paddingTop: 100,
    width: 100
  },
  {
    name: "17",
    backgroundColor: "#F9EF8E",
    color: "#E6A803",
    paddingTop: 50,
    width: 40
  },
  {
    name: "18",
    backgroundColor: "#C4F8A3",
    color: "#3D9405",
    paddingTop: 80,
    width: 80
  },
  {
    name: "19",
    backgroundColor: "#F88484",
    color: "#A20303",
    paddingTop: 40,
    width: 40
  },
  {
    name: "20",
    backgroundColor: "#909DFA",
    color: "#040F5C",
    paddingTop: 40,
    width: 40
  },
  {
    name: "21",
    backgroundColor: "#F9EF8E",
    color: "#E6A803",
    paddingTop: 40,
    width: 40
  }
];

const state = {
  data: [
    {
      id: "Parent1",
      name: "Parent1",
      children: [
        {
          id: "child1",
          name: "child1",
          children: [
            {
              id: "child11",
              name: "child11",
              children: [
                {
                  id: "child111",
                  name: "child111"
                }
              ]
            },
            {
              id: "child12",
              name: "child12"
            }
          ]
        }
      ]
    },
    {
      id: "Parent2",
      name: "Parent2",
      children: [
        {
          id: "child2",
          name: "child2",
          children: [
            {
              id: "child21",
              name: "child21"
            },
            {
              id: "child22",
              name: "child22"
            }
          ]
        }
      ]
    }
  ]
};

function getIndicator(isExpanded, hasChildrenNodes) {
  if (!hasChildrenNodes) {
    return "*";
  } else if (isExpanded) {
    return "-";
  } else {
    return "+";
  }
}

export default function App() {
  return (
    // <Map />

    <View
      style={{
        flex: 1,
        marginTop: 30,
        backgroundColor: "white",
        padding: 10
      }}
    >
      <TreeView
        data={state.data}
        renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
          return (
            <View>
              <Text
                style={{
                  marginLeft: 25 * level,
                  fontSize: 18
                }}
              >
                {getIndicator(isExpanded, hasChildrenNodes)} {node.name}
              </Text>
            </View>
          );
        }}
      />
    </View>

    // <View style={{ backgroundColor: "#FDFDFD" }}>
    //   <View style={{ marginTop: 50, marginLeft: 15 }}>
    //     <Text style={{ fontSize: 25, fontWeight: "300" }}>
    //       7 <Text style={{ fontWeight: "200" }}>tasks today</Text>
    //     </Text>
    //     <Text style={{ fontSize: 12, fontWeight: "200", marginTop: 3 }}>
    //       Hello KJ, welcome back
    //     </Text>
    //   </View>

    //   <View>
    //     <FlatList
    //       data={tempData}
    //       keyExtractor={item => item.name}
    //       horizontal={true}
    //       showsHorizontalScrollIndicator={false}
    //       renderItem={({ item }) => <TodoList list={item} />}
    //     />
    //   </View>

    //   <View>
    //     <FlatList
    //       data={tempData}
    //       keyExtractor={item => item.name}
    //       horizontal={true}
    //       showsHorizontalScrollIndicator={false}
    //       renderItem={({ item }) => (
    //         <View>
    //           <Text style={{ color: "#D2D2D2", paddingLeft: 25 }}>2:30</Text>
    //           <Divider list={item} />
    //         </View>
    //       )}
    //     />
    //   </View>
    // </View>
  );
}
