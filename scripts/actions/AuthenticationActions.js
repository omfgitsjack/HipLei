import { REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/AuthenticationActionTypes.js'
import { FACEBOOK, GOOGLE, LINKEDIN } from '../constants/AuthenticationProviderTypes'
import { pushPath } from 'redux-simple-router'

import * as FirebaseAuth from '../utilities/FirebaseAuth'
import * as FirebaseUser from '../utilities/FirebaseUser'
import * as LinkedInAuth from '../utilities/LinkedInAuth'
import * as AuthHandler from '../utilities/AuthHandler'
import * as Api from '../api/api'

// Action Creators
export function requestLogin(provider, subRoute) {
	return (dispatch, getState) => {
		dispatch({
			type: REQUEST_LOGIN
		});

		AuthHandler
			.login(provider)
			.then(authData => {
				dispatch(loginSuccess(authData, subRoute))
			})
			.catch(err => {
				dispatch(loginFailure(err))
			})
	}
}

export function logout() {
	return (dispatch, getState) => {
		AuthHandler.logout()
		dispatch({
			type: LOGOUT
		})
		dispatch(pushPath('/login'))
	}
}

function loginFailure(err) {
	return {
		type: LOGIN_FAILURE,
		message: err.message
	}
}

function loginSuccess(authData, subRoute) {
	return (dispatch, getState) => {
		FirebaseUser
		.readUserProfile(authData.uid)
		.then(profile => {

			if (!profile) {
				var newProfile;
				
				switch(authData.provider) {
					case GOOGLE:
						newProfile = writeGoogleProfile(authData, authData.uid, subRoute);
						break;
					case FACEBOOK:
						newProfile = writeFacebookProfile(authData, authData.uid, subRoute);
						break;
					case LINKEDIN:
						newProfile = writeLinkedinProfile(authData, authData.uid, subRoute);
						break;
					default:
						throw new Error("Unsupported provider");
				}
			} else {
				newProfile = profile
			}

			dispatch({
				type: 'LOGIN_SUCCESS',
				uid: newProfile.uid,
				displayName: newProfile.displayName,
				profilePicture: newProfile.profilePicture
			})

			dispatch(pushPath('/'))
		})
	}
}

// Helper functions
function writeProfile(profileData, userRef) {
	const profile = Object.assign({}, profileData, {
		uid: userRef
	});
	FirebaseUser.editUserProfile(userRef, profile)

	return profile;
}

function writeGoogleProfile(authData, userRef, subRoute) {
	console.log("writing Google Profile");
	let data = authData.google;
	let profile = {
		displayName: data.displayName || '',
		gender: data.cachedUserProfile.gender || '',
		profilePicture: data.profileImageURL || '',
		email: data.email || '',
		onboardStage: 0
	}
	if (subRoute) {
		profile.communities = {
			[subRoute]: 1
		}
		profile.org = subRoute
	}
	return writeProfile(profile, userRef);
}

function writeFacebookProfile(authData, userRef, subRoute) {
	console.log("writing facebook profile");
	let data = authData.facebook;
	let profile = {
		displayName: data.displayName,
		gender: data.cachedUserProfile.gender || '',
		profilePicture: data.profileImageURL || '',
		email: data.email || '',
		onboardStage: 0
	}
	if (subRoute) {
		profile.communities = {
			[subRoute]: 1
		}
		profile.org = subRoute
	}
	return writeProfile(profile, userRef);	
}

function writeLinkedinProfile(authData, userRef, subRoute){
	console.log("writting linkedin profile");
	let data = authData.linkedin;
	let profile = {
		displayName: data.firstName + " " + data.lastName,
		profileTitle: data.headline || '',
		uid: authData.uid,
		profilePicture: data.pictureUrls._total > 0 ? data.pictureUrls.values[0] : '',
		location: data.location.name || '',
		heart: data.summary || '',
		email: data.emailAddress || '',
		onboardStage: 0
	}
	if (subRoute) {
		profile.communities = {
			[subRoute]: 1
		}
		profile.org = subRoute
	}
	return writeProfile(profile, authData.uid)
}