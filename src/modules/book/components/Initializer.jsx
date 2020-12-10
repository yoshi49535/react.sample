import React from "react"

/**
 * Initialize data and provide Provider
 * This might be connected component with redux
 */
export const Initialize = ({ children }) => {
  // do your initialize here.
  // If use redux, then initialize at here
  
  const data = [{ id: 1, title: "Hello, World"}]

  return (
    <Context.Provider value={{ data }}>
      { children }
    </Context.Provider>
  )
}
