import {
  TOGGLE_TODO,
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  VisivilityFilters,
} from './todo-actions';

const initialState = {
  visibilityFilter: VisivilityFilters.SHOW_ALL,
  todos: [],
};

export function todoApp(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          }
        ]
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) =>
          index === action.index
            ? Object.assign({}, todo, { completed: !todo.completed })
            : todo
        ),
      });
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, { filter: action.filter });

    default:
      return state;
  }
}
