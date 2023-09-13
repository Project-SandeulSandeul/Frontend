import React, { ChangeEvent, useState } from 'react';

const useInput = () => {
    const [input, setInput] = useState('');

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };
    return { input, setInput, inputChangeHandler };
};

export default useInput;
