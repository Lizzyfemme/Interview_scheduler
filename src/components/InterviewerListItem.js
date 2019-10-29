import React from "react";
import "components/InterviewerListItem.scss";
import classnames from"classnames";



export default function DayListItem(props) {
const interviewerClass=classnames("interviewers__item", {
  "interviewers__item--selected":props.selected
})
  return (
<li className={interviewerClass}
onClick={() => props.setInterviewer(props.name)}>
  <img
    className="interviewers__item-image"
    src="https://i.imgur.com/LpaY82x.png"
    alt="Sylvia Palmer"
  />
  Sylvia Palmer
</li>
  )
}
