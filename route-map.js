// 页面路线图与锚点跳转动画
// 依赖：页面有id为 route-map 的svg容器和各section的id

document.addEventListener('DOMContentLoaded', function () {
  const points = [
    { id: 'start', label: '起点' },
    { id: 'station1', label: '站点1' },
    { id: 'station2', label: '站点2' },
    { id: 'station3', label: '站点3' },
    { id: 'station4', label: '站点4' },
    { id: 'lookout', label: '加油站' },
    { id: 'new-journey', label: '下一站' }
  ];

  // 路线图锚点点击跳转
  points.forEach(pt => {
    const el = document.getElementById('route-' + pt.id);
    if (el) {
      el.addEventListener('click', function () {
        const target = document.getElementById(pt.id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // 动画高亮
        el.classList.add('active');
        setTimeout(() => el.classList.remove('active'), 800);
      });
    }
  });
});
