## A title
An object's rotation is commonly referenced with the X axis being the origin `(1, 0)`, with pi represented as float. The equivalent of getting `normalizedVector.Angle()`. However, in theory you can use which every direction as you please to establish a common reference, as your only visual indicator of a direction is your sprite's


Thus we can establish a fact table for radians as follows (Assuming North is Right as the diagram above):

| Direction | Radiant | Pi expression | 
| :-------: | :-----: |:-------------:|
| NORTH     | 0       |       0       |
| NE        | 0.785   |    Pi / 4     |
| EAST      | 1.571   |    Pi / 2     |
| SE        | 2.356   |    Pi / 4 * 3 |
| SOUTH     | 3.141   |    Pi / 2     |
| SW        | -2.356  |   - Pi / 4 * 3|
| WEST      | -1.571  |   - Pi / 2    |
| NW        | -0.785  |   - Pi / 4    |

<br>

### Single vs structured data types.
It is actually not very efficient to store true false values in the really large numbers.

Let's start with an RPG game example where the character has a few attributes that are true or false. You may get away with doing something simple like this.

```cs
// This is known as structured data type:
struct attributes {
    bool hasMagic = true;
    bool hasIntelligence = false;
    bool hasCharisma = true;
    bool canFly = false;
    bool isInvinsible = false;
}
```

> [!INFO] 
> Bit shorthand prefix
> Instead of calculating what the decimal number for the binary is, we can actually just write the binary representation like this:
> ```cs
> byte attributes = 0b1000;
> ```
> Where '0b' prefix indicates that this is a binary literal.


<br><br>

---
## Remove a bit
To remove a bit we use the AND-EQUAL operator on a compliment of the relavent bit:
```cs
byte attribute &= ~16;
```

> [!NOTE] 
> We use BitWise *AND-EQUAL*, on a ~mask
> 
>```
>     00010100
>&=  11101111
> ---------------
>     00000100
>```
> We use this to remove a bit from our bitflag. This is called "clearing bits"
> `new attribute is attributes ∩ X' `

Notice how in this example we are not using an XOR operator. The reason for that is that an XOR operator flips the bit using the mask, it doesnt neccesarily turn a bit OFF. 

This makes mistaken assumption heavily punished with difficult to find bugs. When working with large numbers of bitwise operations like a calculation jump tables etc. It is best that we stick to reliable, and less error prone operations. 

<br><br>

## Here are some warnings
This makes mistaken assumption heavily punished with difficult to find bugs. When working with large numbers of bitwise operations like a calculation jump tables etc. It is best that we stick to reliable, and less error prone operations. 

<br>

> [!WARNING] 
> This is a github synthax

> [!WARNING] 
> This is a github synthax
> The demonstated dotProduct behavior only applies to unit vectors (Normalized Vectors). 


> [!warning] This is obsidian syntax
> The demonstated dotProduct behavior only applies to unit vectors (Normalized Vectors). 

> [!note] This is obsidian syntax 
> We use BitWise *AND-EQUAL*, on a ~mask
> 
>```
>     00010100
>&=  11101111
> ---------------
>     00000100
>```
> We use this to remove a bit from our bitflag. This is called "clearing bits"
> `new attribute is attributes ∩ X' `

<br><br>

---
## Pictures and links?

![](/public/vercel.svg)

Heres code and links

`code` and [`code with link`](https://www.google.com/)


