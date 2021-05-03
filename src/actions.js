
import { ADD_REMINDER, DELETE_REMINDER, DELETE_ALL_REMINDERS } from './component';
export const addReminder = (text,text1,text2, dueDate) => {
    const action = {
      type: ADD_REMINDER,
      text,
      text1,
      text2,
      dueDate
    };
    return action;
  }
  // export const updateReminder = (text,text1,text2) => {
  //   const action = {
  //     type: UPDATE_REMINDER,
  //     text,
  //     text1,
  //     text2
  //   };
  //   return action;
  // }
  
  export const deleteReminder = (id) => {
    const action = {
      type: DELETE_REMINDER,
      id
    };
    return action;
  }
  
  export const deleteAllReminders = () => {
    const action = {
      type: DELETE_ALL_REMINDERS,
    };
    return action;
  }
  