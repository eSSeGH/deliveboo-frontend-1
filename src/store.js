import { reactive } from 'vue'

const store = reactive({
  orders: [
    {
      "name": "Pizza margherita prova testo più lungo",
      "price": 10,
      "quantity": 2
    },
    {
      "name": "Kebuz",
      "price": 5,
      "quantity": 3
    },
    {
      "name": "Nigiri al Salmone",
      "price": 14,
      "quantity": 7
    }
  ],

  currentSelectedCategories: null,
  selectedCategories: [],
  restaurants: [],
  cart: [],
  
})



export default store