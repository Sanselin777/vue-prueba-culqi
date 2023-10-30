import { defineStore } from 'pinia'
import { IEmployee } from '../models/employees';

export const useEmployeeStore = defineStore('employeeStore', {
    state: () => ({
        employees: [] as IEmployee[],
        totalEmployees: 0,
    }),
    getters: {},
    actions: {
        setEmployees(employees: IEmployee[]) {
            this.employees = employees;
        },
        setTotalEmployees(total: number) {
            this.totalEmployees = total;
        },
    },
})

