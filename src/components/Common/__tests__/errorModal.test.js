import { ErrorModal } from '../errorModal';
import AppStore from '../../../store'
import AppSlice from '../../../store/reducers'

const { store } = AppStore
const { ExtraSlice: { setError }} = AppSlice;

describe('Error Modal', () => {
	it('should mount the component', () => {
		cy.mount(<ErrorModal />, { reduxStore: store });
	});

	it('should shoud error Modal', () => {
		store.dispatch(setError('Cypress.io is testing the component'));

		cy.mount(<ErrorModal />, { reduxStore: store });
	})
})
