Events.on(ClientLoadEvent, () => {
    const routros = new Planet("asteroid", Planets.sun, 1, 1);
    asteroid.generator = new none();
    asteroid.mesh = new HexMesh(asteroid, 1);
    asteroid.orbitRadius = 8;
    asteroid.orbitTime = 1.8 * 60;
    asteroid.rotateTime = 26;
    asteroid.bloom = true;
    asteroid.accessible = true;
    asteroid.startSector = 0;
    asteroid.hasAtmosphere = true;
    asteroid.atmosphereColor = "353535";
    asteroid.atmosphereRadIn = 0.1;
    asteroid.atmosphereRadOut = 0.3;
    asteroid.alwaysUnlocked = true;
    asteroid.localizedName = "Asteroid";

    for(var i = 0; i < 0; i++){
    var Asteroid = extend(SectorPreset, "asteroid", Planets.asteroid, 0, {
    localizedName: "Asteroid",
    difficulty: 8,
    alwaysUnlocked: true
};
});
});
