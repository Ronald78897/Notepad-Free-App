import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";


const Cards = (props) => {
 // console.log( props.taskList);
  const renderItem = props.taskList.map((notes, index) => {
    return (
      <TouchableNativeFeedback
        key={index} onPress={()=> props.editNotes(notes)} >
        <View style={styles.card}>
          <View>
            <Text style={styles.title}>{notes.title}</Text>
            <View style={styles.dateDisplay}>
            <Text>
              <Text style={styles.lastEdit}>last edit </Text>
              {notes.date}
            </Text>
            </View> 
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  });
  return <ScrollView>{renderItem}</ScrollView>;
};

const styles = StyleSheet.create({
  card: {
    elevation: 8,
    backgroundColor: "rgb(255, 254, 216)",
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    height: 60,
  },
  text: {
    backgroundColor: "white",
    color: "red",
    textAlign: "right",
    width: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 50,
    textAlign: "center",
    paddingTop: 8,
    backgroundColor: "#1eae98",
    color: "white",
    marginBottom: 15,
  },
  ImageBox: {
    borderWidth: 2,
    borderColor: "black",
    width: 110,
    height: 110,
    justifyContent: "center",
    alignItems: "flex-start",
    //padding: 5,
  },
  type: {
    // alignItems: "center",
    //justifyContent: "space-around",
    borderWidth: 2,
    borderColor: "blue",
    height: 90,
    width: 90,
    marginLeft: 90,
    //paddingBottom: 20,
    //marginVertical: 10,
    //paddingHorizontal: 14,
    marginHorizontal: 40,
  },
  details: {
    fontSize: 15,
    fontWeight: "700",
    paddingVertical: 5,
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  image: {
    paddingTop: 20,
    width: "100%",
    height: "100%",
  },
  insideText: {
    fontWeight: "normal",
    marginLeft: 10,
  },
  textBox: {
    //justifyContent: "space-around",
    // borderWidth: 2,
    // borderColor: "blue",
    width: 200,
    height: 110,
    justifyContent: "center",
    //marginVertical: 10,
    marginLeft: 120,
    marginTop: -110,
  },
  slider: {
    height: "75%",
  },
  cancel: {
    marginLeft: 150,
  },
  buttonClear: {
    width: "50%",
    marginLeft: 95,
    marginBottom: 5,
  },
   title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  lastEdit: {
    fontWeight: "bold",
    paddingHorizontal: 3,
    marginRight: 3,
  },
  dateDisplay:{
    justifyContent:"flex-end",
    alignItems: "flex-end",
    marginTop:10
  }
});

export default Cards;
