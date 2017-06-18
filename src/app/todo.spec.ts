import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Todo({
      title: 'wash the dishes',
      complete: true
    });
    expect(todo.title).toEqual('wash the dishes');
    expect(todo.complete).toEqual(true);
  });
});
 