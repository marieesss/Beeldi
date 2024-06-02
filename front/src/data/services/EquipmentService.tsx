import { database } from "../firebase/firebase";

const EquipementsService = () => {
  const getEquipments = async () => {
    const equipmentsRef = database.ref('Equipments');
    const snapshot = await equipmentsRef.get();

    if (snapshot.exists()) {
      const data = snapshot.val();
      const equipmentsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
      return equipmentsArray;
    } else {
      return [];
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
