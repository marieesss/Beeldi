import { reorderList } from "../../utils/utils";
import { database } from "../firebase/firebase";

const EquipementsService = () => {
  const getEquipments = async () => {
    try {    
    const equipmentsRef = database.ref('Equipments').once('value').then(function (snapshot) {           
      const data = snapshot.val();
      const equipmentsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
      const finalList = reorderList(equipmentsArray)
      return finalList;
    });
    return equipmentsRef
    } catch (error) {
      throw new Error('Failed to fetch equipments');
    }
  };

  const getEquipment = async (id: string) => {
    const equipmentRef = database.ref(`Equipments/${id}`);
    const snapshot = await equipmentRef.get();

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  };

  return {
    getEquipments,
    getEquipment,
  };
};

export default EquipementsService;
