
import React, { Fragment } from 'react'

import "./styles.scss";
import Header from "./Header.js"
import Empty from "./Empty.js"
import Show from "./Show.js"
import Error from "./Error.js"
import Form from "./Form.js"
import Status from "./Status.js"
import Confirm from "./Confirm.js"
import useVisualMode from "../../hooks/useVisualMode"
//import { tsPropertySignature } from '@babel/types';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const DELETE = "DELETE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE"
const ERROR_DELETE = "ERROR_DELETE"



export default function Appointment(props) {

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
  
    transition(SAVING);
  
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));
  }

  function cancel() {
    if (props.interview) {
      return transition(SHOW)
    }
    return transition(EMPTY)
  }

function destroy(event) {
 transition(DELETE, true);
 props
  .cancelInterview(props.id)
  .then(() => transition(EMPTY))
  .catch(error => transition(ERROR_DELETE, true));
}

  function confirm() {
    transition(CONFIRM)
  }

  function onEdit(){
    transition(EDIT)
  }

  const { mode, transition, back } = useVisualMode(
    props.interview && props.interview.interviewer ? SHOW : EMPTY
  );
console.log (mode)
console.log("Props one layer up", props.interview)
  return (

    <Fragment>
      <article className="appointment"></article>

      <Header time={props.time} />

      {mode === CREATE && <Form
      
       interviewers={props.interviewers} 
    
       onCancel={back}
       onSave = {save} 
        />}
      {mode === EMPTY && <Empty onAdd={() => { transition(CREATE) }} />}
      {mode === SHOW &&
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={confirm}
          onEdit={onEdit}

        />}
      {mode === SAVING && (<Status message={"Saving..."} />)}
      {mode === DELETE && (<Status message={"Deleting..."} />)}
      {mode === CONFIRM && (<Confirm
        onCancel={cancel}
        onConfirm={destroy}
       
      />)}
      {mode === EDIT && (<Form 
      name={props.interview.student} 
      interviewers={props.interviewers} 
      interviewer={props.interview.interviewer}
      interview={props.interview}
      onCancel={back}
      onSave = {save}
      />)}
      {mode === ERROR_SAVE && (<Error 
      message = {"Opps something went wrong while saving..."} 
      onClose={back}
      />)}
      
      {mode === ERROR_DELETE && (<Error 
        message = {"Opps something went wrong while deleting..."} 
        onClose={back}
        />)}
        
  


    </Fragment>
  )
}
