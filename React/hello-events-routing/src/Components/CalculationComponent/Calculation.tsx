import { useState } from "react"

export const CalculationComponent:React.FC = () => {

    /* This component will take in 2 values to calculate a hypontenuse 
    We'll store each value and the calculation's result as state variables*/
    const [sideA, setSideA] = useState<number>(0)
    const [sideB, setSideB] = useState<number>(0)
    const [result, setResult] = useState<number>(0)

    //TODO: function to store the side values
    const storeValues = () => {
        
    }

    //TODO: function to do the calculation and render it
    const calculate = () => {

    }

    return(
        <div className="input-container">
            
            <h3>Calculation Component</h3>

            <input type="number" name="SideA" onChange={storeValues}/>
            <input type="number" name="SideB" onChange={storeValues}/>

        </div>
    )

}