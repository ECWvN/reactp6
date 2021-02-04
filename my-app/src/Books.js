import React from 'react'
import Book from './Book'

const booklist =[
    {title: 'boek1'},{title:'boek2'}
]


export default function Books(){
    return (
        <ul>
         {booklist.map(book => <book title={book.title}/>)}

        </ul>
    )
  }
