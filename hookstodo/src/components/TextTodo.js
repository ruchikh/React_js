import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const TextTodo = ({ saveTodo }) => {
	const [value, setValue] = useState('');
  return (
    <form onSubmit={event => {
    	event.preventDefault();
    	saveTodo(value);
      setValue('');

    }}>
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={e => {
        	setValue(e.target.value)
        }}
        value={value}
      />
    </form>
  );
};

export default TextTodo;