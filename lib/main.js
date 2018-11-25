exports.activate = function () {
  if (!atom.grammars.addInjectionPoint) return

  atom.grammars.addInjectionPoint('source.verilog', {
    type: 'preproc_arg',
    language (arg) { return 'verilog' },
    content (arg) { return arg }
  })

}
