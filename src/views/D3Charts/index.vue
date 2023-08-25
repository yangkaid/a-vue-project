<script lang="ts" setup>
import * as d3 from "d3";
import { onMounted, reactive, ref } from "vue";
const container = reactive({
  width: 500,
  height: 500,
});
const data = ref([1, 2, 3, 4, 5]);
// 计算container的中心点
function computedContainerCenter(x, y) {
  return {
    x: container.width / 2 - x / 2,
    y: container.height / 2 - y / 2,
  };
}
function drawChart() {
  let svg = d3
    .select("#chart-1")
    .append("svg")
    .attr("width", container.width)
    .attr("height", container.height);
  svg
    .append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 50)
    .style("fill", "var(--el-color-primary)");
  svg
    .append("rect")
    .attr("x", computedContainerCenter(100, 100).x)
    .attr("y", computedContainerCenter(100, 100).y)
    .attr("width", 100)
    .attr("height", 100)
    .style("fill", "var(--el-color-danger)");
}
function createDataChart() {
  let svg = d3
    .select("#chart-2")
    .append("svg")
    .attr("width", container.width)
    .attr("height", container.height)
    .style("background-color", "var(--el-color-primary)");
  svg
    .append("rect")
    .attr("x", computedContainerCenter(100, 100).x)
    .attr("y", computedContainerCenter(100, 100).y)
    .attr("width", 100)
    .attr("height", 100)
    .style("fill", "var(--el-color-danger)");
}
function updateChart() {
  d3.select("svg")
    .attr("width", container.width)
    .attr("height", container.height)
    .select("rect")
    .attr("x", computedContainerCenter(100, 100).x)
    .attr("y", computedContainerCenter(100, 100).y);
}
function addWidth() {
  container.width += 100;
  updateChart();
}
function reduceWidth() {
  container.width -= 100;
  updateChart();
}
function ceateDataset() {
  let dataset = [1, 2, 3, 4, 5,6,7,8,9,10];
  d3.select("#chart-3")
    .selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text((d) => `这是第${d}个p标签`);
}
onMounted(() => {
  createDataChart();
  ceateDataset();
});
</script>
<template>
  <div class="d3-charts">
    <div id="chart-1"></div>
    <div id="chart-2"></div>
    <el-button @click="addWidth">增加宽度</el-button>
    <el-button @click="reduceWidth">减少宽度</el-button>
    <div id="chart-3"></div>
  </div>
</template>
<style lang="scss" scoped></style>
