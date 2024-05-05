import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.module.css';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/icons';

function IncomeForm() {
  const { addIncome, getIncomes, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    description: '',
    type: 'income',
  });
  const { title, amount, date, category, description } = inputState;
  const handleInputChange = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
    setInputState({
      title: '',
      amount: '',
      date: '',
      category: '',
      description: '',
      type: 'income',
    });
  };
  console.log('err', error);
  return (
    <IncomeFormStyled onSubmit={handleSubmit}>
      {error && <h5 className="error">{error}</h5>}
      <div className="input-control">
        <input
          type="text"
          placeholder="Title"
          name={'title'}
          value={title}
          onChange={handleInputChange('title')}
        />
      </div>
      <div className="input-control">
        <input
          type="number"
          placeholder="Amount"
          name={'amount'}
          value={amount}
          onChange={handleInputChange('amount')}
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Select Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({
              ...inputState,
              date: date,
            });
          }}
        />
      </div>
      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInputChange('category')}
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="piggy">Piggy Bank</option>
          <option value="yt">YouTube</option>
          <option value="bank">Bank</option>
          <option value="investment">Investment</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          placeholder="Description"
          name={'description'}
          value={description}
          onChange={handleInputChange('description')}
          rows="2"
        />
      </div>
      <div className="submit-btn">
        <Button
          name={'Add New Income'}
          icon={plus}
          bPad={' 0.8rem 1.6rem'}
          bRad={'5px'}
          bg={'rgba(7, 65, 115, 0.5)'}
          color={'var(--secondary-color)'}
        ></Button>
      </div>
    </IncomeFormStyled>
  );
}

const IncomeFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  select,
  input,
  textarea,
  #date {
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    outline: none;
    border-radius: 5px;
    border: 2px solid #fbf8dd;
    padding: 0.5rem 1rem;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: var(--blue-color);
    &::placeholder {
      color: var(--blue-color);
    }
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .submit-btn {
    button {
      &:hover {
        background-color: rgba(7, 65, 115, 0.8) !important;
      }
    }
  }
`;

export default IncomeForm;
