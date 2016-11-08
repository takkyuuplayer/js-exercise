import assert from 'power-assert';
import Immutable from 'immutable';

const todo = (state, action) => {
  switch (action.get('type')) {
    case 'Add_TODO':
      return Immutable.Map({
        id: action.get('id'),
        text: action.get('text'),
        completed: false
      });
    case 'Toggle_TODO':
      return state.get('id') === action.get('id')
          ?  state.set('completed', !state.get('completed'))
          : state;
    default:
      return state;
  }
};
const todos = (state = Immutable.List(), action) => {
  switch (action.get('type')) {
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
  const action = Immutable.Map({
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
  const action = Immutable.Map({
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
