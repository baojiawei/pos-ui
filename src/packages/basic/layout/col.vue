<template>
  <div class="pos-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'pos-col',
  data() {
    return {
      gutter: 0
    }
  },
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    colClass() {
      let classes = []
      classes.push(`pos-col-${this.span}`)
      if (this.offset) {
        classes.push(`pos-col-offset-${this.offset}`)
      }
      let arr = ['xs', 'sm', 'md', 'lg', 'xl']
      arr.forEach(type => {
        if (this[type] && typeof this[type] === 'object') {
          let { span, offset } = this[type]
          span && classes.push(`pos-col-${type}-${span}`)
          offset && classes.push(`pos-col-${type}-offset-${offset}`)
        } else {
          this[type] && classes.push(`pos-col-${type}-${this[type]}`)
        }
      })
      return classes
    },
    colStyle() {
      let style = {}
      if (this.gutter) {
        style = {
          ...style,
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
      return style
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/_var.scss';
@for $i from 1 through 24 {
  .pos-col-#{$i} {
    width: $i/24 * 100%;
  }
  .pos-col-offset-#{$i} {
    margin-left: $i/24 * 100%;
  }
}
@include res(xs) {
  @for $i from 1 through 24 {
    .pos-col-xs-#{$i} {
      width: $i/24 * 100%;
    }
    .pos-col-xs-offset-#{$i} {
      width: $i/24 * 100%;
    }
  }
}
@include res(sm) {
  @for $i from 1 through 24 {
    .pos-col-sm-#{$i} {
      width: $i/24 * 100%;
    }
    .pos-col-sm-offset-#{$i} {
      width: $i/24 * 100%;
    }
  }
}
@include res(md) {
  @for $i from 1 through 24 {
    .pos-col-md-#{$i} {
      width: $i/24 * 100%;
    }
    .pos-col-md-offset-#{$i} {
      width: $i/24 * 100%;
    }
  }
}
@include res(lg) {
  @for $i from 1 through 24 {
    .pos-col-lg-#{$i} {
      width: $i/24 * 100%;
    }
    .pos-col-lg-offset-#{$i} {
      width: $i/24 * 100%;
    }
  }
}
@include res(xl) {
  @for $i from 1 through 24 {
    .pos-col-xl-#{$i} {
      width: $i/24 * 100%;
    }
    .pos-col-xl-offset-#{$i} {
      width: $i/24 * 100%;
    }
  }
}
</style>
