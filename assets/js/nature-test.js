/**
 * 性格测试系统JavaScript文件
 * 可配置的问答系统
 */

// 全局变量
let currentQuestionIndex = 0;
let userAnswers = {};
// 注意：testData 和 testVersion 变量由页面提供

// 初始化函数
function init() {
  console.log('初始化测试系统...');
  console.log('测试数据:', testData);
  
  // 添加事件监听器
  const startBtn = document.getElementById('start-test-btn');
  if (startBtn) {
    startBtn.addEventListener('click', initTest);
  }
  
  // 添加导航按钮事件监听
  document.getElementById('next-btn').addEventListener('click', nextQuestion);
  document.getElementById('prev-btn').addEventListener('click', prevQuestion);
  document.getElementById('result-btn').addEventListener('click', showResult);
  document.getElementById('restart-btn').addEventListener('click', restartTest);
  
  console.log('初始化完成');
}

/**
 * 初始化测试
 */
function initTest() {
  console.log('开始测试...');
  
  // 检查测试数据是否有效
  if (!testData || !testData.questions || !Array.isArray(testData.questions) || testData.questions.length === 0) {
    console.error('错误: 测试数据无效，无法开始测试');
    console.log('testData:', testData);
    alert('测试数据错误，请刷新页面重试');
    return;
  }
  
  // 重置答案
  console.log('重置答案，问题数量:', testData.questions.length);
  userAnswers = {};
  currentQuestionIndex = 0;
  
  // 隐藏开始界面，显示问题界面
  document.querySelector('.start-container').style.display = 'none';
  document.querySelector('.test-container').style.display = 'block';
  
  // 显示第一个问题
  renderQuestion(currentQuestionIndex);
  updateProgress();
  console.log('测试初始化完成，显示第一个问题');
}

/**
 * 渲染问题
 * @param {number} index - 问题索引
 */
function renderQuestion(index) {
  console.log('渲染问题，索引:', index);
  const question = testData.questions[index];
  
  if (!question) {
    console.error('错误: 未找到指定索引的问题', index);
    return;
  }
  
  // 设置问题文本
  document.querySelector('.question-text').textContent = `${question.number || (index + 1)}. ${question.text}`;
  
  // 生成选项
  const optionsContainer = document.querySelector('.options-container');
  optionsContainer.innerHTML = '';
  
  if (!Array.isArray(question.options)) {
    console.error('错误: 问题选项不是数组', question);
    return;
  }
  
  question.options.forEach((option) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    if (userAnswers[question.id] === option.value) {
      optionElement.classList.add('selected');
    }
    optionElement.textContent = option.text;
    optionElement.addEventListener('click', () => selectOption(question.id, option.value));
    optionsContainer.appendChild(optionElement);
  });
  
  // 更新导航按钮状态
  document.getElementById('prev-btn').disabled = index === 0;
  
  if (index === testData.questions.length - 1) {
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('result-btn').style.display = 'block';
    document.getElementById('result-btn').disabled = !userAnswers[question.id];
  } else {
    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('result-btn').style.display = 'none';
  }
  
  console.log('问题渲染完成');
}

/**
 * 选择选项
 * @param {string} questionId - 问题ID
 * @param {string} choice - 选择的选项值
 */
function selectOption(questionId, choice) {
  console.log('选择选项:', questionId, choice);
  userAnswers[questionId] = choice;
  
  // 更新选项样式
  const options = document.querySelectorAll('.options-container .option');
  options.forEach((option, i) => {
    if (i === testData.questions[currentQuestionIndex].options.findIndex(opt => opt.value === choice)) {
      option.classList.add('selected');
    } else {
      option.classList.remove('selected');
    }
  });
  
  // 如果是最后一题，启用结果按钮
  if (currentQuestionIndex === testData.questions.length - 1) {
    document.getElementById('result-btn').disabled = false;
  }
  
  // 启用下一题按钮
  document.getElementById('next-btn').disabled = false;
}

/**
 * 下一题
 */
function nextQuestion() {
  if (currentQuestionIndex < testData.questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
    updateProgress();
  }
}

/**
 * 上一题
 */
function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
    updateProgress();
  }
}

/**
 * 更新进度条
 */
function updateProgress() {
  const progressPercentage = ((currentQuestionIndex + 1) / testData.questions.length) * 100;
  document.querySelector('.progress').style.width = `${progressPercentage}%`;
  document.querySelector('.progress-text').textContent = `${currentQuestionIndex + 1}/${testData.questions.length}`;
}

/**
 * 显示结果
 */
function showResult() {
  console.log('显示结果...');
  try {
    // 检查是否所有问题都已回答
    const answeredQuestionIds = Object.keys(userAnswers);
    const unansweredCount = testData.questions.length - answeredQuestionIds.length;
    
    if (unansweredCount > 0) {
      console.warn(`警告: ${unansweredCount} 个问题未回答`);
      if (!confirm(`您有 ${unansweredCount} 个问题未回答，确定要查看结果吗？`)) {
        return;
      }
    }
    
    // 计算结果
    const result = calculateResult();
    console.log('计算的结果:', result);
    
    if (!result) {
      console.error('错误: 计算结果为空');
      alert('计算结果时出错，请重新开始测试');
      return;
    }
    
    // 隐藏测试界面，显示结果界面
    document.querySelector('.test-container').style.display = 'none';
    document.querySelector('.result-container').style.display = 'block';
    
    // 设置结果内容
    document.querySelector('.result-title').textContent = `${result.name || '测试结果'} ${result.emoji || ''}`;
    
    let resultDescription = '';
    if (result.type) {
      resultDescription += `<p><strong>职场角色:</strong> ${result.type}</p>`;
    }
    if (result.ip) {
      resultDescription += `<p><strong>最匹配IP:</strong> ${result.ip}</p>`;
    }
    if (result.desc) {
      resultDescription += `<p>${result.desc}</p>`;
    }
    
    document.querySelector('.result-description').innerHTML = resultDescription || '感谢参与测试!';
    
    console.log('结果显示完成');
  } catch (error) {
    console.error('显示结果时出错:', error);
    alert('计算结果时出错，请重新开始测试');
  }
}

/**
 * 计算测试结果
 * @returns {Object} 结果对象
 */
function calculateResult() {
  console.log('计算测试结果...');
  console.log('用户答案:', userAnswers);
  
  try {
    // 检查测试数据中是否有自定义计算函数
    if (!testData.calculateScores || typeof testData.calculateScores !== 'function') {
      console.error('错误: 测试数据中缺少计算分数函数');
      return {
        name: '计算错误',
        desc: '测试数据缺少计算函数，请联系管理员。'
      };
    }
    
    console.log('使用数据文件中的计算函数');
    
    // 调用测试数据中的计算函数
    const result = testData.calculateScores(userAnswers);
    console.log('计算的结果:', result);
    
    if (!result) {
      console.error('错误: 计算结果为空');
      return {
        name: '计算错误',
        desc: '计算结果为空，请重新测试。'
      };
    }
    
    // 检查结果是否已经是最终结果对象
    if (result.name) {
      return result;
    }
    
    // 如果不是最终结果对象，则认为是分数对象，需要进一步处理
    console.error('错误: 测试数据的calculateScores函数返回了分数对象而非结果对象');
    return {
      name: '数据格式错误',
      desc: '测试数据格式不兼容，请联系管理员更新数据文件。'
    };
  } catch (error) {
    console.error('计算结果时发生错误:', error);
    return { 
      name: '计算出错', 
      desc: '计算结果时发生错误，请重新开始测试'
    };
  }
}

/**
 * 重新开始测试
 */
function restartTest() {
  location.reload();
}