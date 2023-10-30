import { storeToRefs } from "pinia";
import { useEmployeeStore } from "../stores/employeeStore"
import { api } from "../api/api";
import { ref } from 'vue';

const isLoading = ref(false);
const useEmployees = () => {
    const store = useEmployeeStore();
    const { employees, totalEmployees } = storeToRefs(store)

    const getEmployees = async () => {
        try {
            isLoading.value = true;
            const response = await api.get('empleados');
            const { data, status } = response
            console.log("🚀 ~ file: useEmployees.ts:14 ~ getEmployees ~ status:", status)
            console.log("🚀 ~ file: useEmployees.ts:14 ~ getEmployees ~ data:", data.data)
            if (status === 200) {
                store.setEmployees(data.data);
                store.setTotalEmployees(data.total);
            }
        } catch (error) {
            console.error(error);
        }finally{
            isLoading.value = false;
        }
    }

    return {
        employees,
        totalEmployees,
        getEmployees,
        isLoading
    }
}
export default useEmployees