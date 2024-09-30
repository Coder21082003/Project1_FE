<template>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>

     <!-- Small ICON -->
     <link rel="shortcut icon" href="../logo_brower.png" type="image/x-icon">

    <!-- Bootstrap 5 : CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- GG icon -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw=="
        crossorigin="anonymous" />

    <!-- Bootstrap icon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

    <!-- External files -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
    <!-- 
        Moi nguoi link file .css va javascript cua trang o day :
    -->
    <link rel="stylesheet" href="aboutt.css">

    <!-- IMPORT FONT -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet">
</head>

<body>
    <header>
        <nav class="navbar">
            <div class="container-md">
                <a href="../customer/home" class="navbar__brand">LUXURY HOTEL</a>
                
                <div class="navbar-expand-md">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <button type="button" class="btn-nav-collapse">
                                <i class="bi bi-x-lg"></i>
                            </button>
                        </li>
                        <li class="nav-item">
                            <a href="../customer/booking" class="btn-1 btn-booking" type="link" style="margin: 0;">
                                Booking now
                            </a>
                        </li>
                        <li class="nav-item"><a href="../customer/home" class="nav-link btn-custom active">Home</a>
                        </li>
                        <li class="nav-item"><a href="../customer/room" class="nav-link btn-custom">Rooms</a>
                            <div class="more-info">
                                <ul>
                                    <li>
                                        <div class="thumbnail"><img src="../home/room-img/3-1.jpg" alt=""></div>
                                        <div><strong>Standard Room</strong> | 450$</div>
                                    </li>
                                    <li>
                                        <div class="thumbnail"><img src="../home/room-img/2-2.jpg" alt=""></div>
                                        <div><strong>View Beach Room</strong> | 550$</div>
                                    </li>
                                    <li>
                                        <div class="thumbnail"><img src="../home/room-img/4.jpg" alt=""></div>
                                        <div><strong>VIP Room</strong> | 750$</div>
                                    </li>
                                    <a href="../customer/room" type="link" class="page-link-custom">READ MORE</a>
                                </ul>
                            </div>
                        </li>
                        
                        <li class="nav-item"><a href="../customer/about" class="nav-link btn-custom">About Us</a>
                        </li>
                        <li class="nav-item"><a href="../auth/login" class="nav-link btn-custom">Login</a>
                            <div class="more-info">
                                <ul>
                                    <li>
                                        <i class="bi bi-box-arrow-in-left"></i>
                                        <span>Login</span>
                                    </li>
                                    <li>
                                        <i class="bi bi-info-circle"></i>
                                        <span>Sign Up</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <button type="button" id="btn-show-navbar" class="">
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                </button>
            </div>
        </nav>
        <div class="slide-container">
            <div class="thumbnail" style="width: 100%; height: 100%;">
                <img src="../home/room-img/10.jpg" alt="" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(80%);">
                <div class="description" style="position: absolute; top: 30%; right: 400px; color: white;">
                    <h1 style="font-size: 100px; margin: 0;">ABOUT US</h1>
                    <span style="display: block; width: 100%; text-align: center; letter-spacing: 10px;">LUXURY HOTEL</span>
                </div>
            </div>
        </div>
    </header>
    <main>
        <section>
            <div>
                <h1 class="name-about">About Us</h1>
            </div>
        </section>
        <section class="about section-padding">
            <div class="container-md">
                <div class="row justify-content-center box-1">
                    <div class="col-md-6 mb-30" >
                        <img src="https://f5-zpcloud.zdn.vn/7011650987875357419/f3c32f9de9ac2ef277bd.jpg" alt=""
                            class="img-1">
                        <div class="section-subtitle"> Luxury Hotel</div>
                        <div class="section-title">Trải nghiệm sang trọng </div>
                        <p>Chào mừng đến với khách sạn sang trọng tốt nhất đà nẵng .Từ ngày ra mắt đến nay, khách sạn đã chào đón hơn 100 người nổi tiếng và tổ chức hàng loạt hội nghị quốc tế. Nhiều năm qua, chúng tôi thực sự đã nhận được sự công nhận từ khách hàng. </p>
                        <p>Quý khách có thể tận hưởng những khoảnh khắc lãng mạn nhất ở đây, trải qua tuần trăng mật và kỳ nghỉ tuyệt vời và chắc chắn quý khách sẽ mong muốn quay trở lại. Không gian ấm cúng, tĩnh lặng nhưng sang trọng tại khách sạn sẽ làm hài lòng tất cả mọi khách hàng khó tính nhất.</p>
                        <img src="https://f5-zpcloud.zdn.vn/4030610512363178599/c45fac426573a22dfb62.jpg" alt=""
                            class="img-2">
                    </div>
                    <div class="col-md-6">
                        <div class="row justify-content-center">
                            <div class="animate-box box-2">
                                <img src="https://f5-zpcloud.zdn.vn/3227173699106073457/e8dd77291a51dd0f8440.jpg" alt=""
                                    class="mt-mb-1">
                            </div>
                            <div class="animate-box box-3">
                                <img src="https://f7-zpcloud.zdn.vn/2601140831640913915/aa01dbd849a08efed7b1.jpg" alt=""
                                    class="mt-mb-2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pricing section-padding">
            <div class="container-2">
                <h2 class="text-1">GIÁ TỐT NHẤT</h2>
                <h1 class="text-2">Dịch vụ bổ sung</h1>
                <div class="container-pricing">
                    <div class="pricing-card">
                        <img src="https://duruthemes.com/demo/html/cappa/demo1/img/pricing/1.jpg" alt=""
                            class="boxed-1">
                        <div class="desc">
                            <div class="name">Dọn phòng</div>
                            <div class="amount">
                                $30
                                <span>/ tháng</span>
                            </div>
                        </div>
                    </div>
                    <div class="pricing-card">
                        <img src="https://duruthemes.com/demo/html/cappa/demo1/img/pricing/2.jpg" alt=""
                            class="boxed-1">
                        <div class="desc">
                            <div class="name">Đồ uống</div>
                            <div class="amount">
                                $30
                                <span>/  ngày</span>
                            </div>
                        </div>
                    </div>
                    <div class="pricing-card">
                        <img src="https://duruthemes.com/demo/html/cappa/demo1/img/pricing/3.jpg" alt=""
                            class="boxed-1">
                        <div class="desc">
                            <div class="name">Bữa sáng</div>
                            <div class="amount">
                                $30
                                <span>/ ngày</span>
                            </div>
                        </div>
                    </div>
                    <div class="pricing-card">
                        <img src="https://duruthemes.com/demo/html/cappa/demo1/img/pricing/4.jpg" alt=""
                            class="boxed-1">
                        <div class="desc">
                            <div class="name">Bảo mật</div>
                            <div class="amount">
                                $15
                                <span>/ ngày</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="facilties section-padding">
            <div class="container-3">
                <div class="head-facilties">
                    <div class="section-subtitle">DỊCH VỤ CỦA CHÚNG TÔI</div>
                    <div class="section-title">Các tiện ích của khách sạn</div>
                </div>
                <div class="body-facilities">
                    <div class="col-6">
                        <div class="box-facilties-1">
                            <img src="https://f5-zpcloud.zdn.vn/1986332575739520917/6ec7f97aef4d2813715c.jpg" alt=""
                                class="icon-1">
                            <h5>Đưa đón</h5>
                            <p>Chúng tôi sẽ đón từ sân bay trong khi bạn cảm thấy thoải mái trên chuyến đi.</p>
                        </div>
                        <div class="box-facilties-1">
                            <img src="https://f5-zpcloud.zdn.vn/4065118872095790667/320e4e035734906ac925.jpg" alt=""
                                class="icon-1">
                            <h5>Chỗ đậu xe</h5>
                            <p>Không gian đậu xe rộng rãi , phù hợp với mọi loại xe của bạn.</p>
                        </div>
                        <div class="box-facilties-1">
                            <img src="https://f5-zpcloud.zdn.vn/9105085609396188874/7a4c05db1becdcb285fd.jpg" alt=""
                                class="icon-1">
                            <h5>Dịch vụ phòng</h5>
                            <p>Các dịch vụ cơ bản của phòng được chúng tôi phục vụ tốt nhất cho khách hàng.</p>
                        </div>
                    </div>
                    <!--  -->
                    <div class="col-7">
                        <div class="box-facilties-2">
                            <img src="https://f6-zpcloud.zdn.vn/6053521590548547573/48c60ee210d5d78b8ec4.jpg" alt=""
                                class="icon-1">
                            <h5>Hồ bơi</h5>
                            <p>Hồ bơi luôn được làm sạch thường xuyên và luôn trong tình trạng sẵn sàng phục vụ.</p>
                        </div>
                        <div class="box-facilties-2">
                            <img src="https://f5-zpcloud.zdn.vn/2345725031246849844/e425079318a4dffa86b5.jpg" alt=""
                                class="icon-1">
                            <h5>Internet</h5>
                            <p>Khách hàng có thể truy cập và sử dụng wifi của khách sạn hoàn toàn miễn phí.</p>
                        </div>
                        <div class="box-facilties-2">
                            <img src="https://f7-zpcloud.zdn.vn/3095525397803660554/c68ab787a8b06fee36a1.jpg" alt=""
                                class="icon-1">
                            <h5>Bữa ăn</h5>
                            <p>Bữa ăn được những đầu bếp phục vụ theo yêu cầu khẩu vị của từng khách hàng .</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="testimonials">

            <div class="evaluate-slider">
                <div class="evaluate-item active">
                    <h6>Lời nhận xét</h6>
                    <h4>Khách hàng nói gì?</h4>
                    <p>Mình vừa trải qua kỳ nghỉ 3 ngày 2 đêm tại Khách sạn Luxury Hotel ở Đà Nẵng. Thực sự mình rất ấn tượng và cực kỳ vui vì đã gặp được những con người Đà Nẵng thân thiện và khách sạn Luxury Hotel hoàn toàn hoàn hảo theo ý muốn của mình. Từ Lễ Tân tới Quản lý, tất cả đều quá chuyên nghiệp, phòng ốc cực kỳ sạch sẽ và làm mình cùng bạn bè rất hài lòng. Nhất là bạn Chu Quang Huy, rất dễ thương và rất chuyên nghiệp. Nếu có quay lại, nhất định sẽ chọn Luxury Hotel làm nơi nghĩ dưỡng. Thân chào!</p>
                    <div class="info">
                        <div class="info-img">
                            <img src="https://b-f6-zpcloud.zdn.vn/5644083822186159861/cd9ba8bd388affd4a69b.jpg" alt="">
                        </div>
                        <div class="cont">
                            <h6>Nguyen Van A</h6>
                            <span>Khách hàng</span>
                        </div>
                    </div>
                </div>
                <div class="evaluate-item">
                    <h6>Lời nhận xét</h6>
                    <h4>Khách hàng nói gì?</h4>
                    <p>Mình vừa trải qua kỳ nghỉ 3 ngày 2 đêm tại Khách sạn Luxury Hotel ở Đà Nẵng. Thực sự mình rất ấn tượng và cực kỳ vui vì đã gặp được những con người Đà Nẵng thân thiện và khách sạn Luxury Hotel hoàn toàn hoàn hảo theo ý muốn của mình. Từ Lễ Tân tới Quản lý, tất cả đều quá chuyên nghiệp, phòng ốc cực kỳ sạch sẽ và làm mình cùng bạn bè rất hài lòng. Nhất là bạn Nguyen Duc Hung, rất dễ thương và rất chuyên nghiệp. Nếu có quay lại, nhất định sẽ chọn Luxury Hotel làm nơi nghĩ dưỡng. Thân chào!</p>
                    <div class="info">
                        <div class="info-img">
                            <img src="https://f7-zpcloud.zdn.vn/8278759152737261366/c930d318442f8371da3e.jpg" alt="">
                        </div>
                        <div class="cont">

                            <h6>Nguyen Thi C</h6>
                            <span>Khách hàng</span>
                        </div>
                    </div>
                </div>
                <div class="evaluate-item">
                    <h6>Lời nhận xét</h6>
                    <h4>Khách hàng nói gì?</h4>
                    <p>Mình vừa trải qua kỳ nghỉ 3 ngày 2 đêm tại Khách sạn Luxury Hotel ở Đà Nẵng. Thực sự mình rất ấn tượng và cực kỳ vui vì đã gặp được những con người Đà Nẵng thân thiện và khách sạn Luxury Hotel hoàn toàn hoàn hảo theo ý muốn của mình. Từ Lễ Tân tới Quản lý, tất cả đều quá chuyên nghiệp, phòng ốc cực kỳ sạch sẽ và làm mình cùng bạn bè rất hài lòng. Nhất là bạn Bui Thi Thanh Truc, rất dễ thương và rất chuyên nghiệp. Nếu có quay lại, nhất định sẽ chọn Luxury Hotel làm nơi nghĩ dưỡng. Thân chào!</p>
                    <div class="info">
                        <div class="info-img">
                            <img src="image/294496192_1214138686095880_5763690537670565858_n.jpg" alt="">
                        </div>
                        <div class="cont">

                            <h6>Nguyen Van D</h6>
                            <span>Khách hàng</span>
                        </div>
                    </div>
                </div>
                <div class="evaluate-item">
                    <h6>Lời nhận xét</h6>
                    <h4>Khách hàng nói gì?</h4>
                    <p>Mình vừa trải qua kỳ nghỉ 3 ngày 2 đêm tại Khách sạn Luxury Hotel ở Đà Nẵng. Thực sự mình rất ấn tượng và cực kỳ vui vì đã gặp được những con người Đà Nẵng thân thiện và khách sạn Luxury Hotel hoàn toàn hoàn hảo theo ý muốn của mình. Từ Lễ Tân tới Quản lý, tất cả đều quá chuyên nghiệp, phòng ốc cực kỳ sạch sẽ và làm mình cùng bạn bè rất hài lòng. Nhất là bạn Pham Minh Hieu, rất dễ thương và rất chuyên nghiệp. Nếu có quay lại, nhất định sẽ chọn Luxury Hotel làm nơi nghĩ dưỡng. Thân chào!</p>
                    <div class="info">
                        <div class="info-img">
                            <img src="https://f5-zpcloud.zdn.vn/6703582942556756871/953b9a961ca1dbff82b0.jpg" alt="">
                        </div>
                        <div class="cont">

                            <h6>Nguyen Van B</h6>
                            <span>Khách hàng</span>
                        </div>
                    </div>
                </div>
            </div>
            <ol class="dots">
                <li data-dot-id="1" class="dot active"></li>
                <li data-dot-id="2" class="dot"></li>
                <li data-dot-id="3" class="dot"></li>
                <li data-dot-id="4" class="dot"></li>
            </ol>
        </section>
    </main>
    <footer>
        <div class="container-md">
            <div class="row footer__inner">
                <div class="col-md">
                    <div class="footer__item">
                        <h3 class="footer__heading">
                            About Us
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse
                            veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque
                            inventore accusantium tempore dolores sunt.
                        </p>
                        <a href="../about/about.html" type="link" class="btn-1">READ MORE</a>
                    </div>
                </div>
                <div class="col-md">
                    <div class="footer__item">
                        <h3 class="footer__heading">
                            Rooms
                        </h3>
                        <div class="row">
                            <ul class="card-container">
                                <li class="card-inner">
                                    <div class="">
                                        <img src="../home/room-img/1-1.jpg" alt="">
                                    </div>
                                    <div class="card-content">
                                        <h4>Our Luxury Hotel & Restaurants</h4>
                                        <span><i class="bi bi-calendar3"></i>Oct 01, 2022</span>
                                        <span><i class="bi bi-chat-left-dots"></i>12</span>
                                    </div>
                                </li>
                                <li class="card-inner">
                                    <div class="">
                                        <img src="../home/room-img/12.jpg" alt="">
                                    </div>
                                    <div class="card-content">
                                        <h4>Our Luxury Hotel & Restaurants</h4>
                                        <span><i class="bi bi-calendar3"></i>Oct 01, 2022</span>
                                        <span><i class="bi bi-chat-left-dots"></i>12</span>
                                    </div>
                                </li>
                                <li class="card-inner">
                                    <div class="">
                                        <img src="../home/room-img/5.jpg" alt="">
                                    </div>
                                    <div class="card-content">
                                        <h4>Our Luxury Hotel & Restaurants</h4>
                                        <span><i class="bi bi-calendar3"></i>Oct 01, 2022</span>
                                        <span><i class="bi bi-chat-left-dots"></i>12</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="footer__item">
                        <h3 class="footer__heading">
                            Contact Info
                        </h3>
                        <ul>
                            <li>
                                <i class="bi bi-geo-alt-fill"></i>
                                <p>03 Cầu Giấy street, Láng Thượng, Đống Đa, Hà Nội, Việt Nam</p>
                            </li>
                            <li>
                                <i class="bi bi-telephone-fill"></i>
                                <p>+84 123 4567 899</p>
                            </li>
                            <li>
                                <i class="bi bi-envelope-fill"></i>
                                <p>luxury_hotel@gmail.com</p>
                            </li>
                            <li>
                                <i class="bi bi-clock-fill"></i>
                                <p>Monday — Sunday <span style="margin: 0 5px;">|</span> 08:00 - 22:00</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-container">
            <p>Copyright ©2022 All rights reserved | This page is made with by <strong>HERO TEAM</strong> (UTC)</p>
        </div>
    </footer>
    <!-- Button return top of page -->
    <div class="mask-dark"></div>
</body>
</template>

<script>
import "../javascript/mainScript.js";
import "../javascript/item-move-up.js";
import "../javascript/navigation.js";
import "../javascript/checkinDate.js";
import "./app.js";

</script>

<style scoped>
@import "../css/main.css";
@import "./aboutt.css";
* {
  box-sizing: border-box;
}
:root {
  --text-color-1: white;
}
html,
body {
  overflow-x: hidden;
  font-family: "Rubik";
}

.item-move-up {
  opacity: 0;
  transform: translate(0, 100px);
  transition: all 0.6s ease-in-out;
}

.section-padding {
  padding: 90px 0;
  text-align: left;
}
section {
  display: block;
  word-wrap: break-word;
  list-style: none;
  outline: none;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
div {
  display: block;
}
.section-subtitle {
  font-size: 15px;
  font-weight: 400;
  color: #aa8543;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 5px;
}
.section-title {
  font-size: 45px;
  font-weight: 100;
  color: #222;
  margin-bottom: 20px;
  line-height: 60px;
  font-family: "Gilda Display", serif;
}
p {
  font-style: 15px;
  font-weight: 400;
  line-height: 30px;
  color: #666;
  margin-bottom: 20px;
  font-family: "Barlow", sans-serif;
}
/* .animate-box {
  display: block;
} */

.box-2,
.box-3 {
  width: 30%;
  height: 500px;
}
.box-2 {
  /* margin-top: 90px; */
  display: flex;
  align-items: center;
}
.box-2 img {
  height: 300px;
}
.img-1 {
  width: 98px;
  height: 20px;
  object-fit: cover;
}
.img-2 {
  width: 200px;
  height: 57px;
  object-fit: cover;
}
.box-1 .section-subtitle {
  margin-left: 2px;
  margin-top: 10px;
}
.mt-mb-1 {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.mt-mb-2 {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.name-about {
  font-size: 60px;
  margin-top: 50px;
  margin-left: 100px;
}
.about {
  padding-bottom: 150px;
}
/* 
------------------------------
  End section 1
------------------------------
*/
.pricing {
  background-color: #222;
}

.pricing-card {
  width: calc((100% / 4) - 20px);
  min-width: 150px;
  margin-left: -15px;
  background-color: #fff;
  height: 400px;
}

.container-pricing {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  row-gap: 30px;
}
.container-2 {
  width: 80%;
  margin: 0 auto;
}
.pricing-car img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.boxed-1 {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.text-1,
.text-3 {
  font-size: 15px;
  font-weight: 400;
  color: #aa8453;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 5px;
}
.text-2 {
  font-size: 45px;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 60px;
  color: #fff;
  letter-spacing: 2px;
  padding: 20px 0px;
  text-align: center;
  font-family: "Gilda Display", serif;
}
.name {
  line-height: 1;
  font-size: 27px;
  color: #222;
  margin-bottom: 2px;
  padding: 30px 0px;
  text-align: center;
  font-family: "Gilda Display", serif;
}
.pricing-card .amount {
  margin: 0;
  line-height: 1;
  font-family: "Gilda Display", serif;
  font-size: 40px;
  margin-bottom: 20px;
  color: #aa8453;
  text-align: center;
}
.pricing-card .amount span {
  font-family: "Barlow", sans-serif;
  font-size: 15px;
  color: #666;
}

/* 
------------------------------
  End section 2
------------------------------
*/
.col-6,
.col-7 {
  width: 80%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.box-facilties-1,
.box-facilties-2 {
  width: calc((100% / 3) - 20px);
  padding: 20px;
  border: 2px solid #f1eeeb;
  margin: 20px;
  height: 100%;
  min-height: 300px;
}
.head-facilties .section-subtitle {
  margin-left: 190px;
}
.head-facilties .section-title {
  margin-left: 190px;
  font-size: 45px;
}
.icon-1 {
  padding-bottom: 20px;
}
.box-facilties-1 h5,
.box-facilties-2 h5 {
  font-size: 24px;
  color: rgba(34, 34, 34, 0.714);
  margin-bottom: 10px;
  font-family: "Barlow", sans-serif;

}
/* 
------------------------------
  End section 3
------------------------------
*/
.team {
  background-color: #f8f5f0;
}
.body-team {
  width: 86%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.box-team {
  width: calc((100% / 4) - 40px);
  /* margin-left: -15px; */
  background-color: #fff;
  height: 430px;
  box-shadow: 0 5px 60px rgba(0, 0, 0, 0.2);
}
.box-team:hover img {
  filter: brightness(80%) contrast(90%);
}
.box-team:hover h2 {
  color: #aa8453;
}
.box-team img {
  width: 100%;
  height: 310px;
  transition: filter 0.3s ease-in-out;
  object-fit: cover;
}
.text-name h2 {
  line-height: 1;
  margin: 0px;
  font-family: "Gilda Display", serif;
  font-size: 27px;
  color: #222;
  margin-bottom: 2px;
  padding: 40px;
  text-align: center;
}
.text-3 {
  padding-left: 120px;
}
.text-4 {
  font-size: 45px;
  font-weight: 400;
  margin-bottom: 40px;
  line-height: 60px;
  color: #222;
  letter-spacing: 2px;
  padding-left: 120px;
  font-family: "Barlow", sans-serif;
}
.text-team h2 {
  line-height: 1;
  /* margin: 0px; */
  font-size: 27px;
  color: #222;
  margin-bottom: 2px;
  /* padding: 30px; */
  margin: 20px 0px;
  text-align: center;
}
.text-team h3 {
  font-size: 14px;
  margin-bottom: 0px;
  /* line-height: 10px; */
  text-align: center;
  font-family: "Barlow", sans-serif;
}
/* 
------------------------------
  End section 4
------------------------------
*/
.testimonials {
  background-image: url(https://duruthemes.com/demo/html/cappa/demo1/img/slider/2.jpg);
  padding: 50px 100px;
  display: block;
  height: 500px;
  width: 100%;
  position: relative;
}
.testimonials .dots {
  position: absolute;
  bottom: 20px;
  width: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: white;
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 12px;
}
.testimonials .dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
}
.testimonials .dot.active {
  background-color: white;
}
.evaluate-slider {
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 50%;
}
.evaluate-item {
  color: #fff;
  display: none;
  opacity: 0;
  width: 100%;
  height: 400px;
  float: left;
  transition: all 0.2s ease-in-out;
}
.evaluate-item p {
  opacity: 0.7;
}
.evaluate-item.active {
  display: block;
  opacity: 1;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}

@keyframes INmove {
  0% {
    opacity: 0;
    transform: translate(100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.evaluate-item h6 {
  font-size: 13px;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 5px;
}
.evaluate-item h4 {
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 10px;
  font-family: "Barlow", sans-serif;
}
.evaluate-item p {
  color: rgba(255, 255, 255, 0.852);
}
.info {
  text-align: left;
  margin: 30px 0 15px 0;
}
.info-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  float: left;
  overflow: hidden;
}
.info-img img {
  display: block;
  width: 100%;
}
.cont {
  margin-left: 85px;
  height: 60px;
}
.cont h6 {
  font-size: 12px;
  margin-bottom: 0px;
  padding-top: 10px;
  font-weight: 400;
  font-family: "Barlow Condensed", sans-serif;
  line-height: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.cont span {
  font-size: 13px;
  line-height: 15px;
}

/* 
------------------------------
  End section 5
------------------------------
*/

footer p {
  color: rgb(200, 200, 200);
}

@media only screen and (max-width: 768px) {
  .name-about {
    font-size: 50px;
    margin: 50px 10px 30px 30px;
  }
  .section-padding {
    padding: 50px 0;
  }
  .container-2 {
    width: 90%;
  }
  .pricing-card {
    margin-left: 0;
    height: max-content;
  }
  .pricing-card .name {
    padding: 20px 0;
  }
  .head-facilties .section-subtitle,
  .head-facilties .section-title {
    margin: 0 0 0 50px;
  }

  .head-facilties .section-title {
    font-size: 40px;
  }

  .col-6, .col-7 {
    display: flex;
    flex-wrap: wrap;
  }
  .box-facilties-1,
  .box-facilties-2 {
    width: 100%;
  }
  .body-team {
    width: 100%;
    overflow-x: auto;
    gap: 12px;
  }
  .box-team {
    min-width: 250px;
    width: 100%;
  }
  .evaluate-slider {
    width: 100%;
  }
  .evaluate-item p {
    font-size: 14px;
    line-height: 20px;
    opacity: 0.7;
  }
}

</style>