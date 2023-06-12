import React, { useEffect } from 'react';
import styles from './PopOrderedList.module.css';
import PopOrderedListClass from './businessLogic/popOrderedListClass';


const PopOrderedList = () => {
    const [input, setInput] = React.useState('');
    const [output, setOutput] = React.useState('');
    const [popListClass, setPopListClass] = React.useState<PopOrderedListClass>();
    const [emptyError, setEmptyError] = React.useState<boolean>(false);
    const inputPopRef = React.useRef<HTMLInputElement>(null);

    //const popListClass = new PopOrderedListClass();

    useEffect(() => {
        setPopListClass(new PopOrderedListClass());
    }, []);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const handlePush = (event: any) => {
        if (popListClass) {
            if (inputPopRef.current?.value.trim() === '') {
                setEmptyError(true);
            } else {
                //const tempOutput = popListClass.push(inputPopRef.current?.value)
                popListClass.push(inputPopRef.current?.value)
                let temp = popListClass.printLinkedList(popListClass.head);
                //setOutput(tempOutput || '');
                setOutput(temp || '');
            }
        } else console.log("popListClass is null");
    }

    const handlePop = () => {
        if (popListClass) {
            const vOutput = popListClass.pop();

            //let temp = popListClass.printLinkedList(popListClass.head);
            //setOutput(temp || '');
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
            <div className={styles.output} >{output}</div>
        </div>
    )
}

export default PopOrderedList;