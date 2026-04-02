scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    game.gameOver(false)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . 3 1 1 3 . . . . . . 
    . . . . . . 3 1 1 3 . . . . . . 
    . . 3 2 2 3 1 1 1 1 3 2 2 . . . 
    . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
    . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
    . . . 3 1 1 1 1 1 1 1 1 3 . . . 
    . . . . 3 1 1 1 1 1 1 3 . . . . 
    . . . . 2 1 1 1 1 1 1 2 . . . . 
    . . . . 2 1 1 3 3 1 1 2 . . . . 
    . . . . 3 3 3 2 2 2 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
