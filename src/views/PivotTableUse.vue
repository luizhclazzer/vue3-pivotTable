<template>
  <div id="app">
    <PivotTable :data="pivotData" :options="pivotOptions" />
  </div>
</template>

<script>
import PivotTable from '../components/PivotTable.vue'

export default {
  name: 'App',
  components: {
    PivotTable
  },
  data() {
    return {
      pivotData: [
        { name: 'Luiz', total: 10, value: 1500.99, month_year: '2024-01' },
        { name: 'Lucas', total: 15, value: 3700.87, month_year: '2024-01' },
        { name: 'Luiz', total: 22, value: 3200.05, month_year: '2024-02' },
        { name: 'Lucas', total: 8, value: 5500.78, month_year: '2024-02' }
      ],
      pivotOptions: {
        cols: ['month_year'],
        rows: ['name']
      }
    }
  }
}
</script>
