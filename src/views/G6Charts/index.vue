<script lang="ts" setup>
import G6 from "@antv/g6";
import { onMounted, ref } from "vue";
import { mockData } from "./data/mockData";
const chartContent: any = ref(null);
function formatData(data) {
  const rootNodeList = [data.startP.id, data.endP.id];
  const pathNodeList = mockData.pathList.map((item) => {
    let dirList = item.linkDirList.map((item) => [item.source, item.target]);
    return Array.from(new Set(dirList.flat()));
  });
  function getNodeLayer(node, pathNodeList) {
    let layer = 0;
    pathNodeList.forEach((item) => {
      let currentLayer = item.findIndex((currentNode) => {
        return currentNode === node.id.toString();
      });
      if (currentLayer > layer) {
        layer = currentLayer;
      }
    });
    return layer;
  }
  const edgeData = data.linkList.map((edge, index) => {
    return {
      ...edge,
      id: `edge${index}`,
      source: edge.srcId,
      target: edge.destId,
    };
  });
  const nodeData = data.nodeList.map((node) => {
    const layer = getNodeLayer(node, pathNodeList);
    return {
      nodeType: node.type,
      id: node.id.toString(),
      isRoot: rootNodeList.includes(node.id) ? true : false,
      logoUrl: node.logoUrl,
      uid: node.uid,
      name: node.name,
      layer: layer,
    };
  });
  return {
    nodeData,
    edgeData,
  };
}
onMounted(() => {
  const chartData = formatData(mockData);
  buildChart(chartData);
});
// 不同type节点动态样式
function setDynamicStyle(graph) {
  const colorMap = {
    RStroke: "#FF7D1A", // 起始节点描边
    EStroke: "#3860F4", // E节点描边
    PStroke: "#D63930", // P节点描边
    RFill: "#FFEFD1", // 起始节点背景
    EFill: "#DBE8FF", // E节点背景
    PFill: "#FFECE8", // P节点背景
  };
  function getFillColor(node) {
    if (node.isRoot) {
      return colorMap.RFill;
    } else {
      return colorMap[node.nodeType + "Fill"];
    }
  }
  function getStrokeColor(node) {
    if (node.isRoot) {
      return colorMap.RStroke;
    } else {
      return colorMap[node.nodeType + "Stroke"];
    }
  }
  graph.node((node) => {
    // let textList = cutTextForRowRange(node.name, 14, 70, 50, 4);
    return {
      ...node,
      label: node.name,
      style: {
        fill: getFillColor(node),
        stroke: getStrokeColor(node),
        shadowColor: getFillColor(node),
      },
      labelCfg: {
        style: {
          fill: getStrokeColor(node),
        },
      },
      stateStyles: {
        active: {
          fill: getFillColor(node),
          stroke: getStrokeColor(node),
          shadowColor: getFillColor(node),
        },
        inactive: {
          fill: "#f4f5fc",
          stroke: "#f4f5fc",
          "text-shape": {
            fill: "#fff",
          },
        },
        hover: {
          fill: getStrokeColor(node),
          stroke: getStrokeColor(node),
          shadowColor: getFillColor(node),
          "text-shape": {
            fill: "#fff",
          },
        },
      },
    };
  });
}


const buildChart = (data) => {
  const width = chartContent.value.offsetWidth;
  const height = chartContent.value.offsetHeight;
  const graph = new G6.Graph({
    container: "chart-content",
    width,
    height,
    fitCenter: true,
    fitViewPadding: 100,
    modes: {
      default: ["drag-canvas", "zoom-canvas", "drag-node"],
    },
    layout: {
      type: "dagre",
      rankdir: "LR",
      nodesep: 30,
      ranksep: 70,
      onLayoutEnd() {
        console.log("onLayoutEnd");
        const leftRootNode = graph.findAll("node", (node) => {
          return isNaN(node.get("model").y) && node.get("model").isRoot;
        });
        console.log(leftRootNode, "isNaNYNode");
        if (leftRootNode.length > 0) {
          // 找到另一个root节点
          const rightRootNode = graph.findAll("node", (node) => {
            return !isNaN(node.get("model").y) && node.get("model").isRoot;
          });
          leftRootNode.forEach((node) => {
            node.get("model").y = rightRootNode[0].get("model").y;
          });
        }
      },
    },
    defaultNode: {
      type: "circle",
      size: 60,
      anchorPoints: [[0.5, 0.5]],
      style: {
        lineWidth: 1,
      },
      labelCfg: {
        position: "center",
        style: {
          fontSize: 10,
        },
      },
    },
    defaultEdge: {
      style: {
        cursor: "pointer",
        lineWidth: 0.5,
        stroke: "#bec0ce",
        endArrow: {
          path: "M 0,0 L 8,-4 L 1,0 L 8,4 Z",
          d: -30,
        },
      },
      labelCfg: {
        autoRotate: true,
        style: {
          cursor: "pointer",
          stroke: "#fff",
          lineWidth: 10,
          fill: "#3A3C5A",
          fontSize: 10,
          fontWeight: 300,
        },
      },
    },
  });
  // 设置动态节点样式
  setDynamicStyle(graph);
  graph.data({
    nodes: data.nodeData,
    edges: data.edgeData,
  });
  // 鼠标移入
  graph.on("node:mouseenter", (e) => {
    let nodeItem: any = e.item;
    let hoverNode = []; // 当前路径上的节点
    hoverNode.push(e.item);
    // 置灰连线label
    nodeItem.getEdges().forEach((currentEdge: any) => {
      hoverNode.push(currentEdge.getSource());
      hoverNode.push(currentEdge.getTarget());
      graph.getEdges().forEach((allEdge) => {
        if (currentEdge.getModel().id !== allEdge.getModel().id) {
          graph.setItemState(allEdge, "dark", true);
        }
      });
    });
    nodeItem.getEdges().forEach((currentEdge) => {
      graph.setItemState(currentEdge, "highlight", true);
    });
    // 置灰节点
    let hoverNodeSet = [...new Set(hoverNode)];
    if (hoverNodeSet.length > 0) {
      hoverNodeSet.forEach((currentNode) => {
        graph.getNodes().forEach((allNode) => {
          if (currentNode.get("id") !== allNode.getModel().id) {
            graph.setItemState(allNode, "inactive", true);
            graph.setItemState(allNode, "active", false);
          }
        });
      });
      hoverNodeSet.forEach((currentNode) => {
        currentNode.toFront();
        graph.setItemState(currentNode, "active", true);
        graph.setItemState(currentNode, "inactive", false);
      });
      graph.setItemState(nodeItem, "hover", true);
    }
  });
  // 鼠标移出
  graph.on("node:mouseleave", function (e) {
    graph.setAutoPaint(false);
    graph.getNodes().forEach((node) => {
      graph.clearItemStates(node);
    });
    graph.getEdges().forEach((edge) => {
      graph.clearItemStates(edge);
    });
    graph.paint();
    graph.setAutoPaint(true);
  });
  graph.render();
  function refreshDragedNodePosition(node) {
    const model = node.get("model");
    model.fx = node.x;
    model.fy = node.y;
    model.x = node.x;
    model.y = node.y;
  }
};
</script>
<template>
  <div class="g6-charts">
    <div id="chart-content" ref="chartContent"></div>
  </div>
</template>
<style lang="scss" scoped>
.g6-charts {
  width: 100vw;
  display: flex;
  justify-content: center;
  #chart-content {
    width: 1200px;
    height: 800px;
    border: 1px solid #ccc;
    margin-top: 100px;
  }
}
</style>
