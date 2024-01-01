import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProfliePage() {
  const [ id ] = useParams()
  const [ item, useItem ] = useState('')

  useEffect (() =>{
    // const fetchData
  })
  return (
    <div>

    </div>
  )
}

export default ProfliePage