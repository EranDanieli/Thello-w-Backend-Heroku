import React from 'react';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';

export default function MyDTPicker(props) {
  return (
    <Datetime
      style={{ width: 100 + '%' }}
      renderInput={props.renderInput}
      inputFormat='MM/dd/yyyy'
      input={props.input}
      onChange={(ev) => props.onChange(ev)}
      value={props.value}
    />
  );
}
