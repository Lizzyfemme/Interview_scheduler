import React from "react";
import DayListItem from "components/DayListItem";

// The DayList function is a component that displays DayListItem in the left hand navigation pane

export default function DayList(props) {
  const days = props.days.map(day => (
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={props.setDay}
    />
  ));
  return <ul>{days}</ul>;
}
