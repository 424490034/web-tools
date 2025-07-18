// 工具数据数组
  const tools = [
    {
      icon: "fas fa-user",
      title: "中文姓名生成器",
      description: "随机生成中文姓名，可用于游戏角色、写作素材等场景，包含常见姓氏和名字组合。(๑•̀ㅂ•́)و✧",
      emoji: "(๑•̀ㅂ•́)و✧",
      link: "https://open.996day.com/name.html",
      buttonText: "立即使用"
    },
    {
      icon: "fas fa-video",
      title: "在线屏幕录制",
      description: "直接在浏览器中录制屏幕活动，支持全屏或指定标签页录制，无需安装任何软件。(●'◡'●)",
      emoji: "(●'◡'●)",
      link: "https://open.996day.com/record.html",
      buttonText: "开始录制"
    },
    {
        "icon": "fas fa-microphone",
        "title": "快捷录音",
        "description": "直接在浏览器中录音，录音存储在本地保护隐私。支持移动端浏览器，提供WebM（推荐）和MP3格式下载。(｡･ω･｡)",
      emoji: "(｡･ω･｡)",
        "link": "https://open.996day.com/tape.html",
        "buttonText": "开始录音"
    },
    {
      icon: "fas fa-palette",
      title: "颜色卡",
      description: "获取颜色或者进行颜色RGB/RGBA/HEX/HSL互转。ヾ(≧▽≦*)o",
      emoji: "ヾ(≧▽≦*)o",
      link: "https://open.996day.com/color.html",
      buttonText: "开始使用"
    },
    {
      icon: "fas fa-compress",
      title: "图片压缩",
      description: "智能压缩JPG/PNG图片，最高可减少70%文件大小，保持图片质量无明显损失。(づ｡◕‿‿◕｡)づ",
      emoji: "(づ｡◕‿‿◕｡)づ",
      link: "https://tinypng.com/",
      buttonText: "压缩图片"
    },
    {
      icon: "fas fa-exchange-alt",
      title: "图片格式转换",
      description: "支持JPG、PNG、WEBP、GIF等多种格式互相转换，保留EXIF信息。(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
      emoji: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
      link: "https://open.996day.com/imgFormat.html",
      buttonText: "转换图片"
    },
    {
      icon: "fas fa-file-pdf",
      title: "图片转pdf",
      description: "支持JPG、PNG、WEBP、GIF等多种格式图片导出为pdf。(≧∇≦)ﾉ",
      emoji: "(≧∇≦)ﾉ",
      link: "https://open.996day.com/pdf.html",
      buttonText: "开始导出"
    },
    {
      icon: "fas fa-cut",
      title: "音视频剪辑",
      description: "在浏览器中直接剪辑音频和视频文件，支持MP3、MP4等多种格式。(๑•̀ω•́)ノ",
      emoji: "(๑•̀ω•́)ノ",
      link: "https://open.996day.com/jj.html",
      buttonText: "开始剪辑"
    },
    {
      icon: "fas fa-photo-film",
      title: "音视频截图",
      description: "在浏览器中直接截图视频文件，支持MP4多种格式。(✿◠‿◠)",
      emoji: "(✿◠‿◠)",
      link: "https://open.996day.com/screenshot.html",
      buttonText: "开始截图"
    },
    {
      icon: "fas fa-sync",
      title: "音视频格式转换",
      description: "将音视频文件转换为不同格式，支持MP3、WAV、MP4、MOV等常用格式。(～￣▽￣)～",
      emoji: "(～￣▽￣)～",
      link: "https://open.996day.com/format.html",
      buttonText: "转换格式"
    },
    {
      icon: "fas fa-object-group",
      title: "音视频合并",
      description: "将多个音频或视频文件合并为一个文件，支持调整顺序和添加过渡效果。(｡◕‿◕｡)",
      emoji: "(｡◕‿◕｡)",
      link: "https://open.996day.com/merge.html",
      buttonText: "合并文件"
    },
    {
      icon: "fas fa-video",
      title: "视频播放器",
      description: "支持多选、M3U8直播、FLV流媒体及主流视频格式。(●ˇ∀ˇ●)",
      emoji: "(●ˇ∀ˇ●)",
      link: "https://open.996day.com/player.html",
      buttonText: "前往播放"
    }
  ];

  // 动态生成工具网格
  document.addEventListener("DOMContentLoaded", function() {
    const timelineTrack = document.querySelector("#timelineTrack");
    
    // 清空现有内容
    timelineTrack.innerHTML = "";
    
    // 使用DocumentFragment批量添加元素
    const trackFragment = document.createDocumentFragment();
    
    tools.forEach((tool, index) => {
      // 提取表情符号
      const emoji = tool.emoji;
      // 创建工具卡片
      const section = document.createElement("div");
      section.className = "tool-section";
      section.id = `tool-${index}`;
      
      // 创建卡片HTML结构
      section.innerHTML = `
        <div class="tool-content-wrapper">
          <div class="tool-visual">
            <div class="tool-icon-bg"></div>
            <i class="${tool.icon} tool-icon-large"></i>
          </div>
          <div class="tool-details">
            <h3 data-emoji="${emoji}">${tool.title}</h3>
            <p>${tool.description}</p>
            <a href="${tool.link}" class="tool-link" target="_blank">${tool.buttonText}</a>
          </div>
        </div>
      `;
      
      // 添加到文档片段
      trackFragment.appendChild(section);
    });
    
    // 一次性添加到DOM
    timelineTrack.appendChild(trackFragment);
    
    // 工具卡片动画效果
    const toolSections = document.querySelectorAll('.tool-section');
    
    // 添加进入视图时的动画
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    
    toolSections.forEach((section) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });
  });