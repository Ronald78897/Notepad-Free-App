import React, { useState } from "react";
import Form from "../component/Form";

const FormScreen = (props) => {
  const [notesTitle, setTitle] = useState(" ");
  const [notesText, setNotesText] = useState(" ");
   
  const goBack=()=>{
  const date_time = new Date();
  const formatted_date =
    date_time.getFullYear() +
    "-" +
    (date_time.getMonth() + 1) +
    "-" +
    date_time.getDate() +
    " " +
    date_time.getHours() +
    ":" +
    date_time.getMinutes() +
    ":" +
    date_time.getSeconds();
   setTitle(" ");
   setNotesText(" ");
  props.navigation.goBack();
  props.navigation.state.params.onSelect({
    title: notesTitle,
    text: notesText,
    id: Math.random().toString(),
    date: formatted_date,
  });
  }
  return (
    <Form goBack={goBack}
     notesTitle={notesTitle} 
     setTitle={setTitle}  
     notesText={notesText} 
     setNotesText={setNotesText}
     titleText="Add Note"
     /> 
  )
  };



export default FormScreen;
