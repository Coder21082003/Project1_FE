<template>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Room details</title>

    <!-- Small ICON -->
    <link rel="shortcut icon" href="../../logo_brower.png" type="image/x-icon">

    <!-- Bootstrap 5 : CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- GG icon -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <!-- Bootstrap icon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

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
                        <img src="../../header image/header-img-1.jpg" class="carousel-image" alt="First slide">
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
                        <img src="../../header image/header-img-2-1.jpg" class="carousel-image" alt="Second slide">
                        <div class="carousel-heading">
                            <span class="sub-heading">Welcome</span>
                            <h1 class="heading">5 Star Hotel<br>Great Vacation</h1>
                            <button type="button" class="btn-1">LEARN MORE</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../../header image/header-img-3.jpg" class="carousel-image" alt="Third slide">
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
    <main>
        <section class="room-detail">
            <div class="container-md">
                <div class="room-detail-wrap">
                    <div class="room-detail-pic">
                        <img class="room-detail-img pic-1" src="../room-img/1-2.jpg">
                        <img class="room-detail-img pic-2" src="../room-img/1-4.jpg">
                        <img class="room-detail-img pic-3" src="../room-img/1-3.jpg">
                        <img class="room-detail-img pic-4" src="../room-img/1-1.jpg">
                    </div>
                    <div class="room-detail-text">
                        <div class="detail-heading">
                            <span class="detail-text">Descripton</span>
                            <h2 class="room-name">Room 1</h2>
                            <p>
                                All accommodations are luxuriously furnished and feature a private balcony. The resort's
                                beachfront villas are nestled among the majestic rocks at the foot of the mountain and
                                feature private pools, sundeck and luxury bathroom amenities. Select rooms include a spa
                                bath and a private dining patio with stunning sea views.

                                The property is 45 minutes from Da Nang Airport and 30 minutes from Marble Mountains.
                                Cham Museum is about 25 km away, while Hue Imperial Citadel, Hoi An Ancient Town and the
                                famous UNESCO World Heritage site My Son are about 45 km from the hotel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="services">
            <div class="container-md">
                <div class="row">
                    <div class="col-md">
                        <div class="">
                            <span class="sub-heading">Services</span>
                            <h2 class="heading">Facilities & Services</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="services__item item-move-up">
                            <img src="../../home/images/bed.png" alt="images">
                            <div>
                                <h3>Luxury Rooms</h3>
                                <p>The hotel is fully equipped with modern and fully equipped services for the best
                                    customer experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="services__item item-move-up">
                            <img src="../../home/images/wifi_FILL0_wght400_GRAD0_opsz48.png" alt="images">
                            <div>
                                <h3>Fast & Free Wifi</h3>
                                <p>The hotel provides free 5G WIFI in all rooms, serving 24/24. Get the fastest support!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="services__item item-move-up">
                            <img src="../../home/images/phone_in_talk_FILL0_wght400_GRAD0_opsz48.png" alt="images">
                            <div>
                                <h3>Call Us 24/7</h3>
                                <p>Clients are supported 24/24 via the hotel's hotline.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="services__item item-move-up">
                            <img src="../../home/images/minor_crash_FILL0_wght400_GRAD0_opsz48.png" alt="images">
                            <div>
                                <h3>Travel Accommodation</h3>
                                <p>Travel with the best and most suitable accommodation in Da Nang.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="services__item item-move-up">
                            <img src="../../home/images/credit_score_FILL0_wght400_GRAD0_opsz48.png" alt="images">
                            <div>
                                <h3>Accepts Credit Card</h3>
                                <p>Convenient and quick to pay online by Credit card.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="services__item item-move-up">
                            <img src="../../home/images/dinner_dining_FILL0_wght400_GRAD0_opsz48.png" alt="images">
                            <div>
                                <h3>Restaurant</h3>
                                <p>4-star standard restaurant, fully equipped. Breakfast buffet is available. Satisfy
                                    all requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="review">
            <div class="container-md">
                <div class="row">
                    <div class="col-md">
                        <div class="">
                            <span class="sub-heading">Reviews</span>
                            <h2 class="heading">Guest Reviews</h2>
                        </div>
                    </div>
                </div>
                <div class="review-container">
                    <div class="card-3">
                        <span
                            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">New</span>
                        <div class="reviewer">
                            <div class="image-container">
                                <img src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="">
                            </div>
                            <div class="reviewer-info">
                                <h4>Martin Newmansfield</h4>
                                <span><small>Satisfied Customer</small></span>
                            </div>
                        </div>
                        <p>” No regrets on booking LUXURY Danang Beach Hotel. Our room is great, it meets our
                            expectation.
                            The bathroom is fantastic! Everything about this place is amazing. The breakfast buffet is
                            something I personally love! Perhaps if there is something that has room for improvement,
                            that would be the staff. A little average. Needs a little improvement in Customer Relation.
                            “</p>
                    </div>
                    <div class="card-3">
                        <div class="reviewer">
                            <div class="image-container">
                                <img src="https://images.pexels.com/photos/1382728/pexels-photo-1382728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="">
                            </div>
                            <div class="reviewer-info">
                                <h4>Nancy Green</h4>
                                <span><small>Satisfied Customer</small></span>
                            </div>
                        </div>
                        <p>” This hotel is better in reality than in pictures. I truly love the staff's attitude and
                            quick service as well as recommendations. The room is well equipped (which exceeds my
                            expectation with such price) with electric door lock, TV and hot shower all the day. It is
                            located just near the beach, from where I can go to the city center or go swimming in only 5
                            mins. What's more . “</p>
                    </div>
                    <div class="card-3">
                        <div class="reviewer">
                            <div class="image-container">
                                <img src="https://images.pexels.com/photos/5287832/pexels-photo-5287832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="">
                            </div>
                            <div class="reviewer-info">
                                <h4>Elizabeth Charles</h4>
                                <span><small>Satisfied Customer</small></span>
                            </div>
                        </div>
                        <p>” The room is clean, comfortable enough to use. I appreciate the staff, cute, enthusiastic
                            support, have any problem message on zalo for instant support. You should book through the
                            app to get a better price. I booked 1 day to preview the quality of the room. After
                            finishing the order for 2 days, the price was higher, so I went to the app to place the
                            order, and the price was lower than the original price I ordered. “</p>
                    </div>
                </div>
            </div>
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
                        <a href="../../about/aboutt.html" type="link" class="btn-1">READ MORE</a>
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
                                        <img src="../../home/room-img/1-1.jpg" alt="">
                                    </div>
                                    <div class="card-content">
                                        <h4>Our Luxury Hotel & Restaurants</h4>
                                        <span><i class="bi bi-calendar3"></i>Oct 01, 2022</span>
                                        <span><i class="bi bi-chat-left-dots"></i>12</span>
                                    </div>
                                </li>
                                <li class="card-inner">
                                    <div class="">
                                        <img src="../../home/room-img/12.jpg" alt="">
                                    </div>
                                    <div class="card-content">
                                        <h4>Our Luxury Hotel & Restaurants</h4>
                                        <span><i class="bi bi-calendar3"></i>Oct 01, 2022</span>
                                        <span><i class="bi bi-chat-left-dots"></i>12</span>
                                    </div>
                                </li>
                                <li class="card-inner">
                                    <div class="">
                                        <img src="../../home/room-img/5.jpg" alt="">
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
    <button class="btn-back-top" type="button" title="Back to top">
        <span class="material-symbols-outlined">
            keyboard_double_arrow_up
        </span>
    </button>
    <div class="mask-dark"></div>
</body>
</template>


<script>
import "../../javascript/checkinDate.js";
import "../../javascript/mainScript.js";
import "../../javascript/navigation.js";
import "../../javascript/item-move-up.js";
</script>


<style scoped>
@import "./room-detail.css";
@import "../../css/main.css";
@import "../rooms.css";
</style>