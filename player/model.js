   // 自定义弹框功能
      const customModal = document.getElementById('customModal');
      const videoUrlInput = document.getElementById('videoUrl');
      const videoTitleInput = document.getElementById('videoTitle');
      const closeModalBtn = document.querySelector('.close-modal');
      const cancelBtn = document.querySelector('.modal-btn.cancel');
      const confirmBtn = document.querySelector('.modal-btn.confirm');
      
      // 显示自定义弹框
      function showCustomPrompt() {
        // 清空输入框
        videoUrlInput.value = '';
        videoTitleInput.value = '';
        
        // 显示弹框
        customModal.style.display = 'flex';
        
        // 聚焦到URL输入框
        setTimeout(() => {
          videoUrlInput.focus();
        }, 100);
      }
      
      // 隐藏自定义弹框
      function hideCustomPrompt() {
        customModal.style.display = 'none';
      }
      
      // 添加URL按钮事件处理
      addUrlBtn.addEventListener('click', () => {
        showCustomPrompt();
      });
      
      // 关闭弹框事件
      closeModalBtn.addEventListener('click', hideCustomPrompt);
      cancelBtn.addEventListener('click', hideCustomPrompt);
      
      // 点击弹框外部关闭
      customModal.addEventListener('click', (e) => {
        if (e.target === customModal) {
          hideCustomPrompt();
        }
      });
      
      // 确认按钮事件
      confirmBtn.addEventListener('click', () => {
        const url = videoUrlInput.value.trim();
        const title = videoTitleInput.value.trim() || '我的视频';
        
        if (url) {
          const type = getFileType(url);
          addToPlaylist({
            title: title,
            url: url,
            type: type,
          });
          hideCustomPrompt();
        } else {
          // 如果URL为空，显示错误提示
          videoUrlInput.style.borderColor = '#e74c3c';
          videoUrlInput.placeholder = '请输入有效的视频URL';
          setTimeout(() => {
            videoUrlInput.style.borderColor = '#3498db';
            videoUrlInput.placeholder = '请输入视频URL';
          }, 2000);
        }
      });
      
      // 支持回车键提交
      videoUrlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          confirmBtn.click();
        }
      });
      
      videoTitleInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          confirmBtn.click();
        }
      });
      