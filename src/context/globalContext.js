import React, { useContext, useState } from 'react';
import axios from 'axios';
const BASE_URL = 'http://localhost:3001/api/v1/';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState('');

  const addIncome = async (income) => {
    try {
      const response = await axios.post(`${BASE_URL}add-income`, income);
      getIncomes();
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const getIncomes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-incomes`);
      setIncomes(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const deleteIncome = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}delete-income/${id}`);
      getIncomes();
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const totalIncome = () => {
    let incomeTotal = 0;
    incomes.forEach((income) => {
      incomeTotal += income.amount;
    });
    return incomeTotal;
  };

  const addExpense = async (expense) => {
    try {
      const response = await axios.post(`${BASE_URL}add-expense`, expense);
      getExpenses();
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const getExpenses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-expenses`);
      setExpenses(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const deleteExpense = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}delete-expense/${id}`);
      getExpenses();
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  const totalExpense = () => {
    let expenseTotal = 0;
    expenses.forEach((expense) => {
      expenseTotal += expense.amount;
    });
    return expenseTotal;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpense();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return history.slice(0, 5);
  };
  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        deleteIncome,
        totalIncome,
        incomes,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpense,
        expenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
