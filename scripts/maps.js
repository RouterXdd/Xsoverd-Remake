
const corruptedcave = extend(SectorPreset, "corrupted-cave", Planets.serpulo, 250, {
    captureWave: 40,
    localizedName: "Corrupted Cave",
    description: "The place where was find the xrolovil, but there units was corrupted by xrolovil and start attack all others units. Capture this mine from corrupted",
    difficulty: 9,
    alwaysUnlocked: true
});

const obliteratorsprison = extend(SectorPreset, "obliterator's-prison", Planets.serpulo, 146, {
    captureWave: 51,
    localizedName: "Obliterator's prison",
    description: "the magnetic field on this sector, set your team crux.Now this sector have been place to arrive from underground the [red]Obliterator",
    difficulty: 10,
    alwaysUnlocked: true
});

function newNode(parent, content, req, objectives){
	
    var parnode = TechTree.get(parent);
    var node = new TechTree.TechNode(parnode, content, req != null ? content.researchRequirements() : req);
    var used = new ObjectSet();
  
    node.objectives.addAll(objectives = null ? null : objectives);
}

newNode(SectorPresets.nuclearComplex, laboratory, ItemStack.with(Items.silicon, 100), Seq.with(new Objectives.SectorComplete(SectorPresets.nuclearComplex)));

newNode(SectorPresets.laboratory, voidmountain, ItemStack.with(Items.xrolovil, 100), Seq.with(new Objectives.SectorComplete(SectorPresets.laboratory)));

newNode(SectorPresets.ruinousShores, forgottenbase, ItemStack.with(Items.titanium, 100), Seq.with(new Objectives.SectorComplete(SectorPresets.ruinousShores)));

newNode(SectorPresets.forgottenbase, corruptedcave, ItemStack.with(Items.thorium, 100), Seq.with(new Objectives.SectorComplete(SectorPresets.forgottenbase)));

newNode(SectorPresets.forgottenbase, obliteratorsprison, ItemStack.with(Items.xrotine, 100), Seq.with(new Objectives.SectorComplete(SectorPresets.forgottenbase)));


module.exports = {
    laboratory: laboratory,
    voidmountain: voidmountain,
    forgottenbase: forgottenbase,
    corruptedcave: corruptedcave,
    obliteratorsprison: obliteratorsprison
}