import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa';
import { MdDoNotDisturbOn } from 'react-icons/md';

const ExpenseItem = (props) => {
    const { dispatch, currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={event => increaseAllocation(props.name)}></FaPlusCircle></td>
        <td><MdDoNotDisturbOn size='2.2em' color="red" onClick={event => decreaseAllocation(props.name)}></MdDoNotDisturbOn></td>
        <td><FaTimesCircle size='2.2em' color="black" onClick={handleDeleteExpense}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;
