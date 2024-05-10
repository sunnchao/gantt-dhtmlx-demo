<template>
  <section class="my-gantt">
    <div id="gantt_here" class="gantt-container"></div>
  </section>
</template>
 
<script setup>
import { reactive, ref, toRefs, onBeforeMount, onMounted, watchEffect, defineExpose } from 'vue'
 
import { gantt } from 'dhtmlx-gantt'
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'
import demoData from './ganttData.json'

const data = reactive({})
const ganttColumns = ref([
  { align: 'left', name: 'text', label: '任务名称', tree: true },
  { align: 'left', name: 'start_date', label: '开始时间' },
  { name:"add", width:44, resize:true, hide:false}
])
 
//初始化甘特图
const initGantt = () => {
  gantt.config.grid_width = 350
  gantt.config.add_column = true //添加符号
 
  //时间轴图表中，如果不设置，只有行边框，区分上下的任务，设置之后带有列的边框，整个时间轴变成格子状。
  gantt.config.autofit = false
  gantt.config.row_height = 60
  gantt.config.bar_height = 34
  // gantt.config.fit_tasks = true //自动延长时间刻度，以适应所有显示的任务
  gantt.config.auto_types = true //将包含子任务的任务转换为项目，将没有子任务的项目转换回任务
  // gantt.config.xml_date = '%Y-%m-%d' //甘特图时间格式
  gantt.config.readonly = false //是否只读
  gantt.config.columns = ganttColumns.value
  gantt.i18n.setLocale('cn') //设置语言
  gantt.init('gantt_here')  //初始化
  gantt.parse(demoData)   //填充数据
}
 
onBeforeMount(() => {})
onMounted(() => {
  initGantt()
})
watchEffect(() => {})
defineExpose({
  ...toRefs(data)
})
</script>
<style scoped lang="scss">
.my-gantt {
  height: 100vh;
  width: 100vw;
  .gantt-container {
    width: 100%;
    height: 100%;
  }
}
</style> -->

<!-- <template>
  <g-gantt-chart
    chart-start="2021-07-12 12:00"
    chart-end="2021-07-14 12:00"
    precision="hour"
    bar-start="myBeginDate"
    bar-end="myEndDate"
  >
    <g-gantt-row label="My row 1" :bars="row1BarList" />
    <g-gantt-row label="My row 2" :bars="row2BarList" />
  </g-gantt-chart>
</template>

<script setup>
import { ref } from "vue"

const row1BarList = ref([
  {
    myBeginDate: "2021-07-13 13:00",
    myEndDate: "2021-07-13 19:00",
    ganttBarConfig: {
      // each bar must have a nested ganttBarConfig object ...
      id: "unique-id-1", // ... and a unique "id" property
      label: "Lorem ipsum dolor"
    }
  }
])
const row2BarList = ref([
  {
    myBeginDate: "2021-07-13 00:00",
    myEndDate: "2021-07-14 02:00",
    ganttBarConfig: {
      id: "another-unique-id-2",
      hasHandles: true,
      label: "Hey, look at me",
      style: {
        // arbitrary CSS styling for your bar
        background: "#e09b69",
        borderRadius: "20px",
        color: "black"
      }
    }
  }
])
</script>




<!-- <template>
  <div id="chart"></div>
</template>
<script setup lang="ts">
import { init, dispose } from 'klinecharts'
import { ref, onMounted ,onUnmounted } from 'vue'
const chart = ref()
interface dataType {
  // 时间戳，毫秒级别，必要字段
  timestamp: number
  // 开盘价，必要字段
  open: number
  // 收盘价，必要字段
  close: number
  // 最高价，必要字段
  high: number
  // 最低价，必要字段
  low: number
  // 成交量，非必须字段
  volume: number
  // 成交额，非必须字段，如果需要展示技术指标'EMV'和'AVP'，则需要为该字段填充数据。
  turnover: number
}
type dataTypeArray = dataType[];
function genData (timestamp = new Date().getTime(), length = 800) {
  let basePrice = 5000
  timestamp = Math.floor(timestamp / 1000 / 60) * 60 * 1000 - length * 60 * 1000
  const dataList: dataTypeArray = []
  for (let i = 0; i < length; i++) {
    const prices = []
    for (let j = 0; j < 4; j++) {
      prices.push(basePrice + Math.random() * 60 - 30)
    }
    prices.sort()
    const open = +(prices[Math.round(Math.random() * 3)].toFixed(2))
    const high = +(prices[3].toFixed(2))
    const low = +(prices[0].toFixed(2))
    const close = +(prices[Math.round(Math.random() * 3)].toFixed(2))
    const volume = Math.round(Math.random() * 100) + 10
    const turnover = (open + high + low + close) / 4 * volume
    dataList.push({ timestamp, open, high,low, close, volume, turnover })

    basePrice = close
    timestamp += 60 * 1000
  }
  return dataList
}
const option = {
  crosshair: {
    show: true,
    // 十字光标水平线及文字
    horizontal: {
      show: true,
      line: {
        show: true,
        style: "solid",
        size: 1,
        color: "#333",
      },
    },
    vertical: {
      show: true,
      line: {
        show: true,
        style: 'solid',
        size: 1,
        color: '#333'
      },
    },
  }
}
onMounted(() => {
  chart.value = init('chart') as any
  chart.value.setStyles(option);
  // 为图表添加数据
  chart.value.applyNewData(genData())
})
onUnmounted(() => {
  dispose(chart.value)
})
</script>
<style scoped>
#chart {
  width: 100vw;
  height: 100vh;
  background: #000;
  padding: 0;margin: 0;
}
</style> -->
