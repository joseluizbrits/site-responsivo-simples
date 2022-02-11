import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(res => res.json())
      .then(photos => setPhotos(photos))
  })

  return (
    <div className="container-fluid p-0">

      {/* NAVBAR */}
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>

        <a className='navbar-brand ms-2' href='#'>BLOCO Ventures</a>

        <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMainContent" aria-controls="navbarMainContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <section className='collapse navbar-collapse' id='navbarMainContent'>
          <div className='navbar-nav ms-auto'>
            <a className='nav-item nav-link' href='#'>Home</a>
            <a className='nav-item nav-link' href='#'>Channel</a>
            <a className='nav-item nav-link' href='#'>Login</a>
          </div>
          <form>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text bg-dark text-light'>@</span>
              </div>
              <input type="text" className="form-control bg-dark text-light" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
              <button className='btn btn-outline-success ms-2 me-2'>Login</button>
            </div>
          </form>
        </section>
      </nav>

      {/* CAROUSEL */}
      <section id="carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <ol className="carousel-indicators">
          <li data-bs-target="#carousel" data-bs-slide-to="0" className='active'></li>
          <li data-bs-target="#carousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#carousel" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029_960_720.jpg" alt="Imagem 1" className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h4>Galaxy</h4>
              <p>Bela imagem!</p>
            </div>
          </div>
          <div className='carousel-item'>
            <img src="https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_960_720.jpg" alt="Imagem 2" className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h4>Another galaxy</h4>
              <p>Outra bela imagem!</p>
            </div>
          </div>
          <div className='carousel-item'>
            <img src="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_960_720.jpg" alt="Imagem 3" className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h4>Nebulosa de Orion</h4>
              <p>Roxamente linda!</p>
            </div>
          </div>
        </div>

        <div className="carousel-control-prev" href="#carousel" type="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </div>
        <div className="carousel-control-next" href="#carousel" type="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </div>

      </section>


      {/* CORPO DO SITE */}
      <main className='container p-2'>
        <ul className='list-unstyled'>
          
          {
            photos.map(photo => {
              return (
                <li>
                  <div className="media-body">
                    <div className="row">
                      <div className="col-6 col-md-3">
                        <img src={photo.thumbnailUrl} className='m-3' key={photo.id}/>    
                      </div>
                      <div className="col-6 col-md-9">
                        <h5 className='mt-3 mb-1'>{photo.title}</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in! Sint numquam similique iusto ullam rerum nesciunt quaerat nobis animi magnam, fugiat officia facere quasi, hic saepe sunt culpa reiciendis.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </main>


      {/* FOOTER */}
      <footer className="footer bg-dark text-light d-flex justify-content-center">
        <h6 className='align-self-center'>Footer</h6>
      </footer>

    </div>
  );
}

export default App;
