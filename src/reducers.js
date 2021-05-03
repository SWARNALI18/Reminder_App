
import { ADD_REMINDER, DELETE_REMINDER, DELETE_ALL_REMINDERS } from './component';
import { bake_cookie, read_cookie } from 'sfcookies';
const reminder = (action) => {
    return {
      id: Math.random(),
      text: action.text,
      text1: action.text1,
      text2: action.text2,
      dueDate: action.dueDate
    }
  }
  // const updateById = (action) => {
  //   return {
  //     id: Math.random(),
  //     text: action.text,
  //     text1: action.text1,
  //     text2: action.text2,
     
  //   }
  // }
  
  const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    return reminders;
  }
  
  const removeAll = (state) => {
    const reminders = [];
    return reminders;
  }
  
  const reminders = (state = [], action) => {
    let reminders = null;
    state = read_cookie('reminders');
    switch (action.type) {
      case ADD_REMINDER:
        reminders = [...state, reminder(action)];
        bake_cookie('reminders', reminders);
        return reminders;
        // case UPDATE_REMINDER:
        // reminders =updateById(state, action.id);
        // bake_cookie('reminders', reminders);
        // return reminders;
      case DELETE_REMINDER:
        reminders = removeById(state, action.id);
        bake_cookie('reminders', reminders);
        return reminders;
      case DELETE_ALL_REMINDERS:
        reminders = removeAll(state);
        bake_cookie('reminders', reminders);
        return reminders;
      default:
        return state;
    }
  }
  
  export default reminders;
  