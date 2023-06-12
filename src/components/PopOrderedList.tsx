import React, { useEffect } from 'react';
import styles from './PopOrderedList.module.css';
import PopOrderedListClass from './businessLogic/popOrderedListClass';


const PopOrderedList = () => {
    const [input, setInput] = React.useState('');
    const [output, setOutput] = React.useState('');
    const [popListClass, setPopListClass] = React.useState<PopOrderedListClass>();
    const [emptyError, setEmptyError] = React.useState<boolean>(false);
    const inputPopRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        setPopListClass(new PopOrderedListClass());
    }, []);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const handlePush = (event: any) => {
        setEmptyError(false);
        if (popListClass) {
            if (inputPopRef.current?.value.trim() === '') {
                setEmptyError(true);
            } else {
                popListClass.push(inputPopRef.current?.value)
                let temp = popListClass.printLinkedList(popListClass.head);
                setOutput(temp || '');
            }
        } else console.log("popListClass is null");
    }

    const handlePop = () => {
        if (popListClass) {
            const vOutput = popListClass.pop();

            setOutput(vOutput);
            console.log("handlePop", popListClass);
        } else console.log("pushListClass is null");
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>PopOrderedList</h1>
            <input
                type="text"
                onChange={handleInput}
                ref={inputPopRef}
                value={input} />
            <div className={styles.list}>
                <button type="button" className={styles.button} onClick={handlePush}>Push</button>
                <button type="button" className={styles.button} onClick={handlePop}>Pop</button>
            </div>
            {emptyError && <div className={styles.error}>Please enter a value into the input box.</div>}
            <div className={styles.output} >{output}</div>
        </div>
    )
}

export default PopOrderedList;