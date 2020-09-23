const _import: Function = function (file) {
  return () => import('/@/views/' + file + '.vue')
}
export default _import
