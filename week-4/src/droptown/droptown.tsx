
import "./dropwtown.scss"
import React, { useState } from 'react';
import classNames from 'classnames';

interface DropdownProps {
  items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        <img src="./mobilnav.png" alt="" />
      </button>
      <ul className={classNames('dropdown-menu', { 'dropdown-menu-open': isOpen })}>
        {items.map((item, index) => (
          <li key={index} className="dropdown-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
