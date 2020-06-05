import React from 'react';


class CreateNewFragment extends React.Component {
  constructor(props){
        super(props);
        this.state = {date:"", exercise:"", sets:"",
                                 reps:"", weight:"", doneness:false}
  }

  clearFields(){
    this.setState({date:"", exercise:"", sets:"", reps:"", weight:""})
  }

  render(){

    return (
    <>

    <div>
    <label for="date">Date</label>
    <input id="date" type="text" value={this.state.date}
      onChange={(event) => this.setState({date:event.target.value})}/>
    </div>

    <div>
    <label for="exercise">exercise</label>
    <input id="exercise" type="text" value={this.state.exercise}
      onChange={(event) => this.setState({exercise:event.target.value})}/>
    </div>

    <div>
    <label for="reps">reps</label>
    <input id="reps" type="text" value={this.state.reps}
      onChange={(event) => this.setState({reps:event.target.value})}/>
    </div>

    <div>
    <label for="sets">sets</label>
    <input id="sets" type="text" value={this.state.sets}
      onChange={(event) => this.setState({sets:event.target.value})}/>
    </div>

    <div>
    <label for="weight">weight</label>
    <input id="weight" type="text" value={this.state.weight}
      onChange={(event) => this.setState({weight:event.target.value})}/>
    </div>

    <div>
    <button onClick={() => this.props.addToList(this.state)}>Add</button>
    <button onClick={() => this.clearFields()}>Clear</button>
    </div>

    </>);
    }
  }

export default CreateNewFragment
