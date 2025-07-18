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

  // 动态生成工具时间线
  document.addEventListener("DOMContentLoaded", function() {
    const timelineTrack = document.querySelector("#timelineTrack");
    const timelineNavigation = document.querySelector("#timelineNavigation");
    const sidebarNavigation = document.querySelector("#sidebarNavigation");
    const timelineIndicator = document.querySelector("#timelineIndicator");
    const timelinePrev = document.querySelector("#timelinePrev");
    const timelineNext = document.querySelector("#timelineNext");
    
    // 清空现有内容
    timelineTrack.innerHTML = "";
    timelineNavigation.innerHTML = "";
    sidebarNavigation.innerHTML = "";
    
    
    // 使用DocumentFragment批量添加元素
    const trackFragment = document.createDocumentFragment();
    const navFragment = document.createDocumentFragment();
    const sidebarFragment = document.createDocumentFragment();
    
    tools.forEach((tool, index) => {
      // 提取表情符号
      const emoji = tool.emoji;
      // 创建时间线部分
      const section = document.createElement("div");
      section.className = "tool-section";
      section.id = `tool-${index}`;
      section.dataset.index = index;
      
      // 创建时间线HTML结构
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
      
      // 创建主导航点
      const dot = document.createElement("div");
      dot.className = "timeline-dot";
      dot.dataset.index = index;
      if (index === 0) dot.classList.add("active");
      
      // 创建侧边栏导航点
      const sidebarDot = document.createElement("div");
      sidebarDot.className = "sidebar-dot";
      sidebarDot.dataset.index = index;
      sidebarDot.dataset.title = tool.title; // 添加标题属性用于悬停显示
      if (index === 0) sidebarDot.classList.add("active");
      
      // 添加到文档片段
      trackFragment.appendChild(section);
      navFragment.appendChild(dot);
      sidebarFragment.appendChild(sidebarDot);
    });
    
    // 一次性添加到DOM
    timelineTrack.appendChild(trackFragment);
    timelineNavigation.appendChild(navFragment);
    sidebarNavigation.appendChild(sidebarFragment);
    
    // 设置当前活动工具索引
    let currentIndex = 0;
    const totalTools = tools.length;
    
    // 更新导航点状态
    function updateNavDots(index) {
      // 更新主导航点
      const dots = document.querySelectorAll('.timeline-dot');
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
      
      // 更新侧边栏导航点
      const sidebarDots = document.querySelectorAll('.sidebar-dot');
      sidebarDots.forEach(dot => dot.classList.remove('active'));
      sidebarDots[index].classList.add('active');
    }
    
    // 滚动到指定工具
    function scrollToTool(index) {
      if (index < 0) index = 0;
      if (index >= totalTools) index = totalTools - 1;
      
      currentIndex = index;
      const section = document.querySelector(`#tool-${index}`);
      section.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      updateNavDots(index);
      
      // 更新进度指示器
      const progress = (index / (totalTools - 1)) * 100;
      timelineIndicator.style.width = `${progress}%`;
    }
    
    // 主导航点点击事件
    timelineNavigation.addEventListener('click', (e) => {
      if (e.target.classList.contains('timeline-dot')) {
        const index = parseInt(e.target.dataset.index);
        scrollToTool(index);
      }
    });
    
    // 侧边栏导航点点击事件
    sidebarNavigation.addEventListener('click', (e) => {
      if (e.target.classList.contains('sidebar-dot')) {
        const index = parseInt(e.target.dataset.index);
        scrollToTool(index);
      }
    });
    
    // 为侧边栏导航点添加触摸事件支持
    sidebarNavigation.addEventListener('touchend', (e) => {
      if (e.target.classList.contains('sidebar-dot')) {
        const index = parseInt(e.target.dataset.index);
        scrollToTool(index);
      }
    });
    
    // 前后导航按钮 - 添加点击和触摸事件支持
    timelinePrev.addEventListener('click', () => scrollToTool(currentIndex - 1));
    timelineNext.addEventListener('click', () => scrollToTool(currentIndex + 1));
    
    // 为前后导航按钮添加触摸事件支持
    timelinePrev.addEventListener('touchend', (e) => {
      e.preventDefault(); // 防止触发点击事件
      scrollToTool(currentIndex - 1);
    });
    timelineNext.addEventListener('touchend', (e) => {
      e.preventDefault(); // 防止触发点击事件
      scrollToTool(currentIndex + 1);
    });
    
    // 监听滚动事件，更新当前索引和导航点
    timelineTrack.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('.tool-section');
      const trackWidth = timelineTrack.offsetWidth;
      const scrollLeft = timelineTrack.scrollLeft;
      
      // 计算当前可见的部分
      const visibleIndex = Math.round(scrollLeft / trackWidth);
      
      if (visibleIndex !== currentIndex) {
        currentIndex = visibleIndex;
        updateNavDots(currentIndex);
        
        // 更新进度指示器
        const progress = (currentIndex / (totalTools - 1)) * 100;
        timelineIndicator.style.width = `${progress}%`;
      }
    });
    
    // 监听页面垂直滚动，自动切换工具卡片
    let lastScrollY = window.scrollY;
    let scrollTimeout;
    let isScrollingVertically = false;
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      const timelineRect = document.querySelector('.tools-timeline').getBoundingClientRect();
      
      // 检查时间线是否在视口中
      if (timelineRect.top < window.innerHeight && timelineRect.bottom > 0) {
        // 防止水平滚动时触发
        if (!isScrollingVertically) {
          // 清除之前的定时器
          clearTimeout(scrollTimeout);
          
          // 设置新的定时器，防止频繁触发
          scrollTimeout = setTimeout(() => {
            // 向下滚动切换到下一个工具，向上滚动切换到上一个工具
            if (Math.abs(scrollDelta) > 20) { // 滚动幅度阈值
              if (scrollDelta > 0 && currentIndex < totalTools - 1) {
                // 向下滚动，切换到下一个工具
                scrollToTool(currentIndex + 1);
              } else if (scrollDelta < 0 && currentIndex > 0) {
                // 向上滚动，切换到上一个工具
                scrollToTool(currentIndex - 1);
              }
            }
          }, 100); // 延迟执行，防止频繁触发
        }
      }
      
      lastScrollY = currentScrollY;
    });
    
    // 标记水平滚动状态
    timelineTrack.addEventListener('scroll', () => {
      isScrollingVertically = false;
      clearTimeout(scrollTimeout);
      
      // 200ms后重置标志，允许垂直滚动触发切换
      setTimeout(() => {
        isScrollingVertically = false;
      }, 200);
    });
    
    // 初始化第一个工具的显示，但不滚动页面到底部
    // 使用setTimeout确保DOM完全加载后再执行，防止初始滚动问题
    setTimeout(() => {
      // 保存当前滚动位置
      const currentScrollY = window.scrollY;
      
      // 更新当前索引和导航点，但不触发页面滚动
      currentIndex = 0;
      updateNavDots(0);
      
      // 只滚动时间线，不滚动整个页面
      const section = document.querySelector(`#tool-0`);
      if (section) {
        timelineTrack.scrollLeft = 0;
      }
      
      // 更新进度指示器
      timelineIndicator.style.width = '0%';
      
      // 如果页面被滚动了，恢复原来的滚动位置
      if (window.scrollY !== currentScrollY) {
        window.scrollTo(0, currentScrollY);
      }
    }, 100);
    
    // 添加键盘导航
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        scrollToTool(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        scrollToTool(currentIndex + 1);
      }
    });
    
    // 为移动端添加触摸滑动功能
    let touchStartX = 0;
    let touchEndX = 0;
    
    timelineTrack.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    timelineTrack.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, false);
    
    function handleSwipe() {
      const swipeThreshold = 50; // 滑动阈值
      if (touchEndX < touchStartX - swipeThreshold) {
        // 向左滑动，显示下一个工具
        scrollToTool(currentIndex + 1);
      } else if (touchEndX > touchStartX + swipeThreshold) {
        // 向右滑动，显示上一个工具
        scrollToTool(currentIndex - 1);
      }
    }
  });