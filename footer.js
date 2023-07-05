class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer class="footer">
      <div class="grid">
          <div class="grid__row">
              <div class="grid__column-2-4">
                  <h3 class="footer__heading">Chăm sóc khách hàng </h3>
                  <ul class="footer-list">

                      <li class="footer-item">
                          <a href="#" class="footer-item-link">Trung tâm trợ giúp</a>
                      </li>
                      <li class="footer-item">
                          <a href="#" class="footer-item-link">SSS-Shop Mall</a>
                      </li>
                      <li class="footer-item">
                          <a href="#" class="footer-item-link">Hướng dẫn mua hàng </a>


                      </li>
                  </ul>
              </div>

              <div class="grid__column-2-4">
                  <h3 class="footer__heading">Về SSS </h3>
                  <ul class="footer-list">

                      <li class="footer-item">
                          <a href="#" class="footer-item-link">giới thiệu</a>
                      </li>
                      <li class="footer-item">
                          <a href="#" class="footer-item-link">Tuyển dụng</a>
                      </li>
                      <li class="footer-item">
                          <a href="#" class="footer-item-link">Điều khoản</a>


                      </li>
                  </ul>
              </div>

              <div class="grid__column-2-4">
                  <h3 class="footer__heading">Thanh toán </h3>
                  <ul class="footer-list">

                      <li class="footer-item">
                          <img src="./assets/img/thanhtoan1.png" alt="">

                      </li>
                      <li class="footer-item">

                          <img src="./assets/img/thantoan2.png">

                      </li>
                      <li class="footer-item">

                          <img src="./assets/img/thanhtoan3.png">


                      </li>
                  </ul>
              </div>

              <div class="grid__column-2-4">
                  <h3 class="footer__heading">Chăm sóc khách hàng </h3>
                  <ul class="footer-list">

                      <li class="footer-item">
                          <a href="#" class="footer-item-link">
                              <i class=" footer-item-icon fa-brands fa-facebook"></i>
                              Facebook</a>
                      </li>
                      <li class="footer-item">

                          <a href="#" class="footer-item-link">

                              <i class="  footer-item-icon fa-brands fa-instagram"></i>
                              Instagram
                          </a>
                      </li>
                      <li class="footer-item">
                          <a href="#" class="footer-item-link">

                              SSS.com</a>


                      </li>
                  </ul>
              </div>

              <div class="grid__column-2-4">
                  <h3 class="footer__heading">Vào cửa hàng trên ứng dụng </h3>

                  <div class="footer__download">
                      <img src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472"
                          alt="Download QR" class="footer__download-qr">
                      <div class="footer__down-app">
                          <a href="" class="footer__download-app-link">


                              <img src="./assets/img/appstore.png" alt="App store"
                                  class="footer__download-app-img">
                          </a>
                          <a href="" class="footer__download-app-link">

                              <img src="./assets/img/googlestore.png" alt="Google play"
                                  class="footer__download-app-img">
                          </a>
                      </div>
                  </div>

              </div>
          </div>

      </div>
      <div class="footer__bottom">

          <div class="grid">
              <p class="footer__text">© 2023 - Bản quyền thuộc về Công ty TNHH SSS-Shope</p>
          </div>
      </div>
  </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);