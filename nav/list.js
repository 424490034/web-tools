  // 工具数据数组
  const tools = [
    {
      icon: "fas fa-user",
      title: "中文姓名生成器",
      description: "随机生成中文姓名，可用于游戏角色、写作素材等场景，包含常见姓氏和名字组合。",
      link: "https://open.996day.com/name.html",
      buttonText: "立即使用"
    },
    {
      icon: "fas fa-video",
      title: "在线屏幕录制",
      description: "直接在浏览器中录制屏幕活动，支持全屏或指定标签页录制，无需安装任何软件。",
      link: "https://open.996day.com/record.html",
      buttonText: "开始录制"
    },
    ,
    {
        "icon": "fas fa-microphone",
        "title": "快捷录音",
        "description": "直接在浏览器中录音，录音存储在本地保护隐私。支持移动端浏览器，提供WebM（推荐）和MP3格式下载。",
        "link": "https://open.996day.com/tape.html",
        "buttonText": "开始录音"
    },
    {
      icon: "fas fa-palette",
      title: "颜色卡",
      description: "获取颜色或者进行颜色RGB/RGBA/HEX/HSL互转。",
      link: "https://open.996day.com/color.html",
      buttonText: "开始使用"
    },
    {
      icon: "fas fa-compress",
      title: "图片压缩",
      description: "智能压缩JPG/PNG图片，最高可减少70%文件大小，保持图片质量无明显损失。",
      link: "https://tinypng.com/",
      buttonText: "压缩图片"
    },
    {
      icon: "fas fa-exchange-alt",
      title: "图片格式转换",
      description: "支持JPG、PNG、WEBP、GIF等多种格式互相转换，保留EXIF信息。",
      link: "https://open.996day.com/imgFormat.html",
      buttonText: "转换图片"
    },
    {
      icon: "fas fa-file-pdf",
      title: "图片转pdf",
      description: "支持JPG、PNG、WEBP、GIF等多种格式图片导出为pdf。",
      link: "https://open.996day.com/pdf.html",
      buttonText: "开始导出"
    },
    {
      icon: "fas fa-cut",
      title: "音视频剪辑",
      description: "在浏览器中直接剪辑音频和视频文件，支持MP3、MP4等多种格式。",
      link: "https://open.996day.com/jj.html",
      buttonText: "开始剪辑"
    },
    {
      icon: "fas fa-photo-film",
      title: "音视频截图",
      description: "在浏览器中直接截图视频文件，支持MP4等多种格式。",
      link: "https://open.996day.com/screenshot.html",
      buttonText: "开始截图"
    },
    {
      icon: "fas fa-sync",
      title: "音视频格式转换",
      description: "将音视频文件转换为不同格式，支持MP3、WAV、MP4、MOV等常用格式。",
      link: "https://open.996day.com/format.html",
      buttonText: "转换格式"
    },
    {
      icon: "fas fa-object-group",
      title: "音视频合并",
      description: "将多个音频或视频文件合并为一个文件，支持调整顺序和添加过渡效果。",
      link: "https://open.996day.com/merge.html",
      buttonText: "合并文件"
    },
    {
      icon: "fas fa-video",
      title: "视频播放器",
      description: "支持多选、M3U8直播、FLV流媒体及主流视频格式",
      link: "https://open.996day.com/player.html",
      buttonText: "前往播放"
    }
  ];

  // 动态生成工具卡片
  document.addEventListener("DOMContentLoaded", function() {
    const toolsGrid = document.querySelector(".tools-grid");
    
    // 清空现有内容
    toolsGrid.innerHTML = "";
    
    // 使用DocumentFragment批量添加元素
    const fragment = document.createDocumentFragment();
    
    tools.forEach(tool => {
      // 创建卡片容器
      const card = document.createElement("div");
      card.className = "tool-card";
      
      // 创建卡片HTML结构
      card.innerHTML = `
        <div class="tool-icon">
          <i class="${tool.icon}"></i>
        </div>
        <div class="tool-content">
          <h3>${tool.title}</h3>
          <p>${tool.description}</p>
          <a href="${tool.link}" class="tool-link" target="_blank">${tool.buttonText}</a>
        </div>
      `;
      
      // 添加到文档片段
      fragment.appendChild(card);
    });
    
    // 一次性添加到DOM
    toolsGrid.appendChild(fragment);
  });