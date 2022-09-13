import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

const QueryComponent = () => {
  // useQuery is a hook that takes in a function and an object
  const { data: dogData, isLoading, refetch } = useQuery(["dogAPI"], () => {  // you get different props for the query suh as loading, error, data, etc
    return Axios.get("https://dog.ceo/api/breeds/image/random").then((resp) => resp.data) // returns a Axios promise and stores just like one with useState
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "column",
      height: "100vh",
      width: "100vw"
    }}>
      <h1 style={{
        fontSize: "5rem",
        textDecoration: "underline yellow 18px",
        textTransform: "uppercase"
      }}>Love Animals</h1>
      <div>
        {/* you can use your fetched data directly */}
        <img style={{ height: "450px" }} src={dogData?.message} alt="Love Animals" />
      </div>
      <button style={{
        padding: "7px 17px",
        fontSize: "1.35rem",
        background: "none",
        border: "none",
        textDecoration: "underline yellow 7px",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "7px",
        cursor: "pointer"
      }} onClick={refetch}>See More</button>
    </div>
  )
}

export default QueryComponent