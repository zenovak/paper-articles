# Title

## title

### title

#### title

##### title

---

An object's rotation is commonly referenced with the X axis being the origin `(1, 0)`, with pi represented as float. The equivalent of getting `normalizedVector.Angle()`. However, in theory you can use which every direction as you please to establish a *common reference*, as your only **visual** indicator of a ***direction*** is your sprite's


[link](https://google.com)

https://google.com


<br><br>

---
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


> [!tip] Here's a tip
> Wash your car

> [!danger] Here's some danger
> Please wash your car

<br><br>

---
## Pictures and links?

Below represents a picture from svg format. Very big

![](/vercel.svg)


Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisis ut maecenas magna eget mus habitant ridiculus erat. Platea velit nascetur phasellus elementum quam natoque curabitur. Ultrices curae convallis tristique leo cras. Magna odio parturient; vulputate fames tempor dis pretium risus. Ultrices porta vehicula litora mus tortor conubia. Risus vulputate in malesuada sapien, sagittis vulputate sollicitudin. Dapibus sed arcu efficitur faucibus efficitur. Netus placerat maecenas blandit tempus primis diam mollis ullamcorper. Fermentu

![](/attachments/example-nature.webp)



Heres code and links

`code` and [`code with link`](https://www.google.com/)

`inline code with white spaces           `

<br><br>

---
## Here's some vanilla quotes

> Hello 
> Goodbye

> Hello i am *itallic*  and I am **bold** and I am ***bold italic***

<br><br>

---
## Some codes


```gradle
dependencies {
    // Local Library Module Dependency
    implementation project(":mylibrary")
    
    // Local binary dependency
    implementation fileTree(dir: "libs", includes: ['*.jar'])
    
    // Alternatively, to specify specific files...
    implement files("libs/myFile.jar", "libs/myOtherfile.jar")
    
    // Remote binary dependencies
    implementation "com.example.android:app-magic:12.3"
}
```


```java
public class ModBlocks {
	public static Block register(Block block, String name, boolean shouldRegisterItem) {
		// Register the block and its item.
		Identifier id = Identifier.of(FabricDocsReference.MOD_ID, name);
        
		// Sometimes, you may not want to register an item for the block.
		// Eg: if it's a technical block like `minecraft:air` or `minecraft:end_gateway`
		if (shouldRegisterItem) {
			BlockItem blockItem = new BlockItem(block, new Item.Settings());
			Registry.register(Registries.ITEM, id, blockItem);
		}
        
		return Registry.register(Registries.BLOCK, id, block);
	}
}
```

Some JSX

```jsx
import remarkGfm from "remark-gfm";
import remarkObsidianCallout from "remark-obsidian-callout";

import rehypeRaw from "rehype-raw";

export default function WithTailWind({content}){
    return (
        <Markdown
            remarkPlugins={[remarkGfm, remarkObsidianCallout]}
            rehypePlugins={[rehypeRaw]}
            className={"max-w-7xl mx-auto prose lg:prose-lg " +
            "prose-inline-code:before:content-none prose-inline-code:after:content-none " +
            "prose-inline-code:bg-[#f6f6f7] prose-inline-code:px-1.5 prose-inline-code:py-1 " +
            "prose-inline-code:rounded-md "
            }
        >
            {content}
        </Markdown>
    );
}
```



some xml for android
```xml
<?xml version="1.0" encoding="utf-8"?>  
<manifest xmlns:android="http://schemas.android.com/apk/res/android" 
    xmlns:tools="http://schemas.android.com/tools">
    <uses-permission 
        android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
        
    <application        
        android:allowBackup="true"  
        android:dataExtractionRules="@xml/data_extraction_rules"  
        android:fullBackupContent="@xml/backup_rules"  
        android:icon="@mipmap/ic_launcher"  
        android:label="@string/app_name"  
        android:roundIcon="@mipmap/ic_launcher_round"  
        android:supportsRtl="true"  
        android:theme="@style/Theme.ConverterApp"  
        tools:targetApi="31">  
        
        <activity            
            android:name=".MainActivity"  
            android:exported="true">
            <intent-filter>                
                <action 
                    android:name="android.intent.action.MAIN"/> 
                <category
                    android:name="android.intent.category.LAUNCHER"/>  
            </intent-filter>        
        </activity>    
    </application>  
</manifest>
```


