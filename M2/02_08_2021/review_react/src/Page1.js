import React from 'react'
import {Link} from 'react-router-dom'

export default function Page1() {
  return (
    <div>
      <h1>Page 1</h1>
      <Link to='/pagina2'>Pagina 2</Link>
    </div>
  )
}
