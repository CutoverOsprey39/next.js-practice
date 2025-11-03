'use client';
import React, {useState, useEffect} from "react"
import Counter from "./count"
import SearchBar from "./SearchBar/SearchBar"


export default function Page() {

    const [productsState, setProductsState] = useState<string[]>([]);

    useEffect(() => {
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray)=>{
            const newProductsState = productsArray.map((product: { title: string }) => {
                return product.title;
            });
            setProductsState(newProductsState);
        });
    }, []);



            /*setProductsState([
                "Apple",
                "Banana",
                "Orange",
                "Mango",
                "Pineapple",
                "Grapes",
                "Strawberry",
                "Blueberry",
                "Watermelon",
                "Papaya"
            ])
        }, 2000); //simulating async data fetch timeout
    }, []);*/
    
    const hasProducts = productsState.length > 0; //conditional rendering based on productsState ? terinary operator (if statement for values in jsx) v

    return (
        <div>
            <div>
                <Counter incrementBy={1} decrementBy={1} buttonColor={'green'}/>
                <Counter incrementBy={2} decrementBy={2} buttonColor={'yellow'}/>
            </div>
            <div>
                {hasProducts ? <SearchBar products={productsState}/>: 'Loading products...'} 
                
            </div>
        </div>
    )
    }