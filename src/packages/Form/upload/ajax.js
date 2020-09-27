export default function ajax(options) {
  const xhr = new XMLHttpRequest()
  const action = options.action
  const fd = new FormData()
  fd.append(options.filename, options.file)
  xhr.onerror = function(err) {
    options.onError(err)
  }
  xhr.onload = function() {
    let text = xhr.responseText || xhr.response
    options.onSuccess(JSON.parse(text))
  }
  xhr.upload.onprogress = function(e) {
    if (e.total > 0) {
      e.percent = (e.loaded / e.total) * 100
    }
    options.onprogress(e)
  }
  // 开启请求 异步
  xhr.open('post', action, true)
  xhr.send(fd)
  return xhr
}
