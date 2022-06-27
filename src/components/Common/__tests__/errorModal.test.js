import AppStore from '../../../store';
import extraReducer from '../../../store/reducers/extra.reducer';
import { ErrorModal } from '../errorModal';

const { store } = AppStore;

const { extraActions: { setError } } = extraReducer;

describe('Error Modal', () => {
	it('should mount the component', () => {
		cy.mount(<ErrorModal/>, { reduxStore: store });
	});

	it('should shoud error Modal', () => {
		store.dispatch(setError('Cypress.io is testing the component'));

		cy.mount(<ErrorModal/>, { reduxStore: store });
	});
});
