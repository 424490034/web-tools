  // 保存首次进入时的默认标题
  const defaultTitle = document.title;

  let timer = null

  // 先显示“你可算回来了”
  document.title = '你可算回来了 (｡•ˇ‸ˇ•｡)';

  // 5 秒后恢复为原始标题
    timer = setTimeout(() => {
    document.title = defaultTitle;
  }, 5000);

  // 监听页面可见性变化
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      if (timer) {
        clearTimeout(timer);
      }
      // 当用户切换标签页或最小化窗口时
      document.title = '你别走吖 Σ(っ °Д °;)っ';
    } else {
      // 当用户返回页面时，依然先展示“你可算回来了”，然后还是在 5 秒后再回到 defaultTitle
      document.title = '你可算回来了 (｡•ˇ‸ˇ•｡)';
      timer = setTimeout(() => {
        document.title = defaultTitle;
      }, 5000);
    }
  });

  // 监听窗口关闭/刷新事件，增强体验
  window.addEventListener('beforeunload', function () {
    if (timer) {
      clearTimeout(timer);
    }
    document.title = '你别走吖 Σ(っ °Д °;)っ';
  });