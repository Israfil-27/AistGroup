import React, { useState } from 'react';
import classNames from 'classnames';
import "./dropwtown.scss"

interface DropdownProps {
  items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        <img src="./mobilnav.png" alt="Mobil Navigasyon İkonu" />
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
