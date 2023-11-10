import './../Styles/destino.css';


export const Destino = () => {
  


  return (
    
    <div>
    

      <header class="header-destinos">
          <a href="/" class="go-back"><i class='bx bx-chevron-left'></i></a>
          <a href="/" class="destinos">Destinos</a>
          <a href="/" class="icon">ll</a>
      </header>

      <section>
        <div class="form1-destinos">
        <label for="destino">Ingresar Destino</label>
        <input type="text" id="destino" name="destino" placeholder="Nuevo destino..."/>
    </div>
        <div class="form2-destinos">
        <label for="fechas" >Ingresar Fechas</label>
        <input type="text" id="fechas" name="fechas" placeholder="Ingrese fechas..."/>
    </div>

    <div class="add-destino">
        <p>+ Destinos</p>
    </div>
    </section>






    </div>

  
  )
}
