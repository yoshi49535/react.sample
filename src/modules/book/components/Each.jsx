import React from "react"

import { Provider as ReferenceProvider } from "./Reference"

/**
 * This might be connected component with redux or Wrapped by Context.Consumer to provide data
 */
export const Each = ({ children }) => {
  <Context.Consumer>{ ({ data }) => {
    <>{data.map(entry => (
      <ReferenceProvider key={entry.id} book={ entry }>
        { children(entry) }
      </ReferenceProvider>
    ))}</> 
  }}</Context.Consumer>
}
