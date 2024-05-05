import React from 'react';
import styled from 'styled-components';
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/icons';
import avatar from '../../img/avatar.png';
function Nav({ active, setActive }) {
  return (
    <NavStyled>
      <div className="user-icon">
        <img src={avatar} alt=""></img>
        <div className="text">
          <h2>Kacy</h2>
          <p>Your Expense Tracker</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((menuItem) => {
          return (
            <li
              key={menuItem.id}
              onClick={() => setActive(menuItem.id)}
              className={active === menuItem.id ? 'active' : ''}
            >
              {/* <a href={menuItem.url}> */}
              <span>{menuItem.icon}</span>
              <p>{menuItem.title}</p>
              {/* </a> */}
            </li>
          );
        })}
      </ul>
      <div className="logout">
        <li>{signout} Log Out</li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.2rem;
  width: 300px;
  height: 100%;
  background-color: var(--quaternary-color);
  border: 2px solid var(--secondary-color);
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  .user-icon {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.5rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      p {
        display: inline;
      }
    }
  }
  .active {
    color: #0f2167 !important;
    font-weight: 600 !important;
  }
`;

export default Nav;
