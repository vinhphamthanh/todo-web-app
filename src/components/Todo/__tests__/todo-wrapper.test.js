import { ToDoWrapper } from '../todo-wrapper';
import AppStore from '../../../store'

const { store } = AppStore;

describe('ToDoWrapper', function () {
	it('should mount component', () => {
		cy.mount(<ToDoWrapper />, { reduxStore: store })
	})
});
