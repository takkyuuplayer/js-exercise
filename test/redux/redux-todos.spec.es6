import assert from 'power-assert';
import Immutable from 'immutable';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutablejs';

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

describe("AddTodo", () => {
  const stateBefore = Immutable.List();
  const action = Object.freeze({
    type: 'Add_TODO',
    id: 0,
    text: 'Learn Redux'
  });

  it('can add todo item', () => {
    assert.deepEqual(todos(stateBefore, action).toJS(), [{
      id: 0,
      text: 'Learn Redux',
      completed: false
    }]);
  });
});

describe('ToggleTodo', () => {
  const stateBefore = Immutable.fromJS([
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: true,
    }
  ]);
  const action = Object.freeze({
    type: 'Toggle_TODO',
    id: 1
  });

  it('can toggle completed status', () => {
    assert.deepEqual(todos(stateBefore, action).toJS(), [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false,
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: false,
      }]);
  });
});

const visivilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};
const todoApp = combineReducers({todos, visivilityFilter});

describe('combineReducers', () => {
  describe('combineReducers of redux-immutablejs', () => {
    const store = createStore(todoApp);
    it('can combine reducers', () => {
      store.dispatch(Object.freeze({
        type: 'Add_TODO',
        id: 0,
        text: 'Learn Redux'
      }));

      assert.deepEqual(store.getState().toJS(), {
        todos: [{
          id: 0,
          text: 'Learn Redux',
          completed: false
        }],
        visivilityFilter: 'SHOW_ALL'
      });

      store.dispatch(Object.freeze({
        type: 'Add_TODO',
        id: 1,
        text: 'Go shopping'
      }));

      assert.deepEqual(store.getState().toJS(), {
        todos: [
          {
            id: 0,
            text: 'Learn Redux',
            completed: false
          },
          {
            id: 1,
            text: 'Go shopping',
            completed: false
          }
        ],
        visivilityFilter: 'SHOW_ALL'
      });

      store.dispatch(Object.freeze({
        type: 'Toggle_TODO',
        id: 1,
      }));

      assert.deepEqual(store.getState().toJS(), {
        todos: [
          {
            id: 0,
            text: 'Learn Redux',
            completed: false
          },
          {
            id: 1,
            text: 'Go shopping',
            completed: true
          }
        ],
        visivilityFilter: 'SHOW_ALL'
      });

      store.dispatch(Object.freeze({
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_ACTIVE',
      }));

      assert.deepEqual(store.getState().toJS(), {
        todos: [
          {
            id: 0,
            text: 'Learn Redux',
            completed: false
          },
          {
            id: 1,
            text: 'Go shopping',
            completed: true
          }
        ],
        visivilityFilter: 'SHOW_ACTIVE'
      });
    });
  });
  describe('combineReducers from scratch', () => {
    const combineReducers2 = (reducers) => {
      return (state = Immutable.Map({}), action) => Object.keys(reducers).reduce(
        (nextState, key) => nextState.set(key, reducers[key](state.get(key), action)),
        Immutable.Map({})
      );
    };
    const todoApp2 = combineReducers2({todos, visivilityFilter});
    const store = createStore(todoApp2);
    it('can combine reducers', () => {
      store.dispatch(Object.freeze({
        type: 'Add_TODO',
        id: 0,
        text: 'Learn Redux'
      }));

      assert.deepEqual(store.getState().toJS(), {
        todos: [{
          id: 0,
          text: 'Learn Redux',
          completed: false
        }],
        visivilityFilter: 'SHOW_ALL'
      });
    });
  });
});
