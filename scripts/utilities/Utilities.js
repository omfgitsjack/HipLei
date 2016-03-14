
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function validateNumber(fields, prop) {
	let err = {}
	if (!fields['prop'] || !isNumeric(fields['prop'])) {
		err['prop'] = 'Please enter a number'
	}

	return err
}

// export function isValid({
// 	displayName,
// 	profileTitle,
// 	location,
// 	school,
// 	graduateYear,
// 	program,
// 	soul,
// 	heart,
// 	email
// }) {
// 	let formIsValid = displayName.error || 
// 		profileTitle.error || 
// 		location.error || 
// 		email.error ||
// 		school.error || 
// 		graduateYear.error || 
// 		program.error || 
// 		soul.error || 
// 		heart.error ? false : true

// 	return formIsValid
// }

export function validate(values) {	
	let errors = Object.assign({}, 
		validateNumber(values, 'A'),
		validateNumber(values, 'B'),
		validateNumber(values, 'C'),
		validateNumber(values, 'stickAmount'),
		validateNumber(values, 'stick'),
		validateNumber(values, 'clipAmount'),
		validateNumber(values, 'clip'),
		validateNumber(values, 'tear'),
		validateNumber(values, 'tearAmount'),
		validateNumber(values, 'toungue'),
		validateNumber(values, 'toungueAmount'),
		validateNumber(values, 'back'),
		validateNumber(values, 'backAmount'))

	return errors;
}