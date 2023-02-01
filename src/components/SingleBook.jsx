import { Component } from "react";
import { Card } from "react-bootstrap";

/*function SingleBook({book}) {
  
  return  (  
  <Card >
    <Card.Img variant="top" src={book} />
  </Card> )
}*/

class SingleBook extends Component {
  state = {
    selectedBook: false,
  };
  render(book) {
    return (
      <Card>
        <Card.Img variant="top" src={book} />
      </Card>
    );
  }
}

export default SingleBook;
