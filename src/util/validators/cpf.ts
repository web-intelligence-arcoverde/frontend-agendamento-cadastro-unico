export const validatorCpf = (cpf: any) => {
  cpf = cpf.replace(/\D/g, '')
  if (cpf.toString().length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false
  }
  let result = true
    ;[9, 10].forEach(function (j) {
      let soma = 0
      let r
      cpf
        .split(/(?=)/)
        .splice(0, j)
        .forEach(function (e: any, i: any) {
          soma += parseInt(e) * (j + 2 - (i + 1))
        })
      r = soma % 11
      r = r < 2 ? 0 : 11 - r
      if (r != cpf.substring(j, j + 1)) result = false
    })
  return result
}
