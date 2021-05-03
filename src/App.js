import React,{Component} from 'react';
import './App.css';
import fire from './fire';
import 'bootstrap/dist/css/bootstrap.min.css';
import transporter from './components/mail';
//import ContactUs from './components/contactForm';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder, deleteAllReminders } from './actions';
import moment from 'moment';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      text1:'',
      text2:'',
      dueDate: ''
    };
  }

  addReminder() {
    this.props.addReminder(this.state.text, this.state.text1,this.state.text2,this.state.dueDate);
    this.setState({text: '',text1: '',text2: '' ,dueDate: ''})
  }
  //  updateReminder(){
  //   this.props.updateReminder(this.state.text, this.state.text1,this.state.text2);
  //   this.setState({text: this.state.text,text1: this.state.text1,text2: this.state.text2})
  // }
// addReminder=e=>{
//   let msgref=fire.datebase().ref('msg').orderByKey().limitToLast(100);
//   fire.database().ref('msg').push(this.state.text,this.state.text1,this.state.text2,this.state.dueDate);
// }ok no problem


  deleteReminder(id){
    this.props.deleteReminder(id);
  }
 

  deleteAllReminders(){
    this.props.deleteAllReminders();
  }

  renderClearButton() {
    const { reminders } = this.props;
    if(reminders.length !== 0){
      return(
        <button
          className="btn btn-danger"
          onClick = {() => this.deleteAllReminders()}
        >
          Clear Reminders
        </button>
      );
    }
    else{
      return(
        <button
          className="btn btn-danger disabled"
          >
          Clear Reminders
        </button>
      );
    }
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-md-4 col-sm-9 col-xs-10">
        {
          reminders.map((reminder) => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div>{reminder.text1}</div>
                  <div>{reminder.text2}</div>
                  <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>
                {/* <button className="list-item update-button"
                  onClick = {() => this.updateReminder(reminder.text,reminder.text1,reminder.text2)}
                  >
                  update
                </button> */}
                <button className="list-item delete-button" 
                  onClick = {() => this.deleteReminder(reminder.id)}
                  >
                  &#x2715;
                </button>
              </li>
            )
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          Reminder App
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
          <input
              className="form-control"
              placeholder="name"
              value = {this.state.text}
              onChange = {event => this.setState({text: event.target.value})}
            />
            <input
              className="form-control"
              placeholder="xyz@gmail.com"
              value = {this.state.text1}
              onChange = {event => this.setState({text1: event.target.value})}
            />
            <input
              className="form-control"
              placeholder="I have to..."
              value = {this.state.text2}
              onChange = {event => this.setState({text2: event.target.value})}
            />
            <input
              className="form-control"
              type="datetime-local"
              value={this.state.dueDate}
              onChange = {event => this.setState({dueDate: event.target.value})}
            />
             
            <button
              className="btn btn-success"
              onClick = {() => this.addReminder()  }
            >
              Add Reminder
            </button>

          </div>
        </div>
        { this.renderReminders() }
        {this.renderClearButton()}
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({addReminder}, dispatch);
// }

function mapStateToProps(state) {
  return {
    reminders: state
  };
}

export default connect(mapStateToProps, {addReminder, deleteReminder, deleteAllReminders})(App);
