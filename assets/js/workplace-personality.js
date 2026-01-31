/**
 * 职场性格测试逻辑
 */

// 职场性格测试模块
const WorkplacePersonalityTest = (function() {
  // 私有变量
  let currentQuestion = 0;
  let answers = [];
  
  // 初始化函数
  function init() {
    initTest();
  }
  
  // 初始化测试
  function initTest() {
    const container = document.getElementById('questionsContainer');
    const questions = window.workplacePersonalityData.questions;
    
    questions.forEach((q, index) => {
      const card = document.createElement('div');
      card.className = 'question-card';
      if (index === 0) card.classList.add('active');
      
      card.innerHTML = `
        <div class="question-number">问题 ${index + 1}/10</div>
        <div class="question-text">${q.q}</div>
        <div class="options">
          <div class="option" onclick="WorkplacePersonalityTest.selectOption(${index}, 'A')">A. ${q.a}</div>
          <div class="option" onclick="WorkplacePersonalityTest.selectOption(${index}, 'B')">B. ${q.b}</div>
        </div>
        <div class="nav-buttons">
          ${index > 0 ? '<button class="btn btn-prev" onclick="WorkplacePersonalityTest.prevQuestion()">上一题</button>' : '<div></div>'}
          <button class="btn btn-next" id="nextBtn${index}" onclick="WorkplacePersonalityTest.nextQuestion()" disabled>
            ${index === 9 ? '查看结果' : '下一题'}
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  // 选择选项
  function selectOption(questionIndex, choice) {
    answers[questionIndex] = choice;
    
    const card = document.querySelectorAll('.question-card')[questionIndex];
    const options = card.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    const selectedIndex = choice === 'A' ? 0 : 1;
    options[selectedIndex].classList.add('selected');
    
    document.getElementById(`nextBtn${questionIndex}`).disabled = false;
  }
  
  // 下一题
  function nextQuestion() {
    if (currentQuestion < 9) {
      document.querySelectorAll('.question-card')[currentQuestion].classList.remove('active');
      currentQuestion++;
      document.querySelectorAll('.question-card')[currentQuestion].classList.add('active');
      updateProgress();
    } else {
      showResult();
    }
  }
  
  // 上一题
  function prevQuestion() {
    if (currentQuestion > 0) {
      document.querySelectorAll('.question-card')[currentQuestion].classList.remove('active');
      currentQuestion--;
      document.querySelectorAll('.question-card')[currentQuestion].classList.add('active');
      updateProgress();
    }
  }
  
  // 更新进度条
  function updateProgress() {
    const progress = ((currentQuestion + 1) / 10) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
  }
  
  // 显示结果
  function showResult() {
    const resultData = window.workplacePersonalityData.calculateResult(answers);
    
    document.getElementById('questionsContainer').style.display = 'none';
    document.querySelector('.progress-bar').style.display = 'none';
    
    document.getElementById('resultIcon').textContent = resultData.icon;
    document.getElementById('resultType').textContent = resultData.type;
    document.getElementById('resultSubtitle').textContent = resultData.subtitle;
    document.getElementById('characteristics').innerHTML = resultData.characteristics;
    //document.getElementById('advice').innerHTML = resultData.advice;
    
    document.getElementById('resultCard').classList.add('show');
  }
  
  // 重新开始测试
  function restartTest() {
    currentQuestion = 0;
    answers = [];
    
    document.getElementById('resultCard').classList.remove('show');
    document.getElementById('questionsContainer').style.display = 'block';
    document.querySelector('.progress-bar').style.display = 'block';
    
    document.querySelectorAll('.question-card').forEach((card, index) => {
      card.classList.remove('active');
      if (index === 0) card.classList.add('active');
      card.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
      const nextBtn = card.querySelector('.btn-next');
      if (nextBtn) nextBtn.disabled = true;
    });
    
    updateProgress();
  }
  
  // 返回公共API
  return {
    init: init,
    selectOption: selectOption,
    nextQuestion: nextQuestion,
    prevQuestion: prevQuestion,
    restartTest: restartTest
  };
})();

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', WorkplacePersonalityTest.init);