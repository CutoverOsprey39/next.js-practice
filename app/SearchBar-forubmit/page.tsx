'use client';
import React, {useState, useEffect} from "react"
import SearchBar from "./SearchBar"


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
                {hasProducts ? <SearchBar products={productsState}/>: 'Loading products...'} 
                
            </div>
        
    )
    }