import Scheduling from 'src/components/molecules/SchedulingPeding'
import { Card } from '../styled'

const Mock = [
  { title: 'JOELCIO', subtitle: 'Atendimento', number: '87991417395' },
  { title: 'Teste', subtitle: 'Cadastro Novo', number: '87998427394' },
  {
    title: 'Limpar usuário selecionado',
    subtitle: 'Atendimento',
    number: '87991417395',
  },
  { title: 'Teste', subtitle: 'Cadastro Novo', number: '87998427394' },
  { title: 'Teste', subtitle: 'Cadastro Novo', number: '87998427394' },
  { title: 'Teste', subtitle: 'Cadastro Novo', number: '87998427394' },
  { title: 'Teste', subtitle: 'Cadastro Novo', number: '87998427394' },
]

const Index = () => {
  return (
    <div>
      <div style={{ marginTop: '28px' }} />

      <h2>Agendamentos Pendentes</h2>

      <div style={{ marginTop: '18px' }} />

      {Mock.map(({ title, subtitle, number }) => {
        return (
          <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <Scheduling title={title} subtitle={subtitle} number={number} />
          </div>
        )
      })}
    </div>
  )
}

export default Index
