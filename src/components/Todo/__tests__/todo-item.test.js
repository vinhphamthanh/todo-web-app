import AppStore from '../../../store';
import ToDoItem from '../todo-item';

const { store } = AppStore;

const item = {
	id: 1,
	title: 'Cypress.io',
	createdAt: 123434343,
	completed: false,
};

describe('ToDoItem', () => {
	it('should mount the component and then complete task', () => {
		const onCompleteSpy = cy.spy().as('onCompleteSpy');

		cy.mount(<ToDoItem item={item} onComplete={onCompleteSpy}/>, { reduxStore: store });
		cy.get('[type="checkbox"]').click();
		cy.get('@onCompleteSpy').should('have.been.called.with', 1);
	});

	it('should mount the component and then delete task', () => {
		const onDeleteSpy = cy.spy().as('onDeleteSpy');

		cy.mount(<ToDoItem item={item} onDelete={onDeleteSpy}/>, { reduxStore: store });
		cy.get('button').click();
		cy.get('@onDeleteSpy').should('have.been.called.with', 1);
	});
});
