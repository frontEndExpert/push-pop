import React, { useEffect } from 'react';

import styles from './PopOrderedList.module.css';
import PushOrderedListClass from './businessLogic/pushOrderedListClass';
// import NodeObject from './businessLogic/NodeObject';


const PushOrderedList = () => {
    const [input, setInput] = React.useState('');
    const [output, setOutput] = React.useState('');
    const [pushListClass, setPushListClass] = React.useState<PushOrderedListClass>();
    const [emptyError, setEmptyError] = React.useState<boolean>(false);
    const inputRef = React.useRef<HTMLInputElement>(null);


    useEffect(() => {
        setPushListClass(new PushOrderedListClass());
    }, []);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const handlePush = () => {
        setEmptyError(false);
        if (pushListClass) {
            if (inputRef.current?.value.trim() === '') {
                setEmptyError(true);
            } else {
                const outputThis = pushListClass.push(inputRef.current?.value) as string;
                setOutput(outputThis);
            }
        } else console.log("pushListClass is null");

    }

    const handlePop = () => {
        if (pushListClass) {
            const outputThis = pushListClass.pop();

            setOutput(outputThis);
        } else console.log("pushListClass is null");
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>PopOrderedList</h1>
            <div className={styles.list}>
                <input type="text" data-testid="tinput" onChange={handleInput} ref={inputRef} value={input} />
                <button type="button" data-testid="push-button" className={styles.button} onClick={handlePush}>Push</button>
                <button type="button" data-testid="pop-button" className={styles.button} onClick={handlePop}>Pop</button>
            </div>
            {emptyError && <div className={styles.error}>Please enter a value into the input box.</div>}
            <div className={styles.output} data-testid="toutput" >{output}</div>
        </div>
    )
}

export default PushOrderedList;