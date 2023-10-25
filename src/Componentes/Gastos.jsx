import '../Styles/gastos.css'

export const Gastos = () => {
  return (
    <div>
    <header className="header-gastos">
      <a href="/" className="go-back"><i className='bx bx-chevron-left'></i></a>
      <a href="/" className="miembros">Gastos</a>
      <a href="/" className="icon">ll</a>
    </header>

    <section className="lista-gastos" id="section-a">
      <h1>Lista de miembros</h1>
      <div className="container-gastos">
        <p className="user-icon-gastos"><i className='bx bx-user-circle'></i></p>
        <p className="member-gastos">Miembro 1</p>
        <p>+ 10000$</p>
      </div>

      <div className="container-gastos">
        <p className="user-icon-gastos"><i className='bx bx-user-circle'></i></p>
        <p className="member-gastos">Miembro 2</p>
        <p>- 2000$</p>
      </div>

      <div className="container-gastos">
        <p className="user-icon-gastos"><i className='bx bx-user-circle'></i></p>
        <p className="member-gastos">Miembro 3</p>
        <p>+ 1500$</p>
      </div>

      <div className="container-gastos">
        <p className="user-icon-gastos"><i className='bx bx-user-circle'></i></p>
        <p className="member-gastos">Miembro 4</p>
        <p>- 3000$</p>
      </div>
    </section>

    <section className="gastos-gastos" id="section-b">
      <h2>Lista de gastos</h2>
      <div className="container-gastos">
        <p className="user-icon-gastos"><i className='bx bx-dollar-circle'></i></p>
        <p className="member-gastos">Hotel</p>
        <p>10000$</p>
      </div>

      <div className="container-gastos">
        <p className="user-icon-gastos"><i className='bx bx-dollar-circle'></i></p>
        <p className="member-gastos">Pasajes Avion</p>
        <p>2000$</p>
      </div>

      <div className="container-gastos">
        <p className="user-icon-gastos"><i className='bx bx-dollar-circle'></i></p>
        <p className="member-gastos">Auto</p>
        <p>1500$</p>
      </div>
    </section>
  </div>
  )
}
