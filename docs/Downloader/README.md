# 下载

这也页面用来告诉你如何下载和补全Minecraft以及相关资源。

## DownloaderBase

`DownloaderBase`是所有下载器的基类，其中，以下几个委托属性是公开的：

+ `DownloadStarted`，下载开始事件。
+ `DownloadCompleted`，下载结束事件（无论成功与否）。
+ `DownloadProgressChanged`，下载进度改变事件。

:::tip
下面的所有下载器类都会使用这三个委托作为对应事件处理器。
:::

## MinecraftDownloader

`MinecraftDownloader`封装了Minecraft下载相关的方法。

### 配置

`MinecraftDownloader`有一个`Source`属性用来指示应该用哪个下载源，默认为官方源，可选值有`Bmclapi`，`Mcbbs`和`Mojang`。

:::tip 构造器
`MinecraftDownloader`的构造器需要一个`LocalityLocator`对象，但是也可以直接传入一个字符串。
:::

:::details 代码示例
```cs
var minecraftDownloader = new MinecraftDownloader("<.miencraft>")
{
    Source = DownloaderSource.Bmclapi
};
```
:::

### 获取最新版的Minecraft

此方法返回一个元组，`Item1`是`Release`，`Item2`是`Snapshot`。

```cs
var latestMinecrafts = await minecraftDownloader.GetLatestVersions();
```

### 获取所有Minecraft版本

此方法返回一个`IEnumerable<MinecraftDownloadItem>`。
```cs
var minecrafts = await minecraftDownloader.GetRemoteMinecrafts();
```

:::details 获取指定类型的Minecraft
```cs
//获取所有类型为Release的Minecraft
var specifiedTypeMinecrafts = (await minecraftDownloader.GetRemoteMinecrafts()).Where(x => x.Type == MinecraftDownloadType.Release);
```
:::

### 根据id获取指定版本的Miencraft

此方法返回一个`MinecraftDownloadItem`。

### 下载Minecraft

根据指定的id下载Minecraft。

```cs
await minecraftDownloader.Download("id");
```

:::tip
如果文件已经存在则不会下载。
:::

## DependenciesDownloader

依赖下载器。

### 配置

依赖下载器同样存在一个`Source`属性用来指定下载源，用法同上。

依赖下载器的构造器需要传入一个`IEnumerable<Dependency>`对象。

:::details 代码示例

```cs
var librariesLocator = new LibrariesLocator("<.miencraft>");
var dependencies = await librariesLocator.GetDependencies("<id>");
var dependenciesDownloader = new DependenciesDownloader(dependencies);
```
:::

### 开始下载

此方法还有一个叫做`parallelCount`的参数用来指示最大并行下载数，默认为5。
```cs
await dependenciesDownloader.Download();
```