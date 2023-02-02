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
    selected: false
  }
  render() {
    return (

      <Card onClick={() => this.setState({ selected: !this.state.selected })}
      style={{ outline: this.state.selected ? '3px solid olive' : 'none' }}>
      <Card.Img variant="top" src={this.props.singleBook.img} />
      <Card.Body>
        <Card.Title>
          {this.props.singleBook.title}
        </Card.Title>
        ${this.props.singleBook.price}
      </Card.Body>
    </Card>

    );
  }
}

export default SingleBook;
