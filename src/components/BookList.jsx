import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import SingleBook from "./SingleBook";


function BooksList({books}) {
  return (
    <div>
      <CardColumns>
      {books.map((book) => {
        return (

          <Card key={book.asin} style={{ width: "18rem" }}>
            <Card.Img onClick={() => {console.log('Clicked!')}} variant="top" src={book.img} />
            <SingleBook book={book}/>
         
          </Card>
          
        );
   
      })}
      
      </CardColumns>
    </div>

  );
}

export default BooksList;
