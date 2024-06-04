import { Equipment } from "../types/Equipements";
import { Categories } from "../types/redux/FilterSlice";

export function reorderList(liste: Array<Equipment>) {
  return liste.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
  );
}

export function filterData(liste : Array<Equipment>, filters : Array<Categories>, search : string){
  const result = liste.filter((equipement: Equipment) => {
      // For every filter, verify if value match
      // If one filter is false, every returns false
      const queryFilters = filters.every((filter: Categories) => {
        if (typeof filter.value === "string") {
          return equipement[filter.keyFilter as keyof Equipment]
            .toLowerCase()
            .includes(filter.value.toLowerCase());
        }
        return true;
      });
    
      // returns true if there is no query in search bar or it matches
      const querySearch = search.length === 0 || equipement.name.toLowerCase().includes(search.toLowerCase()) || equipement.domain.toLowerCase().includes(search.toLowerCase());
    
      
      return queryFilters && querySearch;
    });

    return result
}
