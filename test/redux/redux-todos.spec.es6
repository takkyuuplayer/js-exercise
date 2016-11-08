import assert from 'power-assert';
import Immutable from 'immutable';

const todos = (state = Immutable.List(), action) => {
  switch (action.get('type')) {
    case 'Add_TODO':
      return state.push({
        id: action.get('id'),
        text: action.get('text'),
        completed: false
      });
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
