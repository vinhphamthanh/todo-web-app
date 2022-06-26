import AppStore from '../../../store';
import TodoList from '../todo-list';

const { store } = AppStore;

const todo = {
	id: 1,
	title: 'Cypress.io in todo list',
	createdAt: 242342342,
	completed: true
}

describe('ToDoList', function () {
	it('should mount component without any Todo task', () => {
		cy.mount(<TodoList todos={[]} />, { reduxStore: store });

		cy.contains('TODO List')
		cy.contains('You do not have any item to do.')
	});

	it('should have one completed ToDo task in list', () => {
		cy.mount(<TodoList todos={[todo]} onComplete={cy.spy().as('onCompleteSpy')} />, { reduxStore: store });
		cy.contains('Cypress.io in todo list')
		cy.get('[type="checkbox"]').uncheck({ force: false })
		cy.get('@onCompleteSpy').should('have.been.called.with', 1)
	})
});
