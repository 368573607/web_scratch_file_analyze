# web_scratch_file_analyze（已废弃，正在制作更好的替代方案）

Scratch 文件分析器

368573607/scratch_file_analyze 的可视化版本

## 使用

```
//克隆仓库
$ git clone git@github.com:368573607/web_scratch_file_analyze.git
$ cd web_scratch_file_analyze

//安装packages
$ npm i

//编译项目
$ npm run build //如果需要编译development版的，则运行$ npm run devbuild
```

编译完毕后，最终代码在./dist文件夹中，打开index.html即可使用

## 说明

项目很垃圾，真的很垃圾。你会发现有很多Bug，目前我已经知道了部分Bug，并在下一个小版本里边修复。UI也很难看，我没有为它写css，要使用具有美观界面的分析器，请等待下一个中版本的发布。

如果你有对项目的建议，可以提交issue，也可以在讨论区讨论。你也可以发布pull request，作者时常在线，随时接受你的贡献。

## Bug的暂时解决方案

* 当你复制一个json到输入框时，程序不会立即计算出结果（我也不知道为什么），你可以在最后按一下空格（或者其他什么键），然后backspace删除，这样就成功了。

## 版本憧憬

* [] 修复已知bug（小）
* [] 将json转换为中文可识别符（小）
* [] 使用百分率（小）
* [] 添加CSS样式（中）
* [] 实现直接使用.sb3解析（大）
