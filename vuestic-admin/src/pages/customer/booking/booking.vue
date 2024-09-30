<template>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home page</title>

    <!-- Small ICON -->
    <link rel="shortcut icon" href="../logo_brower.png" type="image/x-icon">

    <!-- Bootstrap 5 : CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <!-- Bootstrap icon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

    <!-- External files : Common CSS -->
    <link rel="stylesheet" href="../css/main.css">

    <!-- 
         Moi nguoi link file .css va javascript cua trang o day :
     -->



    <!-- IMPORT FONT -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
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
            <div id="carouselTop" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#carouselTop" data-bs-slide-to="0" class="active" aria-current="true"
                        aria-label="First slide"></li>
                    <li data-bs-target="#carouselTop" data-bs-slide-to="1" aria-label="Second slide"></li>
                    <li data-bs-target="#carouselTop" data-bs-slide-to="2" aria-label="Third slide"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <!-- <img src="images/DSC_7106.JPG" class="carousel-image" alt="First slide"> -->
                        <!-- <img src="https://smartland.vn/wp-content/uploads/2022/06/asiana-da-nang-gotec-land.jpg"
                            class="carousel-image" alt="First slide"> -->
                        <img src="../header image/header-img-1.jpg" class="carousel-image" alt="First slide">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="carousel-heading">
                                    <span class="sub-heading">Welcome</span>
                                    <h1 class="heading">Da Nang<br>A Worth<br>Living City</h1>
                                    <!-- Da Nang is a worth living city -->
                                    <button type="button" class="btn-1">LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <!-- <img src="https://pirealtor.net/wp-content/uploads/2021/04/Phoi-Canh-Asiana-Da-Nang-01.jpg"
                            class="carousel-image" alt="Second slide"> -->
                        <img src="../header image/header-img-2-1.jpg" class="carousel-image" alt="Second slide">
                        <div class="carousel-heading">
                            <span class="sub-heading">Welcome</span>
                            <h1 class="heading">5 Star Hotel<br>Great Vacation</h1>
                            <button type="button" class="btn-1">LEARN MORE</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../header image/header-img-3.jpg" class="carousel-image" alt="Third slide">
                        <div class="carousel-heading">
                            <span class="sub-heading">Welcome</span>
                            <!-- <h1 class="heading">Nghỉ dưỡng tuyệt vời</h1> -->
                            <h1 class="heading">Experience DA NANG<br>Like No Other</h1>
                            <button type="button" class="btn-1">LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselTop" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselTop" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    </header>
    <main class="" style="margin-bottom: 100px;">
        <!-- MAIN Content -->
        <div id="heading-page">
            <div class="container-md">
                <h1>Booking Page</h1>
                <div class="row">
                    <div class="col-12 col-md-3">
                        <div class="options">
                            <ul>

                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-md-9">
                        <div class="box-input">
                            <form action="" method="" style="max-width: 700px;">
                                <div class="mb-3 input-container">
                                    <label for="room" class="form-label">Room</label>
                                    <select class="form-select form-select-md" name="room" id="room">
                                        <option value="NULL">-- Choose a room --</option>
                                        <option value="Standard Room">Standard room</option>
                                        <option value="View Beach Room">View beach room</option>
                                        <option value="Vip Room">Vip room</option>
                                        <option value="Special Room">Special room</option>
                                    </select>
                                </div>
                                <div class="mb-3 input-container">
                                    <label for="nameClient" class="form-label">Full name</label>
                                    <input type="text" class="form-control" name="nameClient" id="nameClient"
                                        aria-describedby="" placeholder="your full name">
                                </div>
                                <div class="mb-3 input-container">
                                    <label for="" class="form-label">Checkin</label>
                                    <input type="date" class="form-control" name="checkin" id="checkin"
                                        aria-describedby="">
                                </div>
                                <div class="mb-3 input-container">
                                    <label for="" class="form-label">Checkout</label>
                                    <input type="date" class="form-control" name="checkout" id="checkout"
                                        aria-describedby="">
                                </div>
                                <button class="btn btn-outline-danger px-5 mt-4" type="button">Order</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="box-change center collapse">
            <h2 class="text-primary">Booking Successfully</h2>
            <button class="btn close-btn">
                <i class="bi bi-x-lg position-absolute" style="top: 20px; right: 20px; font-size: 20px;"></i>
            </button>
            <div class="box-change-content">

            </div>

        </div>
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
                        <a href="../about/aboutt.html" type="link" class="btn-1">READ MORE</a>
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
                                <p>03 Cau Giay street, Lang Thuong, Dong Da, Ha Noi, Viet Nam</p>
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
    <button class="btn-back-top" type="button" title="Back to top">
        <span class="material-symbols-outlined">
            keyboard_double_arrow_up
        </span>
    </button>
    <!-- Background dark overlay -->
    <div class="mask-dark"></div>
    <!-- Loading screen -->
    <div class="loading-container">
        <div class="center">
            <div id="loading" class="loading1"></div>
            <div id="loading" class="loading2"></div>
            <div id="loading" class="loading3"></div>
        </div>
    </div>
    <div class="frame-mess">
        <div class="message-box center">
        </div>
    </div>

    <!--
         External Javascript files 
    -->


    <!-- <script type="module" src="./booking.js" defer></script> -->
</body>
</template>


<script>
import "../javascript/checkinDate.js";
import "../javascript/mainScript.js";
import "../javascript/navigation.js";
import "../javascript/item-move-up.js";
import "../home/index.js";
import checkInput from "./validInput.js";
import messageBox from "../home/message.js";
import $ from 'jquery';

const autoScroll = function () {
  var position = $("#heading-page").position();
  var hd_top = position.top;
  setTimeout(() => $(window).scrollTop(hd_top - 50), 500);
};

$(document).ready(function () {
  autoScroll();

  var nameRoom = "";
  var nameClient = "";
  var checkin = "";
  var checkout = "";

  $(".box-change .close-btn").click(function () {
    $(".box-change").hide();
    $(".mask-box-order").remove();
  });
  $("select").change(function () {
    var nameForm = $(this).attr("name");
    console.log($(this).attr("name"));

    if (nameForm == "room") nameRoom = $(this).val();
  });

  $('button[type="button"]').click(function () {
    checkin = $('input[name="checkin"]').val();
    checkout = $('input[name="checkout"]').val();
    nameClient = $('input[name="nameClient"]').val();
    console.log(nameRoom, nameClient, checkin, checkout);
    if (checkInput(nameRoom, nameClient, checkin, checkout)) {
      var currBox = new Box_change(nameRoom, nameClient, checkin, checkout);
      $("main .box-change .box-change-content").html(currBox.htmlScope());
      $("main .box-change").show(300);
      $("body").append(`<div class="mask-box-order"></div>`);
      $("input").prop("disabled", true);
    } else {
      var mess = new messageBox(
        "Notification",
        "Your information is wrong format. Please try again."
      );
      $(".frame-mess .message-box").html(mess.displayMess());
      $(".frame-mess").show();
      console.log("successfully");
    }
  });
});

</script>


<style scoped>
@import "../home/index.css";
@import "../css/main.css";
.mask-box-order {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.box-change {
  position: fixed;
  padding: 30px;
  background: white;
  z-index: 6;
  width: 700px;
  max-width: 90vw;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  max-height: 90%;
}

.box-change .thumbnail {
  width: 100%;
  box-shadow: none;
  height: 300px;
  overflow: hidden;
}

.box-change .thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.frame-mess {
  display: none;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
}
.message-box {
  background-color: white;
  display: block;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  color: #000;
  width: 600px;
  position: fixed !important;
  z-index: 5;
  max-width: 90vw;
}
.message__btn {
  position: absolute;
  right: 10px;
  top: 5px;
  background: none;
  border: none;
  color: #ffffff;
}
.message__head {
  color: #ffffff;
  text-align: center;
  width: 100%;
  min-height: 20px;
  background-color: #353535;
  padding: 7px 20px;
}
.message__content {
  padding: 20px;
  font-size: 20px;
}
</style>