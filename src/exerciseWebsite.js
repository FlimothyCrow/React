import React from "react";
import { doubleSort } from "./reduce.js";
import CreateDate from "./createDate";
import AddExercise from "./addExercise.jsx";

class ExerciseWebsite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableOfItems: JSON.parse(localStorage.getItem("tableOfItems") || "{}"),
      showCreate: false,
    };
  }


  saveLocally() {
    localStorage.setItem(
      "tableOfItems",
      JSON.stringify(this.state.tableOfItems)
    );
  }

  deleteStorage() {
    localStorage.setItem("tableOfItems", "{}");
  }

  addToList(input) {
    this.state.tableOfItems[input] = [];
    this.saveLocally();
    this.setState({ tableOfItems: this.state.tableOfItems, showCreate: false });
  }

  columnTotals(exercises, header) {
    return exercises.reduce((acc, next) => acc + parseInt(next[header]), 0);
  }

  addToDate(exerciseObject, date) {
    var target = this.state.tableOfItems[date];
    exerciseObject.total =
      exerciseObject.sets * exerciseObject.reps * exerciseObject.weight;
    this.state.tableOfItems[date] = target.concat([exerciseObject]);
    this.saveLocally();
    this.setState({ tableOfItems: this.state.tableOfItems });
  }

  deleteExercise(date, exerciseIdx) {
    this.state.tableOfItems[date].splice(exerciseIdx, 1);
    this.saveLocally();
    this.setState({ tableOfItems: this.state.tableOfItems });
  }

  deleteDate(date) {
    delete this.state.tableOfItems[date];
    this.saveLocally();
    this.setState({ tableOfItems: this.state.tableOfItems, showCreate: false });
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ showCreate: !this.state.showCreate });
          }}
        >
          Create new entry
        </button>
        <button
          onClick={() => {
            this.deleteStorage();
            this.setState({ tableOfItems: {} });
          }}
        >
          Delete local storage
        </button>
        {this.state.showCreate && (
          <CreateDate addToList={(newObject) => this.addToList(newObject)} />
        )}

        {Object.entries(this.state.tableOfItems).map(([date, exercises]) => {
          // day === 1, index === 0th
          return (
            <>
              <table style={{width:"90%", maxWidth:"90%"}}>
                <tbody>
                  <tr>
                    <th>date</th>
                    <th>exercise</th>
                    <th>sets</th>
                    <th>reps</th>
                    <th>weight</th>
                    <th>total</th>
                    <th>add</th>
                    <th>delete</th>
                  </tr>
                  <tr key={date + "text"}>
                    <td>{date}</td>

                    <AddExercise
                      addExerciseFn={(newObject) => {
                        this.addToDate(newObject, date);
                      }}
                    />
                    <td>
                      <button
                        className="warningColor"
                        onClick={() => this.deleteDate(date)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                  {exercises &&
                    exercises.map((exercise, exerciseIdx) => {
                      return (
                        <tr key={exerciseIdx + "string"}>
                          <td>{date}</td>
                          <td>{exercise.description}</td>
                          <td>{exercise.sets}</td>
                          <td>{exercise.reps}</td>
                          <td>{exercise.weight}</td>
                          <td>{exercise.total}</td>
                          <td bgcolor="white"></td>
                          <td>
                            <button
                              className="warningColor"
                              onClick={() =>
                                this.deleteExercise(date, exerciseIdx)
                              }
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  <tr>
                    <td>totals</td>
                    <td bgcolor="white"></td>
                    <td>{this.columnTotals(exercises, "sets")}</td>
                    <td>{this.columnTotals(exercises, "reps")}</td>
                    <td>{this.columnTotals(exercises, "weight")}</td>
                    <td>{this.columnTotals(exercises, "total")}</td>
                    {this.columnTotals(exercises, "total") > 255 
                    ? <td bgcolor="green"></td> 
                    : <td bgcolor="red"></td>   
                    }
                    <td bgcolor="white"></td>
                    
                  </tr>
                </tbody>
              </table>
            </>
          );
        })}
      </>
    );
  }
}
export default ExerciseWebsite;
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

// const returnedTarget = Object.assign(target, source);

// line 79, if you want multiple function calls within a thiccboi, you have to {} each statement

// localStorage can only accept strings
// why not edit a previous entry?

// line 69 > should createDate have a built in <td> for a daily total?

// sets and reps prints are swapped
// we added a variable in exerciseObject for total weight so we can concat on the header row?
// how about when we call addExercise, it pushes the total into the state var dailyTotal ?
// we need addExercise to calculate total BEFORE the render

// props is a way of saying parameters to a child fragment
// 96 render React child component

// button to collapse each table
// state variable = [{date:false}]
