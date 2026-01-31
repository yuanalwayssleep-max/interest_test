/**
 * 答案之书 - 求职版逻辑
 */

// 答案之书功能模块
const AnswerBook = (function() {
  // 私有变量
  let pageInput, errorDiv, answerBox, answerNumber, answerText, interpretationText, tagsDiv;
  
  // 初始化函数
  function init() {
    // 获取DOM元素
    pageInput = document.getElementById('pageInput');
    errorDiv = document.getElementById('error');
    answerBox = document.getElementById('answerBox');
    answerNumber = document.getElementById('answerNumber');
    answerText = document.getElementById('answerText');
    interpretationText = document.getElementById('interpretationText');
    tagsDiv = document.getElementById('tags');
    
    // 绑定事件
    document.getElementById('queryButton').addEventListener('click', getAnswer);
    pageInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        getAnswer();
        // 收起手机键盘
        this.blur();
      }
    });
  }
  
  // 获取答案
  function getAnswer() {
    const pageNum = parseInt(pageInput.value);
    errorDiv.textContent = '';
    
    if (!pageNum || pageNum < 1 || pageNum > answerBookData.config.totalPages) {
      errorDiv.textContent = `❌ 请输入1-${answerBookData.config.totalPages}之间的有效数字`;
      answerBox.classList.remove('show');
      return;
    }

    const answer = answerBookData.answers[pageNum];
    if (answer) {
      answerNumber.textContent = `第 ${pageNum} 页`;
      answerText.textContent = answer;
      
      // 生成解读
      const interpretation = generateInterpretation(answer, pageNum);
      interpretationText.textContent = interpretation.text;
      
      // 生成标签
      tagsDiv.innerHTML = '';
      interpretation.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsDiv.appendChild(tagElement);
      });
      
      answerBox.classList.add('show');
      
      // 滚动到答案位置
      setTimeout(() => {
        answerBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    } else {
      errorDiv.textContent = '❌ 未找到对应答案';
      answerBox.classList.remove('show');
    }
  }
  
  // 智能解读生成函数
  function generateInterpretation(answer, pageNum) {
    // 根据答案内容判断类型
    let category = 'positive';
    let tags = [];
    
    if (answer.includes('不') || answer.includes('别') || answer.includes('停止') || answer.includes('谨慎')) {
      category = 'cautious';
      tags = ['谨慎行事', '三思而行'];
    } else if (answer.includes('行动') || answer.includes('去做') || answer.includes('开始') || answer.includes('主动')) {
      category = 'action';
      tags = ['立即行动', '把握机会'];
    } else if (answer.includes('等') || answer.includes('耐心') || answer.includes('时间') || answer.includes('慢')) {
      category = 'wait';
      tags = ['耐心等待', '时机未到'];
    } else if (answer.includes('心') || answer.includes('态度') || answer.includes('情绪') || answer.includes('放松')) {
      category = 'mindset';
      tags = ['调整心态', '保持平和'];
    } else {
      tags = ['积极向上', '充满希望'];
    }

    // 添加更多标签
    if (answer.includes('成功') || answer.includes('好') || answer.includes('棒')) {
      tags.push('好运来临');
    }
    if (answer.includes('努力') || answer.includes('坚持')) {
      tags.push('持续努力');
    }
    if (answer.includes('改变') || answer.includes('突破')) {
      tags.push('寻求突破');
    }

    const interpretationList = answerBookData.interpretations[category];
    const randomIndex = Math.floor(Math.random() * interpretationList.length);
    
    return {
      text: interpretationList[randomIndex],
      tags: tags
    };
  }
  
  // 返回公共API
  return {
    init: init
  };
})();

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  AnswerBook.init();
});