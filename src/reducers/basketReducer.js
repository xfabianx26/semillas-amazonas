import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT  } from "../actions/types";

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        foto1:{
            name: "Temperatura media de 12-18ºC",
            tagName: 'foto1',
            price: 60.000,
            numbers: 0,
            inCart: false
        },
        foto2:{
            name: "Temperatura media de 12-18ºC",
            tagName: 'foto2',
            price: 60.000,
            numbers: 0,
            inCart: false
        },
        foto3:{
            name: "Temperatura media de 12-18ºC",
            tagName: 'foto3',
            price: 60.000,
            numbers: 0,
            inCart: false
        },
        foto4:{
            name: "Temperatura media de 12-18ºC",
            tagName: 'foto4',
            price: 60.000,
            numbers: 0,
            inCart: false
        },
        foto5:{
            name: "Temperatura media de 12-18ºC",
            tagName: 'foto5',
            price: 80.000,
            numbers: 0,
            inCart: false
        },
        foto6:{
            name: "Temperatura media de 12-18ºC",
            tagName: 'foto6',
            price: 110.000,
            numbers: 0,
            inCart: false
        },
        foto7:{
            name: "Temperatura media de 12-18ºC",
            tagName: 'foto7',
            price: 110.000,
            numbers: 0,
            inCart: false
        },
        foto8:{
            name: "Temperatura media de 12-18ºC",
            tagName: 'foto8',
            price: 70.000,
            numbers: 0,
            inCart: false
        },
        foto9:{
            name: "Temperatura media de 12-18ºC",
            tagName: 'foto9',
            price: 130.000,
            numbers: 0,
            inCart: false
        },
        foto10:{
            name: "Temperatura media de 12-18ºC",
            tagName: 'foto10',
            price: 60.000,
            numbers: 0,
            inCart: false
        },
        foto11:{
            name: "Temperatura media de 12-18ºC",
            tagName: 'foto11',
            price: 87.000,
            numbers: 0,
            inCart: false
        },
        foto12:{
            name: "Temperatura media de 12-18ºC",
            tagName: 'foto12',
            price: 90.000,
            numbers: 0,
            inCart: false
        }
    }

}

export default (state = initialState, action) => {
    let productSelected = "";
    switch(action.type){
        case ADD_PRODUCT_BASKET:
            productSelected = { ...state.products[action.payload]}
            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);
            return{
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
         case INCREASE_QUANTITY:
             productSelected =  { ...state.products[action.payload]}
             productSelected.numbers += 1;
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case DECREASE_QUANTITY:
            productSelected =  { ...state.products[action.payload]};
            let newCartCost = 0;
            let newBasketNumbers = 0;
            if(productSelected.numbers === 0){
                productSelected.numbers = 0;
                newCartCost = state.cartCost 
                newBasketNumbers = state.basketNumbers
            }else{
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price
                newBasketNumbers = state.basketNumbers -1
            }
            return {
                ...state,
                basketNumbers:  newBasketNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
            
            case CLEAR_PRODUCT:
                productSelected =  { ...state.products[action.payload]};
                let numbersBackup = productSelected.numbers;
                productSelected.numbers = 0;
                productSelected.inCart = false;
                return {
                    ...state,
                     basketNumbers: state.basketNumbers - numbersBackup,
                    cartCost: state.cartCost - (numbersBackup * productSelected.price ),
                    products: {
                        ...state.products,
                        [action.payload]: productSelected
                    }

                }

            
        default:
            return state;
    }
}