<script setup>
import { useMouse } from '@/hooks/useMouse'

const { x, y } = useMouse()
</script>

<template>
  <div>
    鼠标的位置在: {{ x }}, {{ y }}
  </div>
</template>
