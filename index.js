
module.exports = function newScriptLoaderUtil(name, src) {

  var script = `
(function (w, d) {
  var script, newScript, loaded

  loaded = '${name}'

  if (!w[loaded]) {
    // don't run next time
    w[loaded] = true

    // avoid KB927917 error in IE8
    w.setTimeout(function () {
      script = d.getElementsByTagName('SCRIPT')[0]
      newScript = d.createElement('SCRIPT')
      newScript.type = 'text/javascript'
      newScript.async = true
      newScript.src = '${src}'

      script.parentNode.insertBefore(newScript, script)
    }, 10)
  }
}(window, document))
`

  return script
}
