<script setup lang="ts">
import PaginatorComponent from '../components/PaginatorComponent.vue';
import TableLoader from '../components/TableLoader.vue';
import useEmployees from '../composables/useEmployees';

const { employees, getEmployees, totalEmployees, isLoading, params } = useEmployees()
getEmployees()

const onChangePage = (page: number) => {
  params.value.page = page
  getEmployees()
}

</script>

<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">
      Empleados
    </h3>

    <div class="mt-8" />

    <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Nombre
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Nombre Cargo
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Departamento
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Oficina
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Cuenta
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right">Acciones</th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <TableLoader v-if="isLoading" />
              <template v-else>
                <tr v-for="(employee, index) in employees" :key="index">
                  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img class="w-10 h-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="">
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium leading-5 text-gray-900">
                          {{ employee.nombre }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                    <div class="text-sm leading-5 text-gray-500">
                      {{ employee.cargo }}
                    </div>
                  </td>
                  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                    <div class="text-sm leading-5 text-gray-900">
                      {{ employee.departamento }}
                    </div>
                  </td>
                  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                    <div class="text-sm leading-5 text-gray-500">
                      {{ employee.oficina }}
                    </div>
                  </td>
                  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                    <span
                      class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">{{
                        employee.estadoCuenta }}</span>
                  </td>
                  <td
                    class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
          <PaginatorComponent :limit="params.limit" :total="totalEmployees" @changePage="onChangePage" />
        </div>
      </div>
    </div>
  </div>
</template>

