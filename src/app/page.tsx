import AddStockForm from '../components/Forms/AddStockForm/AddStockForm'
export default function Home() {
  return (
    <main className='flex justify-center'>
      <div className='flex flex-col gap-3'>
        <h1> Adicionar Ação</h1>
        <AddStockForm />
      </div>
    </main>
  )
}
