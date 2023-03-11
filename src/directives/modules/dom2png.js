// 自定义指令-dom元素转png图片
// 遍历DOM节点并描画到canvas上
function renderNode(ctx, node) {
  switch (node.nodeType) {
    case Node.ELEMENT_NODE:
      const tagName = node.tagName.toLowerCase();
      console.log(tagName)
      if (tagName === 'canvas') break;
      const attrs = {
        ...getComputedStyle(node),
        ...{
          position: 'absolute',
          display: 'block',
          top: `${node.offsetTop}px`,
          left: `${node.offsetLeft}px`,
          width: `${node.offsetWidth}px`,
          height: `${node.offsetHeight}px`,
          background: node.tagName === 'BODY' ? 'white' : 'red',
        },
      };
      console.log(attrs)
      for (const [k, v] of Object.entries(attrs)) {
        ctx[k] = v;
      }
      if (tagName === 'img') {
        ctx.drawImage(node, attrs.left, attrs.top, attrs.width, attrs.height);
      }
      node.childNodes.forEach(n => renderNode(ctx, n));
      console.log(ctx)
      break;
    case Node.TEXT_NODE:
      console.log(node.textContent,node.parentNode.offsetTop);
      ctx.fillText(node.textContent, node.parentNode.offsetLeft, node.parentNode.offsetTop);
      break;
    default:
      break;
  }
}

const dom2png = {
  async updated(el, binding) {
    if (binding.value) {
      let canvas = document.createElement('canvas')
      // 获取要绘制的元素的样式
      let context = canvas.getContext('2d')
      canvas.width = el.offsetWidth
      canvas.height = el.offsetHeight
      renderNode(context, el)
      // context.drawFocusIfNeeded(dom)
      // 将Canvas转换为图像
      console.log(context)
      let image = new Image();
      image.src = canvas.toDataURL("image/png");
      document.body.appendChild(image);
      // document.body.appendChild(canvas);
    }
  }
}
export default dom2png
