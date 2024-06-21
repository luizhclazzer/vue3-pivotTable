<template>
  <div ref="pivotContainer"></div>
</template>

<script>
import $ from 'jquery'
import 'jquery-ui'
import 'jquery-ui/ui/widgets/mouse'
import 'jquery-ui/ui/plugin'
import 'jquery-ui/ui/widgets/sortable'
import 'jquery-ui/ui/widgets/draggable'
import 'jquery-ui/ui/widgets/droppable'
import 'pivottable'
import 'pivottable/dist/pivot.css'

export default {
  name: 'PivotTable',
  props: {
    data: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
    this.createPivotTable()
  },
  methods: {
    createPivotTable() {
      var pivotOptions = {
        cols: ['month_year'],
        rows: ['name'],
        // vals: ['total', 'value'],
        showUI: true
      }
      $(this.$refs.pivotContainer).pivotUI(this.data, pivotOptions)
    }
  }
}
</script>

<style>
@import 'pivottable/dist/pivot.css';
</style>
