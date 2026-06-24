import React from 'react'
import { useState } from "react";

const BMIcalculator = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [result, setResult] = useState("");

    const calculateBMI = () => {
    const bmi=weight / ((height / 100) ** 2);
    setResult(bmi.toFixed(2));
    };
  return (
    <>
    <div>
      <input
        type="number"
        placeholder="Height"
        onChange={(e) =>
          setHeight(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Weight"
        onChange={(e) =>
          setWeight(e.target.value)
        }
      />

      <button onClick={calculateBMI}>
        Calculate BMI
      </button>

      <h3>{result}</h3>
    </div>
    </>
  )
    }

export default BMIcalculator