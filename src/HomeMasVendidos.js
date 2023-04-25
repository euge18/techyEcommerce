import { useNavigate } from "react-router-dom";

function HomeMasVendido() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="main-slider slider slick-initialized slick-slider">
        <div
          class="slider-item"
          style={{
            backgroundImage: "url('assets/images/slideshow1-2.jpg')",
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-12 offset-lg-6 offset-md-6">
                <div class="slider-caption">
                  <span class="lead">Vestido de Moda</span>
                  <h1 class="mt-2 mb-5">
                    <span class="text-color">Colección </span>De Invierno
                  </h1>
                  <a
                    href="#"
                    class="btn btn-main"
                    onClick={() => {
                      navigate("/shop");
                    }}
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="category section pt-3 pb-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-12 col-md-6">
              <div class="cat-item mb-4 mb-lg-0">
                <img src="assets/images/cat-1.jpg" alt="" class="img-fluid" />
                <div class="item-info">
                  <p class="mb-0">Elegante reloj de cuero</p>
                  <h4 class="mb-4">
                    hasta <strong>50% </strong>off
                  </h4>
                  <a href="#" class="read-more">
                    Ir a la tienda
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-6">
              <div class="cat-item mb-4 mb-lg-0">
                <img src="assets/images/cat-2.jpg" alt="" class="img-fluid" />
                <div class="item-info">
                  <p class="mb-0">Bolso de mujer</p>
                  <h4 class="mb-4">
                    hasta <strong>40% </strong>off
                  </h4>
                  <a href="#" class="read-more">
                    Ir a la tienda
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-6">
              <div class="cat-item">
                <img src="assets/images/cat-3.jpg" alt="" class="img-fluid" />
                <div class="item-info">
                  <p class="mb-0">Zapatos</p>
                  <h4 class="mb-4">
                    hasta <strong>50% </strong>off
                  </h4>
                  <a href="#" class="read-more">
                    Ir a la tienda
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section products-main">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="title text-center">
                <h2>Novedades</h2>
                <p>Las mejores ofertas para comprar este fin de semana</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
              <div class="product">
                <div class="product-wrap">
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/322.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/444.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <span class="onsale">Sale</span>
                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Floral Kirby</a>
                  </h2>
                  <span class="price">$329.10</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
              <div class="product">
                <div class="product-wrap">
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/111.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/444.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Open knit switer</a>
                  </h2>
                  <span class="price">$29.10</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
              <div class="product">
                <div class="product-wrap">
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/222.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/322.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <span class="onsale">Sale</span>
                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Official trendy</a>
                  </h2>
                  <span class="price">$350.00 – $355.00</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
              <div class="product">
                <div class="product-wrap">
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/322.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="/product-single">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/111.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Frock short</a>
                  </h2>
                  <span class="price">$249</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
              <div class="product">
                <div class="product-wrap">
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/444.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/222.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Sleeve dress</a>
                  </h2>
                  <span class="price">$59.10</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5">
              <div class="product">
                <div class="product-wrap">
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/322.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/222.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Stylish dress</a>
                  </h2>
                  <span class="price">$99.00</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5 ">
              <div class="product">
                <div class="product-wrap">
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/111.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/444.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Body suite</a>
                  </h2>
                  <span class="price">$329.10</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5 ">
              <div class="product">
                <div class="product-wrap">
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-first"
                      src="assets/images/222.jpg"
                      alt="product-img"
                    />
                  </a>
                  <a href="#">
                    <img
                      class="img-fluid w-100 mb-3 img-second"
                      src="assets/images/322.jpg"
                      alt="product-img"
                    />
                  </a>
                </div>

                <div class="product-hover-overlay">
                  <a href="#">
                    <i class="tf-ion-android-cart"></i>
                  </a>
                  <a href="#">
                    <i class="tf-ion-ios-heart"></i>
                  </a>
                </div>

                <div class="product-info">
                  <h2 class="product-title h5 mb-0">
                    <a href="#">Sleeve linen shirt</a>
                  </h2>
                  <span class="price">
                    <del>
                      60<pre wp-pre-tag-3=""></pre>
                    </del>
                    $50.10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ads section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 offset-lg-6">
              <div class="ads-content">
                <span class="h5 deal">Oferta del día 50% de descuento</span>
                <h2 class="mt-3 text-white">Trendy Suit</h2>
                <p class="text-md mt-3 text-white">
                  ¡Apresúrate! Oferta por tiempo limitado. ¡Aprovecha ahora!
                </p>

                <div id="simple-timer" class="syotimer mb-5"></div>
                <a href="#" class="btn btn-main">
                  <i class="ti-bag mr-2"></i>Comprar{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section products-list">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-12 col-md-12">
              <img
                src="assets/images/adsv.jpg"
                alt="Product big thumb"
                class="img-fluid w-100"
              />
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="widget-featured-entries mt-5 mt-lg-0">
                <h4 class="mb-4 pb-3">Más vendidos</h4>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="/product-single">
                    <img
                      src="assets/images/p-1.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">
                        <strong>Keds - Kickstart Pom Pom</strong>
                      </a>
                    </h6>
                    <p class="featured-entry-meta">$42.99</p>
                  </div>
                </div>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-2.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">
                        <strong>Nike - Brasilia Medium Backpack</strong>
                      </a>
                    </h6>
                    <p class="featured-entry-meta">$27.99</p>
                  </div>
                </div>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-3.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">
                        <strong>Guess - GU7295</strong>
                      </a>
                    </h6>
                    <p>$38.00</p>
                  </div>
                </div>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-4.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">
                        <strong>Adidas Originals Cap</strong>
                      </a>
                    </h6>
                    <p class="featured-entry-meta">$35.00</p>
                  </div>
                </div>
                <div class="media">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-5.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">
                        <strong>Big Star Flip Tops</strong>
                      </a>
                    </h6>
                    <p class="featured-entry-meta">$10.60</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="widget-featured-entries mt-5 mt-lg-0">
                <h4 class="mb-4 pb-3">Novedades</h4>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="/product-single">
                    <img
                      src="assets/images/p-7.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">
                        <strong>Keds - Kickstart Pom Pom</strong>
                      </a>
                    </h6>
                    <p class="featured-entry-meta">$42.99</p>
                  </div>
                </div>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-8.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">
                        <strong>Nike - Brasilia Medium Backpack</strong>
                      </a>
                    </h6>
                    <p class="featured-entry-meta">$27.99</p>
                  </div>
                </div>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-1.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">
                        <strong>Guess - GU7295</strong>
                      </a>
                    </h6>
                    <p>$38.00</p>
                  </div>
                </div>
                <div class="media mb-3">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-2.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">
                        <strong>Adidas Originals Cap</strong>
                      </a>
                    </h6>
                    <p class="featured-entry-meta">$35.00</p>
                  </div>
                </div>
                <div class="media">
                  <a class="featured-entry-thumb" href="#">
                    <img
                      src="assets/images/p-4.jpg"
                      alt="Product thumb"
                      width="64"
                      class="img-fluid mr-3"
                    />
                  </a>
                  <div class="media-body">
                    <h6 class="featured-entry-title mb-0">
                      <a href="#">
                        <strong>Big Star Flip Tops</strong>
                      </a>
                    </h6>
                    <p class="featured-entry-meta">$10.60</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="features border-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6 col-md-6">
              <div class="feature-block">
                <i class="tf-ion-android-bicycle"></i>
                <div class="content">
                  <h5>Envío gratis</h5>
                  <p>En pedidos superiores a $ 39</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
              <div class="feature-block">
                <i class="tf-wallet"></i>
                <div class="content">
                  <h5>Devoluciones</h5>
                  <p>Garantizado en 30 días</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
              <div class="feature-block">
                <i class="tf-key"></i>
                <div class="content">
                  <h5>Compra segura</h5>
                  <p>100% Protegido por paypal</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
              <div class="feature-block">
                <i class="tf-clock"></i>
                <div class="content">
                  <h5>Soporte 24/7</h5>
                  <p>Todo el tiempo contigo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HomeMasVendido;
