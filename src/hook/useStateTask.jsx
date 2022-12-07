import { useState, useEffect, useContext } from 'react';
import TaskModel from '../models/Taks.model';
import { UserContext } from '../context';

const UseStateTask = () => {

    const createTask = new TaskModel(false, ' ', 'All');

    const [task, setTask] = useState([]);

    const [stateMessage, setStateMessage] = useState(false);

    const { handleIncreaseCounter, handleDecrementCounter, handleDecrementCheck } = useContext(UserContext)

    const handleCreateTask = (event) => {

        event.preventDefault();

        const paragraph = event.target.lastChild.value;

        if (paragraph.length !== 0) setStateMessage(true);

        if (paragraph.length <= 36) setStateMessage(false);

        if (paragraph.length !== 0 && paragraph.length <= 50) {

            task.push({
                ...createTask,
                paragraph
            });

            setTask([...task]);
            handleIncreaseCounter();
            event.target.reset();
        };
    }

    const handleCheckList = (element) => {

        const index = task.indexOf(element);
        const actualState = task[index].check;
        task[index].check = !actualState;
        const template = [...task];
        handleDecrementCheck(task[index].check);
        setTask([...template]);
    }



    const handleDelateList = (element) => {

        const index = task.indexOf(element);
        handleDecrementCounter(task[index].check);
        task.splice(index, 1);
        const template = [...task];
        setTask([...template]);

    }

    const handleDelateTaskCompleted = () => {

        task.forEach((element, index) => {
            if (element.check) task.splice(index, 1);
        })

        const templete = [...task];

        setTask([...templete]);
    }



    const handleAllState = () => {

        const templeTask = task.map(element => {

            if (element.stateTask !== 'All') {

                element.stateTask = 'All'
            }

            return element;
        });

        setTask([...templeTask]);
    }


    const handleActiveStates = () => {

        const templeTask = task.map(element => {

            if (!element.check) {
                element.stateTask = 'Completed'
            } else {
                element.stateTask = 'All'
            }

            return element;
        });

        setTask([...templeTask]);
    }

    const handleCompletedStates = () => {

        const templeTask = task.map(element => {

            if (element.check) {

                element.stateTask = 'Active';
            } else {
                element.stateTask = 'All'
            }

            return element;
        });

        setTask([...templeTask]);
    }


    useEffect(() => {

    }, [task]);


    return {
        task,
        handleCreateTask,
        handleCheckList,
        handleDelateList,
        handleDelateTaskCompleted,

        handleAllState,
        handleActiveStates,
        handleCompletedStates,

        stateMessage
    };
}

export default UseStateTask;
