
import React, { Fragment } from 'react'

import "./styles.scss";
import Header from "./Header.js"
import Empty from "./Empty.js"
import Show from "./Show.js"
import Error from "./Error.js"
import Form from "./Form.js"
import Status from "./Status.js"
import useVisualMode from "../../hooks/useVisualMode"
import { tsPropertySignature } from '@babel/types';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const ERROR ="ERROR";
const CANCEL="CANCEL";



export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
    return (
      
      <Fragment>
    <article className="appointment"></article>

      <Header time={props.time} />

   {mode === CREATE && <Form interviewers={[]} onCancel = {() => {back(CANCEL)}}/>}
   {mode === EMPTY && <Empty onAdd={() => {transition(CREATE)}} />}
   {mode === SHOW && (
   <Show
   student={props.interview.student}
   interviewer={props.interview.interviewer} />)};

 </Fragment>
    )}
