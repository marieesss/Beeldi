import { Equipment } from "../types/Equipements";
import { Categories } from "../types/redux/FilterSlice";

export function reorderList(liste: Array<Equipment>) {
  return liste.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
  );
}

export function filterData(liste: Array<Equipment>, filters: Array<Categories>, search: string) {
  const result = liste.filter((equipement: Equipment) => {
    // For every filter, verify if value matches
    const queryFilters = filters.every((filter: Categories) => {
  // Get the value of equipment we want to compare
   const equipmentValue = equipement[filter.keyFilter as keyof Equipment];
      // If filter value is string we use include to verify match
      if (typeof filter.value === 'string') {
        return typeof equipmentValue === 'string' &&
               equipmentValue.toLowerCase().includes(filter.value.toLowerCase());
      }
      
      // If the filter value is number, check if equipement value is number
      // Verify if it's equal
      if (typeof filter.value === 'number') {
        return typeof equipmentValue === 'number' &&
               equipmentValue === filter.value;
      }
      
      return false;
    });

    // returns true if there is no query in search bar or it matches
    const searchQuery = search.toLowerCase();
    const querySearch = search.length === 0 ||
      equipement.name.toLowerCase().includes(searchQuery) ||
      equipement.domain.toLowerCase().includes(searchQuery);

    return queryFilters && querySearch;
  });

  return result;
}
