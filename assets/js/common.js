/**
 * 公共组件JavaScript文件
 * 包含所有页面共用的函数和功能
 */

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 初始化页面
  initPage();
});

/**
 * 初始化页面
 */
function initPage() {
  // 添加页面过渡效果
  document.body.classList.add('page-loaded');
  
  // 为所有返回按钮添加事件
  const backButtons = document.querySelectorAll('.back-button');
  backButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      navigateWithTransition(this.getAttribute('href'));
    });
  });
}

/**
 * 带过渡效果的页面导航
 * @param {string} url - 目标URL
 */
function navigateWithTransition(url) {
  document.body.classList.add('page-transition');
  setTimeout(function() {
    window.location.href = url;
  }, 300);
}

/**
 * 创建页面头部
 * @param {string} pageTitle - 页面标题
 * @param {string} pageDescription - 页面描述
 * @returns {string} HTML字符串
 */
function createHeader(pageTitle, pageDescription) {
  return `
    <div class="header">
      <div class="logo">
        <div class="logo-text">DJ</div>
      </div>
      <h1>${pageTitle}</h1>
      <p>${pageDescription}</p>
    </div>
  `;
}

/**
 * 创建页面底部
 * @returns {string} HTML字符串
 */
function createFooter() {
  const currentYear = new Date().getFullYear();
  return `
    <div class="footer">
      <p>© ${currentYear} 趣味职场测试系统 | 助力职场人士成长的趣味平台</p>
    </div>
  `;
}

/**
 * 显示加载中状态
 * @param {HTMLElement} container - 容器元素
 */
function showLoading(container) {
  const loadingEl = document.createElement('div');
  loadingEl.className = 'loading';
  loadingEl.innerHTML = '<div class="spinner"></div><p>加载中...</p>';
  container.appendChild(loadingEl);
}

/**
 * 隐藏加载中状态
 */
function hideLoading() {
  const loadingEl = document.querySelector('.loading');
  if (loadingEl) {
    loadingEl.remove();
  }
}

/**
 * 显示结果卡片
 * @param {HTMLElement} container - 容器元素
 * @param {string} title - 结果标题
 * @param {string} content - 结果内容
 */
function showResultCard(container, title, content) {
  const resultCard = document.createElement('div');
  resultCard.className = 'card result-card';
  resultCard.innerHTML = `
    <h3 class="card-title">${title}</h3>
    <div class="card-content">${content}</div>
    <a href="../index.html" class="back-button">返回首页</a>
  `;
  container.appendChild(resultCard);
}