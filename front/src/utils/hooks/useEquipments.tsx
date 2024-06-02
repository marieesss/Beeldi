import { useState, useEffect } from 'react';
import EquipementsService from '../../data/services/EquipmentService';
import { Equipment as EquipementsType} from '../../types/Equipements';
import { reorderList } from '../utils';
const useEquipments = () => {
  const [equipments, setEquipments] = useState<EquipementsType[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const service = EquipementsService();
        // get all equipments
        const res = await service.getEquipments();
        // reorder fields by name
        const reorderResponse = reorderList( res)
        setEquipments(reorderResponse);
      } catch (err) {
        if (err instanceof Error) {
          setError(err); 
        } else {
          setError(new Error('An unknown error occurred')); 
        }
      } finally {
        setLoading(false); 
      }
    };

    fetchEquipments();
  }, []);

  return { equipments, loading, error };
};

export default useEquipments;
