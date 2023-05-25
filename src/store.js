import { reactive } from 'vue'

const store = reactive({
  currentSelectedCategories: null,
  selectedCategories: [],
  restaurants: [],
})



export default store