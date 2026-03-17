import { useEffect, useRef, useState, type RefObject } from 'react'

type UseDropdownParams = {
  onOpen?: () => void
  onClose?: () => void
}

type UseDropdownReturn = {
  containerRef: RefObject<HTMLDivElement | null>
  isOpen: boolean
  openDropdown: () => void
  closeDropdown: () => void
  toggleDropdown: () => void
}

export function useDropdown({
  onOpen,
  onClose,
}: UseDropdownParams = {}): UseDropdownReturn {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current?.contains(event.target as Node)) return

      setIsOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  function openDropdown() {
    setIsOpen((previousIsOpen) => {
      if (previousIsOpen) return previousIsOpen

      onOpen?.()
      return true
    })
  }

  function closeDropdown() {
    setIsOpen((previousIsOpen) => {
      if (!previousIsOpen) return previousIsOpen

      onClose?.()
      return false
    })
  }

  function toggleDropdown() {
    setIsOpen((previousIsOpen) => {
      const nextIsOpen = !previousIsOpen

      if (nextIsOpen) onOpen?.()
      else onClose?.()

      return nextIsOpen
    })
  }

  return {
    containerRef,
    isOpen,
    openDropdown,
    closeDropdown,
    toggleDropdown,
  }
}
