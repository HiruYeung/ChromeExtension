const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');

// 监听输入框的输入事件
searchInput.addEventListener('input', searchRoutes);

async function searchRoutes() {
  const routeName = searchInput.value.trim(); 
  console.log();// 获取用户输入的路线名称

  if (routeName) {
    try {
      // 构建 API 请求URL
      const apiUrl = `https://data.etabus.gov.hk/v1/transport/kmb/route/${routeName}/data`;

      // 使用 Fetch API 发送GET请求
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();

      // 清空之前的结果
      resultsContainer.innerHTML = '';

      // 遍历返回的数据并显示在页面上
      data.forEach(route => {
        const routeElement = document.createElement('div');
        routeElement.textContent = `Route: ${route.route} | Bound: ${route.bound}`;
        resultsContainer.appendChild(routeElement);
      });
    } catch (error) {
      console.error('Error:', error);
      resultsContainer.innerHTML = '<p>An error occurred while fetching the data.</p>';
    }
  } else {
    // 清空结果容器
    resultsContainer.innerHTML = '';
  }
}