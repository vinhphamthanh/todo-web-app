import { Loading } from '../loading';
import AppStore from '../../../store';
import AppSlices from '../../../store/reducers'

const { store } = AppStore;
const { ExtraSlice: { setLoading }} = AppSlices;

describe('Loading', () => {
	it('should not show loading state', () => {
		cy.mount(<Loading />, { reduxStore: store })
	});

	it('should show loading state', () => {
		store.dispatch(setLoading(true));

		cy.mount(<Loading />, { reduxStore: store });
	})
})
