import AppStore from '../../../store';
import TodoInput from '../todo-input';

const { store } = AppStore;

const todo = {
	title: '',
};

describe('ToDoInput', function () {
	it('should mount the component', () => {
		cy.mount(<TodoInput todo={todo}/>, { reduxStore: store });
	});

	it('should input todo title with length less than 5 characters', () => {
		cy.mount(<TodoInput todo={todo}/>, { reduxStore: store });
		cy.get('[id="todo-id"]').type('abcd{enter}');
		cy.get('button[type="submit"]').should('be.disabled');
	});

	it('should input todo title with length greater than 5 characters', () => {
		cy.mount(<TodoInput todo={todo} onChange={cy.spy().as('onChangeSpy')}/>, { reduxStore: store });
		cy.get('[id="todo-id"]').type('abcdef{enter}');
		cy.get('@onChangeSpy').should('have.been.called.with', 6)
	});
});
