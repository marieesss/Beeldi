import { Equipment } from "../../types/Equipements";
import { reorderList } from "../../utils/utils";
import { database } from "../firebase/firebase";

const EquipementsService = () => {
  const getEquipments = async () => {
    try {  
    // Retrieve Equipments collection ref   
    const equipmentsRef = database.ref('Equipments').once('value').then(function (snapshot) {    
      // Retrieve values       
      const data = snapshot.val();
      // map to insert ID in object
      const equipmentsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
      // Order by name
      const finalList = reorderList(equipmentsArray)
      return finalList;
    });
    return equipmentsRef
    } catch (error) {
      throw new Error('Failed to fetch equipments');
    }
  };

  const getEquipment = async (id: string) : Promise<Equipment> => {
    try {  
      // Retrieve Equipments collection ref   
      const equipmentsRef = await  database.ref('Equipments/'+ id).once('value').then(function (snapshot) {    
        // Retrieve values       
        const data = snapshot.val();
        return data;
      });

      // Retrieve all checkpoints that have equipmentKey equal to equipementId
      const checkpoints =await  database.ref("Checkpoints").orderByChild("equipmentKey").equalTo(id).once('value').then(function (snapshot) {    
        const data = snapshot.val();
        const checkpointsList = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        return checkpointsList;

      });


      const final ={...equipmentsRef, checkpoints : checkpoints}
      return final
      } catch (error) {
        throw new Error('Failed to fetch equipments');
      }
    };

  return {
    getEquipments,
    getEquipment,
  };
};

export default EquipementsService;
