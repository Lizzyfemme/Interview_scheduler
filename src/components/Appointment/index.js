
import React, { Fragment } from 'react'

import "./styles.scss";
import Header from "./Header.js"
import Empty from "./Empty.js"
import Show from "./Show.js"



export default function Appointment(props) {
  
  return (
    <Fragment>
    <article className="appointment"></article>
      <Header time={props.time} />
      {props.interview ? <Show name={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty onClick={props.onAdd} />}
     </Fragment>
  )
};