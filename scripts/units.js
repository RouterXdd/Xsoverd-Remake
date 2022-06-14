const efoncerV2 = extend(UnitType, "efoncerV2", {
	draw(unit) {
		this.super$draw(unit);
		Draw.rect(
			"xsoverdr-efoncerV2-rotor",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -30);
		Draw.rect(
			"xsoverdr-efoncerV2-rotor-outline",
			unit.x + Angles.trnsx(unit.rotation - 90, 0, 0),
			unit.y + Angles.trnsy(unit.rotation - 90, 0, 0),
			Time.time * -30);
	}
});