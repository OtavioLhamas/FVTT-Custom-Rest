/**
 * A specialized Dialog subclass for treating wounds
 * @type {Dialog}
 */
export default class TreatingWounds extends Dialog {
	constructor(actor, dialogData = {}, options = {}) {
		super(dialogData, options);

		/**
		 * Store a reference to the Actor entity which is resting
		 * @type {Actor}
		 */
		this.actor = actor;
	}

	/* -------------------------------------------- */
	
	/** @override */
	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			template: "systems/dnd5e/templates/apps/treating-wounds.html",
			classes: ["dnd5e", "dialog"]
		});
	}

	static async create(actor) {

		healersKitInInventory = actor.items.filter(item => 
			item.name.includes("Healer's Kit") && 
			item.type === "consumable" && 
			item.data.uses.value > 0);
		
		let dialogData = {
			healersKit: healersKitInInventory,
			rollMode: rollMode,
			rollModes: CONFIG.Dice.rollModes
		};
	}
}