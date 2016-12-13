import org.w3c.dom.HTMLCanvasElement

@native object PIXI
{
    @native class Point(val x: Number, val y: Number)
    @native class Rectangle(val x: Number, val y: Number, val width: Number, val height: Number)

    @native class Matrix
    {
        @native val a: Double = noImpl
        @native val b: Double = noImpl
        @native val c: Double = noImpl
        @native val d: Double = noImpl
        @native val tx: Double = noImpl
        @native val ty: Double = noImpl

        companion object
        {
            @native fun fromArray(array: Array<Double>): Matrix = noImpl
        }
    }

    @native open class DisplayObject
    {
        @native var position: Point get() = noImpl; set(v) = noImpl
        @native var rotation: Double get() = noImpl; set(v) = noImpl
        @native var pivot: Point get() = noImpl; set(v) = noImpl
        @native var scale: Point get() = noImpl; set(v) = noImpl

        @native var worldTransform: Matrix get() = noImpl; set(v) = noImpl

        @native var width: Number = noImpl
        @native var height: Number = noImpl

        @native var visible: Boolean get() = noImpl; set(v) = noImpl
    }

    @native open class Container : DisplayObject()
    {
        @native fun addChild(child: DisplayObject): DisplayObject = noImpl
        @native fun removeChild(child: DisplayObject): DisplayObject = noImpl

        @native fun getChildIndex(child: DisplayObject): Int = noImpl
        @native fun swapChildren(child: DisplayObject, child2: DisplayObject): Int = noImpl
        @native fun removeChildren(): Unit = noImpl
    }

    @native class CanvasRenderer(width: Number = 800, height: Number = 600)
    {
        @native val view: HTMLCanvasElement = noImpl
        @native fun render(scene: Container): Unit = noImpl
    }

    @native class Graphics: DisplayObject()
    {
        @native fun beginFill(color: Number = 0, alpha: Number = 1): Graphics = noImpl
        @native fun endFill(): Graphics = noImpl

        @native fun lineStyle(lineWidth: Number = 0, color: Number = 0, alpha: Number = 1): Graphics = noImpl

        @native fun moveTo(x: Number, y: Number): Graphics = noImpl
        @native fun lineTo(x: Number, y: Number): Graphics = noImpl
        @native fun drawRect(x: Number, y: Number, width: Number, height: Number): Graphics = noImpl
        @native fun drawCircle(x: Number, y: Number, radius: Number): Graphics = noImpl

        @native fun clear(): Graphics = noImpl
    }

    @native class AssetLoader(assetUrls: Array<String>, crossorigin: Boolean)
    {
        @native fun load(): Unit = noImpl
        @native var onComplete: () -> Unit = noImpl
    }

    @native class BaseTexture private constructor()
    {
        @native val width: Int = noImpl
        @native val height: Int = noImpl
        @native val hasLoaded: Boolean = noImpl

        companion object
        {
            @native fun fromImage(imageUrl: String, crossorigin: Boolean): BaseTexture = noImpl
        }
    }

    @native class Texture(val baseTexture: BaseTexture, val frame: Rectangle)
    {
        companion object
        {
            @native fun fromImage(imageUrl: String, crossorigin: Boolean): Texture = noImpl
            @native fun fromFrame(frameId: String): Texture = noImpl
        }
    }

    @native open class Sprite(var texture: Texture): DisplayObject()
    {
        @native var _tint: Int = noImpl
        @native var blendMode: Int = noImpl

    }

    @native object BLEND_MODES
    {
        @native val NORMAL: Int = noImpl
        @native val ADD: Int = noImpl
        @native val MULTIPLY: Int = noImpl
        @native val SCREEN: Int = noImpl
        @native val OVERLAY: Int = noImpl
        @native val DARKEN: Int = noImpl
        @native val LIGHTEN: Int = noImpl
        @native val COLOR_DODGE: Int = noImpl
        @native val COLOR_BURN: Int = noImpl
    }

    @native class Text(var text: String, val style: TextStyle? = null): Sprite(null!!)
    {
        @native fun setStyle(style: TextStyle): Unit = noImpl
    }
    @native class ParticleContainer(): Container()
}

data class TextStyle(
    val fill: String = "black",
    val wordWrap: Boolean = false,
    val wordWrapWidth: Number = 100,
    val font: String? = null,
    val align: String? = null)

fun PIXI.BaseTexture.slice(vararg sizes: Int): Array<PIXI.Texture>
{
    val result = arrayListOf<PIXI.Texture>()
    var x = 0
    var y = 0

    for (height in sizes)
    {
        for (width in sizes)
        {
            result.add(PIXI.Texture(this, PIXI.Rectangle(x, y, width, height)))
            x += width
        }
        y += height
        x = 0
    }

    return result.toTypedArray()
}

fun PIXI.BaseTexture.slice(frameSize: PIXI.Point, xFrames: Int, yFrames: Int): Array<PIXI.Texture>
{
    return Array(xFrames * yFrames)
    {
        val y = it.div(xFrames)
        val x = it - y * xFrames

        PIXI.Texture(this, PIXI.Rectangle(
            x * frameSize.x.toInt(), y * frameSize.y.toInt(), frameSize.x, frameSize.y))
    }
}

operator fun PIXI.Point.plus(p: PIXI.Point) =
    PIXI.Point(x.toDouble() + p.x.toDouble(),
               y.toDouble() + p.y.toDouble())