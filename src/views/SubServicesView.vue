<template>
  <main>
    <div>
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-500">{{service.name}}</h1>
    </div>
    <button type="button"
    @click="toggleModal('AddServiceModal')" 
    class="inline-block px-4 pt-2.5 pb-2 bg-green-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out flex align-center">
      <PlusIcon class="h-4 w-4"/> &nbsp;
      New Sub_Service
    </button>
    <!-- add service modal -->
    <ModalVue :isOpen="'AddServiceModal'">
      <template #modalTitle>Add Sub_Service Form</template>
      <template #form>
       <form>
          <div class="form-group mb-6">
            <label for="exampleInputEmail1" class="form-label inline-block mb-2 text-gray-700">Sub_Service Name</label>
            <input type="text" class="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
              placeholder="Enter name">
          </div>
          <div class="form-group form-check mb-6">
            <input type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck1">
            <label class="form-check-label inline-block text-gray-800" for="exampleCheck1">Active</label>
          </div>
          <div class="mt-4">
          <button type="reset" 
          @click="toggleModal('close')"
          class="
            px-6
            py-2.5
            bg-red-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-red-700 hover:shadow-lg
            focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-red-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">cancel</button>
            <button type="submit" class="
            ml-3
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Save & Add Variation</button>
            <button type="submit" class="
            ml-3
            px-6
            py-2.5
            bg-green-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-green-700 hover:shadow-lg
            focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-green-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Save</button>
          </div>
        </form>
      </template>
    </ModalVue>
    <!-- end add service -->
    <!-- Edit service modal -->
    <ModalVue :isOpen="'EditServiceModal'">
      <template #modalTitle>Edit {{EditData.name}} Service</template>
      <template #form>
       <form>
          <div class="form-group mb-6">
            <label for="exampleInputEmail1" class="form-label inline-block mb-2 text-gray-700">Service Name</label>
            <input type="text" v-model="EditData.name" class="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
              placeholder="Enter name">
          </div>
          <div class="form-group form-check mb-6">
            <input type="checkbox"
            name="status"
              v-model="EditData.status"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck1">
            <label class="form-check-label inline-block text-gray-800" for="exampleCheck1">Active</label>
          </div>
          <div class="mt-4">
          <button type="reset" 
          @click="toggleModal('close')"
          class="
            px-6
            py-2.5
            bg-red-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-red-700 hover:shadow-lg
            focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-red-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">cancel</button>
            <button type="submit" class="
            ml-3
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Save & Add SubService</button>
            <button type="submit" class="
            ml-3
            px-6
            py-2.5
            bg-green-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-green-700 hover:shadow-lg
            focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-green-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Save</button>
          </div>
        </form>
      </template>
    </ModalVue>
    <!-- end Edit service -->

    <!-- Delete data Modal -->
    <ModalVue :isOpen="'DeleteServiceModal'">
      <template #modalTitle>
          <span class="text-red-600">Delete {{DeleteData.name}}</span>       
      </template>
      <template #form>
        <div class="flex flex-col overflow-hidden px-10 py-5">
          <div class="text-center text-2xl text-red-600">Are you sure ?</div>
          <div class="text-center font-light text-gray-700 mb-8">
              Do you really want to delete <span class="text-red-600">{{DeleteData.name}}</span>? This process cannot be undone.
          </div>
          <div class="flex justify-center">
              <button @click="toggleModal('close')"
                  class="bg-gray-300 text-gray-900 rounded hover:bg-gray-200 px-6 py-2 focus:outline-none mx-1">Cancel</button>
              <button
                  class="bg-red-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none mx-1">Delete</button>
          </div>
      </div>
      </template>
    </ModalVue>
    <!-- End Delete Data Modal -->
    <DataTable :tableCols="tableCols" :tableData="service.subservice" :routeTo="'service'"/>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { PlusIcon } from '@heroicons/vue/outline';
import { useInterfaceStore } from '../stores/interface';
import { storeToRefs } from 'pinia';
import DataTable from '../components/Table.vue';
import ModalVue from '../components/Modal.vue';

const interfaceStore = useInterfaceStore();
const { ModalActive, EditData, DeleteData } = storeToRefs(interfaceStore)
const { toggleModal } = interfaceStore


const tableCols =['#', 'Sub_Service Name', 'Status']
const service = {
    id: "1", name:"Home Visit", variation: [
        {id: "1", name: "Home Visit", description: "this is a simple text description", status: "1"},
        {id:"2", name: "Pick & Drop", description: "this is a simple text description", status: "1"}
    ]
};
</script>