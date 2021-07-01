# 项目结构

大致上，ModuleLauncher.Re的解决方案一共包括三个项目：

+ ModuleLauncher.Re
  + `ModuleLauncher.Re`是解决方案的主项目，包含本库所有的主要实现内容。
+ ModuleLauncher.Re.Example
  + `ModuleLauncher.Re.Example`是本库的示例项目，是一个avalonia编写的GUI项目。
+ ModuleLauncher.Re.Test
  + `ModuleLauncher.Re.Test`是用于方便测试本库各项功能是否正常运转的项目，一般来说不用去在意它。

- [项目结构](#项目结构)
  - [ModuleLauncher.Re](#modulelauncherre)
    - [Authenticators](#authenticators)
    - [Downloaders](#downloaders)
    - [Launcher](#launcher)
    - [Locators](#locators)
    - [Models](#models)
    - [Utils](#utils)
  - [ModuleLauncher.Re.Example](#modulelauncherreexample)
    - [Assets](#assets)
    - [Extensions](#extensions)
    - [ViewModels](#viewmodels)
    - [Views](#views)
  - [ModuleLaucher.Test](#modulelauchertest)

## ModuleLauncher.Re

主项目，基于[.Net Standard](https://docs.microsoft.com/en-us/dotnet/standard/net-standard)编写。

### Authenticators

验证器。

+ `AuthenticatorBase`，抽象类，是所有*验证器*类型的基类。
+ `MicrosoftAuthenticator`，微软验证器。
+ `OfflineAuthenticator`，离线验证器。
+ `MojangAuthenticator`，Mojang验证器。

### Downloaders

下载器。

+ `DownloaderBase`，抽象类，是所有*下载器*的基类。
+ `MinecraftDownloader`，*Minecraft下载器*。
+ `DependenciesDownloader`，*依赖下载器*（Libraries和Assets）。

### Launcher

启动器。

+ `Launcher`，启动器类。

### Locators

定位器。

+ `LocalityLocator`，Minecraft本地文件定位器，尽管其方法是公开的，但不推荐使用。
+ `MinecraftLocator`，Minecraft定位器，获取一个Minecraft对象。
+ `AssetsLocator`，Assets定位器。
+ `LibrariesLocator`，Libraries定位器。

### Models

数据模型。

 + `AuthenticateResult`，账号信息。
 + `MinecraftDownloadItem`，获取到的*远程Minecraft对象*。
 + `MinecraftDownloadType`，远程Minecraft的类型，比如release，snapshot和old_alpha/beta。
 + `DownloaderSource`，下载源，包括Mojang（不严谨的说法，实际上是官方下载源），Bmclapi和Mcbbs。
 + `Minecraft`，Minecraft对象，包括本地文件描述和json实体。
 + `MinecraftJson`，Minecraft json实体类。
 + `LocalVersion`，本地版本信息描述。
 + `Dependency`，依赖，描述一个Library或Asset。
 + `DependencySystem`，依赖所适用的操作系统类型。

### Utils

此命名空间下的大部分类和方法都仅供ModuleLauncher.Re内部使用，仅公开一个`ToJsonString`方法以便调试。

## ModuleLauncher.Re.Example

示例项目，基于[.Net Core 3.1](https://dotnet.microsoft.com/download/dotnet/3.1)和Avalonia 0.10.6（一种类似于WPFd的XAML框架）编写。如果想要搞懂UI的实现方案，请事先了解[Avalonia](https://avaloniaui.net/)和MVVM模式([Rective UI](https://www.reactiveui.net/))

### Assets

资源文件，图标、图片之类的。

### Extensions

拓展工具。

+ `GlobalUtiliti`，全局工具类。
+ `MessageBoxEx`，信息框类，弥补了Avalonia没有信息框的问题。

### ViewModels

**视图模型**，所有例子的程序逻辑都在这里。

+ `MicrosoftAuthenticatorViewModel`，微软验证示例视图模型。
+ `MojangAuthenticatorViewModel`，Mojang验证示例视图模型。
+ `OfflineAuthenticatorViewModel`，离线验证器示例视图模型。
+ `DownloadersViewModel`，下载器示例视图模型。
+ `LibrariesDownloaderItemViewModel`，Libraries下载器项目视图模型，没有程序逻辑。
+ `LauncherViewModel`，启动器示例视图模型。
+ `MinecraftLocatorViewModel`，定位器示例视图模型，包含了`AssetsLocator`和`LibrariesLocator`的示例。
+ `MainWindowViewModel`，主窗口视图模型，没有内容。
+ `ViewModelBase`，视图模型基类，没有内容，只是继承了`ReactiveObject`。 

### Views

视图，是要呈现的UI实现代码。

+ `MainWindow`，主窗口视图。
+ `AuthenticatorsView`，验证器视图。
  + `MicrosoftAuthenticatorView`，微软验证器视图。
  + `MicrosoftAuthenticatorWebBrowser`，微软验证器的网页浏览器视图。
  + `MojangAuthenticatorView`，Mojang验证器视图。
  + `OfflineAuthenticatorView`，离线验证器视图。
+ `LocatorsView`，定位器视图。
  + `MinecraftLocatorView`，Minecraft定位器视图。
+ `LauncherView`，启动器视图。
+ `DownloadersView`，下载器视图。

## ModuleLaucher.Test

+ 这个项目没啥好讲的。
+ 这个项目没啥好讲的。
+ 这个项目没啥好讲的。