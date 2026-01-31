/**
 * 模板加载器 - 用于在客户端加载HTML模板
 */

class TemplateLoader {
  /**
   * 加载模板并替换占位符
   * @param {string} templatePath - 模板文件路径
   * @param {Object} replacements - 要替换的占位符及其值
   * @param {string} targetSelector - 目标元素选择器，模板将被加载到这个元素中
   * @returns {Promise} - 加载完成的Promise
   */
  static async loadTemplate(templatePath, replacements, targetSelector) {
    try {
      // 获取模板内容
      const response = await fetch(templatePath);
      if (!response.ok) {
        throw new Error(`无法加载模板: ${response.status} ${response.statusText}`);
      }
      
      let templateContent = await response.text();
      
      // 替换所有占位符
      if (replacements) {
        Object.keys(replacements).forEach(key => {
          const placeholder = `{{${key}}}`;
          templateContent = templateContent.replace(new RegExp(placeholder, 'g'), replacements[key]);
        });
      }
      
      // 将处理后的模板内容插入到目标元素中
      const targetElement = document.querySelector(targetSelector);
      if (targetElement) {
        targetElement.innerHTML = templateContent;
      } else {
        console.error(`目标元素未找到: ${targetSelector}`);
      }
      
      return templateContent;
    } catch (error) {
      console.error('加载模板时出错:', error);
      throw error;
    }
  }
}

// 导出模板加载器
window.TemplateLoader = TemplateLoader;