import React from "react";
import { doubleSort } from "./reduce.js";
import CreateNewFragment from "./createNewFragment";

class ColumnKata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableOfItems: JSON.parse(localStorage.getItem("tableOfItems") || "[]"),
      showCreate: false,
    };
  }
  addToList(input) {
    var newTable = this.state.tableOfItems.concat([input]);
    localStorage.setItem("tableOfItems", JSON.stringify(newTable));
    this.setState({ tableOfItems: newTable, showCreate: false });
  }

  removeFromList(index) {
    this.state.tableOfItems.splice(index, 1);
    localStorage.setItem(
      "tableOfItems",
      JSON.stringify(this.state.tableOfItems)
    );
    this.setState({ tableOfItems: this.state.tableOfItems });
  }

  render() {
    console.log("table", this.state.tableOfItems)
    return (
      <>
        <button
          onClick={() => {
            this.setState({ showCreate: !this.state.showCreate });
          }}
        >
          Create new entry
        </button>
        {this.state.showCreate && (
          <CreateNewFragment
            addToList={(newObject) => this.addToList(newObject)}
          />
        )}

        <table>
          <tbody>
            <tr>
              <th>date</th>
              <th>exercise</th>
              <th>reps</th>
              <th>sets</th>
              <th>weight</th>
              <th>total</th>
              <th></th>
            </tr>
            {doubleSort(this.state.tableOfItems).map((day, index) => {
              // day === 1, index === 0th
              return (
                <>
                  {day.exercises.map((exercise, exerciseIdx) => {
                    let date = undefined;
                    if (exerciseIdx === 0) {
                      date = <td rowSpan="2">{day.date}</td>;
                    }
                    return (
                      <>
                        <tr>
                          {date}
                          <td>{exercise.description}</td>
                          <td>{exercise.reps}</td>
                          <td>{exercise.sets}</td>
                          <td>{exercise.weight}</td>
                          <td>
                            {exercise.weight * exercise.sets * exercise.reps}
                          </td>
                          <td>
                            <button
                              className="warningColor"
                              onClick={() => this.removeFromList(index)}
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
export default ColumnKata;
// newObject (exercises:"", date:"")
// tableOfItems should be listOfObjects
// line 26 {day.date} {day.exercises}
// second input but single button to add both

// inputs on 17 and 20 generate object{newObject}
// button on 23 feeds newObject into addToList call
// line 23 value=() is default draw before input is initiated
// render function is always looping
// setState automatically calls a reRender

// line 67, passing a function as a lambda neeeds .bind(this) to preserve this data
// line 58 doesn't need it because thiccboi arrow preserves this data
// otherwise you'll get a "this" data not defined error

// what's the difference between semantic tags and semantic classses in CSS?

// what happens when we host a website?
// we run a tool in NPM that converts typescript > javascript
// the conversion code is executed on the development machine (PC)
// the end user is seeing it "hosted"
// the "server" in this case is our file system
// any file on the system is "served" to the browser

// Date
// exercises
// sets
// reps
// weight

// const returnedTarget = Object.assign(target, source);
// atom plugin rainbows parens
// line 79 && returns the second input
// line 79, if you want multiple function calls within a thiccboi, you have to {} each statement

// localStorage can only accept strings
// why not edit a previous entry?
