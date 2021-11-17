export const maskCpf = (v: any, value: any): any => {
  v = v.replace(/\D/g, '')

  if (typeof value !== 'undefined') {
    if (value.length <= 14) {
      v = v.replace(/(\d{3})(\d)/, '$1.$2')

      v = v.replace(/(\d{3})(\d)/, '$1.$2')

      v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    } else {
      v = v.replace(/^(\d{2})(\d)/, '$1.$2')

      v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')

      v = v.replace(/\.(\d{3})(\d)/, '.$1/$2')

      v = v.replace(/(\d{4})(\d)/, '$1-$2')
    }
  }

  return v
}
