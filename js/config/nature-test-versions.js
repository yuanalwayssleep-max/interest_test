/**
 * 性格测试版本配置文件
 * 用于配置不同版本的性格测试
 */

const TEST_VERSIONS = [
  {
    id: 'ppmt-ip',
    title: '泡泡玛特性格测试',
    description: '通过这个有趣的测试，发现你的泡泡玛特人格类型',
    dataFile: 'ppmtIpTestData.js',
    dataVarName: 'ppmtIpTestData' // 数据变量名，用于动态加载后引用
  },
  {
    id: 'workplace',
    title: '职场性格测试',
    description: '了解你在职场中的性格类型和优势',
    dataFile: 'workplaceTestData.js',
    dataVarName: 'workplaceTestData' // 数据变量名，用于动态加载后引用
  },
  {
    id: 'photo-style',
    title: '自测拍照风格',
    description: '了解你适合的拍照风格和技巧',
    dataFile: 'photoStyleTestData.js',
    dataVarName: 'photoStyleTestData', // 数据变量名，用于动态加载后引用
  
  },
  // 可以添加更多测试版本
  {
    id: 'default',
    title: '性格测试',
    description: '发现你的性格特点',
    dataFile: 'natureTestData.js',
    dataVarName: 'natureTestData' // 数据变量名，用于动态加载后引用
  }
];