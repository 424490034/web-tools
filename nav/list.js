// 工具数据数组
  const tools = [
    {
      icon: "fas fa-user",
      title: "中文姓名生成器",
      description: "随机生成中文姓名，可用于游戏角色、写作素材等场景，包含常见姓氏和名字组合。(๑•̀ㅂ•́)و✧",
      emoji: "(๑•̀ㅂ•́)و✧",
      link: "https://www.996day.com/name.html",
      buttonText: "立即使用",
      category: "text-tools"
    },
    {
      icon: "fas fa-video",
      title: "在线屏幕录制",
      description: "直接在浏览器中录制屏幕活动，支持全屏或指定标签页录制，无需安装任何软件。(●'◡'●)",
      emoji: "(●'◡'●)",
      link: "https://www.996day.com/record.html",
      buttonText: "开始录制",
      category: "media-tools"
    },
    {
      "icon": "fas fa-microphone",
      "title": "快捷录音",
      "description": "直接在浏览器中录音，录音存储在本地保护隐私。支持移动端浏览器，提供WebM（推荐）和MP3格式下载。(｡･ω･｡)",
      emoji: "(｡･ω･｡)",
      "link": "https://www.996day.com/tape.html",
      "buttonText": "开始录音",
      category: "audio-tools"
    },
    {
      icon: "fas fa-palette",
      title: "颜色卡",
      description: "获取颜色或者进行颜色RGB/RGBA/HEX/HSL互转。ヾ(≧▽≦*)o",
      emoji: "ヾ(≧▽≦*)o",
      link: "https://www.996day.com/color.html",
      buttonText: "开始使用",
      category: "text-tools"
    },
    {
      icon: "fas fa-compress",
      title: "图片压缩",
      description: "智能压缩JPG/PNG图片，最高可减少70%文件大小，保持图片质量无明显损失。(づ｡◕‿‿◕｡)づ",
      emoji: "(づ｡◕‿‿◕｡)づ",
      link: "https://tinypng.com/",
      buttonText: "压缩图片",
      category: "image-tools"
    },
    {
      icon: "fas fa-exchange-alt",
      title: "图片格式转换",
      description: "支持JPG、PNG、WEBP、GIF等多种格式互相转换，保留EXIF信息。(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
      emoji: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
      link: "https://www.996day.com/imgFormat.html",
      buttonText: "转换图片",
      category: "image-tools"
    },
    {
      icon: "fas fa-file-pdf",
      title: "图片转pdf",
      description: "支持JPG、PNG、WEBP、GIF等多种格式图片导出为pdf。(≧∇≦)ﾉ",
      emoji: "(≧∇≦)ﾉ",
      link: "https://www.996day.com/pdf.html",
      buttonText: "开始导出",
      category: "image-tools"
    },
    
    {
      "icon": "fas fa-cut",
      "title": "媒体区域裁剪工具",
      "description": "支持视频和图片区域裁剪处理，视频可指定时长和区域，图片可精确裁剪 - 基于FFmpeg WebAssembly和Cropper.js 🎬",
      "emoji": "🎬",
      "link": "https://www.996day.com/mediaCrop.html",
      "buttonText": "立即裁剪",
      category: "media-tools"
    },
    {
      icon: "fas fa-cut",
      title: "音视频时长剪辑",
      description: "在浏览器中直接剪辑音频和视频文件，支持MP3、MP4等多种格式。(๑•̀ω•́)ノ",
      emoji: "(๑•̀ω•́)ノ",
      link: "https://www.996day.com/jj.html",
      buttonText: "开始剪辑",
      category: "video-tools"
    },
    {
      icon: "fas fa-photo-film",
      title: "音视频截图",
      description: "在浏览器中直接截图视频文件，支持MP4多种格式。(✿◠‿◠)",
      emoji: "(✿◠‿◠)",
      link: "https://www.996day.com/screenshot.html",
      buttonText: "开始截图",
      category: "video-tools"
    },
    {
      icon: "fas fa-sync",
      title: "音视频格式转换",
      description: "将音视频文件转换为不同格式，支持MP3、WAV、MP4、MOV等常用格式。(～￣▽￣)～",
      emoji: "(～￣▽￣)～",
      link: "https://www.996day.com/format.html",
      buttonText: "转换格式",
      category: "media-tools"
    },
    {
      icon: "fas fa-object-group",
      title: "音视频合并",
      description: "将多个音频或视频文件合并为一个文件，支持调整顺序和添加过渡效果。(｡◕‿◕｡)",
      emoji: "(｡◕‿◕｡)",
      link: "https://www.996day.com/merge.html",
      buttonText: "合并文件",
      category: "media-tools"
    },
    {
      icon: "fas fa-cut",
      title: "视频音频分离",
      description: "将视频文件中的音频和视频轨道分离，支持指定时间范围和多种格式输出。(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
      emoji: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
      link: "https://www.996day.com/split.html",
      buttonText: "开始分离",
      category: "media-tools"
    },
    {
      icon: "fas fa-video",
      title: "视频播放器",
      description: "支持多选、M3U8直播、FLV流媒体及主流视频格式。(●ˇ∀ˇ●)",
      emoji: "(●ˇ∀ˇ●)",
      link: "https://www.996day.com/player.html",
      buttonText: "前往播放",
      category: "video-tools"
    },
    {
      icon: "fas fa-tree",
      title: "心灵树洞",
      description: "安全的情感倾诉空间，你的话语不会被保存，只会随风飘散在森林中。(｡◕‿◕｡)",
      emoji: "(｡◕‿◕｡)",
      link: "https://www.996day.com/su.html",
      buttonText: "进入树洞",
      category: "text-tools"
    },
    {
      icon: "fas fa-table",
      title: "在线Excel编辑器",
      description: "功能强大的在线Excel编辑器，支持多工作表、公式计算、格式设置，可读取、编辑和保存Excel文件。(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
      emoji: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
      link: "https://www.996day.com/excel.html",
      buttonText: "开始编辑",
      category: "text-tools"
    }
  ];

  // 工具分类定义
  const categories = {
    'all': { name: '全部工具', icon: 'fas fa-th' },
    'text-tools': { name: '文本工具', icon: 'fas fa-font' },
    'image-tools': { name: '图片工具', icon: 'fas fa-image' },
    'video-tools': { name: '视频工具', icon: 'fas fa-video' },
    'audio-tools': { name: '音频工具', icon: 'fas fa-music' },
    'media-tools': { name: '媒体工具', icon: 'fas fa-play-circle' }
  };

  // 当前选中的分类
  let currentCategory = 'all';

  // 筛选工具函数
  function filterTools(category) {
    if (currentCategory === category) return; // 如果已经是当前分类，不执行筛选
    
    currentCategory = category;
    const filteredTools = category === 'all' ? tools : tools.filter(tool => tool.category === category);
    const timelineTrack = document.querySelector("#timelineTrack");
    
    // 保存当前容器高度，防止抖动
    const currentHeight = timelineTrack.offsetHeight;
    timelineTrack.style.minHeight = currentHeight + 'px';
    
    // 获取当前所有工具卡片
    const currentSections = document.querySelectorAll('.tool-section');
    
    // 添加淡出动画
    currentSections.forEach((section, index) => {
      section.classList.add('filtering-out');
    });
    
    // 延迟渲染新工具，等待淡出动画完成
    setTimeout(() => {
      renderTools(filteredTools);
      updateCategoryButtons();
      
      // 重置容器最小高度
      setTimeout(() => {
        timelineTrack.style.minHeight = 'auto';
      }, 100);
      
      // 添加淡入动画
      const newSections = document.querySelectorAll('.tool-section');
      newSections.forEach((section, index) => {
        section.classList.add('filtering-in');
        setTimeout(() => {
          section.classList.remove('filtering-out', 'filtering-in');
        }, 400);
      });
    }, 300);
  }

  // 渲染工具函数
  function renderTools(toolsToRender) {
    const timelineTrack = document.querySelector("#timelineTrack");
    
    // 清空现有内容
    timelineTrack.innerHTML = "";
    
    // 使用DocumentFragment批量添加元素
    const trackFragment = document.createDocumentFragment();
    
    toolsToRender.forEach((tool, index) => {
      // 提取表情符号
      const emoji = tool.emoji;
      // 创建工具卡片
      const section = document.createElement("div");
      section.className = "tool-section";
      section.id = `tool-${index}`;
      section.setAttribute('data-category', tool.category);
      
      // 初始状态设为隐藏，准备淡入动画
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      
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
    
    // 重新初始化动画观察器
    initializeAnimations();
  }

  // 初始化动画效果
  function initializeAnimations() {
    const toolSections = document.querySelectorAll('.tool-section');
    
    // 为新渲染的工具卡片添加渐进式淡入动画
    toolSections.forEach((section, index) => {
      // 设置过渡效果
      section.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
      
      // 延迟触发淡入动画
      setTimeout(() => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, 50 + index * 30);
    });
    
    // 添加进入视图时的动画观察器（用于滚动时的动画）
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    toolSections.forEach((section) => {
      observer.observe(section);
    });
  }

  // 计算每个分类的工具数量
  function getCategoryCount(categoryKey) {
    if (categoryKey === 'all') {
      return tools.length;
    }
    return tools.filter(tool => tool.category === categoryKey).length;
  }

  // 生成分类导航
  function generateCategoryNavigation() {
    const categoryNav = document.querySelector('.tool-categories ul');
    if (!categoryNav) return;
    
    categoryNav.innerHTML = '';
    
    Object.keys(categories).forEach(categoryKey => {
      const category = categories[categoryKey];
      const count = getCategoryCount(categoryKey);
      const li = document.createElement('li');
      const a = document.createElement('a');
      
      a.href = '#';
      a.className = 'category-btn';
      a.setAttribute('data-category', categoryKey);
      a.innerHTML = `<i class="${category.icon}"></i> ${category.name} <span class="category-count">${count}</span>`;
      
      if (categoryKey === currentCategory) {
        a.classList.add('active');
      }
      
      a.addEventListener('click', (e) => {
        e.preventDefault();
        filterTools(categoryKey);
      });
      
      li.appendChild(a);
      categoryNav.appendChild(li);
    });
  }

  // 更新分类按钮状态
  function updateCategoryButtons() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-category') === currentCategory) {
        btn.classList.add('active');
      }
    });
  }

  // 动态生成工具网格
  document.addEventListener("DOMContentLoaded", function() {
    // 生成分类导航
    generateCategoryNavigation();
    
    // 初始渲染所有工具
    renderTools(tools);
  });