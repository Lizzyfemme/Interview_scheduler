import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem"

{/* <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
</section> */}

export default function InterviewerList(props) {
  
  
  const interviewers = props.interviewers.map(interviewer => (

    <InterviewerListItem
  
    name = {interviewer.name}
    avatar={interviewer.avatar}
    selected={interviewer.id === props.interviewer}
    setItem={(event) => props.setItem(interviewer.id)}
    />
  ));
    return (
    <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>

    <ul className="interviewers__list">{interviewers}</ul>
    </section>
    )};

