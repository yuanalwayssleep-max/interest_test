/**
 * 答案之书 - 版本配置文件
 * 要添加新版本，只需在此文件中添加新的配置项
 */

const answerBookVersions = {
  // 求职版配置
  job: {
    id: 'job',
    title: '答案之书 - 求职版',
    type: '求职',
    decorationEmoji: '🌸',
    interpretationIcon: '💖',
    dataFile: 'answerBookData',
    totalPages: 412,
    bottomDecorations: ['✨', '💫', '⭐'],
    customStyles: '',
    extraScripts: ''
  },
  
  // 恋爱版配置
  love: {
    id: 'love',
    title: '答案之书 - 恋爱版',
    type: '恋爱',
    decorationEmoji: '❤️',
    interpretationIcon: '💘',
    dataFile: 'answerBookLoveData',
    totalPages: 412,
    bottomDecorations: ['❤️', '💕', '💓'],
    customStyles: '',
    extraScripts: ''
  },
  
  // 亲情版配置
  family: {
    id: 'family',
    title: '答案之书 - 亲情版',
    type: '亲情',
    decorationEmoji: '👪',
    interpretationIcon: '🏡',
    dataFile: 'answerBookFamilyData',
    totalPages: 412,
    bottomDecorations: ['👨‍👩‍👧', '🏡', '💗'],
    customStyles: '',
    extraScripts: ''
  }
  
  // 要添加新版本，只需在此处添加新的配置对象
  // 例如:
  /*
  friendship: {
    id: 'friendship',
    title: '答案之书 - 友情版',
    type: '友情',
    decorationEmoji: '🤝',
    interpretationIcon: '🌈',
    dataFile: 'answerBookFriendshipData',
    totalPages: 412,
    bottomDecorations: ['🤝', '👬', '👭'],
    customStyles: `自定义CSS样式`,
    extraScripts: `自定义JavaScript代码`
  }
  */
};