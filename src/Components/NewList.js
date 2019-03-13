import React,{Component} from 'react';
import "./NewList.css";

class NewList extends Component {

  render() {
     let showHideClassName;
    if (this.props.showNewList) {
      showHideClassName = "modal display-block";
    } else {
      showHideClassName = "modal display-none";
    }
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
         {this.props.children}
          <div className="modal-footer">
            <button className="AddTask" onClick={this.props.handleAddTask}>
              <strong>Add Task</strong>
            </button>
          </div>
          </section>
        
      </div>
    );
  }
}


export default NewList;

