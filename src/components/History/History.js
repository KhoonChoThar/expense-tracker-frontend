import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';

function History() {
  const { transactionHistory } = useGlobalContext();
  const [...history] = transactionHistory();

  return (
    <HistoryStyled>
      <h1>Recent History</h1>
      <div className="history-container">
        {history.map((transaction) => {
          const { _id, title, amount, date, category, description, type } =
            transaction;
          return (
            <div className="history-item" key={_id}>
              <p style={{ color: type === 'expense' ? 'var(--red-color)' : 'var(--green-color)' }}>
                {title}
              </p>
              <p style={{ color: type === 'expense' ? 'var(--red-color)' : 'var(--green-color)' }}>
                {type === 'expense' ? `- ${amount}` : `+ ${amount}`}
              </p>
            </div>
          );
        })}
      </div>
    </HistoryStyled>
  );
}

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--blue-color);
    border: 2px solid var(--secondary-color);
    padding: 1rem;
    border-radius: 20px;
    margin-bottom: 1rem;
  }
`;

export default History;
