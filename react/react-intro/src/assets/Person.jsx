//rafce
import React from 'react'

const Person = () => {
  return (
    <div
    style={{border:'2px solid white'}}>
        <img
        style={{
            height:"400px",
            width:"400px",
            objectFit:"cover",

        }}
        src="https://imgs.search.brave.com/ZukPbZaBE3zrslLG-VtrPmEspewBILLeK1AIYNitezU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzYwLzM1LzI4/LzM2MF9GXzM2MDM1/Mjg0OF83c2FvczZK/ZUFya1hBc0xoZkkz/TkVZT3JiVmF2a0hw/aC5qcGc" 
        alt="world" 
        />

        <h5>nice to meet ya</h5>
    </div>
  )
}

export default Person;