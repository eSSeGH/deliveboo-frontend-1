import { reactive } from 'vue'

const store = reactive({
    restaurants: [
        {
          "name": "Indian Delights",
          "category": "Indian"
        },
        {
          "name": "Pizza Paradise",
          "category": "Italian"
        },
        {
          "name": "Sushi House",
          "category": "Japanese"
        },
        {
          "name": "Dragon Wok",
          "category": "Chinese"
        },
        {
          "name": "Mexican Fiesta",
          "category": "Chinese"
        },
        {
          "name": "Greek Taverna",
          "category": "Spanish"
        },
        {
          "name": "Burger Joint",
          "category": "Indian"
        },
        {
          "name": "French Bistro",
          "category": "French"
        },
        {
          "name": "Thai Spice",
          "category": "Indian"
        },
        {
          "name": "Steakhouse Grill",
          "category": "Steakhouse"
        },
        {
          "name": "Vegetarian Garden",
          "category": "Japanese"
        },
        {
          "name": "Seafood Shack",
          "category": "Spanish"
        },
        {
          "name": "Korean BBQ",
          "category": "Korean"
        },
        {
          "name": "Mediterranean Delights",
          "category": "Italian"
        },
        {
          "name": "Brazilian Churrasco",
          "category": "Spanish"
        },
        {
          "name": "Vietnamese Pho",
          "category": "Vietnamese"
        },
        {
          "name": "Spanish Tapas",
          "category": "Spanish"
        },
        {
          "name": "Cajun Creole",
          "category": "Japanese"
        },
        {
          "name": "Japanese Ramen",
          "category": "Japanese"
        },
        {
          "name": "Italian Trattoria",
          "category": "Italian"
        }
    ],
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
})

export default store