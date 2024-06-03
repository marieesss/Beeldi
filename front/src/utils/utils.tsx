import { Equipment } from "../types/Equipements";

export function reorderList(liste: Array<Equipment>) {
  return liste.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
  );
}
