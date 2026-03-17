import { createContext, useContext, type KeyboardEvent, type ReactNode } from 'react'
import { useDropdown } from '../../hooks/use-dropdown'

// THEORY: compound components pattern
type NewDropdownContextValue = {
  isOpen: boolean
  toggle: () => void
  close: () => void
}

const NewDropdownContext = createContext<NewDropdownContextValue | null>(null)

function useNewDropdownContext() {
  const ctx = useContext(NewDropdownContext)
  if (!ctx) throw new Error('NewDropdown compound components must be used within NewDropdown')
  return ctx
}

type NewDropdownProps = {
  children: ReactNode
  className?: string
}

export function NewDropdown({ children, className }: NewDropdownProps) {
  const { containerRef, isOpen, closeDropdown, toggleDropdown } = useDropdown()

  return (
    <NewDropdownContext.Provider
      value={{ isOpen, toggle: toggleDropdown, close: closeDropdown }}
    >
      <div ref={containerRef} className={className}>
        {children}
      </div>
    </NewDropdownContext.Provider>
  )
}

type NewDropdownTriggerProps = {
  children: ReactNode
}

export function NewDropdownTrigger({ children }: NewDropdownTriggerProps) {
  const { toggle } = useNewDropdownContext()

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'Enter' && event.key !== ' ') return

    event.preventDefault()
    toggle()
  }

  return (
    <div role="button" tabIndex={0} onClick={toggle} onKeyDown={handleKeyDown}>
      {children}
    </div>
  )
}

export type NewDropdownMenuItem = {
  key: string
  label: string
  [key: string]: unknown
}

type NewDropdownMenuProps = {
  'aria-label'?: string
  items: NewDropdownMenuItem[]
  children: (item: NewDropdownMenuItem) => ReactNode
}

export function NewDropdownMenu({
  'aria-label': ariaLabel,
  items,
  children,
}: NewDropdownMenuProps) {
  const { isOpen } = useNewDropdownContext()

  if (!isOpen) return null

  return (
    <div className="dropdown-menu" role="menu" aria-label={ariaLabel}>
      <ul className="dropdown-menu-list">
        {items.map((item) => (
          <li key={item.key}>{children(item)}</li>
        ))}
      </ul>
    </div>
  )
}

type NewDropdownItemProps = {
  children: ReactNode
  className?: string
  color?: "default" | "danger"
  onClick?: () => void
}

export function NewDropdownItem({
  children,
  className = '',
  color = 'default',
  onClick,
}: NewDropdownItemProps) {
  const { close } = useNewDropdownContext()

  const handleClick = () => {
    onClick?.()
    close()
  }

  return (
    <button
      type="button"
      role="menuitem"
      className={`${className} ${color === "danger" ? "text-danger" : ""}`.trim()}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
