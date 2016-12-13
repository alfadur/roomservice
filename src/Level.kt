import kotlin.browser.window

abstract class Task
{
    class Wait(var time: Double) : Task()

    class Move(val location: Location, val placeItem: Item?) : Task()
    {
        override fun toString() =
            if (placeItem == null) "Take item from $location"
            else "Place ${placeItem.name} on $location"
    }
}

abstract class LevelState
{
    class AwaitVisitor(val character: Character, var progress: Double): LevelState()
    class ManageItems(val character: Character, val tasks: ArrayList<Task>): LevelState()
    class AwaitFailure(var progress: Double): LevelState()
    class CheckPause(val character: Character, val messages: List<String>, var progress: Double) : LevelState()
}

val allItems = listOf(
    Item(Point(50, 35), "Wallet"),
    Item(Point(50, 40), "Flashlight"),
    Item(Point(50, 60), "Kettle"),
    Item(Point(50, 50), "Clock"),
    Item(Point(50, 45), "Book"),
    Item(Point(50, 35), "Pencil"),
    Item(Point(50, 60), "Ball"),
    Item(Point(50, 50), "Hat"),
    Item(Point(50, 80), "Panda"))

val colors = listOf(
    0xFFFFFF,
    0x0000FF,
    0xFF00FF,
    0xFFFF00,
    0x00FFFF,
    0xAAAAAA,
    0x8844AA,
    0xAA8844,
    0x44AA88)

class Level(val container: PIXI.Container, val stageSize: Point,
            val charactersCount: Int = 3,
            val itemsPerCharacter: Int = 1,
            val dialogTexture: PIXI.BaseTexture)
{
    val size = Point(560, 240)
    val spawnPoint = Point(size.x / 2, 80)

    val topLeft = Point(50, 80)
    val bottomRight = Point(510, 200)

    val locations = arrayListOf<Location>()

    val characterSize = Point(60, 30)
    val player = Character(characterSize)
    val inventory = Array<Item?>(allItems.size) {null}

    val npcs = arrayListOf<Character>()
    val schedule: Schedule

    var currentState: LevelState

    var activeLocation: Location? = null
    var moveDirection = Direction.None

    val roomRoot = PIXI.Container()
    val inventoryRoot = PIXI.Container()
    val inventoryGraphics = PIXI.Graphics()
    val graphics = PIXI.Graphics()

    val locationSprites = arrayListOf<PIXI.Sprite>()
    val itemSprites = arrayListOf<PIXI.Sprite>()
    val inventorySprites = arrayListOf<PIXI.Sprite>()
    //val inventoryHighlights = Array(allItems.size) {0.0}

    val highlightSprite: PIXI.Sprite

    val playerSprite: PIXI.Sprite
    val npcSprite: PIXI.Sprite
    var npcSpriteFirst: Boolean = true

    val previewSprite: PIXI.Sprite

    val playerAnimation: CharacterAnimation
    val npcAnimation: CharacterAnimation

    val help: PIXI.Text
    var levelCompleted: Boolean? = null


    init
    {
        val shuffledItems = ArrayList(allItems)
        permute(shuffledItems)

        for (i in 0..charactersCount - 1)
        {
            val items = shuffledItems.drop(itemsPerCharacter * i).take(itemsPerCharacter)
            val character = Character(characterSize)
            character.items.addAll(items)
            npcs.add(character)
        }


        val locationsCount = 4
        val spacing = size.x / (locationsCount + 1)
        for (i in 0..locationsCount - 1)
        {
            val location = Location(Point(75, 75))
            location.position =
                Point((i + 1) * spacing - location.width / 2,
                      size.y - location.height)
            locations.add(location)
        }

        schedule = Schedule(npcs, locations, rounds = 6)
        currentState = LevelState.AwaitVisitor(schedule.nextCharacter, 0.5)

        val inventoryPart = stageSize.y / 5

        val background = PIXI.Sprite(LevelResources.roomTexture)
        background.width = size.x
        background.position = PIXI.Point(0, 8)
        roomRoot.addChild(background)

        roomRoot.addChild(graphics)
        roomRoot.position = PIXI.Point((stageSize.x - size.x) / 2, inventoryPart)

        playerSprite = PIXI.Sprite(LevelResources.characterTextures[1])
        npcSprite = PIXI.Sprite(LevelResources.characterTextures[1])
        npcSprite.visible = false

        player.position = spawnPoint
        playerAnimation = CharacterAnimation(playerSprite)
        npcAnimation = CharacterAnimation(npcSprite)

        roomRoot.addChild(playerSprite)
        roomRoot.addChild(npcSprite)

        for (location in locations)
        {
            val sprite = PIXI.Sprite(LevelResources.tableTexture)
            sprite.width = location.width
            sprite.height = location.height
            sprite.position = PIXI.Point(location.x, location.y - 10)
            locationSprites.add(sprite)
            roomRoot.addChild(sprite)
        }

        highlightSprite = PIXI.Sprite(LevelResources.tableTexture)
        highlightSprite.visible = false
        highlightSprite.width = 75
        highlightSprite.height = 75
        highlightSprite.blendMode = PIXI.BLEND_MODES.SCREEN
        roomRoot.addChild(highlightSprite)

        for (i in allItems.indices)
        {
            val sprite = PIXI.Sprite(LevelResources.itemTextures[i])
            roomRoot.addChild(sprite)
            itemSprites.add(sprite)
            sprite.visible = false
        }

        previewSprite = PIXI.Sprite(LevelResources.characterTextures[
            (npcs.indexOf(schedule.nextCharacter) + 1) * 3 + 1])
        previewSprite.position = PIXI.Point(0, size.y + 20)
        previewSprite.scale = PIXI.Point(0.5, 0.5)
        roomRoot.addChild(previewSprite)

        inventoryGraphics.lineStyle(3, 0xAA7700)
        val shift = size.x.toDouble() / (allItems.size) + 1
        for ((i, item) in allItems.withIndex())
        {
            val sprite = PIXI.Sprite(LevelResources.itemTextures[i])
            sprite.width = 60
            sprite.height = 60
            //sprite._tint = 0x444444
            sprite.visible = false
            sprite.position = PIXI.Point((i + 1) * shift - sprite.width.toDouble() / 2, 6)
            inventoryRoot.addChild(sprite)
            inventorySprites.add(sprite)

            inventoryGraphics.drawRect(
                sprite.position.x.toInt() - 2, sprite.position.y.toInt() + 4,
                sprite.width.toInt() + 4, sprite.height.toInt() + 4)
        }
        inventoryRoot.addChild(inventoryGraphics)

        val helpText = "<Arrows>, <WASD>: Move\n<Enter>, <Space>:  Skip to the next visitor\n<1-9>: Take/place item\n<Esc>: Pause"
        help = PIXI.Text(helpText, TextStyle(
            fill = "blanchedAlmond",
            wordWrap = false,
            font = "14pt"))
        help.position = PIXI.Point(80, size.y + 10)
        roomRoot.addChild(help)

        container.addChild(inventoryRoot)
        container.addChild(roomRoot)
    }

    fun update()
    {
        if (moveDirection != Direction.None)
        {
            playerAnimation.start()

            move(moveDirection.shift)
        }
        else
        {
            playerAnimation.stop()
        }
        playerAnimation.update(player.position, moveDirection)

        graphics.clear()

        graphics.lineStyle(4, 0x00FF00)
        /*graphics.lineStyle(4, 0xFF0000)
        graphics.drawRect(0, 0, size.x, size.y)

        graphics.lineStyle(2, 0x00FF00)
        for (it in locations)
        {
            if (it == activeLocation) graphics.lineStyle(2, 0xFFFF00)
            else  graphics.lineStyle(2, 0x00FF00)

            graphics.draw(it)

            val item = it.item
            if (item != null)
            {
                graphics.lineStyle(2, colors[allItems.indexOf(item)])
                graphics.drawRect(it.x, it.y, item.width, item.height)
            }
        }
        graphics.lineStyle(2, 0x00FF00)
        graphics.draw(player)*/

        val state = currentState
        when (state)
        {
            is LevelState.AwaitVisitor ->
            {
                activeLocation =
                    if (player.position.y > bottomRight.y - 30)
                        locations.minBy { Math.abs((it.midX - player.x).toDouble()) }
                    else
                        null

                graphics.beginFill(0x0000FF)
                graphics.drawRect(0, size.y, state.progress * 50, 10)
                graphics.endFill()

                state.progress -= 0.001
                if (state.progress <= 0.0)
                {
                    activeLocation = null

                    state.character.position = spawnPoint

                    npcSprite.visible = true
                    npcAnimation.animationIndex = npcs.indexOf(state.character) + 1

                    npcAnimation.stop()
                    npcAnimation.update(state.character.position, Direction.Left)

                    val messages = schedule.checkState()
                    currentState = LevelState.CheckPause(
                        state.character, messages, if (messages.isNotEmpty()) 1.0 else 0.5)
                }
            }
            is LevelState.CheckPause ->
            {
                state.progress -= 0.02
                if (state.progress <= 0)
                {
                    if (state.messages.isNotEmpty())
                    {
                        initFailure(state.messages)
                    }
                    else
                    {
                        val tasks = createTasks(state.character)
                        currentState = LevelState.ManageItems(state.character, tasks)

                        npcAnimation.start()
                        npcAnimation.update(state.character.position, Direction.Left)
                    }
                }
            }
            is LevelState.ManageItems ->
            {
                val character = state.character

                //graphics.draw(character)

                if (state.tasks.isEmpty())
                {
                    schedule.rememberState()

                    if (schedule.completed)
                    {
                        levelCompleted = true
                    }
                    else
                    {
                        currentState = LevelState.AwaitVisitor(schedule.nextCharacter, 1.0)
                        activeLocation = null

                        npcSprite.visible = false
                        npcAnimation.stop()

                        previewSprite.texture =
                            LevelResources.characterTextures[
                                (npcs.indexOf(schedule.nextCharacter) + 1) * 3 + 1]
                    }
                }
                else
                {
                    val task = state.tasks.first()

                    if (task is Task.Wait)
                    {
                        val dy = if (character.y > topLeft.y + 10) - 2 else 0
                        val dx = when
                        {
                            (topLeft.x + bottomRight.x) / 2 > character.x + 4 -> 3
                            (topLeft.x + bottomRight.x) / 2 < character.x - 4 -> -3
                            else -> 0
                        }

                        if (dx != 0 || dy != 0)
                        {
                            character.position += Point(dx, dy)
                            npcAnimation.update(
                                character.position,
                                when
                                {
                                    dx > 0 -> Direction.Right
                                    dx < 0 -> Direction.Left
                                    else -> Direction.Up
                                })
                        }
                        else
                        {
                            npcAnimation.stop()
                            task.time -= 0.1
                            if (task.time <= 0.0)
                            {
                                state.tasks.removeAt(0)
                                npcAnimation.start()
                            }
                        }
                    }
                    else if (task is Task.Move)
                    {
                        val dx = Math.abs((task.location.midX - character.x).toDouble()).toInt()

                        if (character.y > bottomRight.y - 20 &&
                            dx < task.location.width / 4)
                        {
                            val item = task.location.item
                            if (item != null)
                            {
                                updateItemSprite(item, null)
                                character.items.add(item)
                                task.location.item = null
                            }
                            else if (task.placeItem != null)
                            {
                                updateItemSprite(task.placeItem, task.location)
                                character.items.remove(task.placeItem)
                                task.location.item = task.placeItem
                            }
                            state.tasks.removeAt(0)
                        }
                        else
                        {
                            val shift = Point(
                                when
                                {
                                    task.location.midX > character.x + 4 -> 3
                                    task.location.midX < character.x - 4 -> -3
                                    else -> 0
                                },
                                if (character.y < bottomRight.y) 2 else 0)
                            character.position += shift

                            npcAnimation.update(
                                character.position,
                                if (shift.x > 0) Direction.Right else Direction.Left)
                        }
                    }
                }
            }
            is LevelState.AwaitFailure ->
            {
                state.progress -= 0.005
                if (state.progress <= 0.0)
                {
                    levelCompleted = false
                }
            }
        }

        val location = activeLocation
        if (location != null)
        {
            highlightSprite.position = PIXI.Point(location.x, location.y - 10)
            highlightSprite.visible = true
        }
        else
        {
            highlightSprite.visible = false
        }

        if (npcSpriteFirst)
        {
            if (npcSprite.position.y.toInt() < playerSprite.position.y.toInt())
            {
                roomRoot.swapChildren(playerSprite, npcSprite)
                npcSpriteFirst = false
            }
        }
        else
        {
            if (npcSprite.position.y.toInt() > playerSprite.position.y.toInt())
            {
                roomRoot.swapChildren(playerSprite, npcSprite)
                npcSpriteFirst = true
            }
        }
    }

    fun PIXI.Graphics.draw(item: GameItem)
    {
        drawRect(item.x, item.y, item.width, item.height)
    }

    fun initFailure(messages: List<String>)
    {
        val text = PIXI.Text(messages.take(3).joinToString("\n"), TextStyle(
            fill = "blanchedAlmond",
            font = "14pt bold",
            align = "center"))
        val width = text.width.toInt() + Dialog.side * 2 + Dialog.tileSize * 2
        val height = text.height.toInt() + Dialog.side * 2 + Dialog.tileSize

        val dialog = Dialog(
            roomRoot,
            PIXI.Rectangle((size.x - width) / 2, 0, width, height),
            dialogTexture)

        text.position = PIXI.Point(
            (dialog.clientWidth - text.width.toInt()) / 2,
            (dialog.clientHeight - text.height.toInt()) / 2)

        dialog.add(text)
        currentState = LevelState.AwaitFailure(1.0)
    }

    fun updateItemSprite(item: Item, location: Location?)
    {
        val sprite = itemSprites[allItems.indexOf(item)]
        if (location == null)
        {
            sprite.visible = false
        }
        else
        {
            sprite.position = PIXI.Point(
                location.position.x + (location.width - item.width) / 2,
                location.position.y - item.height / 4 - 15)

            val scale = item.width / sprite.texture.frame.width.toDouble()
            sprite.scale = PIXI.Point(scale, scale)
            sprite.visible = true
        }
    }

    fun move(shift: Point)
    {
        val state = currentState

        val scaleShift = shift * 4
        var newPosition = player.position + scaleShift

        if (state is LevelState.ManageItems)
        {
            newPosition = state.character.block(player, scaleShift) ?: newPosition
        }

        player.position = newPosition.clamp(topLeft, bottomRight)
    }

    fun createTasks(character: Character): ArrayList<Task>
    {
        val heldItems = character.items
        val placedItems = locations.mapNotNull{ it.item }

        val maxActions = heldItems.size + placedItems.size

        val actions = Math.min(2, (Math.random() * (maxActions - 1)).toInt() + 1)

        val _takeActions = (Math.random() * actions).toInt()
        val _placeActions = Math.min(actions - _takeActions, heldItems.size)
        val takeActions = Math.min(placedItems.size, Math.max(_takeActions, actions - _placeActions))
        val placeActions = Math.min(heldItems.size, Math.max(_placeActions, actions - takeActions))

        val tasks = arrayListOf<Task>()


        for (i in 0..takeActions - 1)
        {
            val item = placedItems[i]
            val location = locations.first{ it.item == item }
            tasks.add(Task.Move(location, null))
        }

        val placeLocations =  ArrayList(locations)
        permute(placeLocations)
        for ((i, location) in placeLocations.take(placeActions).withIndex())
        {
            val item = heldItems[i]
            tasks.add(Task.Move(location, item))
        }

        tasks.add(Task.Wait(0.5))

        return tasks
    }

    fun GameItem.block(other: GameItem, shift: Point): Point?
    {
        val intersects =
            other.x + shift.x in x - other.width..endX &&
            other.y + shift.y in y - other.height..endY

        return if (intersects)
        {
            val xClamp = when
            {
                x in other.endX..other.endX + shift.x -> x - other.width - 1
                endX in other.x + shift.x..other.x -> endX + 1
                else -> other.x + shift.x
            }
            val yClamp = when
            {
                y in other.endY..other.endY + shift.y -> y - other.height - 1
                endY in other.y + shift.y..other.y -> endY + 1
                else -> other.y + shift.y
            }

            Point(xClamp, yClamp)
        }
        else
        {
            null
        }
    }

    fun action(inventoryIndex: Int)
    {
        val location = activeLocation
        if (location != null)
        {
            val item = location.item
            val replaceItem = inventory[inventoryIndex]
            if (item != null)
            {
                updateItemSprite(item, null)
                location.item = null
                inventory[inventoryIndex] = item
            }

            if (replaceItem != null)
            {
                updateItemSprite(replaceItem, location)
                location.item = replaceItem
                if (item == null)
                {
                    inventory[inventoryIndex] = null
                }
            }
        }

        val shift = size.x.toDouble() / (allItems.size) + 1
        inventorySprites.forEach { it.visible = false }

        for ((i, item) in allItems.withIndex())
        {
            val index = inventory.indexOf(item)
            if (index >= 0)
            {
                val sprite = inventorySprites[i]
                sprite.position = PIXI.Point((index + 1) * shift - sprite.width.toDouble() / 2, 10)
                sprite.visible = true
            }
        }
    }

    fun hurry()
    {
        val state = currentState
        if (state is LevelState.AwaitVisitor)
        {
            state.progress = 0.0
        }
        else if (state is LevelState.AwaitFailure)
        {
            state.progress = 0.08
        }
    }

    companion object
    {
        val activateDistance = 20
    }
}

object LevelResources
{
    val roomTexture = PIXI.Texture.fromImage("images/room.png", false)
    val tableTexture = PIXI.Texture.fromImage("images/table.png", false)
    val itemsBase = PIXI.BaseTexture.fromImage("images/items.png", false)
    val itemTextures = itemsBase.slice(100, 100, 100)
    val charactersBase = PIXI.BaseTexture.fromImage("images/characters.png", false)
    val characterTextures = charactersBase.slice(PIXI.Point(100, 162), 3, 4)
}

class CharacterAnimation(val sprite: PIXI.Sprite, var animationIndex: Int = 0)
{
    var progress = 0.0
    var isRunning = false
    val scale = 0.65
    var orientation = 1.0

    fun start()
    {
        isRunning = true
    }

    fun stop()
    {
        isRunning = false
        sprite.texture = LevelResources.characterTextures[animationIndex * 3 + 1]
    }

    fun update(position: Point, direction: Direction)
    {
        if (isRunning)
        {
            progress += 0.1

            if (progress >= 4.0)
            {
                progress = 0.0
            }

            val frame = Math.floor(progress)
            val texture = animationIndex * 3 + frame - 2 * frame.div(3)
            sprite.texture = LevelResources.characterTextures[texture]

            when (direction)
            {
                Direction.Right -> orientation = -1.0
                Direction.Left -> orientation = 1.0
                Direction.Up -> orientation = if (position.x < 280) 1.0 else -1.0
                Direction.Down -> orientation = if (position.x < 280) -1.0 else 1.0
            }
        }

        val dy = 200 - position.y
        val perspective = 1.0 - dy / 270.0
        val dx = (280 - position.x) * perspective

        val x = 280 - dx

        val scale = scale * perspective
        sprite.scale = PIXI.Point(scale * orientation, scale)

        val y = position.y - sprite.height.toInt()
        val w = sprite.width.toInt() / 2
        sprite.position =
            if (sprite.scale.x.toDouble() > 0) PIXI.Point(x - w, y)
            else PIXI.Point(x + w, y)
    }

}

class Schedule(val characters: List<Character>,
               val locations: List<Location>,
               val rounds: Int)
{
    class Entry(val character: Character)
    {
        val expectedState = arrayListOf<Pair<Location, Item?>>()
    }

    val entries = arrayListOf<Entry>()
    var nextEntry = 0

    val nextCharacter: Character
        get() = entries[nextEntry].character

    val completed: Boolean; get() = nextEntry >= entries.size

    init
    {
        for (round in 0..rounds - 1)
        {
            characters.forEach { entries.add(Entry(it)) }
            permute(entries, round * characters.size, characters.size)
        }

        if (characters.size > 1)
        {
            for (round in 1..rounds - 1)
            {
                val borderIndex = round * characters.size
                if (entries[borderIndex].character == entries[borderIndex - 1].character)
                {
                    val swapIndex =
                        borderIndex + 1 + (Math.random() * (characters.size - 1)).toInt()

                    val t = entries[borderIndex]
                    entries[borderIndex] = entries[swapIndex]
                    entries[swapIndex] = t
                }
            }
        }

        for (character in characters)
        {
            val entry = entries.first{it.character == character}
            for (location in locations)
            {
                entry.expectedState.add(Pair(location, null))
            }
        }
    }

    fun nextVisit(character: Character) =
        (nextEntry + 1..entries.size - 1)
            .firstOrNull{ entries[it].character == character }
            ?: - 1

    fun rememberState()
    {
        val returnEntry = nextVisit(entries[nextEntry].character)
        ++nextEntry
        if (returnEntry >= 0)
        {
            val entry = entries[returnEntry]
            for (location in locations)
            {
                entry.expectedState.add(Pair(location, location.item))
            }
        }
    }

    fun checkState(): List<String>
    {
        val result = ArrayList<String>()
        val entry = entries[nextEntry]
        val expectedItems = entry.expectedState.mapNotNull{ it.second }

        for ((location, item) in entry.expectedState)
        {
            val existingItem = location.item
            if (existingItem == null)
            {
                if (item != null && !locations.any{it.item == item})
                {
                    result.add("Where is my ${item.name}?!")
                }
            }
            else if (!expectedItems.contains(existingItem))
            {
                result.add("What is this ${existingItem.name} doing here?!")
            }
            else if (existingItem != item)
            {
                result.add("Why has my ${existingItem.name} been moved?!")
            }
        }

        return result
    }
}

inline fun <reified T> permute(list: MutableList<T>,
                               start: Int = 0,
                               count: Int = list.size)
{
    for (i in 0..count - 1)
    {
        val swapIndex = (Math.random() * (i + 1)).toInt()
        if (swapIndex < i)
        {
            val t = list[start + swapIndex]
            list[start + swapIndex] = list[start + i]
            list[start + i] = t
        }
    }
}

open class GameItem(val size: Point)
{
    var position = Point.zero

    val x: Int; get() = position.x
    val y: Int; get() = position.y
    val width: Int; get() = size.x
    val height: Int; get() = size.y
    val midX: Int; get() = x + width / 2
    val midY: Int; get() = y + height / 2
    val endX: Int; get() = x + width
    val endY: Int; get() = y + height
}

class Location(size: Point) : GameItem(size)
{
    var item: Item? = null
}

class Character(size: Point) : GameItem(size)
{
    val items = arrayListOf<Item>()
}

class Item(val size: Point, val name: String)
{
    val width: Int; get() = size.x
    val height: Int; get() = size.y
}