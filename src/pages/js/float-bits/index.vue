<template>
  <div>
    <span v-for="(v, i) of bits" :key="i">
      <input :class="i > 0 ? i > 11 ? 'fraction' : 'exponent' : 'sign' " v-model="bits[i]">
      <input v-if="i == 11" value="1" disabled="disabled">
      <br v-if="i == 31">
    </span>
    <br />
    <input style="width: 5 em;" v-model="value" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      bits: Array(65).join(0).split("").map(v => Number(v)),
      value: 0
    }
  },
  watch: {
    bits (val) {
      const bytes = new Uint8Array(8)
      const memory = new Float64Array(bytes.buffer)
      for (let i = 0; i < 8; i++) {
        let byte = 0
        for (let j = 0; j < 8; j++) {
          byte = byte << 1
          byte |= Number(val[i * 8 + j]) // 相当于加上了值，使用位运算
        }
        // 此处注意 字节 byte 与 bit 的区别
        bytes[7 - i] = byte // 在内存中是以字节(bytes)反排的，字节中的每一位是正排的
      }
      this.value = memory[0]
    },

    value (val) {
      const bytes = new Uint8Array(8)
      const memory = new Float64Array(bytes.buffer)
      memory[0] = val
      for (let i = 0; i < 8; i++) {
        let byte = bytes[i]
        for (let j = 0; j < 8; j++) {
          this.bits[(8 - i) * 8 - j - 1] = byte & 1
          byte = byte >> 1
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
input[type='number'] {
  appearance: textfield;
}

span {
  padding: 0;
  margin: 0;
}

input {
  width: 1 em;
  height: 23m;
  text-align: center;
}

.sign {
  background-color: lightblue;
}

.exponent {
  background-color: orange;
}
</style>

