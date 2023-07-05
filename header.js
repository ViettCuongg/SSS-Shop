class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <header class="header">
      <div class="grid">
          <nav class="header__navbar">
              <ul class="header__navbar-list">
                  <li class="header__navbar-item header__navbar-item--separate">Kênh người bán </li>
                  <li class="header__navbar-item  header__navbar-item--separate" onclick="aboutus_page();return false;">About us</li>
                  <li class="header__navbar-item">
                      <span class="header__navbar-notitle header__navbar-item--separate ">Kết Nối</span>

                      <a href="" class="header__navbar-icon-link">
                          <i class="header__navbar-icon fa-brands fa-facebook"></i>
                      </a>

                      <a href="" class="header__navbar-icon-link">
                          <i class="header__navbar-icon fa-brands fa-instagram"></i>
                      </a>

                  </li>
                  <li class="header__navbar-item  header__navbar-item--separate " onclick="blog_page();return false;">Blog</li>
                  <li class="header__navbar-item " onclick="contact_page();return false;">Contact</li>


              </ul>

              <ul class=" header__navbar-list">
                  <li class="header__navbar-item header__navbar-item--has-notify">
                      <a href="" class="header__navbar-item-link">
                          <i class="header__navbar-icon fas fa-bell"></i>
                          Thông báo
                      </a>
                      <div class="header__notify">
                          <header class="header__notify-header">
                              <h3>Thông báo mới nhận</h3>

                          </header>
                          <ul class="header__notify-list">
                              <li class="header__notify-item header__notify-item--viewed">
                                  <a href="" class="header__notify-link">

                                      <img src="assets/img/American Retro Street.jpg" alt=""
                                          class="header__notify-img">
                                      <div class="header__notify-info">
                                          <span class="header__notify-name">Aó thun cao cổ </span>
                                          <span class="header__notify-description">Mo ta san pham </span>

                                      </div>
                                  </a>
                              </li>

                              <li class="header__notify-item">
                                  <a href="" class="header__notify-link">

                                      <img src="./assets/img/adidas_aogio.jpg" alt="" class="header__notify-img">
                                      <div class="header__notify-info">
                                          <span class="header__notify-name">Aó adidas 90%</span>
                                          <span class="header__notify-description">Mo ta san pham </span>

                                      </div>
                                  </a>
                              </li>

                              <li class="header__notify-item">
                                  <a href="" class="header__notify-link">

                                      <img src="./assets/img/vay_hoa.jpg" alt="" class="header__notify-img">
                                      <div class="header__notify-info">
                                          <span class="header__notify-name">Váy hoa nữ </span>
                                          <span class="header__notify-description">Mo ta san pham </span>

                                      </div>
                                  </a>
                              </li>
                          </ul>
                          <footer class="header__notify-footer">
                              <a href="" class="header__notify-footer-btn">Xem tất cả</a>
                          </footer>
                      </div>
                  </li>

                  <li class="header__navbar-item">
                      <a href="#" class="header__navbar-item-link">
                          <i class="header__navbar-icon fa-regular fa-circle-question"></i>
                          Hỗ trợ
                      </a>
                  </li>



                  <!-- Đăng ký - Đăng Nhập-->

                  <li class="header__navbar-item header__navbar-item-strong header__navbar-item--separate">
                      <a class="header__navbar-item-link" onclick="register_form();return false;">
                          Đăng ký
                      </a>


                  </li>

                  <li class="header__navbar-item header__navbar-item-strong">
                      <a class="header__navbar-item-link" onclick="login_form();return false;">
                          Đăng nhập
                      </a>


                  </li>


                  <!-- SAU KHI ĐĂNG NHẬP THÀNH CÔNG HIỆN USER NGƯỜI DÙNG Ở ĐÂY -->

                  <!-- <li class="header__navbar-item header__navbar-user">
                      <img src="./assets/img/user_profile.jpg" alt="" class="header__navbar-user-img">
                      <span class="header__navbar-user-name">Viet Cuong</span>

                      <ul class="header__navbar-user-menu">
                          <li class="header__navbar-useser-item">
                              <a href="">
                                  Tài khoản của tôi
                              </a>
                          </li>
                          <li class="header__navbar-useser-item">
                              <a href="">
                                  Đơn mua
                              </a>
                          </li>
                          <li class="header__navbar-useser-item header__navbar-useser-item--separate">
                              <a class="header__navbar-logout" href="">
                                  Đăng xuất
                              </a>
                          </li>
                  </li> -->


              </ul>
              </li>

              </ul>

          </nav>

          <!-- Header Search-->
          <div class="header-with-search">
              <a href="index.html" class="header__logo-link">
                  <div class="header__logo">
                      <img class="header__logo-img" src="./assets/img/logo.png">

                  </div>
              </a>

              <div class="header__search">
                  <!--Search history-->
                  <div class="headr__search-input-wrap">
                      <input type="text" class="headr__search-input" placeholder="Tìm kiếm">
                      <div class="header__search-history">
                          <h3 class="header__search-history-heading">
                              Lịch sử tìm kiếm
                              <ul class="header__search-history-list">
                                  <li class="header__search-history-item">
                                      <a href="">T-shirt 90% cuton summer sale</a>
                                  </li>
                                  <li class="header__search-history-item">
                                      <a href="">Bomer Jacket version2</a>
                                  </li>
                                  <li class="header__search-history-item">
                                      <a href="">T-Shirt basic</a>
                                  </li>
                              </ul>
                          </h3>
                      </div>
                  </div>




                  <div class="header__search-select">
                      <span class="header__search-select-label">Shop</span>
                      <i class=" header__search-select-icon fas fa-angle-down"></i>
                      <ul class="header__search-option">
                          <li class="header__search-option-item header__search-option-item--active">
                              <span>Shop</span>
                              <i class="fa-solid fa-check"></i>
                          </li>
                          <li class="header__search-option-item">

                              <span>Sale Product</span>
                              <i class="fa-solid fa-check"></i>
                          </li>
                      </ul>
                  </div>
                  <button class="header__search-btn">
                      <i class="header__search-btn-icon fa-sharp fa-solid fa-magnifying-glass"></i>
                  </button>

              </div>


              <!--Shopping Cart -->
              <div class="header__cart">
                  <div class="header__cart-wrap">

                      <i class=" header__cart-icon fas fa-shopping-cart"></i>

                      <span class="heard__cart-notice">3</span>
                      <!--giỏ hàng trống: header__cart-list--no-cart -->
                      <div class="header__cart-list   ">
                          <img src="./assets/img/no-cart.png" alt="" class="header__cart-no-cart-img">
                          <span class="header__cart-list-no-cart-title">Chưa có sản phẩm

                          </span>
                          <!-- giỏ hàng có sản phẩm -->
                          <h4 class="header__cart-heading">Sản phẩm đã thêm </h4>
                          <ul class="header__cart-list-item">
                              <!--Card-->
                              <li class="header__cart-item">
                                  <img src="./assets/img/t-shirt.webp" alt="" class="header__cart-img">
                                  <div class="header__cart-item-info">
                                      <div class="header__cart-item-head">
                                          <h5 class="header__cart-item-name">T-Shirt 90% cuton </h5>
                                          <div class="header__cart-item-price-wrap">
                                              <span class="header__cart-item-price">90,000đ</span>
                                              <span class="header__cart-item-multiply">x</span>
                                              <span class="header__cart-item-qnt">2</span>
                                          </div>
                                      </div>

                                      <div class="header__cart-item-body">
                                          <span class="header__cart-item-description">Phân loại:</span>
                                          <span class="header__cart-item-remove">Xóa</span>

                                      </div>
                                  </div>
                              </li>

                              <li class="header__cart-item">
                                  <img src="./assets/img/American Retro Street.jpg" alt=""
                                      class="header__cart-img">
                                  <div class="header__cart-item-info">
                                      <div class="header__cart-item-head">
                                          <h5 class="header__cart-item-name">American Retro Street Fashion Brand
                                              Cotton Short-Sleeved T-shirt Men's Ins Loose European and American
                                              Style Oversize Top </h5>
                                          <div class="header__cart-item-price-wrap">
                                              <span class="header__cart-item-price">70,000đ</span>
                                              <span class="header__cart-item-multiply">x</span>
                                              <span class="header__cart-item-qnt">2</span>
                                          </div>
                                      </div>

                                      <div class="header__cart-item-body">
                                          <span class="header__cart-item-description">Phân loại:</span>
                                          <span class="header__cart-item-remove">Xóa</span>

                                      </div>
                                  </div>
                              </li>

                              <li class="header__cart-item">
                                  <img src="./assets/img/t-shirt.webp" alt="" class="header__cart-img">
                                  <div class="header__cart-item-info">
                                      <div class="header__cart-item-head">
                                          <h5 class="header__cart-item-name">T-Shirt 90% cuton </h5>
                                          <div class="header__cart-item-price-wrap">
                                              <span class="header__cart-item-price">90,000đ</span>
                                              <span class="header__cart-item-multiply">x</span>
                                              <span class="header__cart-item-qnt">2</span>
                                          </div>
                                      </div>

                                      <div class="header__cart-item-body">
                                          <span class="header__cart-item-description">Phân loại:</span>
                                          <span class="header__cart-item-remove">Xóa</span>

                                      </div>
                                  </div>
                              </li>
                          </ul>
                          <a href="#" class="header__cart-view-cart btn btn--primary" onclick="card_page();return false;" >Xem giỏ hàng </a href="#">
                      </div>
                  </div>
              </div>



              <div class="header__free">
                  <a class="header__free-btn" href="page_0dong.html">
                      <i class="header__cart-icon fas fa-house"></i>
                      HOT Sale!!!
                  </a>

              </div>

              <div class="header__sale">
                  <button class="header__sale-btn" onclick="sale_product();return false;"> Bán sản
                      phẩm</button>
              </div>

              <div class="header__search-product-tag">
                  <ul class="header__search-product-list">
                      <li class="header__search-product-item">
                          Thời trang nam
                      </li>
                      <li class="header__search-product-item">
                          Thời trang nữ
                      </li>

                      <li class="header__search-product-item">
                          Giày dép Nam
                      </li>

                      <li class="header__search-product-item">
                          Đồ da dụng
                      </li>

                      <li class="header__search-product-item">
                          Sách
                      </li>
                      <li class="header__search-product-item">
                          Khác
                      </li>
                  </ul>
              </div>

          </div>
      </div>
  </header>
  `
    }
}

customElements.define('header-component', Header);