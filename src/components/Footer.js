import React from 'react';

function Footer() {
  return (
    <div >
<footer className="bg-dark text-center text-white mt-5">

  <div className="containerr p-4">
    <div className="mb-4">


      <a className="btn btn-floating m-1" href="#!" role="button">
     <img style={{maxWidth:"40px"}} src={require('../images/twitter.png')} />
      </a>

      <a className="btn btn-floating m-1" href="#!" role="button"
        >
          <img style={{maxWidth:"40px"}} src={require('../images/whatsapp.png')} />
      </a>

      <a className="btn btn-floating m-1" href="#!" role="button"
        > <img style={{maxWidth:"40px"}} src={require('../images/instagram.png')} />
</a>

      <a className="btn btn-floating m-1" href="#!" role="button"
        > 
       <img style={{maxWidth:"40px"}} src={require('../images/linkedin.png')} />
        </a>


    </div>

    <div className="">
      <form action="">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>Bizden haberdar olmak ister misiniz?</strong>
            </p>
          </div>

          <div className="col-md-5 col-12">
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example2" className="form-control" placeholder="Email addresi" />
            </div>
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-outline-light mb-4">
              Onayla
            </button>
          </div>
        </div>
      </form>
    </div>

    <div className="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </div>

  <div className="">
    <div className="containerer text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>UYGUNUSEC
          </h6>
          <p>
            Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi, dolore veritatis nisi delectus, tenetur repellendus ipsam autem aperiam sunt dolorum at, praesentium provident. Architecto at iure voluptatem sit explicabo?
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Hizmetler
          </h6>
          <p>
            <a href="#!" className="text-reset">Sigorta Hizmetleri</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Service 2</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Service 3</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Service 4</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Linkler
          </h6>
          <p>
            <a href="#!" className="text-reset">Araç Trafik Sigorta</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Araç Kasko</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Konut Sigorta</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Cep Telefonu Sigortası</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            İletişim
          </h6>
          <p><i className="fas fa-home me-3"></i> ANKARA, İncek, TURKEY</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@uygunusec.com
          </p>
          <p> <img style={{maxWidth:"20px", marginLeft:"18px"}} src={require('../images/phone.png')} /> + 01 111 1111 111</p>
        </div>
      </div>
    </div>
  </div>
 
  </div>
 


  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2022 Copyright:
    <a className="text-white" href="https://controlza.net/">controlza.net</a>
  </div>

</footer>




    <a id="whatsapp" title="Whatsapp İletişim" href="https://wa.me/905315245506?text=Hello Controlza" target="_blank">
    <img style={{maxWidth:"40px"}} src={require('../images/whatsapp.png')} />
    </a>
    
    </div>
  );
}

export default Footer;
