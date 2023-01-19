const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  run: ['01-01', '01-02', '01-06', '01-07', '01-08'],
  journal: ['01-02'],
  takePills: ['01-03'],
}

nlwSetup.setData(data)
nlwSetup.load()