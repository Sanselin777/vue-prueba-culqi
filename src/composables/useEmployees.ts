import { storeToRefs } from "pinia";
import { useEmployeeStore } from "../stores/employeeStore"
import { api } from "../api/api";
import { ref } from 'vue';
import { IParams } from "../models/employees";

const isLoading = ref(false);

const params = ref<IParams>({
    limit: 10,
    page: 1
})
const useEmployees = () => {
    const store = useEmployeeStore();
    const { employees, totalEmployees } = storeToRefs(store)

    const getEmployees = async () => {
        try {
            isLoading.value = true;
            const response = await api.get('empleados', { params: params.value });
            const { data, status } = response
            if (status === 200) {
                store.setEmployees(data.data);
                store.setTotalEmployees(data.total);
            }
        } catch (error) {
            console.error(error);
        } finally {
            isLoading.value = false;
        }
    }

    return {
        employees,
        totalEmployees,
        getEmployees,
        isLoading,
        params
    }
}
export default useEmployees