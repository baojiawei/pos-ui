<template>
  <button class="pos-button" :class="btnClass" :disabled="loading" @click="onClick">
    <pos-icon :icon="icon" v-if="icon && !loading" class="icon"></pos-icon>
    <pos-icon icon="loading" v-if="loading" class="icon loading"></pos-icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'pos-button',
  data() {
    return {
      wave: false,
    }
  },
  props: {
    type: {
      type: String,
      default: '',
      validator(type) {
        if (type && !['warning', 'success', 'danger', 'primary', 'info'].includes(type)) {
          console.error(
            'type类型必须为: ' + ['warning', 'success', 'danger', 'primary', 'info'].join('、'),
          )
        }
        return true
      },
    },
    icon: {
      type: String,
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(type) {
        if (!['left', 'right'].includes(type)) {
          console.error('iconPosition属性必须为：left或者right')
        }
        return true
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    btnClass() {
      let classes = []
      if (this.type) {
        classes.push(`pos-button-${this.type}`)
      }
      if (this.iconPosition) {
        classes.push(`pos-button-${this.iconPosition}`)
      }
      if (this.wave) {
        classes.push(`pos-button-${this.type}-wave`)
      }
      return classes
    },
  },
  mounted() {
    this.$el.addEventListener('animationend', this.listenAnimation)
  },
  methods: {
    onClick(e) {
      this.$emit('click', e)
      this.wave = true
    },
    listenAnimation() {
      this.wave = false
    },
  },
  beforeDestroy() {
    this.$el.removeEventListener('animationend', this.listenAnimation)
  },
}
</script>

<style lang="scss">
@import '../styles/_var.scss';
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.pos-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $height;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  user-select: none;
  outline: none;
  position: relative;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:active {
    color: $active-color;
    border-color: 1px solid $active-color;
    background-color: $background;
  }
  @each $type,
    $color
      in (primary: $primary, success: $success, info: $info, warning: $warning, danger: $danger)
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #ffffff;
      fill: #ffffff;
    }
  }

  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        info: $info-hover,
        warning: $warning-hover,
        danger: $danger-hover
      )
  {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #ffffff;
    }
  }

  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        info: $info-active,
        warning: $warning-active,
        danger: $danger-active
      )
  {
    &-#{$type}:active:not(:disabled) {
      background: #{$color};
      border: 1px solid #{$color};
      color: #ffffff;
    }
    &-#{$type}-wave {
      &::after {
        content: '';
        display: block;
        background: #{$color};
        pointer-events: none;
        position: absolute;
        z-index: 1;
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
        border-radius: inherit;
        border: 0 solid #{$color};
        opacity: 0.4;
        animation: after-scale 0.5s linear forwards;
        flex-shrink: 0;
      }
    }
  }

  .icon {
    width: 16px;
    height: 16px;
    &.loading {
      animation: loading-spin 2s linear infinite;
    }
  }
  &-left {
    svg {
      order: 1;
      margin-right: 4px;
    }
    span {
      order: 2;
    }
  }
  &-right {
    svg {
      order: 2;
      margin-left: 4px;
    }
    span {
      order: 1;
    }
  }
  &[disabled] {
    cursor: not-allowed;
  }
}
@keyframes after-scale {
  to {
    top: -6px;
    left: -6px;
    bottom: -6px;
    right: -6px;
    border-width: 6px;
    opacity: 0;
  }
}
@keyframes loading-spin {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
