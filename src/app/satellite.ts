
export class Satellite {
	
	changeColor: boolean;

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
	isSpaceDebris(): boolean {
		if (this.type === 'Space Debris'){
			this.changeColor = true;
			return true;
		} else {
			this.changeColor = false;
			return false;
		}
   }

}

// TODO 3a: fix isSpaceDebris check
