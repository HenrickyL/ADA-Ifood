import { useState } from "react"
import { Card } from "./_components/Cards"
import { IProduct } from "./assets/data"


const mockProduct: IProduct = {
    id: 2,
    name: "Latte Encantado",
    description: "A poção da criatividade.",
    price: 8.00,
    discountPercentage: 20,
    img: '2.PNG'
  }


function App() {
  const [product, setProduct]=useState(mockProduct)
  return (
    <>
     <Card product={product}/>
    </>
  )
}

export default App
