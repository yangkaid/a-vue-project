<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader'
import { ElMessage } from 'element-plus'
let map = null
let AMap = null
onMounted(async () => {
  initMap()
})
onUnmounted(() => {
  map.destroy();
})
async function initMap() {
  window._AMapSecurityConfig = {
    securityJsCode: "b7194bc2c800caa00aa903d8360bae4e",
  };
  AMap = await AMapLoader.load({
    key: '16792a66ab28cf4bdc37807a33ae0eba',
    version: '2.0',
    plugins: []
  })
  map = new AMap.Map("container", {
    zoom: 10,
    // viewModel: '3D'
    mapStyle: 'amap://styles/normal'
  })
  loadMapEvent()
}
// 设置城市
const cityName = ref('')
function setCity() {
  map.setCity(cityName.value)
}
// 获取当前城市信息
function getCurrentCityAsync() {
  return new Promise(function (resolve, reject) {
    AMap.plugin('AMap.CitySearch', function () {
      var citySearch = new AMap.CitySearch();
      citySearch.getLocalCity(function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          resolve(result); // 将结果传递给 Promise 的 resolve 函数
        } else {
          reject(new Error('城市信息查询失败')); // 将错误信息传递给 Promise 的 reject 函数
        }
      });
    });
  });
}

async function getCurrentCityInfo() {
  try {
    const result = await getCurrentCityAsync();
    // 查询成功，result即为当前所在城市信息
    console.log('当前城市信息:', result);
  } catch (error) {
    console.error('失败信息:', error);
  }
}

// 定位精准信息
function getCurrentPositionAsync() {
  return new Promise((resolve, reject) => {
    AMap.plugin('AMap.Geolocation', function () {
      const geolocation = new AMap.Geolocation({
        timeout: 50000,
        zoomToAccuracy: true
      })
      geolocation.getCurrentPosition(function (status, result) {
        if (status === 'complete') {
          resolve(result)
        } else {
          reject(result)
        }
      })
    })
  })
}
async function getCurrentPosition() {
  try {
    const result = await getCurrentPositionAsync()
    console.log(result)
    addMarker([result.position.lng, result.position.lat])
    map.setZoomAndCenter(15, [result.position.lng, result.position.lat])
  } catch (error) {
    console.log(error)
  }
}
// 加载地图的生命周期
function loadMapEvent() {
  map.on('complete', function () {
    console.log('地图加载完成')
    getCurrentPosition()
  })
  map.on('click', function (event) {
    console.log(event)
    addMarker([event.lnglat.lng, event.lnglat.lat])
  })
}
// 添加卫星图层
let satelliteLayer = null
let satelliteLayerFlag = false
function addSatellite() {
  satelliteLayerFlag = !satelliteLayerFlag
  if (satelliteLayerFlag) {
    satelliteLayer = new AMap.TileLayer.Satellite()
    map.add(satelliteLayer)
  } else {
    map.remove(satelliteLayer)
    satelliteLayerFlag = false
  }

}

// marker点标记
function addMarker(center) {
  const marker = new AMap.Marker({
    position: center,
    title: '我的位置'
  })
  map.add(marker)
  marker.on('click', function (e) {
    console.log(e)
    ElMessage({
      message: '点击了marker',
      type: 'success'
    })
  })
}
function removeMarker() {
  const markers = map.getAllOverlays('marker')
  console.log(markers)
  map.remove(markers)
}

// 搜索地址
const keywords = ref('')
function searchAddressAsync(params) {
  return new Promise((resolve, reject) => {
    AMap.plugin('AMap.PlaceSearch', function() {
      const placeSearch = new AMap.PlaceSearch(params)
      placeSearch.search(keywords, function(status, result) {
        console.log(status, result)
        if (status === 'complete') {
          resolve(result.poiList)
        } else {
          reject(new Error('查询地址失败'))
        }
      })
    })
  })
}
async function searchAddressByKeyword() {
  try {
    const result = await searchAddressAsync({
      city: cityName.value || '全国'
    })
    console.log(result)
  } catch (error) {
    console.log(error)
    ElMessage.error('查询地址失败')
  }
}
</script>
<template>
  <div class="map-container" id="container"></div>
  <el-row class="mt-2" :gutter="20">
    <el-col :span="6"><el-input v-model="cityName" /></el-col>
    <el-col :span="6"><el-button @click="setCity">设置城市</el-button></el-col>
  </el-row>
  <el-row class="mt-2" :gutter="20">
    <el-col :span="3"><el-button type="primary" @click="getCurrentCityInfo">定位城市信息</el-button></el-col>
    <el-col :span="3"><el-button type="primary" @click="getCurrentPosition">定位精准信息</el-button></el-col>
    <el-col :span="3"><el-button type="primary" @click="addSatellite">卫星图层</el-button></el-col>
    <el-col :span="3"><el-button type="primary" @click="removeMarker">清除图层</el-button></el-col>
  </el-row>
  <el-row class="mt-2" :gutter="20">
    <el-col :span="4"><el-input v-model="keywords"></el-input></el-col>
    <el-col :span="4"><el-button type="primary" @click="searchAddressByKeyword">查询</el-button></el-col>
  </el-row>
</template>
<style lang="scss">
.map-container {
  width: 100%;
  height: 600px;
  background-color: gray;
}
</style>
