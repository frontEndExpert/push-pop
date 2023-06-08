import React from 'react';
import styles from './PopOrderedList.module.css';
import PopOrderedListClass from './businessLogic/popOrderedListClass';


const PopOrderedList = () => {
    const [input, setInput] = React.useState('');
    const [output, setOutput] = React.useState('');

    const popListClass = new PopOrderedListClass();

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const handlePush = (event: any) => {
        console.log(event.target.value);
        popListClass.push(event.target.value)
        setOutput(popListClass.toString());
    }

    const handlePop = () => {
        popListClass.pop();
        setOutput(popListClass.toString());
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>PopOrderedList</h1>
            <input type="text" onChange={handleInput} value={input} />
            <div className={styles.list}>
                <button type="button" className={styles.button} onClick={(event) => handlePush(event)}>Push</button>
                <button type="button" className={styles.button} onClick={handlePop}>Pop</button>
            </div>
            <div className={styles.output} >{output}</div>
        </div>
    )
}

export default PopOrderedList;