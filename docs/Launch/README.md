# 启动

这个页面用来告诉你怎么使用ModuleLauncher.Re来启动Minecraft。

## Launcher

### 配置

`Launcher`类是ModuleLauncher.Re中启动Minecraft的核心类，也是唯一用来启动Minecraft的类。

它有以下属性，用来配置Minecraft启动信息：

+ `Java`，java运行时可执行文件的路径，比如`javaw.exe`或者`java.exe`。
+ `Authentication`，验证信息，是一个[AuthenticateResult](../Structure/README.md#models)对象。
+ `LauncherName`，你的启动器名称，会显示在游戏里。可选，默认为`ml.net`。
+ `MaximumMemorySize`，最多分配多少内存给Minecraft，单位是MB，默认为1024。
+ `MinimumMemorySize`，最少分配多少内存给Minecraft，单位是MB，可选，默认为null。
+ `WindowHeight`，Minecraft窗口的高度，可选的。
+ `WindowWidth`，Minecraft窗口的宽度，可选的。
+ `Fullscreen`，是否全屏启动游戏，可选的。

实际上，只有`Java`和`Authentication`两个属性是必须填写的。

:::tip 隐式转换的Authentication
`Authentication`属性的的值可以直接传递进来一个字符串，相当于一个以传进来的字符串为玩家名称的离线验证器。
:::

:::tip 构造器
`Launcher`类有且仅有一个参数为`MinecraftLocator`对象的构造器，但是和`Authentication`同理，这个构造器也可以直接传入一个`.minecraft`路径的字符串。
如果传入的字符串为空或null，那么将会以`./.minecraft`构造一个`MiencraftLocator`对象。
:::

:::details 代码示例
```cs
var launcher = new Launcher("<.minecraft>")
{
    Java = "<javaw.exe or java.exe>",
    Authentication = "<player name> or <xxAuthenticator.Authenticate()>",
    LauncherName = "<launcher name>", //optianal
    MaximumMemorySize = 1024, //optional
    MinimumMemorySize = null, //optional
    WindowHeight = null, //optional
    WindowWidth = null, //optional
    Fullscreen = null //optional
};
```
:::

### 启动！

按照上边的示例代码（带有optional的属性可以删掉）构造了一个`Launcher`对象之后，调用`launcher`对象的`Launch`方法，传入`Minecraft id`，就可以启动Minecraft了！

```cs
var proecess = await launcher.Launch("<minecraft id>");
```

:::details Minecraft id是什么
Minecraft id就是Minecraft的json文件里`id`这个键的值，原则上，minecraft id理应和Minecraft本地文件名相同。

:::tip
比如minecraft id为1.16.5的Minecraft，其本地文件就应该是这样的：
+ .minecraft
  + versions
    + 1.16.5
      + 1.16.5.jar
      + 1.16.5.json
:::

`Launch`方法返回的是一个`Process`对象，也就是Minecraft游戏进程，通常来说它有以下作用：（更多用法还请自行发掘）

:::details 获取游戏输出
```cs
while (!string.IsNullOrEmpty(await process.StandardOutput.ReadLineAsync()))
{
    Console.WriteLine(await process.StandardOutput.ReadLineAsync());
}
```
:::

:::details 检测游戏退出
```cs
process.Exited += (_, _) => 
{
    //do something
};
```
:::