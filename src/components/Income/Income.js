import styled from 'styled-components';
import React, { useEffect } from 'react';
import { InnerLayout } from '../../styles/Layouts';
import IncomeForm from '../Form/IncomeForm';
import { useGlobalContext } from '../../context/globalContext';
import Item from '../Item/Item';

function Income() {
  const { addIncome, getIncomes, deleteIncome, totalIncome, incomes } =
    useGlobalContext();
  useEffect(() => {
    getIncomes();
  }, []);
  console.log(incomes);
  return (
    <IncomeStyled>
      <InnerLayout>
        <h2 className="total-income">
          Total Income: <span> {totalIncome()}</span>
        </h2>
        <div className="income-container">
          <div className="form-container">
            <IncomeForm />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              return (
                <Item
                  key={_id}
                  id={_id}
                  amount={amount}
                  title={title}
                  date={date}
                  category={category}
                  description={description}
                  type={type}
                  indicatorColor={'#42AD00'}
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div`
  display: flex;
  overflow: auto;
  &::webkit-scrollbar {
    width: 0;
  }
  .total-income {
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
  .income-container {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

export default Income;
