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

  // store momentaneo della stringa dell'input
  currentSelectedCategories: null,
  // array dei filtri selezionati
  selectedCategories: [],
  // array dei ristoranti recuperati con axios
  restaurants: [],
  cart: [],
  restaurantID: null,
})



export default store