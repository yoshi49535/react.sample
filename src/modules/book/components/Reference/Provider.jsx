import React from "react"

import { Context } from "./Context"

/**
 * Wrapped Provider that provide a specified data from reference or id.
 */
export const Provider = connect(
  (state, props) => ({
    book: props.book ? props.book: selectors.selectEntryById(props.id),
  }),
)(({ entry, children }) => {
  
  return (
    <Context.Provider value={ book }>
      { children }
    </Context.Provider>
  )
})
