<template>
  <div class="tree-chart-content">
    <div id="tree-chart"></div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import * as d3 from "d3";

const treeData = {
  eid: "6baf844d-e116-44dd-a08e-47b989d63202",
  name: "上海汽车集团股份有限公司",
  children: [
    {
      name: "汽车",
      children: [
        {
          eid: "2e611013-3ea0-4bcd-9c34-78d5347b4de8",
          name: "中国第一汽车集团有限公司",
          productCorrelationDegree: "1.9",
          productClafiCode: "3705",
        },
        {
          eid: "759621a0-deaf-4391-9031-4945f7b00712",
          name: "东风汽车集团有限公司",
          productCorrelationDegree: "1.9",
          productClafiCode: "3705",
        },
        {
          eid: "67bb8562-3fbd-4b3f-ae9d-209943f6d32d",
          name: "特斯拉（上海）有限公司",
          productCorrelationDegree: "1.9",
          productClafiCode: "3705",
        },
        {
          eid: "99b3bbf1-090c-40eb-bc64-d549ecc209c7",
          name: "北京汽车集团有限公司",
          productCorrelationDegree: "1.8",
          productClafiCode: "3705",
        },
        {
          eid: "c3fff1eb-ff5c-4dc3-8284-3a6f508840e1",
          name: "比亚迪股份有限公司",
          productCorrelationDegree: "1.8",
          productClafiCode: "3705",
        },
      ],
    },
    {
      name: "其他汽车整车",
      children: [
        {
          eid: "2e611013-3ea0-4bcd-9c34-78d5347b4de8",
          name: "中国第一汽车集团有限公司",
          productCorrelationDegree: "2",
          productClafiCode: "3705990102",
        },
        {
          eid: "99b3bbf1-090c-40eb-bc64-d549ecc209c7",
          name: "北京汽车集团有限公司",
          productCorrelationDegree: "1.9",
          productClafiCode: "3705990102",
        },
        {
          eid: "759621a0-deaf-4391-9031-4945f7b00712",
          name: "东风汽车集团有限公司",
          productCorrelationDegree: "1.9",
          productClafiCode: "3705990102",
        },
        {
          eid: "20a4e7ac-fc15-4bcc-9af8-141b96a2a7e0",
          name: "浙江吉利控股集团有限公司",
          productCorrelationDegree: "1.8",
          productClafiCode: "3705990102",
        },
        {
          eid: "c3fff1eb-ff5c-4dc3-8284-3a6f508840e1",
          name: "比亚迪股份有限公司",
          productCorrelationDegree: "1.8",
          productClafiCode: "3705990102",
        },
      ],
    },
    {
      name: "汽车整车",
      children: [
        {
          eid: "c3fff1eb-ff5c-4dc3-8284-3a6f508840e1",
          name: "比亚迪股份有限公司",
          productCorrelationDegree: "1.9",
          productClafiCode: "3705990101",
        },
        {
          eid: "2e611013-3ea0-4bcd-9c34-78d5347b4de8",
          name: "中国第一汽车集团有限公司",
          productCorrelationDegree: "1.8",
          productClafiCode: "3705990101",
        },
        {
          eid: "20a4e7ac-fc15-4bcc-9af8-141b96a2a7e0",
          name: "浙江吉利控股集团有限公司",
          productCorrelationDegree: "1.7",
          productClafiCode: "3705990101",
        },
        {
          eid: "492a0421-61e4-46ff-84c8-40c0dc0efb20",
          name: "广州汽车集团股份有限公司",
          productCorrelationDegree: "1.7",
          productClafiCode: "3705990101",
        },
        {
          eid: "b5987b22-90ce-4a38-a588-2f92329c2fa3",
          name: "东风汽车股份有限公司",
          productCorrelationDegree: "1.7",
          productClafiCode: "3705990101",
        },
      ],
    },
    {
      name: "汽柴油车整车",
      children: [
        {
          eid: "2e611013-3ea0-4bcd-9c34-78d5347b4de8",
          name: "中国第一汽车集团有限公司",
          productCorrelationDegree: "1.8",
          productClafiCode: "J063611",
        },
        {
          eid: "492a0421-61e4-46ff-84c8-40c0dc0efb20",
          name: "广州汽车集团股份有限公司",
          productCorrelationDegree: "1.7",
          productClafiCode: "J063611",
        },
        {
          eid: "b5987b22-90ce-4a38-a588-2f92329c2fa3",
          name: "东风汽车股份有限公司",
          productCorrelationDegree: "1.7",
          productClafiCode: "J063611",
        },
        {
          eid: "20a4e7ac-fc15-4bcc-9af8-141b96a2a7e0",
          name: "浙江吉利控股集团有限公司",
          productCorrelationDegree: "1.7",
          productClafiCode: "J063611",
        },
        {
          eid: "dc52f87f-6e7d-4d45-abf3-794213fa1de3",
          name: "上汽大众汽车有限公司",
          productCorrelationDegree: "1.6",
          productClafiCode: "J063611",
        },
      ],
    },
    {
      name: "新能源汽车",
      children: [
        {
          eid: "c3fff1eb-ff5c-4dc3-8284-3a6f508840e1",
          name: "比亚迪股份有限公司",
          productCorrelationDegree: "2",
          productClafiCode: "9901170114",
        },
        {
          eid: "67bb8562-3fbd-4b3f-ae9d-209943f6d32d",
          name: "特斯拉（上海）有限公司",
          productCorrelationDegree: "1.9",
          productClafiCode: "9901170114",
        },
        {
          eid: "2ce68ebc-a4c3-4aa8-ab15-0565129c3d93",
          name: "上海蔚来汽车有限公司",
          productCorrelationDegree: "1.8",
          productClafiCode: "9901170114",
        },
        {
          eid: "ec1d13e3-868d-4def-a6b2-f3b743f6a4b3",
          name: "比亚迪汽车工业有限公司",
          productCorrelationDegree: "1.8",
          productClafiCode: "9901170114",
        },
        {
          eid: "fb579368-79b3-49ed-8ce9-3942c2306738",
          name: "广州小鹏汽车科技有限公司",
          productCorrelationDegree: "1.8",
          productClafiCode: "9901170114",
        },
      ],
    },
  ],
};
function initTreeChart(data, elementId) {
  const initPosition = {
    x: 21.5,
    y: -529.7,
    scale: 1,
  };
  const dataSet = d3.hierarchy(data);
  const treeLayout = d3.tree().size([1600, 800]);
  // 创建树布局
  const nodes = treeLayout(dataSet);
  console.log(nodes);
  console.log(nodes.descendants()); // 返回所有节点
  console.log(nodes.links()); // 返回所有链接

  const svg = d3
    .select(elementId)
    .append("svg")
    .classed("tree-chart", true)
    .attr("width", "100%")
    .attr("height", "100%");
  const g = svg
    .append("g")
    .attr(
      "transform",
      `translate(${initPosition.x}, ${initPosition.y}) scale(${initPosition.scale})`
    )
    .attr("width", "100%")
    .attr("height", "100%");
  const companyNodes = g
    .selectAll(".node")
    .data(nodes.descendants())
    .enter()
    .filter((d) => {
      return d.data.eid;
    })
    .append("g")
    .attr("transform", (d) => `translate(${d.y}, ${d.x})`);
  companyNodes
    .append("rect")
    .attr("width", 240)
    .attr("height", 38)
    .attr("fill", (d) => {
      if (d.depth === 0) {
        return "#2258F4";
      } else {
        return "#fff";
      }
    })
    .attr("stroke", "#2258F4")
    .attr("stroke-width", 1)
    .attr("rx", 4)
    .attr("ry", 4);
  companyNodes
    .append("circle")
    .attr("r", 8)
    .attr("fill", "#2258F4")
    .attr("transform", (d) => {
      if (d.depth === 0) {
        d.rootPosition = [270, 18];
        return `translate(${270}, ${18})`;
      } else {
        return `translate(${-20}, ${15})`;
      }
    });
  companyNodes
    .append("text")
    .attr("x", 10)
    .attr("y", 25)
    .attr("fill", (d) => {
      if (d.depth === 0) {
        return "#fff";
      } else {
        return "#000";
      }
    })
    .text((d) => d.data.name);
  const typeNodes = g
    .selectAll(".type-node")
    .data(nodes.descendants())
    .enter()
    .filter((d) => {
      return !d.data.eid;
    })
    .append("g")
    .attr("class", "type-node")
    .attr("transform", (d) => `translate(${d.y}, ${d.x})`);
  typeNodes
    .append("rect")
    .attr("width", 120)
    .attr("height", 30)
    .attr("fill", "#dee6ff")
    .attr("stroke-width", 1)
    .attr("rx", 10)
    .attr("ry", 10);
  typeNodes
    .append("circle")
    .attr("r", 8)
    .attr("fill", "#2258F4")
    .attr("transform", `translate(${-20}, ${15})`);
  typeNodes
    .append("text")
    .attr("x", 10)
    .attr("y", 20)
    .text((d) => d.data.name);
  const links = g
    .selectAll("path")
    .data(nodes.links())
    .enter()
    .append("path")
    .attr("d", (d) => {
      if (d.source.depth === 0) {
        return `M ${d.source.y + 280} ${d.source.x + 20} C ${
          d.source.y + 320
        } ${d.source.x + 30}, ${d.target.y - 60} ${d.target.x + 15}, ${
          d.target.y - 30
        } ${d.target.x + 15}`;
      }
      return `M ${d.source.y + 120} ${d.source.x + 13} C ${d.source.y + 220} ${
        d.source.x + 15
      }, ${d.target.y - 120} ${d.target.x + 15}, ${d.target.y - 30} ${
        d.target.x + 15
      }`;
    })
    .attr("class", "link")
    .attr("fill", "none")
    .attr("stroke", "#00000e")
    .attr("stroke-width", 1);

  // 创建缩放事件
  const zoom = d3
    .zoom()
    .scaleExtent([0.2, 10])
    .on("zoom", (d) => {
      const { k, x, y } = d.transform;
      g.attr(
        "transform",
        `translate(${initPosition.x + x}, ${initPosition.y + y}) scale(${k})`
      );
    });
  svg.call(zoom);
}
onMounted(() => {
  initTreeChart(treeData, "#tree-chart");
});
</script>
<style lang="scss" scoped>
.tree-chart-content {
  width: 1000px;
  height: 500px;
  margin: 20px;
  // background-color: var(--el-color-primary-light-8);
  #tree-chart {
    width: 100%;
    height: 100%;
    ::v-deep {
      .tree-node {
        border-radius: 4px;
        border: 1px solid #2258f4;
        width: 224px;
        height: 38px;
      }
    }
  }
}
</style>
