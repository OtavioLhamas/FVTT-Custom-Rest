import Actor5e from "../../systems/dnd5e/module/actor/entity.js";
import HDLongRestDialog from "./new-long-rest.js";
import HDShortRestDialog from "./new-short-rest.js";
import TreatingWounds from "./treating-wounds.js";

Hooks.on("init", () => {
	Actor5e.prototype.longRest = async function({dialog=true, chat=true}={}) {
		const data = this.data.data;

		// Take note of the initial hit points and number of hit dice the Actor has
		const hd0 = data.attributes.hd;
		const hp0 = data.attributes.hp.value;		

		// Maybe present a confirmation dialog
		let newDay = false;
		if ( dialog ) {
			try {
				newDay = await HDLongRestDialog.hdLongRestDialog({actor: this, canRoll: hd0 > 0});
			} catch(err) {
			return;
			}
		}
	
	}

	Actor5e.prototype.shortRest = async function({dialog=true, chat=true}={}) {
		const data = this.data.data;

		// Take note of the initial hit points and number of hit dice the Actor has
		const hd0 = data.attributes.hd;
		const hp0 = data.attributes.hp.value;

		// Display a Dialog for rolling hit dice
		let newDay = false;
		if ( dialog ) {
			try {
			newDay = await HDShortRestDialog.hdShortRestDialog({actor: this, canRoll: hd0 > 0});
			} catch(err) {
			return;
			}
		}

	}

	Actor5e.prototype.rollHitDie = async function(denomination, treated) {
		
	}
});