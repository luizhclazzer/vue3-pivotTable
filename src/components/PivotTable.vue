<template>
  <div ref="pivotContainer"></div>
</template>

<script>
import $ from 'jquery';
import 'jquery-ui';
import 'jquery-ui/ui/widgets/mouse';
import 'jquery-ui/ui/plugin';
import 'jquery-ui/ui/widgets/sortable';
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/droppable';
import 'pivottable';
import 'multifact-pivottable';
import 'pivottable/dist/pivot.css';

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
    console.log($.pivotUtilities);
    this.createPivotTable();
  },
  methods: {
    createPivotTable() {
      var aggMap = {
        agg1: {
          aggType: 'Sum',
          arguments: ['total'],
          name: 'Quantidade',
          varName: 'a',
          renderEnhancement: 'none'
        },
        agg2: {
          aggType: 'Sum',
          arguments: ['value'],
          name: 'Valor',
          varName: 'b',
          hidden: false,
          renderEnhancement: 'none'
        }
      };
      var customAggs = {};
      customAggs['Multifact Aggregators'] = $.pivotUtilities.multifactAggregatorGenerator(
        aggMap,
        []
      );
      var multiFactAggConfig = {
        cols: ['month_year'],
        rows: ['name'],
        vals: [],
        rowOrder: 'key_a_to_z',
        colOrder: 'key_a_to_z',
        aggregatorName: 'Multifact Aggregators',
        rendererName: 'GT Table',
        rendererOptions: {
          aggregations: {
            defaultAggregations: aggMap
          }
        },
        showUI: true
      };

      const config = Object.assign({}, multiFactAggConfig, this.options);

      $.pivotUtilities.customAggs = customAggs;
      config.aggregators = $.extend($.pivotUtilities.aggregators, $.pivotUtilities.customAggs);
      config.renderers = $.extend($.pivotUtilities.renderers, $.pivotUtilities.gtRenderers);

      $(this.$refs.pivotContainer).pivotUI(this.data, config);
    }
  }
};
</script>

<style>
@import 'pivottable/dist/pivot.css';
</style>
