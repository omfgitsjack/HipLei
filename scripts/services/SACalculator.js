
function toInch(cm) {
	return cm/2.54
}

function convertToFloat(fields) {
	let obj = {}
	for (var prop in fields) {
		if (fields.hasOwnProperty(prop)) {
			obj[prop] = parseFloat((fields[prop]))
		}
	}
	return obj
}

export function calculateStrat1(fields) {
	let f = convertToFloat(fields)
	let horiz = 2*toInch(f.A) + 2*toInch(f.B) + f.stickAmount * f.stick + f.horizontalTearAmount * f.horizontalTear + toInch(f.horizontalOther) * f.horizontalOtherAmount
	let vert = toInch(2*f.B) + toInch(f.C) + f.toungueAmount * f.toungue + f.clipAmount * f.clip + f.verticalTearAmount * f.verticalTear + f.backAmount * toInch(f.back) + toInch(f.verticalOther) * f.verticalOtherAmount
	
	let thickness = f.thickness
	let surfaceArea = horiz * vert
	
	// based on material, the amount that we can make differs, some are static
	// Some are variable.

	return { 
		surfaceArea: surfaceArea,
		horizontal: horiz, 
		vertical: vert, 
		thickness: thickness,
		amount: thickness ? thickness / surfaceArea : 1
	}
}

export function calculateStrat2(fields) {
	let f = convertToFloat(fields)

	let horiz = 2*toInch(f.A) + f.stick * f.stickAmount + f.horizontalTear * f.horizontalTearAmount + toInch(f.horizontalOther) * f.horizontalOtherAmount
	let vert = toInch(f.B) + toInch(f.C) + f.clip * f.clipAmount + f.verticalTear * f.verticalTearAmount + toInch(f.verticalOther) * f.verticalOtherAmount
	
	let thickness = f.thickness
	let surfaceArea = horiz * vert
	
	return { 
		surfaceArea: surfaceArea,
		horizontal: horiz,
		vertical: vert,
		thickness: thickness,
		amount: thickness ? thickness / surfaceArea : 1
	}
}

export function calculateStrat3(fields) {
	let f = convertToFloat(fields)

	let horiz = ((f.diameter * Math.PI) + f.stick + f.horizontalTear * f.horizontalTearAmount)
	let vert = f.height + f.roll * f.rollAmount + f.verticalTear + f.clip

	let body = horiz * vert
	let base = 2 * f.diameter + toInch(f.baseOther) * f.baseOtherAmount
	let lid = f.diameter * Math.PI + f.roll + toInch(f.lidOther) * f.lidOtherAmount
	
	let surfaceArea = body + base + lid
	let thickness = f.thickness

	return { 
		surfaceArea: surfaceArea,
		body: body,
		base: base,
		lid: lid,
		amount: thickness ? thickness / surfaceArea : 1
	}
}