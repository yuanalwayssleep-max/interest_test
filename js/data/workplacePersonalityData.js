/**
 * 职场性格测试数据
 */
window.workplacePersonalityData = {
  // 测试问题
  questions: [
    { q: "当团队面临重大决策时，你更倾向于：", a: "快速分析形势，果断做出决定并推动执行", b: "充分收集信息，征求各方意见后再决策" },
    { q: "在工作中遇到突发状况，你的第一反应是：", a: "立即采取行动，边做边调整", b: "先冷静分析问题根源，制定应对方案" },
    { q: "你更享受哪种工作状态：", a: "带领团队攻克难关，实现突破性目标", b: "深入钻研专业领域，成为技术专家" },
    { q: "在职场人际关系中，你更看重：", a: "建立广泛的影响力和人脉网络", b: "维护深度信任的合作关系" },
    { q: "面对职业发展机会，你会：", a: "主动争取更高的职位和更大的挑战", b: "优先考虑是否符合长期规划和个人价值" },
    { q: "你理想的工作节奏是：", a: "快速推进多个项目，追求高效产出", b: "专注于重要任务，确保质量和深度" },
    { q: "在团队中，你更愿意扮演的角色是：", a: "引领方向的领导者或激发创意的创新者", b: "协调资源的组织者或保障质量的执行者" },
    { q: "对于工作中的风险，你的态度是：", a: "敢于冒险，相信风险与机遇并存", b: "谨慎评估，在可控范围内稳步前进" },
    { q: "你更倾向于通过什么方式获得成就感：", a: "达成重要目标，获得认可和影响力", b: "解决复杂问题，实现专业突破" },
    { q: "在工作压力下，你通常会：", a: "越战越勇，在挑战中激发潜能", b: "保持冷静，系统性地分解和解决问题" }
  ],
  
  // 结果类型定义
  resultTypes: {
    // 领导者型 (A选项 >= 7)
    leader: {
      icon: '🔥',
      type: '领导者型',
      subtitle: 'Leader - 果断决策者',
      characteristics: `
        <p><strong>核心特质：</strong>你是天生的领导者，具有强大的决策能力和执行力。你善于把握全局，能够在关键时刻做出果断的判断。</p>
        <ul>
          <li>目标导向，追求结果和影响力</li>
          <li>决策果断，敢于承担责任</li>
          <li>善于激励团队，推动变革</li>
          <li>在压力下表现出色</li>
        </ul>
      `,
      advice: `
        <p><strong>职业发展建议：</strong></p>
        <ul>
          <li>寻求管理岗位，充分发挥领导才能</li>
          <li>培养战略思维，提升全局视野</li>
          <li>学会倾听团队意见，避免独断专行</li>
          <li>平衡工作与生活，注意压力管理</li>
          <li>持续学习管理知识，提升领导力</li>
        </ul>
      `
    },
    
    // 平衡型 (A选项 >= 5)
    balanced: {
      icon: '⚖️',
      type: '平衡型',
      subtitle: 'Balanced - 全能选手',
      characteristics: `
        <p><strong>核心特质：</strong>你是职场中的全能选手，既能领导也能执行，适应能力极强。你懂得在不同情境下切换角色。</p>
        <ul>
          <li>灵活应变，适应性强</li>
          <li>兼具领导力和执行力</li>
          <li>善于协调各方资源</li>
          <li>能够独立工作也能团队合作</li>
        </ul>
      `,
      advice: `
        <p><strong>职业发展建议：</strong></p>
        <ul>
          <li>发展成为复合型人才，拓宽技能面</li>
          <li>寻找需要多元能力的岗位</li>
          <li>培养自己的核心竞争力</li>
          <li>在团队中发挥桥梁作用</li>
          <li>保持学习热情，持续成长</li>
        </ul>
      `
    },
    
    // 协调者型 (A选项 >= 3)
    coordinator: {
      icon: '🤝',
      type: '协调者型',
      subtitle: 'Coordinator - 团队粘合剂',
      characteristics: `
        <p><strong>核心特质：</strong>你是团队中的粘合剂，善于促进沟通与协作。你注重和谐，能够平衡各方利益，创造良好的工作氛围。</p>
        <ul>
          <li>沟通能力强，善于倾听</li>
          <li>注重团队和谐与合作</li>
          <li>能够化解矛盾，促进共识</li>
          <li>情商高，善于处理人际关系</li>
        </ul>
      `,
      advice: `
        <p><strong>职业发展建议：</strong></p>
        <ul>
          <li>发展人力资源或团队管理方向</li>
          <li>提升冲突解决和谈判技巧</li>
          <li>建立广泛的职场人脉网络</li>
          <li>学习组织行为学和心理学</li>
          <li>培养项目协调和资源整合能力</li>
        </ul>
      `
    },
    
    // 分析者型 (A选项 < 3)
    analyst: {
      icon: '🔍',
      type: '分析者型',
      subtitle: 'Analyst - 理性专家',
      characteristics: `
        <p><strong>核心特质：</strong>你是理性的思考者，善于深度分析和精准执行。你注重细节，追求专业性，是团队中可靠的技术专家。</p>
        <ul>
          <li>逻辑思维强，善于分析问题</li>
          <li>注重细节和质量</li>
          <li>数据驱动，决策科学</li>
          <li>专业能力强，追求精益求精</li>
        </ul>
      `,
      advice: `
        <p><strong>职业发展建议：</strong></p>
        <ul>
          <li>深耕专业领域，成为行业专家</li>
          <li>提升数据分析和技术能力</li>
          <li>培养系统思维和问题解决能力</li>
          <li>适当提升沟通表达能力</li>
          <li>考虑技术管理或专家路线</li>
        </ul>
      `
    }
  },
  
  // 根据答案计算结果类型
  calculateResult: function(answers) {
    const aCount = answers.filter(a => a === 'A').length;
    
    if (aCount >= 7) {
      return this.resultTypes.leader;
    } else if (aCount >= 5) {
      return this.resultTypes.balanced;
    } else if (aCount >= 3) {
      return this.resultTypes.coordinator;
    } else {
      return this.resultTypes.analyst;
    }
  }
};