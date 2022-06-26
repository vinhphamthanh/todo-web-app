import App from '../App';
import AppStore from '../store/index'

const { store } = AppStore;

describe('<App />', function () {
	it('mounts the App to page', () => {
		cy.mount(<App />, { reduxStore: store });
	});
});
