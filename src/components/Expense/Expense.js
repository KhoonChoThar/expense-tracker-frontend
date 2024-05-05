import styled from 'styled-components';
import React, { useEffect } from 'react';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import ExpenseItem from '../Item/Item';
import ExpenseForm from '../Form/ExpenseForm';

function Income() {
  const { addExpense, getExpenses, deleteExpense, totalExpense, expenses } =
    useGlobalContext();
  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h2 className="total-expense">
          Total Expense: <span> {totalExpense()}</span>
        </h2>
        <div className="expense-container">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="expenses">
            {expenses.map((expense) => {
              const { _id, title, amount, date, category, description, type } =
                expense;
              return (
                <ExpenseItem
                  key={_id}
                  id={_id}
                  amount={amount}
                  title={title}
                  date={date}
                  category={category}
                  description={description}
                  type={type}
                  indicatorColor={'#42AD00'}
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  &::webkit-scrollbar {
    width: 0;
  }
  .total-expense {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--blue-color);
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
    border-radius: 15px;
    width: 100%;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
    gap: 0.5rem;
    span {
      font-weight: 800;
      font-size: 2.5rem;
      color: var(--green-color);
    }
  }
  .expense-container {
    display: flex;
    gap: 2rem;
    .expenses {
      flex: 1;
    }
  }
`;

export default Income;
