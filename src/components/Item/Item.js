import React from 'react';
import styled from 'styled-components';
import {
  bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  comment,
  dollar,
  food,
  freelance,
  medical,
  minus,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  travel,
  tv,
  yt,
} from '../../utils/icons';
import Button from '../Button/Button';
import { dateFormat } from '../../utils/dateFormat';
function Item({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  const incomeCategoryIcon = () => {
    switch (category) {
      case 'salary':
        return money;
      case 'freelancing':
        return freelance;
      case 'bitcoin':
        return bitcoin;
      case 'stocks':
        return stocks;
      case 'piggy':
        return piggy;
      case 'yt':
        return yt;
      case 'bank':
        return card;
      case 'investment':
        return stocks;
      case 'other':
        return dollar;
      default:
        return piggy;
    }
  };
  const expenseCategoryIcon = () => {
    switch (category) {
      case 'education':
        return book;
      case 'groceries':
        return food;
      case 'health':
        return medical;
      case 'subscription':
        return tv;
      case 'takeaway':
        return takeaway;
      case 'clothing':
        return clothing;
      case 'travelling':
        return travel;
      case 'other':
        return circle;
      default:
        return minus;
    }
  };
  return (
    <ItemStyled indicator={indicatorColor}>
      <div className="icon">
        {type === 'expense' ? expenseCategoryIcon() : incomeCategoryIcon()}
      </div>
      <div className="content">
        <h3>{title}</h3>
        <div className="inner-content">
          <div className="text">
            <p>
              {dollar}
              {amount}
            </p>
            <p>
              {calender}
              {dateFormat(date)}
            </p>
            <p>
              {comment}
              {description}
            </p>
          </div>
          <div className="btn-container">
            <Button
              icon={trash}
              bPad={'1rem'}
              bRad={'50%'}
              bg={'var(--tertiary-color)'}
              color={'var(--secondary-color)'}
              icolor={'var(--secondary-color)'}
              hcolor={'rgba(163, 67, 67,0.8)'}
              onClick={() => deleteItem(id)}
            ></Button>
          </div>
        </div>
      </div>
    </ItemStyled>
  );
}
const ItemStyled = styled.div`
  background: var(--quaternary-color);
  border: 2px solid var(--secondary-color);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 1rem;
  .icon {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      font-size: 2.6rem;
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    h3 {
      font-size: 1.3rem;
      padding-left: 2rem;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: ${(props) => props.indicator};
      }
    }
    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.8;
        }
      }
    }
  }
`;
export default Item;
