import React, { useState, useEffect } from "react";
import Form from "../component/Form";
const EditScreen = (props) => {
  const [notesTitle, setTitle] = useState(" ");
  const [notesText, setNotesText] = useState(" ");
  const [id, setId] = useState(" ");

   
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
  props.navigation.state.params.onUpdate({
    title: notesTitle,
    text: notesText,
    id: id,
    date: formatted_date,
  });
  }

  
  useEffect(() => {
    const note = props.navigation.getParam("notes");
    setTitle(note.title);
    setNotesText(note.text);
    setId(note.id);
  }, []);
  
  return (
    <Form
     notesTitle={notesTitle} 
     setTitle={setTitle}  
     notesText={notesText} 
     setNotesText={setNotesText}
     goBack={goBack}
     titleText="Edit Note"
     
     /> 
  )
  };

export default EditScreen;
