import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../component/HeaderButton";
import { SimpleLineIcons } from "@expo/vector-icons";

const Form = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.heading}>Enter title</Text>
        <TextInput
          placeholder="Enter title"
         style={styles.title}
          value={props.notesTitle}
          onChangeText={(event)=>props.setTitle(event)}
        />
     
        <Text style={styles.heading}>Enter Notes</Text>
       
        <View style={styles.text}>
       
          <TextInput
            placeholder="Enter text"
            value={props.notesText}
            onChangeText={(event)=>props.setNotesText(event)}
          />
             
        </View>
    
        <View  style={styles.button1}>
        <Button
          title={props.titleText}
          color="blue"
          onPress={props.goBack}
        />
        </View>
      </View>
    </View>
  );
};

Form.navigationOptions = (navData) => {
  return {
    headerTitle: "Notepad Free ",
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
        <View style={styles.headerButtons}>
          <Button
            title="SAVE"
            style={styles.save}
            color="rgb(164, 136, 98)"
            onPress={() => {
              navData.navigation.goBack();
            }}
          />
          <Button title="UNDO" style={styles.save} color="rgb(164, 136, 98)" />
          <SimpleLineIcons
            name="options-vertical"
            size={20}
            color="white"
            style={styles.options}
          />
        </View>
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "rgb(250, 249, 196)",
  },
  form: {
    marginTop: 5,
    flex: 1,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  save: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  headerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 5,
  },
  options: {
    paddingTop: 4,
  },
  title: {
    height: 40,
    fontSize: 18,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "black",
    
  },
  text: {
    borderColor: "rgb(121, 106, 67)",
  
    height: "50%",
    marginBottom: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderColor: "black",
    borderWidth: 2
  },
  button1: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"

  },
 
  heading:{
    color: "blue",
    textAlign: "center",
    fontWeight: "bold",
    fontSize:20
  },
  description:{
    fontSize: 15,
    
  },
 
});

export default Form;
