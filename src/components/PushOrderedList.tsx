import React, { useEffect } from 'react';

import styles from './PopOrderedList.module.css';
import PushOrderedListClass from './businessLogic/pushOrderedListClass';
import NodeObject from './businessLogic/NodeObject';


const PushOrderedList = () => {
    const [input, setInput] = React.useState('');
    const [output, setOutput] = React.useState('');
    const [pushListClass, setPushListClass] = React.useState(new PushOrderedListClass());
    const [firstNode] = React.useState(new NodeObject(0));
    const inputRef = React.useRef<HTMLInputElement>(null);


    // useEffect(() => {
    //     const firstNode = {
    //         data: 0,
    //         next: null,
    //         previous: null
    //     } as NodeObject;
    //     const pushListClass = new PushOrderedListClass(firstNode);
    // }, []);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const handlePush = () => {
        pushListClass.push(inputRef.current?.value)

        let temp = pushListClass.printLinkedList('handlePush2', pushListClass.head);
        setOutput(temp);
        console.log("output", output);
        console.log("Push temp", temp);
    }

    const handlePop = () => {
        pushListClass.pop();

        let temp = pushListClass.printLinkedList('handlePop', pushListClass.head);
        setOutput(temp);
        console.log("Push pop output", temp, output);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>PopOrderedList</h1>
            <input type="text" onChange={handleInput} ref={inputRef} value={input} />
            <div className={styles.list}>
                <button type="button" className={styles.button} onClick={handlePush}>Push</button>
                <button type="button" className={styles.button} onClick={handlePop}>Pop</button>
            </div>
            <div className={styles.output} >{JSON.stringify(output)}</div>
        </div>
    )
}

export default PushOrderedList;