import React from "react"

import { Context as ReferenceContext } from "../Context"

/**
 * Property Consumer
 */
const Consumer = ({ loading: Loading = DefaultLoading, children }) => (
  <ReferenceContext.Consumer>
    { ({ book }) => {
      if (!entry) {
        return <Loading />
      }

      return children(entry)
    }}
  </ReferenceContext.Consumer>
)


/**
 * Property only reference the property value, and pass the value into Renderer component which can be specified on render.
 *
 * ```
 * <Properties.Id
 *  render={ ({ value }) => (
 *    <p>{ value }</p>
 *  )}
 * >
 * ```
 */
export const Id = ({ render: Renderer = Renderers.TextRenderer, ...props }) => (
  <Consumer {...props}>{ ({ id: value }) => (
    <Renderer value={value} {...props} />
  )}</Consumer>
)

const TextRenderer = ({ value, className }) => (<span className={ className }>{ value }</span>)
