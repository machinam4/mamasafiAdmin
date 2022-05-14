import { defineStore } from "pinia";

export const useInterfaceStore = defineStore({
  id: "interface",
  state: () => ({
    RouteTo: '',
    ModalActive : 'close',
    EditData: '',    
    Sub_Service: '',
    DeleteData: '',
  }),
  getters: {
    getModalisOpne:(state)=>!state.ModalAddOpen
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    toggleModal(modal) {
      if (modal!= 'close') {
        this.ModalActive = modal
      } else {
        this.ModalActive = modal
      }      
    },
    setEditData(data){
      this.EditData=data;
    },
    getSubService(id){
      this.Sub_Service=[
        { id:1,  name: "Home Visit", status: "1" },
        { id:2, name: "Pick & Drop", status: "0" },
      ]
    },
    setDeleteData(data){
      this.DeleteData=data
    },
    setRouteTo(routeTo){
      this.RouteTo = routeTo
    }
  },
});
