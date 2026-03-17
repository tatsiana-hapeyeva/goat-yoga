import { type ReactNode, type RefObject } from 'react'

type DropdownProps = {
  containerRef: RefObject<HTMLDivElement | null>
  isOpen: boolean
  trigger?: ReactNode
  children: ReactNode
  className?: string
  menuClassName?: string
}

export function Dropdown({
  containerRef,
  isOpen,
  trigger,
  children,
  className,
  menuClassName = 'dropdown-menu',
}: DropdownProps) {
  return (
    <div ref={containerRef} className={className}>
      {trigger}
      {isOpen ? (
        <div className={menuClassName}>
          {children}
        </div>
      ) : null}
    </div>
  )
}