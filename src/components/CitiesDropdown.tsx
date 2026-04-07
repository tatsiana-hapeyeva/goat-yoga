import { useState } from "react";
import { DropdownFrame } from "./DropdownFrame";
import { type City, ALL_CITIES } from "../data/cities";

export function CitiesDropdown() {
  const [cities, setCities] = useState<City[]>([]);
  const [citySearch, setCitySearch] = useState("");
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [citiesLoading, setCitiesLoading] = useState(false);

  const normalize = (s: string) => s.toLowerCase().trim();

  const filteredCities = cities.filter((city) => {
    const q = normalize(citySearch);
    if (!q) return true;

    const inName = normalize(city.name).startsWith(q);
    const inAliases = city.aliases?.some((alias) => normalize(alias).startsWith(q));

    return inName || inAliases;
  });

  const visibleCities = filteredCities.slice(0, visibleCount);

  const handleCitiesScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const target = e.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = target;

    const isBottom = scrollTop + clientHeight >= scrollHeight - 5;

    if (isBottom) {
      setVisibleCount((prev) => {
        const next = prev + 6;
        return Math.min(next, filteredCities.length);
      });
    }
  };

  const handleCityClick = (city: City, close: () => void) => {
    setSelectedCity(city);
    close();
    // тут будет поп-ап
  };

  const openCitiesDropdown = (open: () => void) => {
    setCitySearch("");
    setVisibleCount(6);
    setCitiesLoading(true);

    open();

    setTimeout(() => {
      setCities(ALL_CITIES);
      setCitiesLoading(false);
    }, 500);
  };

  return (
    <DropdownFrame
      className="cities-dropdown"
      renderToggle={({ isOpen, open, toggle }) => (
        <button
          type="button"
          className="dropdown-toggle"
          onClick={() => {
            if (!isOpen) {
              openCitiesDropdown(open);
            } else {
              toggle();
            }
          }}
        >
          <span>
            {selectedCity ? selectedCity.name : "Find a class in your city"}
          </span>

          <img
            src="/images/material-symbols_arrow-forward-ios.png"
            alt="arrow"
            width={24}
            height={24}
          />
        </button>
      )}
      renderMenu={({ close }) => (
        <div className="dropdown-menu dropdown-menu--cities">
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
                  <button
                    type="button"
                    onClick={() => handleCityClick(city, close)}
                  >
                    {city.name}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    />
  );
}