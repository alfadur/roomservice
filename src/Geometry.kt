data class Point(val x: Int = 0, val y: Int = 0)
{
    operator fun plus(d: Direction) = Point(x + d.shift.x, y + d.shift.y)
    operator fun minus(d: Direction) = Point(x + d.shift.x, y + d.shift.y)

    operator fun plus(p: Point) = Point(x + p.x, y + p.y)
    operator fun times(a: Int) = Point(x * a, y * a)

    companion object
    {
        val zero = Point()
    }
}

enum class Direction(val shift: Point)
{
    None(Point.zero),
    Up(Point(0, 1)),
    Left(Point(-1, 0)),
    Down(Point(0, -1)),
    Right(Point(1, 0))
}

data class Vector(val x: Double = 0.0, val y: Double = 0.0)
{
    companion object
    {
        val zero = Vector()
    }
}

fun Int.clamp(min: Int, max: Int) =
    when
    {
        this < min -> min
        this > max -> max
        else -> this
    }

fun Point.clamp(min: Point, max: Point) =
    Point(x.clamp(min.x, max.x), y.clamp(min.y, max.y))