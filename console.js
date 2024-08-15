const readline = require('readline');

async function searchRoutes() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Enter route name: ', async (routeName) => {
      console.log('searchRoutes function called');
      // 其他代码
  
      rl.close();
    });
  }

  async function searchRoutes() {
    // ... 
  
    try {
      // 构建 API 请求 URL
      const apiUrl = `https://data.etabus.gov.hk/v1/transport/kmb/route/${routeName}/data`;
      // 使用 Fetch API 发送 GET 请求
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const data = await response.json();
  
      // 输出结果到终端
      data.forEach(route => {
        console.log(`Route: ${route.route} | Bound: ${route.bound}`);
      });
    } catch (error) {
      console.error('Error:', error);
      console.log('An error occurred while fetching the data.');
    }
  }