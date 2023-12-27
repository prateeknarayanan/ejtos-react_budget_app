import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spent = () => {
    const { expenses, currency } = useContext(AppContext);
    const totalSpent = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent:{currency} {totalSpent}</span>
        </div>
    );
};

export default Spent;