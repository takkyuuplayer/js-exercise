import Immutable from 'immutable';

const todo = (state, action) => {
  switch (action.type) {
    case 'Add_TODO':
      return Immutable.Map({
        id: action.id,
        text: action.text,
        completed: false
      });
 case 'Toggle_TODO':
   return state.get('id') === action.id
     ?  state.set('completed', !state.get('completed'))
     : state;
 default:
   return state;
  }
};

const todos = (state = Immutable.List(), action) => {
  switch (action.type) {
    case 'Add_TODO':
      return state.push(todo(undefined, action));
    case 'Toggle_TODO':
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};

export default todos;
