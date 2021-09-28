var laboratory = extend(SectorPreset, "Laboratory", Planets.serpulo, 154, {
    captureWave: 20,
    localizedName: "Laboratory",
    difficulty: 6,
    alwaysUnlocked: true
});

var voidmountain = extend(SectorPreset, "Void-mountain", Planets.serpulo, 0, {
    localizedName: "Void mountain",
    description: "The placed arond strange hole in space, Destroy the enemy base and get the new turret",
    difficulty: 7,
    alwaysUnlocked: true
});

const cblock = name => Vars.content.getByName(ContentType.block, "xsoverdr-" + name);

node(serpulo.voidmountain, null, Seq.with(new Objectives.SectorComplete(serpulo.voidmountain), new Objectives.Research(cblock("plasmatic"))));