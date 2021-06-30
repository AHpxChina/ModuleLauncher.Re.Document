# 项目结构

大致上，ModuleLauncher.Re的解决方案一共包括三个项目：

+ ModuleLauncher.Re
  + `ModuleLauncher.Re`是解决方案的主项目，包含本库所有的主要实现内容。
+ ModuleLauncher.Re.Example
  + `ModuleLauncher.Re.Example`是本库的示例项目，是一个avalonia编写的GUI项目。
+ ModuleLauncher.Re.Test
  + `ModuleLauncher.Re.Test`是用于方便测试本库各项功能是否正常运转的项目，一般来说不用去在意它。

## ModuleLauncher.Re

ModuleLauncher.Re的这个项目的结构是这样的：
~~细心地你会发现尽管它们是按照首字母排序的但同时也保持了单词长度排序~~

- [项目结构](#项目结构)
  - [ModuleLauncher.Re](#modulelauncherre)
    - [Authenticators](#authenticators)
    - [Downloaders](#downloaders)
    - [Launcher](#launcher)
    - [Locators](#locators)
    - [Models](#models)
    - [Utils](#utils)

### Authenticators
::: tip
所有`AuthenticatorBase`的子类的`Authenticate`方法都会返回一个[AuthenticateResult](#models)对象。
:::

  + `AuthenticatorBase`，抽象类，是所有*验证器*类型的基类。
  + `MicrosoftAuthenticator`，微软验证器，只实现了继承自`AuthenticatorBase`的`Authenticate`方法。
    + `Code`，属性，从[微软登录网页](https://wiki.vg/ZH:Microsoft_Authentication_Scheme)获取的`code`url参数。
    + `CheckMinecraftOwnership`，方法，检查对应传入的`AccessToken`的用户是否拥有Minecraft。
  + `MojangAuthenticator`，Mojang账户验证器，完整的继承了`AuthenticatorBase`定义的抽象成员。
    + `Account`，属性，用以验证的账号。
    + `Password`，属性，用以验证的账号的密码。
    + `ClientToken`，属性，客户端标识符。
    + `Authenticate`，方法，执行验证。
    + `Refresh`，方法，根据传入的*accessToken*和*clientToken*刷新*accessToken*。
    + `Validate`，方法，验证传入的*accessToken*和*clientToken*是否有效。
    + `SignOut`，方法，登出当前登录的账号（以账号和密码使目前的*accessToken*失效）。
    + `Invalidate`，方法，注销当前有效的*accssToken*。
  + `OfflineAuthenticator`，仅实现了`AuthenticatorBase`的`Authenticate`方法。

### Downloaders

+ `DownloaderBase`，抽象类，是所有*下载器*的基类。
  + `DownloadStarted`，属性，是一个`Action<DownloadStartedEventArgs>`类型的委托，代表下载开始了。
  + `DownloadCompleted`，属性，是一个`Action<AsyncCompletedEventArgs>`类型的委托，代表下载结束了（不管是成功还是失败）。
  + `DownloadProgressChanged`，属性，是一个`Action<DownloadProgressChangedEventArgs>`类型的委托，代码下载进度改变了。
+ `MinecraftDownloader`，*Minecraft下载器*。
  + `Source`，属性，下载源。
    + Mojang，官方下载源（此处的命名有些不严谨）。
    + [Bmclapi](https://bmclapidoc.bangbang93.com)，国内源，bmclapi下载源。
    + Mcbss，国内源，mcbbs下载源。
  + `GetLatestVersions`，方法，返回一个*元组*，第一个项目是*最新发布版*，第二个项目是*最新快照版*。
  + `GetRemoteMinecrafts`，获取所有的*Minecraft版本*。
  + `GetRemoteMinecraft`，获取指定的*Minecraft版本*。
  + `Download`，方法，下载Minecraft。

### Launcher

### Locators

### Models

 + AuthenticateResult，账号信息
   + `Name`，当前账号的角色名称。
   + `ClientToken`，当前账号的客户端标识符
   + `AccessToken`，当前账号的访问令牌
   + `Uuid `，当前账号的UUID，
   + 隐式转换：构造一个`Name`为传入字符串且其他属性随机生成的`AuthenticateResult`对象
 + MinecraftDownloadItem，获取到的*远程Minecraft对象*。
   + `Id`，*Minecraft ID*。
   + `Url`，Minecraft Json的url

### Utils