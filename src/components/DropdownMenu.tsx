import { useState, FC } from 'react';
import { CSSTransition } from 'react-transition-group';

interface DropdownMenuProps {
  placeholder: string;
  options: string[];
}

const DropdownMenu: FC<DropdownMenuProps> = ({ placeholder, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div 
      className="relative inline-block text-left cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-text text-xl items-center font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {selectedOption}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <CSSTransition
        in={isOpen}
        timeout={200}
        classNames="dropdown"
        unmountOnExit
      >
        <div
          className="origin-top-left absolute left-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition transform ease-out duration-100 z-50 max-h-[175px] overflow-auto"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1">
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-md text-secondary hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
