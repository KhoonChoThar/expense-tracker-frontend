import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart';
import { useGlobalContext } from '../../context/globalContext';
import History from '../History/History';

function Home() {
  const {
    totalIncome,
    totalExpense,
    totalBalance,
    getExpenses,
    getIncomes,
    incomes,
    expenses,
  } = useGlobalContext();
  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);
  return (
    <HomeStyled>
      <InnerLayout>
        <div className="stats-container">
          <div className="chart-container">
            <Chart />
            <div className="amount-container">
              <div className="income">
                <h3>Total Income</h3>
                <h3 style={{ color: 'var(--green-color)' }}>{totalIncome()}</h3>
              </div>
              <div className="expense">
                <h3>Total Expense</h3>
                <h3 style={{ color: 'var(--red-color)' }}>{totalExpense()}</h3>
              </div>
              <div className="balance">
                <h3>Your Balance</h3>
                <h3 style={{ color: 'var(--primary-color)' }}>
                  {totalBalance()}
                </h3>
              </div>
            </div>
            <div className="min-max-container">
              {incomes.length > 0 && (
                <div className="income-min-max">
                  <h3>Incomes</h3>
                  <div className="min">
                    <h4>Min</h4>
                    <h4 style={{ color: 'var(--green-color)' }}>
                      {Math.min(...incomes.map((item) => item.amount))}
                    </h4>
                  </div>
                  <div className="max">
                    <h4>Max</h4>
                    <h4 style={{ color: 'var(--green-color)' }}>
                      {Math.max(...incomes.map((item) => item.amount))}
                    </h4>
                  </div>
                </div>
              )}
              {expenses.length > 0 && (
                <div className="expense-min-max">
                  <h3>Expenses</h3>
                  <div className="min">
                    <h4>Min </h4>
                    <h4 style={{ color: 'var(--red-color)' }}>
                      {Math.min(...expenses.map((item) => item.amount))}
                    </h4>
                  </div>
                  <div className="max">
                    <h4>Max </h4>
                    <h4 style={{ color: 'var(--red-color)' }}>
                      {Math.max(...expenses.map((item) => item.amount))}
                    </h4>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="history-container">
            <History />
          </div>
        </div>
      </InnerLayout>
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  .stats-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-container {
      grid-column: 1/4;
      height: 400px;
      .amount-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin: 1rem 0;
        .income,
        .expense,
        .balance {
          border: 2px solid var(--secondary-color);
          background-color: var(--blue-color);
          color: var(--secondary-color);
          border-radius: 20px;
          padding: 1rem 2rem;
        }
      }
      .min-max-container {
        display: grid;
        grid-template-columns: repeat(autofill,minmax(2, 1fr));    
        gap: 2rem;
        margin: 1rem 0;
        .income-min-max,
        .expense-min-max {
          border: 2px solid var(--secondary-color);
          background-color: var(--blue-color);
          color: var(--secondary-color);
          border-radius: 20px;
          padding: 1rem 2rem;
          display: flex;
          align-items:center;
          justify-content: space-between;
          gap: 1rem;
        }
      }
    }
    .history-container {
      grid-column: 4/-1;
  }
`;
export default Home;
