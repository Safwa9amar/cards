import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillUnmount() {
    return alert("delete all");
  }

  render() {
    if (this.props.data) {
      return (
        <article className="person">
          {this.props.data.map((person) => {
            const { id, name, age, image } = person;
            return (
              <ul key={id} className="List">
                <li>
                  <img src={image} alt={name} />
                </li>
                <li>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </li>
              </ul>
            );
          })}
        </article>
      );
    } else {
      return <h1>No data</h1>;
    }
  }
}
export default List;
