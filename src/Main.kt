import kotlin.browser.document
import kotlin.browser.window

enum class GameFlowState
{
    DaySelection,
    Ingame,
    Feedback,
    Pause
}

class Game
{
    val screenWidth = 620
    val screenHeight = 440

    val renderer = PIXI.CanvasRenderer(screenWidth, screenHeight)
    val scene = PIXI.Container()

    var controller: Controller = MenuKeyboardController(window)
    var gameStage: GameStage

    var flow = GameFlowState.DaySelection
    val background = PIXI.BaseTexture.fromImage("images/background.png", false)

    val windowTexture = PIXI.BaseTexture.fromImage("images/window.png", false)
    val gameSize = Point(screenWidth, screenHeight)

    init
    {
        document.getElementById("game")?.appendChild(renderer.view)

        window.requestAnimationFrame { update() }

        val b = PIXI.Sprite(
            PIXI.Texture(background, PIXI.Rectangle(0, 0, screenWidth, screenHeight)))

        scene.addChild(b)
        gameStage = MainMenuStage(gameSize, windowTexture)
        scene.addChild(gameStage.root)
    }

    fun switchStage(newStage: GameStage)
    {
        scene.removeChild(gameStage.root)
        scene.addChild(newStage.root)
        gameStage = newStage
    }

    fun update()
    {
        gameStage.handleController(controller)
        gameStage.update()

        val stage = gameStage
        when (flow)
        {
            GameFlowState.DaySelection ->
            {
                if (stage is MainMenuStage && stage.isReady)
                {
                    val items = stage.selectedOption + 1
                    switchStage(IngameStage(gameSize, items, windowTexture))
                    flow = GameFlowState.Ingame
                    controller = KeyboardController(window)
                }
            }
            GameFlowState.Ingame ->
            {
                val done = (gameStage as? IngameStage)?.done
                if (stage is IngameStage)
                {
                    if (done != null)
                    {
                        switchStage(FeedbackStage(gameSize, windowTexture,
                                                  stage.itemsPerCharacter, done))
                        flow = GameFlowState.Feedback
                        controller = MenuKeyboardController(window)
                    }
                    else if (stage.needsPause)
                    {
                        switchStage(PauseStage(gameSize, windowTexture, stage.level))
                        flow = GameFlowState.Pause
                        controller = MenuKeyboardController(window)
                    }
                }
            }
            GameFlowState.Pause ->
            {
                if (stage is PauseStage && stage.isReady)
                {
                    if (stage.selectedOption == 0)
                    {
                        switchStage(IngameStage(gameSize, stage.pausedLevel.itemsPerCharacter,
                                                windowTexture, stage.pausedLevel))
                        flow = GameFlowState.Ingame
                        controller = KeyboardController(window)
                    }
                    else
                    {
                        switchStage(MainMenuStage(gameSize, windowTexture))
                        flow = GameFlowState.DaySelection
                    }
                }
            }
            GameFlowState.Feedback ->
            {
                if (stage is FeedbackStage && stage.isReady)
                {
                    if (stage.selectedOption == 0)
                    {
                        val items = stage.day
                        switchStage(IngameStage(gameSize, items, windowTexture))
                        flow = GameFlowState.Ingame
                        controller = KeyboardController(window)
                    }
                    else
                    {
                        switchStage(MainMenuStage(gameSize, windowTexture))
                        flow = GameFlowState.DaySelection
                    }
                }
            }
        }

        renderer.render(scene)
        window.requestAnimationFrame { update() }
    }
}

fun main(args: Array<String>)
{
    window.onload =
    {
        Game()
    }
}