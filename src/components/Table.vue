<!-- this the table template
teh vraiables rtequired 
PROPS
  tableData, tableCols, routeTo
MUTATIONS
  getsubservice!!
 -->
<template lang="">
  <div>    
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-x-auto rounded-md">
            <table class="table-fixed min-w-full text-center">
              <thead class="bg-blue-300 border-b">
                <tr >
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-3 text-center"
                    v-for="tableCol in tableCols"
                  >
                    {{tableCol}}
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-3 text-center"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b hover:bg-blue-100 hover:cursor-pointer" v-for="data in tableData" :key="data.id">
                  <!-- <td
                    class="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900"
                    @click="ViewData(data.id)"                    
                  >
                    {{data.id}}
                  </td> -->

                  <!-- <td
                    v-if="data.image"
                    class="text-sm text-gray-900 font-light px-3 py-1 whitespace-nowrap"
                    @click="ViewData(data.id)"
                  >
                  
                  </td> -->
                  <td v-for="property in Object.keys(data)"
                    class="text-sm px-6 py-3 whitespace-nowrap"
                    @click="ViewData(data.id)"
                  >
                    <img v-if="property == 'image'" :src="data.image" class="w-10 h-10 h-auto rounded-lg" alt="">
                    <span v-else-if="property=='status'"><span :class="[data[property]==1? 'text-green-600 font-bold' : 'text-red-900 font-bold']"> {{data.status == 1? 'Active': 'Disabled'}}</span></span>
                    <span v-else class="text-gray-900 font-light">{{data[property]}}</span>
                  </td>
                  <!-- <td
                    :class="['text-sm font-bold px-6 py-3 whitespace-nowrap',
                      data.status==1? 'text-green-600' : 'text-red-900'
                    ]"
                    @click="ViewData(data.id)"
                  >
                    {{data.status == 1? 'Active': 'Disabled'}}

                  </td> -->
                  <td
                    class="text-sm text-gray-900 font-light py-3 whitespace-nowrap"
                  >
                    <div class="flex items-center justify-center">
                      <div class="inline-flex " role="group">
                        <button type="button" 
                        @click="EditData(data)"
                        class=" rounded-md inline-block px-6 py-2.5 bg-blue-300 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring-0 active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                        <button type="button"
                        @click="DeleteData(data)" 
                        class=" rounded-md mx-2 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out">Delete</button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import router from '../router';
import { useInterfaceStore } from '../stores/interface';

const interfaceStore = useInterfaceStore();
const { getSubService } = interfaceStore;

const props = defineProps({
  tableCols: Array,
  tableData: Array,
  routeTo: String
  
})
function ViewData(data){
  router.push({name: props.routeTo, params:{id: data}})
}
function EditData(data){
  interfaceStore.toggleModal('EditServiceModal')
  interfaceStore.setEditData(data);
}
function DeleteData(data){
  interfaceStore.toggleModal('DeleteServiceModal')
  interfaceStore.setDeleteData(data)
}
</script>
<style lang=""></style>
<!-- route to not handled -->