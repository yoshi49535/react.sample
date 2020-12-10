import React from "react"

import * as Books from "modules/book/components"
import * as Book from "modules/book/components/Reference"

export const BookList = () => (
  <Books.Initialize>
    <ul>
    <Books.Each>{ () => (
      <li><Book.Properties.Id/></li>
    )}</Books.Each>
    </ul>
  </Books.Initialize>
)
