import * as React from 'react'
import { useParams } from 'react-router-dom'

const Diary: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  return <div className="diary-container">日记详情:{id}</div>
}

export default Diary
