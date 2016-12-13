import org.w3c.dom.Window

enum class ControllerAction
{
    Up,
    Left,
    Right,
    Down,

    Select,
    Submit,

    _1, _2, _3,
    _4, _5, _6,
    _7, _8, _9
}

interface Controller
{
    fun isActive(action: ControllerAction): Boolean
}

abstract class KeyboardControllerBase(window: Window): Controller
{
    protected abstract val holdActionKeys: Map<ControllerAction, IntArray>

    protected abstract val mixedActionKeys: Map<ControllerAction, IntArray>

    protected abstract val pressActionKeys: Map<ControllerAction, IntArray>

    private val isDown = hashSetOf<Int>()
    private val wasPressed = hashSetOf<Int>()
    private var continuousMode = true

    init
    {
        val isDown = isDown
        window.onkeydown =
            {
                if (it is KeyboardEvent)
                {
                    isDown.add(it.keyCode)
                    wasPressed.add(it.keyCode)

                    if (it.keyCode == KeyCodes.P)
                    {
                        continuousMode = !continuousMode
                        wasPressed.clear()
                    }
                }
            }

        window.onkeyup =
            {
                if (it is KeyboardEvent)
                {
                    isDown.remove(it.keyCode)
                }
            }
    }

    private fun checkHold(keys: IntArray?) =
        keys?.any{ isDown.contains(it)  } ?: false

    private fun retrieveFirst(keys: IntArray?): Boolean
    {
        for (key in keys ?: intArrayOf())
        {
            if (wasPressed.remove(key))
            {
                return true
            }
        }
        return false
    }

    override fun isActive(action: ControllerAction): Boolean =
        checkHold(holdActionKeys[action]) || retrieveFirst(pressActionKeys[action]) ||
            if (continuousMode)
                checkHold(mixedActionKeys[action])
            else
                retrieveFirst(mixedActionKeys[action])
}

class KeyboardController(window: Window): KeyboardControllerBase(window)
{
    override val holdActionKeys = mapOf<ControllerAction, IntArray>()

    override val mixedActionKeys = mapOf(
        ControllerAction.Up to intArrayOf(KeyCodes.Up, KeyCodes.W),
        ControllerAction.Left to intArrayOf(KeyCodes.Left, KeyCodes.A),
        ControllerAction.Down to intArrayOf(KeyCodes.Down, KeyCodes.S),
        ControllerAction.Right to intArrayOf(KeyCodes.Right, KeyCodes.D))

    override val pressActionKeys = mapOf(
        ControllerAction.Submit to intArrayOf(KeyCodes.Escape),
        ControllerAction.Select to intArrayOf(KeyCodes.Space, KeyCodes.Enter),
        ControllerAction._1 to intArrayOf(KeyCodes._1),
        ControllerAction._2 to intArrayOf(KeyCodes._2),
        ControllerAction._3 to intArrayOf(KeyCodes._3),
        ControllerAction._4 to intArrayOf(KeyCodes._4),
        ControllerAction._5 to intArrayOf(KeyCodes._5),
        ControllerAction._6 to intArrayOf(KeyCodes._6),
        ControllerAction._7 to intArrayOf(KeyCodes._7),
        ControllerAction._8 to intArrayOf(KeyCodes._8),
        ControllerAction._9 to intArrayOf(KeyCodes._9))
}


class MenuKeyboardController(window: Window): KeyboardControllerBase(window)
{
    override val holdActionKeys = mapOf<ControllerAction, IntArray>()
    override val mixedActionKeys = mapOf<ControllerAction, IntArray>()

    override val pressActionKeys = mapOf(
        ControllerAction.Up to intArrayOf(KeyCodes.Up, KeyCodes.W),
        ControllerAction.Left to intArrayOf(KeyCodes.Left, KeyCodes.A),
        ControllerAction.Down to intArrayOf(KeyCodes.Down, KeyCodes.S),
        ControllerAction.Right to intArrayOf(KeyCodes.Right, KeyCodes.D),
        ControllerAction.Select to intArrayOf(KeyCodes.Space, KeyCodes.Enter))
}