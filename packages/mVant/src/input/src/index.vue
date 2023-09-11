<template>
  <van-field
    v-bind="$attrs"
    v-model="model"
    :placeholder="placeholder"
    :label-width="labelWidth"
  >
    <template v-if="!isInput" #input>
      <slot />
    </template>
    <template #button>
      <slot name="button" />
    </template>
  </van-field>
</template>

<script setup lang="ts" name="EvInput">
import { computed } from 'vue';
import { defaultProps } from '../../utils';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  isInput: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: '请输入'
  },
  labelWidth: defaultProps.labelWidth
});
const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  }
});
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
:deep(.van-field__label) {
  font-size: 14px;
}
:deep(.van-field__value) {
  font-size: 14px;
  color: #bfbfbf;
}

:deep(.van-field__label--top) {
  margin-bottom: 10px;
}

:deep(.van-field__label) {
  position: relative;

  &::before {
    position: absolute;
    left: -10px;
  }
}
</style>
