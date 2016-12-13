interface GameStage
{
    fun handleController(controller: Controller)
    fun update()

    val root: PIXI.DisplayObject
    val gameSize: Point

    fun section(x: ClosedRange<Double>, y: ClosedRange<Double>) =
        PIXI.Rectangle(x.start * gameSize.x, y.start * gameSize.y,
                       x.length * gameSize.x, y.length * gameSize.y)
}

class IngameStage(override val gameSize: Point, val itemsPerCharacter: Int,
                  window: PIXI.BaseTexture, savedLevel: Level? = null): GameStage
{
    val container = savedLevel?.container ?: PIXI.Container()
    val level = savedLevel ?: Level(container, gameSize, 3, itemsPerCharacter, window)
    val done: Boolean?; get() = level.levelCompleted
    var needsPause = false

    override fun handleController(controller: Controller)
    {
        val direction = when
        {
            controller.isActive(ControllerAction.Up) -> Direction.Down
            controller.isActive(ControllerAction.Down) -> Direction.Up
            controller.isActive(ControllerAction.Left) -> Direction.Left
            controller.isActive(ControllerAction.Right) -> Direction.Right
            else -> Direction.None
        }


        when
        {
            controller.isActive(ControllerAction._1) -> level.action(0)
            controller.isActive(ControllerAction._2) -> level.action(1)
            controller.isActive(ControllerAction._3) -> level.action(2)
            controller.isActive(ControllerAction._4) -> level.action(3)
            controller.isActive(ControllerAction._5) -> level.action(4)
            controller.isActive(ControllerAction._6) -> level.action(5)
            controller.isActive(ControllerAction._7) -> level.action(6)
            controller.isActive(ControllerAction._8) -> level.action(7)
            controller.isActive(ControllerAction._9) -> level.action(8)
        }

        level.moveDirection = direction

        if (controller.isActive(ControllerAction.Select))
        {
            level.hurry()
        }

        if (controller.isActive(ControllerAction.Submit))
        {
            needsPause = true
        }
    }

    override fun update()
    {
        level.update()
    }

    override val root: PIXI.DisplayObject
        get() = container
}

abstract class MenuStage(): GameStage
{
    abstract val options: List<PIXI.Text>
    abstract var selectedOption: Int
    abstract var isReady: Boolean

    override fun handleController(controller: Controller)
    {
        when
        {
            controller.isActive(ControllerAction.Up) ->
            {
                selectedOption = (selectedOption - 1).clamp(0, options.size - 1)
            }
            controller.isActive(ControllerAction.Down) ->
            {
                selectedOption = (selectedOption + 1).clamp(0, options.size - 1)
            }
        }

        if (controller.isActive(ControllerAction.Select))
        {
            isReady = true
        }
    }

    override fun update()
    {
        for ((i, option) in options.withIndex())
        {
            option._tint =
                if (i != selectedOption) 0xCCBBCC else 0xFFFFFF
        }
    }
}

class MainMenuStage(override val gameSize: Point,
                    window: PIXI.BaseTexture) : MenuStage()
{
    val container = PIXI.Container()
    override val options: List<PIXI.Text>
    override var selectedOption: Int = 0

    override var isReady = false

    init
    {
        val titleStyle = TextStyle(fill = "whitesmoke",
                                   font = "32pt  bold")
        val title = PIXI.Text("Room Service", titleStyle)
        title.position = PIXI.Point((gameSize.x - title.width.toInt()) / 2, 40)
        container.addChild(title)

        val d = Dialog(container, section(0.0..1.0, 0.2..1.0), window)
        val messageStyle = TextStyle(fill = "whitesmoke",
                                     wordWrap = true,
                                     wordWrapWidth = d.clientWidth,
                                     font = "15pt")

        val message = PIXI.Text(messageText, messageStyle)
        message.position = PIXI.Point(0, 0)

        var y = message.height.toInt() + 10

        val optionStyle = TextStyle(fill = "white", font = "14pt Cursive")

        options = listOf("Day 1", "Day 2", "Day 3").map{
            val text = PIXI.Text(it, optionStyle)
            text.position = PIXI.Point((d.clientWidth - text.width.toInt()) / 2, y)
            y += text.height.toInt()
            text
        }

        d.add(message)

        options.forEach{ d.add(it) }
    }

    override val root = container

    companion object
    {
        val messageText =
            "You work at a hotel. " +
            "As it happens, there is only one room, but several guests have checked in at once. " +
            "See that they don't notice anything by making sure they find the room exactly as they left it."
    }
}

class FeedbackStage(override val gameSize: Point,
                    window: PIXI.BaseTexture,
                    val day: Int,
                    val isSuccess: Boolean) : MenuStage()
{
    val container = PIXI.Container()
    override val options: List<PIXI.Text>
    override var selectedOption: Int = 0

    override var isReady = false

    init
    {
        val titleStyle = TextStyle(fill = "whitesmoke",
                                   font = "24pt  bold",
                                   align = "center")
        val titleText =
            if (isSuccess)
                "Congratulations!\nYou have completed Day $day"
            else
                "Game Over"

        val title = PIXI.Text(titleText, titleStyle)
        title.position = PIXI.Point((gameSize.x - title.width.toInt()) / 2, 40)
        container.addChild(title)

        val d = Dialog(container, section(0.2..0.8, 0.4..0.8), window)
        val optionStyle = TextStyle(fill = "white", font = "14pt Cursive")

        var y = 0
        options = listOf("Play again", "Back to main menu").map{
            val text = PIXI.Text(it, optionStyle)
            text.position = PIXI.Point((d.clientWidth - text.width.toInt()) / 2, y)
            y += text.height.toInt()
            text
        }

        options.forEach{ d.add(it) }
    }

    override val root = container
}

class PauseStage(override val gameSize: Point,
                 window: PIXI.BaseTexture,
                 val pausedLevel: Level) : MenuStage()
{
    val container = PIXI.Container()
    override val options: List<PIXI.Text>
    override var selectedOption: Int = 0

    override var isReady = false

    init
    {
        val titleStyle = TextStyle(fill = "whitesmoke",
                                   font = "24pt  bold",
                                   align = "center")
        val titleText = "Game paused"

        val title = PIXI.Text(titleText, titleStyle)
        title.position = PIXI.Point((gameSize.x - title.width.toInt()) / 2, 40)
        container.addChild(title)

        val d = Dialog(container, section(0.2..0.8, 0.4..0.8), window)
        val optionStyle = TextStyle(fill = "white", font = "14pt Cursive")

        var y = 0
        options = listOf("Resume", "Back to main menu").map{
            val text = PIXI.Text(it, optionStyle)
            text.position = PIXI.Point((d.clientWidth - text.width.toInt()) / 2, y)
            y += text.height.toInt()
            text
        }

        options.forEach{ d.add(it) }
    }

    override val root = container
}

