import { createSlice } from "@reduxjs/toolkit";


//create Slice is created in the name of AllValues and is imported
const allValues=createSlice({
    //the slice is named
    name:"valuesContainer",
    initialState:{
        //data object is created with the initial values
        data:{
             productImg:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846367180",
             productName:"Samsung Universe 9",
             productDescription:"Samsung's new variant which goes beyond Galaxy to the Universe",
             productRating:"4.09",
             productPrice:1249,
             productDiscount:15.46, 
        },
         //values object is created with the initial values
        values:{
             cart:0,
             productStock:36,
             subTotal:0,
             total:0,
             saved:0,
        }
             
    },
    reducers:{
        //totalCalculation reducer calculates the final price of the item by calculating the subtotal with the discount percentage
       totalCalculation:(state,action)=>{
        const a=state.data.productDiscount/100;
        const b=state.values.subTotal*a;
        const c=Math.floor(state.values.subTotal-b);
        state.values.saved=Math.floor(b);
        state.values.total=c;
       },
       //cartDecrement reducer reduces the items in cart and increases the stock count and calculates the subTotal according to its quantity
       cartDecrement:(state,action)=>{
        if(state.values.cart!=0){
            state.values.cart-=1;
            state.values.productStock+=1;
            state.values.subTotal-=1249;
        }
       },
       //cartIncrement reducer increases the items in cart and decreases the stock count and calculates the subTotal according to its quantity
       cartIncrement:(state,action)=>{
        if(state.values.productStock!=0){
            state.values.cart+=1;
            state.values.productStock-=1;
            state.values.subTotal+=1249;
        }
       }
    }
})
//reducers is destructured and exported from allValues
export const{cartIncrement,cartDecrement,totalCalculation}=allValues.actions;
//allValues is exported by default
export default allValues.reducer;