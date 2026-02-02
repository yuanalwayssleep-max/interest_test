/**
 * 自测拍照风格测试数据
 * 包含问题、选项、风格类型定义和评分规则
 */

window.photoStyleTestData = {
  // 问题数据
  questions: [
    {
      id: "q1",
      number: 1,
      text: "看眼睛",
      options: [
        { value: "A", text: "睁眼眉毛不动" },
        { value: "B", text: "睁眼眉毛会动" }
      ]
    },
    {
      id: "q2",
      number: 2,
      text: "看卧蚕",
      options: [
        { value: "A", text: "笑起来卧蚕明显" },
        { value: "B", text: "笑起来没有卧蚕" }
      ]
    },
    {
      id: "q3",
      number: 3,
      text: "看鼻翼",
      options: [
        { value: "A", text: "笑起来鼻翼向上" },
        { value: "B", text: "笑起来鼻翼两侧展开" }
      ]
    },
    {
      id: "q4",
      number: 4,
      text: "看牙龈",
      options: [
        { value: "A", text: "笑起来露出牙龈" },
        { value: "B", text: "笑起来不露牙龈" }
      ]
    },
    {
      id: "q5",
      number: 5,
      text: "看轮廓",
      options: [
        { value: "A", text: "面部轮廓圆润，下颌线模糊柔和" },
        { value: "B", text: "面部轮廓硬朗，下颌线清晰流畅" }
      ]
    },
    {
      id: "q6",
      number: 6,
      text: "看苹果肌",
      options: [
        { value: "A", text: "笑起来苹果肌饱满" },
        { value: "B", text: "笑起来苹果肌扁平" }
      ]
    }
  ],
  
  // 风格类型定义
  personalityTypes: {
    dynamic: { 
      name: '动态美女', 
      type: '动态型', 
      emoji: '💃', 
      desc: '<p><strong>特征：</strong>本人比照片更上镜，视频比图片好看</p><p><strong>拍照建议：</strong>随机摆动大幅度动作，任何截图都能彰显生命活力，多用live图和视频</p><p><strong>风格建议：</strong>少女风、千金风、多巴胺风</p>' 
    },
    static: { 
      name: '静态美女', 
      type: '静态型', 
      emoji: '🧘‍♀️', 
      desc: '<p><strong>特征：</strong>无表情或者微表情好看</p><p><strong>拍照建议：</strong>表情放松，静坐或者微表情好看，有韵味的眼神更加加分和有feel</p><p><strong>风格建议：</strong>复古风、温婉风、慵懒风</p>' 
    }
  },
  
  // 评分规则函数
  calculateScores: function(answers) {
    // 统计A选项和B选项的数量
    let countA = 0;
    let countB = 0;
    
    Object.values(answers).forEach(answer => {
      if (answer === 'A') {
        countA++;
      } else if (answer === 'B') {
        countB++;
      }
    });
    
    // 根据A和B的数量判断类型
    // 如果A选项多于或等于B选项，则为动态美女，否则为静态美女
    if (countA >= countB) {
      return this.personalityTypes.dynamic;
    } else {
      return this.personalityTypes.static;
    }
  }
};