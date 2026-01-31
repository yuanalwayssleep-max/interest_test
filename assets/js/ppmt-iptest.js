/**
 * 泡泡玛特IP测试逻辑
 */

// 测试功能模块
const PPMTIPTest = (function() {
  // 私有变量
  let answers = {};
  
  // 初始化函数
  function init() {
    // 初始化答案对象
    window.ppmtIpTestData.questions.forEach(question => {
      answers[question.id] = null;
    });
    
    // 渲染问题
    renderQuestions();
    
    // 初始化进度条
    updateProgress();
    
    // 绑定提交按钮事件
    document.getElementById('submitBtn').addEventListener('click', calculateResult);
  }
  
  // 动态生成问题
  function renderQuestions() {
    const container = document.getElementById('quizContainer');
    
    window.ppmtIpTestData.questions.forEach(question => {
      // 创建问题区域
      const quizSection = document.createElement('div');
      quizSection.className = 'quiz-section';
      
      // 创建问题标题
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question';
      questionDiv.innerHTML = `<span class="question-number">${question.number}</span>${question.text}`;
      
      // 创建选项区域
      const optionsDiv = document.createElement('div');
      optionsDiv.className = 'options';
      
      // 创建选项
      question.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.dataset.question = question.id;
        optionDiv.dataset.value = option.value;
        optionDiv.innerHTML = `<span><strong>${option.value}.</strong> ${option.text}</span>`;
        
        // 添加点击事件
        optionDiv.addEventListener('click', handleOptionClick);
        
        optionsDiv.appendChild(optionDiv);
      });
      
      // 组装问题区域
      quizSection.appendChild(questionDiv);
      quizSection.appendChild(optionsDiv);
      container.appendChild(quizSection);
    });
  }
  
  // 处理选项点击
  function handleOptionClick() {
    const question = this.dataset.question;
    const value = this.dataset.value;
    
    // 取消同组其他选项
    document.querySelectorAll(`[data-question="${question}"]`).forEach(opt => {
      opt.classList.remove('selected');
    });
    
    // 选中当前选项
    this.classList.add('selected');
    answers[question] = value;
    
    // 更新进度条
    updateProgress();
    
    // 检查是否全部完成
    checkComplete();
    
    // 添加触觉反馈（如果支持）
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  }
  
  // 更新进度条
  function updateProgress() {
    const totalQuestions = window.ppmtIpTestData.questions.length;
    const answered = Object.values(answers).filter(val => val !== null).length;
    const progress = (answered / totalQuestions) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
  }
  
  // 检查是否全部完成
  function checkComplete() {
    const allAnswered = Object.values(answers).every(val => val !== null);
    document.getElementById('submitBtn').disabled = !allAnswered;
  }
  
  // 计算结果
  function calculateResult() {
    // 显示加载状态
    const btnText = document.getElementById('btnText');
    btnText.innerHTML = '<span class="loading"></span>';
    
    setTimeout(() => {
      // 使用数据文件中的评分函数计算分数
      const scores = window.ppmtIpTestData.calculateScores(answers);
      const ipTypes = window.ppmtIpTestData.ipTypes;
      
      // 找出最高分
      const maxScore = Math.max(...Object.values(scores));
      const winner = Object.keys(scores).find(key => scores[key] === maxScore);
      
      // 显示结果
      const result = ipTypes[winner];
      document.getElementById('resultIP').textContent = `${result.emoji} ${result.name}`;
      document.getElementById('resultDesc').textContent = result.desc;
      
      // 显示分数表
      let scoreHTML = '<h3>各类型得分详情</h3>';
      
      // 按分数排序
      const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
      
      sortedScores.forEach(([key, score]) => {
        const type = ipTypes[key];
        const isWinner = key === winner;
        scoreHTML += `
          <div class="score-row ${isWinner ? 'winner' : ''}">
            <span class="score-label">${type.emoji} ${type.name}</span>
            <span class="score-value">${score} 分 ${isWinner ? '✓' : ''}</span>
          </div>
        `;
      });
      document.getElementById('scoreTable').innerHTML = scoreHTML;
      
      // 显示结果区域
      document.getElementById('resultSection').classList.add('show');
      
      // 恢复按钮文字
      btnText.textContent = '查看我的命中注定IP';
      
      // 滚动到结果
      setTimeout(() => {
        document.getElementById('resultSection').scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
      
      // 触觉反馈
      if (navigator.vibrate) {
        navigator.vibrate([50, 100, 50]);
      }
    }, 800);
  }
  
  // 返回公共API
  return {
    init: init
  };
})();

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', PPMTIPTest.init);