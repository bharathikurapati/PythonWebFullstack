import "./App.css";
import React from "react";
import Products from './Products';

export default function App() {
  const ProductListData = [
    {
     name: "Pure Cotton T Shirt",
     price: "449",
     discountedPrice: "350",
     discountedPercentages: "45%",
     brand: "Nike",
     ratings: "4.5",
     likes: "34.9"
    },
    {
     name: "Pure Cotton T1 Shirt",
     price: "449",
     discountedPrice: "350",
     discountedPercentages: "45%",
     brand: "United colors of Benetton",
     ratings: "4.5",
     likes: "34.9"
    },
    {
     name: "Pure Cotton T2 Shirt",
     price: "449",
     discountedPrice: "350",
     discountedPercentages: "45%",
     brand: "Puma",
     ratings: "4.5",
     likes: "34.9"
    },
    {
     name: "Pure Cotton T3 Shirt",
     price: "449",
     discountedPrice: "350",
     discountedPercentages: "45%",
     brand: "lives",
     ratings: "4.5",
     likes: "34.9"
    },
    {
     name: "Pure Cotton T4 Shirt",
     price: "449",
     discountedPrice: "350",
     discountedPercentages: "45%",
     brand: "Roadster",
     ratings: "4.5",
     likes: "34.9"
    }
   ];
   
    return (
      <div className="App">
        <Products productsData={ProductListData} />
  
      </div>
    );
  }
  
  


