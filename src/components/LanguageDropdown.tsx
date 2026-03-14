import { useState } from "react";
import { Dropdown } from "./Dropdown";

type LanguageOption = {
  code: string;
  label: string;
};

type LanguageDropdownProps = {
  options: LanguageOption[];
  value: string;
  onChange: (code: string) => void;
};

export const LanguageDropdown = ({
  options,
  value,
  onChange,
}: LanguageDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const current = options.find((l) => l.code === value) ?? options[0];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (code: string) => {
    onChange(code);
    setIsOpen(false);
  };

  const closeDropdown = () => setIsOpen(false);

  return (
    <Dropdown isOpen={isOpen} onClose={closeDropdown}>
      <div className="dropdown dropdown-lang">
        <button
          className="dropdown-toggle"
          onClick={toggleDropdown}
          type="button"
        >
          {current?.label}
        </button>

        {isOpen && (
          <div className="dropdown-menu dropdown-menu--lang">
            <ul className="dropdown-menu-list">
              {options.map((lang) => (
                <li key={lang.code}>
                  <button
                    type="button"
                    onClick={() => handleSelect(lang.code)}
                  >
                    {lang.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Dropdown>
  );
};