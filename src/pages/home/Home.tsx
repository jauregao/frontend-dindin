import Table from '../../components/table/Table'

export default function HomePage() {
  return (
    <div className="home">
      <div className="gradiente"></div>
      <div className="main-background">
        <div className="container dashboard">
          <Table/>
        </div>
      </div>
    </div>
  )
}