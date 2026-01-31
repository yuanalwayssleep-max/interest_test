/**
 * 泡泡玛特IP测试数据
 * 包含问题、选项、IP类型定义和评分规则
 */

window.ppmtIpTestData = {
  // 问题数据
  questions: [
    {
      id: "q1",
      number: 1,
      text: "你更喜欢哪种视觉风格？",
      options: [
        { value: "A", text: "简约高级、黑白灰色调、设计感强" },
        { value: "B", text: "色彩丰富、童趣可爱、梦幻糖果色" }
      ]
    },
    {
      id: "q2",
      number: 2,
      text: "当你感到压力或不开心时，你会？",
      options: [
        { value: "A", text: "用搞怪、自嘲方式化解" },
        { value: "B", text: "允许自己哭泣或找人倾诉" }
      ]
    },
    {
      id: "q3",
      number: 3,
      text: "在社交场合中，你通常是？",
      options: [
        { value: "A", text: "人群焦点，引领话题" },
        { value: "B", text: "安静观察者，享受独处" }
      ]
    },
    {
      id: "q4",
      number: 4,
      text: "你对“长大”这件事的态度是？",
      options: [
        { value: "A", text: "接受成长的复杂性，保持独立思考" },
        { value: "B", text: "拒绝长大！永远保持童心" }
      ]
    },
    {
      id: "q5",
      number: 5,
      text: "购买潮玩时，你最看重什么？",
      options: [
        { value: "A", text: "设计感、品牌价值、社交话题性" },
        { value: "B", text: "情感共鸣、治愈感、陪伴感" }
      ]
    },
    {
      id: "q6",
      number: 6,
      text: "你理想中的生活状态是？",
      options: [
        { value: "A", text: "独立自主、个性鲜明，勇敢做自己" },
        { value: "B", text: "简单纯粹、回归自然，找到小确幸" }
      ]
    }
  ],
  
  // IP类型定义
  ipTypes: {
    classic: { 
      name: '经典潮流派', 
      ip: 'MOLLY系列', 
      emoji: '🎨', 
      desc: '你追求品质与设计感，有独立审美标准。MOLLY是泡泡玛特品牌基石，2019年销售额达4.56亿元，标志性噘嘴代表"傲娇的小冒险家"，多变身份设定满足你的多面性探索需求。' 
    },
    dark: { 
      name: '暗黑个性派', 
      ip: 'SKULLPANDA', 
      emoji: '💀', 
      desc: '你独立思考，有批判精神，不随大流。SKULLPANDA的骷髅头+熊猫暗黑美学，表达"冷静与独立"的精神世界，与MOLLY持平市场地位，是Z世代个性表达的最爱。' 
    },
    dreamy: { 
      name: '梦幻童趣派', 
      ip: 'DIMOO / 小甜豆', 
      emoji: '🌈', 
      desc: '你拒绝长大，永远保持童心和好奇心。DIMOO太空主题大眼睛小男孩，"现实胆小/梦境勇敢"双重性格，对梦境与童真的探索。小甜豆"希望带给大家快乐"的呆萌宝宝形象，充满童趣和可爱元素。' 
    },
    healing: { 
      name: '情感治愈派', 
      ip: 'CRYBABY / PUCKY', 
      emoji: '💧', 
      desc: '你重视情感连接，需要情绪出口。CRYBABY淚滴造型传达"哭泣是正常情绪"，2025年增速248.7%。PUCKY精灵耳朵是治愈代表，2019年销售额3.15亿元，是女性市场最爱。' 
    },
    quirky: { 
      name: '怪趣精灵派', 
      ip: 'LABUBU / HACIPUPU', 
      emoji: '👾', 
      desc: '你追求新鲜感和话题性，喜欢成为焦点。LABUBU尖牙精灵造型，丑萌美学引发全球抢购潮，2025年H1营收占比34.7%，增速668.4%！HACIPUPU"社恐小男孩"形象，增速249.6%。' 
    },
    nature: { 
      name: '自然清新派', 
      ip: '小野 / 星星人', 
      emoji: '🌟', 
      desc: '你向往简单生活，回归自然，在平凡中找到小确幸。小野森林系自然探索者，清新治愈风格。星星人星空梦想家，二手溢价16倍，预计2027年营收占比达8%，在自然与星空中找到内心宁静。' 
    }
  },
  
  // 评分规则函数
  calculateScores: function(answers) {
    const scores = {
      classic: 0,
      dark: 0,
      dreamy: 0,
      healing: 0,
      quirky: 0,
      nature: 0
    };
    
    // Q1
    if (answers.q1 === 'A') {
      scores.classic += 1;
      scores.dark += 1;
    } else if (answers.q1 === 'B') {
      scores.dreamy += 1;
      scores.healing += 1;
    }
    
    // Q2
    if (answers.q2 === 'A') {
      scores.quirky += 3;
    } else if (answers.q2 === 'B') {
      scores.healing += 3;
    }
    
    // Q3
    if (answers.q3 === 'A') {
      scores.classic += 2;
      scores.quirky += 1;
    } else if (answers.q3 === 'B') {
      scores.nature += 2;
    }
    
    // Q4
    if (answers.q4 === 'A') {
      scores.dark += 3;
    } else if (answers.q4 === 'B') {
      scores.dreamy += 3;
    }
    
    // Q5
    if (answers.q5 === 'A') {
      scores.classic += 1;
      scores.quirky += 1;
    } else if (answers.q5 === 'B') {
      scores.healing += 1;
      scores.nature += 1;
    }
    
    // Q6
    if (answers.q6 === 'A') {
      scores.dark += 1;
      scores.quirky += 1;
    } else if (answers.q6 === 'B') {
      scores.dreamy += 1;
      scores.nature += 1;
    }
    
    return scores;
  }
};