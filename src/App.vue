<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import timeDivSelect from './components/timeDivSelect.vue'
let _timeArray = []
let _timeString = ''
for (let i = 0; i < 48 * 7; i++) {
  _timeArray.push('0')
}
_timeString = _timeArray.join('')
export default {
  name: 'app',
  data(){
    return {
      timeSeries:_timeString
    }
  },
  components: {
    // timeDivSelect
  },
  watch:{
    timeSeries(val){
      console.log(val)

    }
  }
}
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%!important;
}
#app {
  width: 100%!important;
  height: 100%!important;
}
</style>
