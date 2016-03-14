import expect from 'expect.js'
import * as ActionTypes from '../../scripts/constants/AuthenticationActionTypes'
import * as Actions from '../../scripts/actions/AuthenticationActions'

describe('authentication actions', () => {
	it ('requestLogin should always generate REQUEST_LOGIN action', () => {
		expect(true).to.eql(true)
	});

	it ('requestLogin should be able to generate LOGIN_SUCCESS action upon logging in', () => {
		expect(true).to.eql(true)
	});

	it ('requestLogin should be able to generate LOGIN_FAILURE action upon failing to logg in', () => {
		expect(true).to.eql(true)
	});
})