import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa';
import { MdDoNotDisturbOn } from 'react-icons/md';

const ExpenseItem = (props) => {
    const { dispatch, Currency} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_EXPENSE',
            payload: item,
        });
    };

    const handleIncreaseBudget = () => {

        const item = {
            name: props.name,
            quantity: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: item,
        });
    };

    const handleDecreaseBudget = () => {
        const item = {
            name: props.name,
            quantity: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{parseInt(props.cost)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncreaseBudget}></FaPlusCircle></td>
        <td><MdDoNotDisturbOn size='2.2em' color="red" onClick={handleDecreaseBudget}></MdDoNotDisturbOn></td>
        <td><FaTimesCircle size='2.2em' color="black" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;
