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
          "category": "Mexican"
        },
        {
          "name": "Greek Taverna",
          "category": "Greek"
        },
        {
          "name": "Burger Joint",
          "category": "American"
        },
        {
          "name": "French Bistro",
          "category": "French"
        },
        {
          "name": "Thai Spice",
          "category": "Thai"
        },
        {
          "name": "Steakhouse Grill",
          "category": "Steakhouse"
        },
        {
          "name": "Vegetarian Garden",
          "category": "Vegetarian"
        },
        {
          "name": "Seafood Shack",
          "category": "Seafood"
        },
        {
          "name": "Korean BBQ",
          "category": "Korean"
        },
        {
          "name": "Mediterranean Delights",
          "category": "Mediterranean"
        },
        {
          "name": "Brazilian Churrasco",
          "category": "Brazilian"
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
          "category": "Cajun/Creole"
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
})

export default store