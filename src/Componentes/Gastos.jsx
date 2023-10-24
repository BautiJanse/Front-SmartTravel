import '../Styles/gastos.css'

export const Gastos = () => {
  return (
    <div>

    <header class="header">
        <a href="/" class="go-back"><i class='bx bx-chevron-left'></i></a>
        <a href="/" class="miembros">Gastos</a>
        <a href="/" class="icon">ll</a>
    </header>

    <section class="lista" id="section-a">
        <h1>Lista de miembros</h1>
        <div class="container">
        <p class="user-icon"><i class='bx bx-user-circle'></i></p>
        <p class="member">Miembro 1</p>
        <p>+ 10000$</p>
    </div>

    <div class="container">
        <p class="user-icon"><i class='bx bx-user-circle'></i></p>
        <p class="member">Miembro 2</p>
        <p>- 2000$</p>
    </div>

    <div class="container">
        <p class="user-icon"><i class='bx bx-user-circle'></i></p>
        <p class="member">Miembro 3</p>
        <p>+ 1500$</p>
    </div>

    <div class="container">
        <p class="user-icon"><i class='bx bx-user-circle'></i></p>
        <p class="member">Miembro 4</p>
        <p>- 3000$</p>
    </div>


    </section>

    <section class="gastos" id="section-b">
       
      <h2>Lista de gastos</h2>
        <div class="container">
        <p class="user-icon"> <i class='bx bx-dollar-circle'></i></p>
        <p class="member">Hotel</p>
        <p>10000$</p>
        </div>

        <div class="container">
        <p class="user-icon"><i class='bx bx-dollar-circle'></i> </p>
        <p class="member">Pasajes Avion</p>
        <p>2000$</p>
        </div>

        <div class="container">
        <p class="user-icon"><i class='bx bx-dollar-circle'></i></p>
        <p class="member">Auto</p>
        <p>1500$</p>
        </div>




    </section>



    </div>
  )
}
