import React from "react";

class CreateDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
    };
  }


  addDate(title, type) {
    return (
      <>
        <div>
          <label htmlFor={title}>{title}</label>
          <input
            id={title}
            type={type}
            value={this.state[title]}
            onChange={(event) => this.setState({ [title]: event.target.value })}
          />
        </div>
      </>
    );
  }


  render() {
    return (
      <>
        {this.addDate("date", "text")}

        <div>
          <button onClick={() => this.props.addToList(this.state.date)}>Add</button>
        </div>
      </>
    );
  }
}

export default CreateDate;
