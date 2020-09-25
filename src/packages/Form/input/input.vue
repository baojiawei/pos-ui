<template>
  <div class="pos-input" :class="inputClass">
    <pos-icon :icon="prefixIcon" v-if="prefixIcon"></pos-icon>
    <input
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      ref="input"
    />
    <pos-icon :icon="suffixIcon" v-if="suffixIcon"></pos-icon>
    <pos-icon
      icon="qingkong"
      v-if="clearable && value"
      @click.native="$emit('input', '')"
      @mousedown.native.prevent
    ></pos-icon>
    <pos-icon icon="eye" v-if="showPassword && value" @click.native="changeInputType"></pos-icon>
  </div>
</template>

<script>
export default {
  name: 'pos-input',
  data() {
    return {
      passwordVisible: false
    }
  },
  props: {
    name: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    prefixIcon: String,
    suffixIcon: String
  },
  computed: {
    inputClass() {
      let classes = []
      if (this.clearable || this.showPassword || this.suffixIcon) {
        classes.push(`pos-input-suffix-icon`)
      }
      if (this.prefixIcon) {
        classes.push(`pos-input-prefix-icon`)
      }
      return classes
    }
  },
  methods: {
    changeInputType() {
      this.passwordVisible = !this.passwordVisible
      this.$nextTick(() => {
        this.$refs['input'].focus()
      })
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/_var.scss';
.pos-input {
  display: inline-flex;
  position: relative;
  input {
    padding: 8px;
    width: 150px;
    height: 42px;
    border-radius: $border-radius;
    border: 1px solid #dcdfe6;
    cursor: pointer;

    &:focus {
      border: 1px solid $primary;
      outline: none;
      box-shadow: inset -1px 0px 2px $primary, inset 1px 1px 1px $primary;
    }
    &[disabled] {
      cursor: not-allowed;
      background: #eee;
    }
  }
}
.pos-input-suffix-icon {
  input {
    padding-right: 28px;
  }
  .pos-icon {
    position: absolute;
    right: 8px;
    top: 13px;
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
}
.pos-input-prefix-icon {
  input {
    padding-left: 28px;
  }
  .pos-icon {
    position: absolute;
    left: 8px;
    top: 13px;
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
}
</style>
