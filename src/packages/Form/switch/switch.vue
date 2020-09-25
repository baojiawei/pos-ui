<template>
  <div class="pos-switch">
    <span
      ref="core"
      class="pos-switch-core"
      :value="value"
      :style="coreStyle"
      :class="coreClass"
      @click="handletoggle"
    >
      <span class="pos-switch-core-inner" :style="innerStyle"></span>
    </span>
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
      type: Number,
      default: 40
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
  mounted() {
    // if (this.activeColor && this.switchStatus) {
    //   this.$refs.core.style.background = this.activeColor
    // }
    // if (this.inactiveColor && !this.switchStatus) {
    //   this.$refs.core.style.background = this.inactiveColor
    // }
  },
  methods: {
    handletoggle() {
      this.switchStatus = !this.switchStatus
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
  > .switch-left-text {
    margin-right: 3px;
  }
  > .switch-right-text {
    margin-left: 3px;
  }
  > .pos-switch-core {
    display: inline-block;
    background: $danger;
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
      background: $success;
      > .pos-switch-core-inner {
        margin-left: 50%;
      }
    }
    &.disabled {
      background: #bbb;
    }
  }
}
</style>
