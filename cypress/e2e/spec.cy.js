describe('ToDo Web Application', () => {
	it('should visit TODO page', () => {
		cy.visit('/');
	});

	it('should contain input', () => {
		cy.get('input[id=todo-id]');
	});

	it('should contain ADD submit button', () => {
		cy.get('[type="submit"]');
	});

	it('should add a TODO task', () => {
		cy.get('input[id=todo-id]').type('Add ToDo task by Cypress.io');

		cy.get('button[type=submit]').click();
	});

	it('should complete any TODO task', () => {
		cy.get('[type="checkbox"]').first().check();
	});

	it('should uncheck any TODO task that is already checked', () => {
		cy.get('[type="checkbox"]').last().uncheck();
	});

	it('should delete any TODO task', () => {
		cy.get('[type="button"]').last().click();
	});
});
