import React, { useState } from "react";
import { StyleSheet, View} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../component/HeaderButton";
import { AntDesign } from "@expo/vector-icons";
import Cards from '../component/Cards';

const MainScreen = (props) => {
  const [taskList, setTaskList] = useState([]);

  const onUpdate = (data) => {
    setTaskList(
   taskList.map((note) => {
        if (note.id == data.id) {
          return data;
        } else {
          return note;
        }
      })
    );
  };


  const onSelect = (data1) => {
    setTaskList([...taskList, data1]);
  };

  const editNotes=(data2)=>{
    props.navigation.navigate("EditScreen", {
      notes : data2,
      onUpdate:  onUpdate,
    
   
  });
};
    const List = () => {
    props.navigation.navigate("FormScreen", { onSelect: onSelect });
  };
  
  return (
    <View style={styles.container}>
      <Cards
       editNotes={editNotes}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <View style={styles.icon}>
        <AntDesign
          name="pluscircle"
          size={45}
          color="rgb(121, 106, 67)"
          onPress={List}
        />
      </View>
     </View>
  );
};



MainScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Notepad Free",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="search-sharp"
          onPress={() => {
            console.log("Mark as favorite!");
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(250, 249, 196)",
  },
  icon: {
    position: "absolute",
    right: 3,
    top: 500,
    width: 60,
  },
  
 });



export default MainScreen;
