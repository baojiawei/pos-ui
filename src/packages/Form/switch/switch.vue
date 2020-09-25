<template>
  <div class="pos-switch">
    <span
      ref="inactiveText"
      v-if="inactiveText"
      class="switch-text left"
      :class="{ active: !switchStatus }"
      @click="handletoggle"
      >{{ inactiveText }}</span
    >
    <span
      ref="core"
      class="pos-switch-core"
      :value="value"
      :style="coreStyle"
      :class="coreClass"
      @click="handletoggle"
      :disabled="disabled"
    >
      <span class="pos-switch-core-inner" :style="innerStyle"></span>
    </span>
    <span
      ref="activeText"
      v-if="activeText"
      class="switch-text right"
      :class="{ active: switchStatus }"
      @click="handletoggle"
      >{{ activeText }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'pos-switch',
  data() {
    return {
      switchStatus: this.value
    }
  },
  props: {
    width: {
      type: String,
      default: '40'
    },
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    }
  },
  computed: {
    coreStyle() {
      let style = `width:${this.width}px;height:${parseInt(this.width) /
        2}px;border-radius:${parseInt(this.width) / 4}px;`
      if (this.activeColor && this.switchStatus) {
        style += `background: ${this.activeColor};`
      }
      if (this.inactiveColor && !this.switchStatus) {
        style += `background: ${this.inactiveColor};`
      }
      return style
    },
    innerStyle() {
      return `width:${parseInt(this.width) / 2 - 4}px;height:${parseInt(this.width) / 2 - 4}px`
    },
    coreClass() {
      let classes = []
      if (this.disabled) {
        classes.push(`disabled`)
      }
      if (this.switchStatus) {
        classes.push(`active`)
      }
      return classes
    }
  },
  methods: {
    handletoggle() {
      if (this.disabled) return
      this.switchStatus = !this.switchStatus
      const newValue = this.switchStatus ? this.activeValue : this.inactiveValue
      this.$emit('input', newValue)
      this.$emit('change', newValue)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/_var.scss';
.pos-switch {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  > .switch-text {
    color: $switch-font-color;
    cursor: pointer;
    &.active {
      color: $primary;
    }
    &.right {
      margin-left: 3px;
    }
    &.left {
      margin-right: 3px;
    }
  }
  > .pos-switch-core {
    display: inline-block;
    background: $switch-disabled-color;
    position: relative;
    transition: all 0.3s linear;
    cursor: pointer;
    > .pos-switch-core-inner {
      display: block;
      background: #fff;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.3s linear;
      left: 2px;
      margin-left: 0;
    }
    &.active {
      background: $switch-success-color;
      > .pos-switch-core-inner {
        margin-left: 50%;
      }
    }
    &.disabled {
      cursor: not-allowed;
      background: $switch-disabled-color;
    }
  }
}
</style>
