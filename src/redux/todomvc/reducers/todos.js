import * as ActionTypes from '../constants/ActionTypes';

const initialState = [{
  text: 'Use Redux',
  id: 0,
  completed: false,
}];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [{
        id: state.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1,
        completed: false,
        text: action.text,
      },
        ...state,
      ];
    case ActionTypes.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case ActionTypes.EDIT_TODO:
      return state.map(todo => (todo.id === action.id
          ? Object.assign({}, todo, { text: action.text })
          : todo));
    case ActionTypes.COMPLETE_TODO:
      return state.map(todo => (todo.id === action.id
        ? Object.assign({}, todo, { completed: !todo.completed })
        : todo));

    case ActionTypes.COMPLETE_ALL: {
      const areAllCompleted = state.every(todo => todo.completed);
      return state.map(todo =>
        Object.assign({}, todo, { completed: !areAllCompleted }),
      );
    }

    case ActionTypes.CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}
