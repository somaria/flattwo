import React from 'react'
import _ from 'lodash'
import moment from 'moment'

interface DataProps {
  id: number
  clazz_name: string
  student_name: string
  answers: [{ emotion: number }, { emotion: number }]
  created_at: string
}

interface Dictionary<T> {
  [Key: string]: T
}

const dataone: DataProps[] = [
  {
    id: 1,
    clazz_name: '1A',
    student_name: 'john',
    answers: [{ emotion: 3 }, { emotion: 9 }],
    created_at: '2022-01-19T09:13:42.149+08:00',
  },
  {
    id: 2,
    clazz_name: '1A',
    student_name: 'mike',
    answers: [{ emotion: 4 }, { emotion: 12 }],
    created_at: '2022-01-17T09:13:42.149+08:00',
  },
  {
    id: 3,
    clazz_name: '1B',
    student_name: 'judy',
    answers: [{ emotion: 2 }, { emotion: 10 }],
    created_at: '2022-02-19T09:13:42.149+08:00',
  },
  {
    id: 4,
    clazz_name: '1B',
    student_name: 'sara',
    answers: [{ emotion: 5 }, { emotion: 11 }],
    created_at: '2022-02-19T09:13:42.149+08:00',
  },
]

const App = () => {
  const datatwo = _.sortBy(dataone, 'created_at').reverse()
  console.log(datatwo)

  return (
    <div className='mx-auto mx-32 p-16'>
      {datatwo.map((item) => (
        <>
          <div>{item.student_name}</div>
          <div>{item.answers[0].emotion}</div>
        </>
      ))}
    </div>
  )
}

export default App
