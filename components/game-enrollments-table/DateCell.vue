<script lang="ts" setup>
import { format, addHours } from 'date-fns'

type Props = {
  date: Date
}

const props = defineProps<Props>()

const dateFormatted = format(props.date, 'dd.MM.yyyy')
const timeStart = format(props.date, 'HH:mm')
const timeEnd = format(addHours(props.date, 3), 'HH:mm')

const cellValue = `${dateFormatted} \n ${timeStart} - ${timeEnd}`
</script>

<template>
  <span class="whitespace-pre-line">
    {{ cellValue }}
  </span>
</template>
