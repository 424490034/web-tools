# 多功能在线工具箱 🛠️

一个功能强大的纯前端工具集合，提供30+实用在线工具，无需服务器，保护用户隐私。

## 🌟 项目特色

- **🔒 隐私安全**：纯前端运行，数据不上传服务器
- **📱 跨平台**：支持桌面和移动端浏览器
- **⚡ 即开即用**：无需安装，打开浏览器即可使用
- **🎨 现代设计**：毛玻璃效果，支持明暗主题切换
- **🚀 高性能**：基于现代Web技术，响应迅速

## 🛠️ 工具列表

### 📝 文本工具
- **中文姓名生成器** - 随机生成中文姓名，适用于游戏角色、写作素材
- **颜色卡** - RGB/RGBA/HEX/HSL颜色格式互转
- **心灵树洞** - 安全的情感倾诉空间
- **在线Excel编辑器** - 功能强大的电子表格编辑器，支持多工作表、公式计算

### 🖼️ 图片工具
- **图片压缩** - 智能压缩JPG/PNG，最高减少70%文件大小
- **图片格式转换** - 支持JPG、PNG、WEBP、GIF等格式互转
- **图片转PDF** - 多种图片格式导出为PDF文件

### 🎵 音频工具
- **快捷录音** - 浏览器内录音，支持WebM和MP3格式

### 🎬 视频工具
- **音视频时长剪辑** - 浏览器内剪辑音视频文件
- **音视频截图** - 从视频文件中提取截图
- **视频播放器** - 支持多选、M3U8直播、FLV流媒体

### 🎪 媒体工具
- **在线屏幕录制** - 录制屏幕活动，支持全屏或指定标签页
- **媒体区域裁剪** - 视频和图片区域裁剪处理
- **音视频格式转换** - 支持MP3、WAV、MP4、MOV等格式转换
- **音视频合并** - 多个音视频文件合并，支持调整顺序

## 🚀 快速开始

### 在线使用
访问：[https://www.996day.com](https://www.996day.com)

### 本地部署

```bash
# 克隆项目
git clone https://github.com/424490034/web-tools.git

# 进入项目目录
cd web-tools

# 使用任意HTTP服务器启动
# 方式1：使用Python
python -m http.server 3000

# 方式2：使用Node.js
npx serve .

# 方式3：使用Live Server (VS Code插件)
# 右键index.html -> Open with Live Server
```

## 📁 项目结构

```
videoMacro/
├── index.html              # 主页面
├── nav/
│   └── list.js            # 工具配置和导航逻辑
├── excel.html             # Excel编辑器
├── record.html            # 屏幕录制
├── tape.html              # 录音工具
├── color.html             # 颜色转换
├── imgFormat.html         # 图片格式转换
├── pdf.html               # 图片转PDF
├── mediaCrop.html         # 媒体裁剪
├── jj.html                # 音视频剪辑
├── screenshot.html        # 视频截图
├── format.html            # 格式转换
├── merge.html             # 音视频合并
├── player.html            # 视频播放器
├── name.html              # 姓名生成器
├── su.html                # 心灵树洞
├── excel/                 # Excel相关资源
├── player/                # 播放器相关资源
├── videoFormat/           # 视频处理资源
├── RecordRTC.js           # 录制功能库
├── ffmpeg.min.js          # 音视频处理库
└── title.js               # 页面标题管理
```

## 🔧 技术栈

- **前端框架**：原生JavaScript + HTML5 + CSS3
- **UI设计**：毛玻璃效果 + 响应式布局
- **音视频处理**：FFmpeg WebAssembly
- **录制功能**：RecordRTC.js
- **Excel功能**：x-spreadsheet + XLSX.js
- **图片处理**：Cropper.js
- **视频播放**：DPlayer + 多种流媒体支持
- **图标库**：Font Awesome 6.0

## 🌐 浏览器支持

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- 📱 移动端推荐使用Chrome浏览器

## 📋 功能特性

### 🎨 界面特性
- 毛玻璃效果设计
- 明暗主题切换
- 响应式布局
- 平滑动画过渡
- 工具分类筛选

### 🔐 隐私保护
- 所有处理均在本地完成
- 不上传任何用户数据
- 不依赖外部服务器
- 开源透明

### ⚡ 性能优化
- 懒加载资源
- 模块化设计
- 压缩优化
- CDN加速

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 开源协议

本项目采用 MIT 协议 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🔗 相关链接

- 🌐 [在线体验](https://www.996day.com)
- 📚 [项目文档](https://github.com/424490034/web-tools)
- 🐛 [问题反馈](https://github.com/424490034/web-tools/issues)
- 💬 [功能建议](https://github.com/424490034/web-tools/discussions)

## 📊 项目统计

- 🛠️ 工具数量：15+
- 📂 文件大小：< 50MB
- 🚀 加载速度：< 3秒
- 📱 移动端适配：100%

---

**如果这个项目对你有帮助，请给个 ⭐ Star 支持一下！**

*让工具回归简单，让效率触手可及* ✨