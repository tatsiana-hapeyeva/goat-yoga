import { useState } from 'react'
import { useDropdown } from '../hooks/use-dropdown'
import { Dropdown } from './Dropdown'

export type CustomDropdownOption = {
  value: string
  label: string
}

type CustomDropdownProps = {
  options: CustomDropdownOption[]
  placeholder?: string
}

export const CustomDropdown = ({
  options,
  placeholder = 'Select an option',
}: CustomDropdownProps) => {
  const [selected, setSelected] = useState<CustomDropdownOption | null>(null)
  const { containerRef, isOpen, closeDropdown, toggleDropdown } = useDropdown()

  function handleSelect(option: CustomDropdownOption) {
    setSelected(option)
    closeDropdown()
  }

  const displayLabel = selected?.label ?? placeholder

  return (
    <Dropdown
      containerRef={containerRef}
      isOpen={isOpen}
      className="dropdown dropdown-lang"
      menuClassName="dropdown-menu dropdown-menu--lang"
      trigger={(
        <button
          className="dropdown-toggle"
          onClick={toggleDropdown}
          type="button"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          {displayLabel}
        </button>
      )}
    >
      <ul className="dropdown-menu-list">
        {options.map((option) => (
          <li key={option.value}>
            <button
              type="button"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </Dropdown>
  )
}