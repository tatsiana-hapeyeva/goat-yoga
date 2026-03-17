import { useState, type UIEvent } from 'react'
import { type City, ALL_CITIES } from '../data/cities'
import { useDropdown } from '../hooks/use-dropdown'
import { Dropdown } from './Dropdown'

export const CitiesDropdown = () => {
  const [cities, setCities] = useState<City[]>([])
  const [citySearch, setCitySearch] = useState('')
  const [selectedCity, setSelectedCity] = useState<City | null>(null)
  const [visibleCount, setVisibleCount] = useState(6)
  const [citiesLoading, setCitiesLoading] = useState(false)
  const { containerRef, isOpen: citiesOpen, closeDropdown, toggleDropdown } = useDropdown({
    onOpen: handleOpenDropdown,
  })

  const normalize = (s: string) => s.toLowerCase().trim()

  const filteredCities = cities.filter((city) => {
    const q = normalize(citySearch)
    if (!q) return true

    const inName = normalize(city.name).startsWith(q)
    const inAliases = city.aliases?.some((alias) => normalize(alias).startsWith(q))

    return inName || inAliases
  })

  const visibleCities = filteredCities.slice(0, visibleCount)

  const handleCitiesScroll = (event: UIEvent<HTMLUListElement>) => {
    const target = event.currentTarget
    const { scrollTop, scrollHeight, clientHeight } = target

    const isBottom = scrollTop + clientHeight >= scrollHeight - 5

    if (isBottom) {
      setVisibleCount((prev) => {
        const next = prev + 6
        return Math.min(next, filteredCities.length)
      })
    }
  }

  const handleCityClick = (city: City) => {
    setSelectedCity(city)
    closeDropdown()
  }

  function handleOpenDropdown() {
    setCitySearch('')
    setVisibleCount(6)

    setCitiesLoading(true)

    setTimeout(() => {
      setCities(ALL_CITIES)
      setCitiesLoading(false)
    }, 500)
  }

  return (
    <Dropdown
      containerRef={containerRef}
      isOpen={citiesOpen}
      className="cities-dropdown"
      menuClassName="dropdown-menu dropdown-menu--cities"
      trigger={!citiesOpen ? (
        <button
          type="button"
          className="dropdown-toggle"
          onClick={toggleDropdown}
          aria-expanded={citiesOpen}
          aria-haspopup="listbox"
        >
          <span>
            {selectedCity ? selectedCity.name : 'Find a class in your city'}
          </span>

          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            className="cities-icon"
          >
            <path
              d="M1.47917 16.6667L0 15.1875L6.85417 8.33333L0 1.47917L1.47917 0L9.8125 8.33333L1.47917 16.6667Z"
              fill="#14092A"
            />
          </svg>
        </button>
      ) : null}
    >
      <input
        type="text"
        value={citySearch}
        onChange={(e) => setCitySearch(e.target.value)}
        placeholder="Start typing"
        className="cities-search"
      />

      <ul onScroll={handleCitiesScroll}>
        {citiesLoading && (
          <li>
            <button type="button" disabled>
              Loading...
            </button>
          </li>
        )}

        {!citiesLoading &&
          visibleCities.map((city) => (
            <li key={city.name}>
              <button type="button" onClick={() => handleCityClick(city)}>
                {city.name}
              </button>
            </li>
          ))}
      </ul>
    </Dropdown>
  )
}