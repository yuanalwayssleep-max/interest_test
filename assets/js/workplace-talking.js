/**
 * 职场问题同事应对话术查询器逻辑
 */

// 职场话术查询器模块
const WorkplaceTalking = (function() {
  // 私有变量
  let problemTypeSelect, scenarioSelect, selectWrapper1, selectWrapper2;
  let queryBtn, resultBox, resultContent, emptyState;
  
  // 初始化函数
  function init() {
    // 获取DOM元素
    problemTypeSelect = document.getElementById('problemType');
    scenarioSelect = document.getElementById('scenario');
    selectWrapper1 = document.getElementById('selectWrapper1');
    selectWrapper2 = document.getElementById('selectWrapper2');
    queryBtn = document.getElementById('queryBtn');
    resultBox = document.getElementById('resultBox');
    resultContent = document.getElementById('resultContent');
    emptyState = document.getElementById('emptyState');
    
    // 绑定事件
    bindEvents();
  }
  
  // 绑定事件
  function bindEvents() {
    // 下拉框展开/收起动画
    problemTypeSelect.addEventListener('focus', function() {
      selectWrapper1.classList.add('active');
    });
    
    problemTypeSelect.addEventListener('blur', function() {
      selectWrapper1.classList.remove('active');
    });
    
    scenarioSelect.addEventListener('focus', function() {
      selectWrapper2.classList.add('active');
    });
    
    scenarioSelect.addEventListener('blur', function() {
      selectWrapper2.classList.remove('active');
    });
    
    // 问题类型选择变化
    problemTypeSelect.addEventListener('change', handleProblemTypeChange);
    
    // 场景选择变化
    scenarioSelect.addEventListener('change', handleScenarioChange);
    
    // 查询按钮点击
    queryBtn.addEventListener('click', handleQuery);
  }
  
  // 处理问题类型变化
  function handleProblemTypeChange() {
    const typeId = this.value;
    const data = window.colleagueTalkingData;
    
    scenarioSelect.innerHTML = '<option value="">-- 请选择具体场景 --</option>';
    queryBtn.disabled = true;
    resultBox.classList.remove('show');
    emptyState.style.display = 'block';
    
    if (typeId && data[typeId]) {
      const scenarios = data[typeId].scenarios;
      scenarios.forEach((scenario, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = scenario.name;
        scenarioSelect.appendChild(option);
      });
      
      scenarioSelect.disabled = false;
    } else {
      scenarioSelect.disabled = true;
    }
  }
  
  // 处理场景变化
  function handleScenarioChange() {
    const scenarioIndex = this.value;
    
    if (scenarioIndex !== '') {
      queryBtn.disabled = false;
    } else {
      queryBtn.disabled = true;
    }
    
    resultBox.classList.remove('show');
    emptyState.style.display = 'block';
  }
  
  // 处理查询
  function handleQuery() {
    const typeId = problemTypeSelect.value;
    const scenarioIndex = scenarioSelect.value;
    const data = window.colleagueTalkingData;
    
    if (typeId && scenarioIndex !== '') {
      const typeData = data[typeId];
      const scenario = typeData.scenarios[scenarioIndex];
      
      let html = '<div class="scenario-info"><h3>📋 场景描述</h3><p>' + scenario.description + '</p><h3 style="margin-top: 15px;">💭 对方说</h3><div class="quote">"' + scenario.quote + '"</div><h3 style="margin-top: 15px;">🔍 实际情况</h3><div class="reality">' + scenario.reality + '</div></div><div class="responses"><h3>💡 应对话术（' + scenario.responses.length + '种）</h3>';
      
      scenario.responses.forEach((response, index) => {
        html += '<div class="response-item"><h4>话术 ' + (index + 1) + '</h4><p>"' + response + '"</p></div>';
      });
      
      html += '</div>';
      
      resultContent.innerHTML = html;
      resultBox.classList.add('show');
      emptyState.style.display = 'none';
      
      setTimeout(() => {
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }
  
  // 返回公共API
  return {
    init: init
  };
})();

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', WorkplaceTalking.init);