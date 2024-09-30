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

    <!-- GG icon -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <!-- Bootstrap icon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

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
    <main>
        <!-- 
            Booking Bar
         -->
        <div class="container-md">
            <div class="row">
                <div class="col-md">
                    <div class="booking-container">
                        <div class="row">
                            <div class="col-md-3 booking-container__item">
                                <div>
                                    <span class="booking-item__title">Check In</span>
                                    <div class="input-container">
                                        <input type="date" class="form-control" name="checkin-input" id="checkin-input"
                                            placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 booking-container__item">
                                <div>
                                    <span class="booking-item__title">Check Out</span>
                                    <div class="input-container">
                                        <!-- <label for="checkin-input" class="form-label">Date</label> -->
                                        <input type="date" class="form-control" name="checkout-input"
                                            id="checkout-input" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="row">
                                    <div class="col booking-container__item">
                                        <span class="booking-item__title">Children</span>
                                        <div class="input-container">
                                            <select class="form-control" name="children-form" id="children-form">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>Khác..</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col booking-container__item">
                                        <span class="booking-item__title">Adult</span>
                                        <div class="input-container">
                                            <select class="form-control" name="adult-form" id="adult-form">
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>Khác..</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 booking-container__item" style="display: flex;">
                                <!-- <button type="button" class="booking__btn">Kiểm tra phòng</button> -->
                                <button type="button" class="booking__btn">Check Available</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 

            Main Content
            ...
         -->
        <div id="heading-page">
            <div class="container-md">
                <h1>HOME PAGE</h1>
                <h3>Reasons to choose Luxury Hotel :</h3>
                <div class="row">
                    <div class="col-4 col-sm-2">
                        <div class="box">The price couldn't be better</div>
                    </div>
                    <div class="col-4 col-sm-2">
                        <div class="box">Safe booking</div>
                    </div>
                    <div class="col-4 col-sm-2">
                        <div class="box">Great facilities and location</div>
                    </div>
                    <div class="col-4 col-sm-2">
                        <div class="box">Vietnamese & English speaking staff</div>
                    </div>
                    <div class="col-4 col-sm-2">
                        <div class="box">Many offers</div>
                    </div>
                    <div class="col-4 col-sm-2">
                        <div class="box">Five star Hotel</div>
                    </div>
                </div>
            </div>
        </div>
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
                            <img src="../home/images/bed.png" alt="images">
                            <div>
                                <h3>Luxury Rooms</h3>
                                <p>The hotel is fully equipped with modern and fully equipped services for the best
                                    customer experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="services__item item-move-up">
                            <img src="../home/images/wifi_FILL0_wght400_GRAD0_opsz48.png" alt="images">
                            <div>
                                <h3>Fast & Free Wifi</h3>
                                <p>The hotel provides free 5G WIFI in all rooms, serving 24/24. Get the fastest support!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="services__item item-move-up">
                            <img src="../home/images/phone_in_talk_FILL0_wght400_GRAD0_opsz48.png" alt="images">
                            <div>
                                <h3>Call Us 24/7</h3>
                                <p>Clients are supported 24/24 via the hotel's hotline.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="services__item item-move-up">
                            <img src="../home/images/minor_crash_FILL0_wght400_GRAD0_opsz48.png" alt="images">
                            <div>
                                <h3>Travel Accommodation</h3>
                                <p>Travel with the best and most suitable accommodation in Da Nang.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="services__item item-move-up">
                            <img src="../home/images/credit_score_FILL0_wght400_GRAD0_opsz48.png" alt="images">
                            <div>
                                <h3>Accepts Credit Card</h3>
                                <p>Convenient and quick to pay online by Credit card.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="services__item item-move-up">
                            <img src="../home/images/dinner_dining_FILL0_wght400_GRAD0_opsz48.png" alt="images">
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
        <section class="rooms">
            <div class="container-md">
                <div class="row">
                    <div class="col-md">
                        <div class="">
                            <span class="sub-heading">FEATURED ROOMS</span>
                            <h2 class="heading">Rooms & Suites</h2>
                            <p class="description">We have different room types. Our rooms are sumptuous and refined
                                with amazingly soft beds, large areas including a deluxe lounge.</p>
                            <a href="../customer/room" alt="Rooms page" class="page-link-custom">READ ALL</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-md rooms-container">
                <button class="back-btn" type="button">
                    <span class="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </button>
                <div class="row card-slider">
                    <div class="col-md-4">
                        <div class="card card-1 item-move-up">
                            <span
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">HOT</span>
                            <div class="image-container">
                                <img src="../home/room-img/1-1.jpg" alt="">
                            </div>
                            <div class="card-inner">
                                <h3>Deluxe Twin Room</h3>
                                <span class="card__cost">
                                    <sup><small>$</small></sup>100<small>/per night</small>
                                </span>
                                <ul class="card__information">
                                    <li>
                                        Adults: 1
                                    </li>
                                    <li>
                                        Categories: Single
                                    </li>
                                    <li>
                                        Facilities: Closet with hangers, HD flat-screen TV, Telephone
                                    </li>
                                    <li>
                                        Size: 20m<sup>2</sup>
                                    </li>
                                    <li>
                                        Bed Type: One bed
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-1 item-move-up">
                            <span
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">HOT</span>
                            <div class="image-container">
                                <img src="../home/room-img/2-1.jpg" alt="">
                            </div>
                            <div class="card-inner">
                                <h3>Grand Suite Room</h3>
                                <span class="card__cost">
                                    <sup><small>$</small></sup>129<small>/per night</small>
                                </span>
                                <ul class="card__information">
                                    <li>
                                        Adults: 1
                                    </li>
                                    <li>
                                        Categories: Single
                                    </li>
                                    <li>
                                        Facilities: Closet with hangers, HD flat-screen TV, Telephone
                                    </li>
                                    <li>
                                        Size: 25m<sup>2</sup>
                                    </li>
                                    <li>
                                        Bed Type: One bed
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-1 item-move-up">
                            <div class="image-container">
                                <img src="../home/room-img/2-2.jpg" alt="">
                            </div>
                            <div class="card-inner">
                                <h3>Deluxe King Room</h3>
                                <span class="card__cost">
                                    <sup><small>$</small></sup>149<small>/per night</small>
                                </span>
                                <ul class="card__information">
                                    <li>
                                        Adults: 2
                                    </li>
                                    <li>
                                        Categories: Couple
                                    </li>
                                    <li>
                                        Facilities: Closet with hangers, HD flat-screen TV, Telephone
                                    </li>
                                    <li>
                                        Size: 30m<sup>2</sup>
                                    </li>
                                    <li>
                                        Bed Type: Two bed
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-1 item-move-up">
                            <div class="image-container">
                                <img src="../home/room-img/3-1.jpg" alt="">
                            </div>
                            <div class="card-inner">
                                <h3>Superior Twin Room</h3>
                                <span class="card__cost">
                                    <sup><small>$</small></sup>159<small>/per night</small>
                                </span>
                                <ul class="card__information">
                                    <li>
                                        Adults: 2 / Child: 2
                                    </li>
                                    <li>
                                        Categories: Couple
                                    </li>
                                    <li>
                                        Facilities: Closet with hangers, HD flat-screen TV, Telephone
                                    </li>
                                    <li>
                                        Size: 35m<sup>2</sup>
                                    </li>
                                    <li>
                                        Bed Type: Two bed
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-1 item-move-up">
                            <div class="image-container">
                                <img src="../home/room-img/1.jpg" alt="">
                            </div>
                            <div class="card-inner">
                                <h3>Superior Triple Room</h3>
                                <span class="card__cost">
                                    <sup><small>$</small></sup>199<small>/per night</small>
                                </span>
                                <ul class="card__information">
                                    <li>
                                        Adults: 3
                                    </li>
                                    <li>
                                        Categories: Triple
                                    </li>
                                    <li>
                                        Facilities: Closet with hangers, HD flat-screen TV, Telephone
                                    </li>
                                    <li>
                                        Size: 40m<sup>2</sup>
                                    </li>
                                    <li>
                                        Bed Type: Three bed
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-1 item-move-up">
                            <div class="image-container">
                                <img src="../home/room-img/10.jpg" alt="">
                            </div>
                            <div class="card-inner">
                                <h3>VIP Room</h3>
                                <span class="card__cost">
                                    <sup><small>$</small></sup>200<small>/per night</small>
                                </span>
                                <ul class="card__information">
                                    <li>
                                        Adults: 2
                                    </li>
                                    <li>
                                        Categories: Couple
                                    </li>
                                    <li>
                                        Facilities: Closet with hangers, HD flat-screen TV, Telephone
                                    </li>
                                    <li>
                                        Size: 40m<sup>2</sup>
                                    </li>
                                    <li>
                                        Bed Type: Two bed
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="next-btn" type="button">
                    <span class="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </button>
            </div>
        </section>
        <section class="restaurant">
            <div class="container-md">
                <div class="row">
                    <div class="col-md">
                        <div class="">
                            <span class="sub-heading">MENUS</span>
                            <h2 class="heading">Restaurant Menu</h2>
                            <p class="description mt-4">4-star standard restaurant, fully equipped. Breakfast buffet is
                                available. Satisfy all requirements.</p>
                            <a href="../room/rooms.html" alt="Rooms page" class="page-link-custom"
                                style="margin-top: 20px;">READ ALL</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="restaurant-options">
                        <button type="button" class="restaurant-btn active" data-id="1">
                            Breakfast
                        </button>
                        <button type="button" class="restaurant-btn" data-id="2">
                            Lunch
                        </button>
                        <button type="button" class="restaurant-btn" data-id="3">
                            Dinner
                        </button>
                    </div>
                </div>
                <div class="restaurant__menu">
                    <div class="restaurant__tab show" data-id="1">
                        <div class="card-2">
                            <div class="image-container">
                                <img src="./images/food_bk_0.jpg" alt="">
                            </div>
                            <div class="card-info">
                                <h4>Cookies and Strawberries</h4>
                                <p>4-star standard restaurant, fully equipped. Breakfast buffet is available. Satisfy
                                    all requirements.!</p>
                                <span class="card-cost">
                                    <sup><small>$</small></sup>10.50
                                </span>
                            </div>
                        </div>
                        <div class="card-2">
                            <div class="image-container">
                                <img src="./images/food_bk_1.jpg" alt="">
                            </div>
                            <div class="card-info">
                                <h4>Fruit cereal</h4>
                                <p>4-star standard restaurant, fully equipped. Breakfast buffet is available. Satisfy
                                    all requirements.!</p>
                                <span class="card-cost">
                                    <sup><small>$</small></sup>10.50
                                </span>
                            </div>
                        </div>
                        <div class="card-2">
                            <div class="image-container">
                                <img src="./images/food_bk_2.jpg" alt="">
                            </div>
                            <div class="card-info">
                                <h4>Cakes and fruits</h4>
                                <p>4-star standard restaurant, fully equipped. Breakfast buffet is available. Satisfy
                                    all requirements.!</p>
                                <span class="card-cost">
                                    <sup><small>$</small></sup>10.50
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="restaurant__tab" data-id="2">
                        <div class="card-2">
                            <div class="image-container">
                                <img src="./images/food_lu_0.jpg" alt="">
                            </div>
                            <div class="card-info">
                                <h4>Egg & Asparagus</h4>
                                <p>4-star standard restaurant, fully equipped. Breakfast buffet is available. Satisfy
                                    all requirements.!</p>
                                <span class="card-cost">
                                    <sup><small>$</small></sup>30.50
                                </span>
                            </div>
                        </div>
                        <div class="card-2">
                            <div class="image-container">
                                <img src="./images/food_lu_1.jpg" alt="">
                            </div>
                            <div class="card-info">
                                <h4>Chicken stew</h4>
                                <p>4-star standard restaurant, fully equipped. Breakfast buffet is available. Satisfy
                                    all requirements.!</p>
                                <span class="card-cost">
                                    <sup><small>$</small></sup>30.50
                                </span>
                            </div>
                        </div>
                        <div class="card-2">
                            <div class="image-container">
                                <img src="./images/food_lu_2.jpg" alt="">
                            </div>
                            <div class="card-info">
                                <h4>Beef steak</h4>
                                <p>4-star standard restaurant, fully equipped. Breakfast buffet is available. Satisfy
                                    all requirements.!</p>
                                <span class="card-cost">
                                    <sup><small>$</small></sup>30.50
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="restaurant__tab" data-id="3">
                        <div class="card-2">
                            <div class="image-container">
                                <img src="./images/food_dn_0.jpg" alt="">
                            </div>
                            <div class="card-info">
                                <h4>Fried chicken</h4>
                                <p>4-star standard restaurant, fully equipped. Breakfast buffet is available. Satisfy
                                    all requirements.!</p>
                                <span class="card-cost">
                                    <sup><small>$</small></sup>30.50
                                </span>
                            </div>
                        </div>
                        <div class="card-2">
                            <div class="image-container">
                                <img src="./images/food_dn_1.jpg" alt="">
                            </div>
                            <div class="card-info">
                                <h4>Hamburger</h4>
                                <p>4-star standard restaurant, fully equipped. Breakfast buffet is available. Satisfy
                                    all requirements.!</p>
                                <span class="card-cost">
                                    <sup><small>$</small></sup>30.50
                                </span>
                            </div>
                        </div>
                        <div class="card-2">
                            <div class="image-container">
                                <img src="./images/food_dn_2.jpg" alt="">
                            </div>
                            <div class="card-info">
                                <h4>Pizza</h4>
                                <p>4-star standard restaurant, fully equipped. Breakfast buffet is available. Satisfy
                                    all requirements.!</p>
                                <span class="card-cost">
                                    <sup><small>$</small></sup>30.50
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container-fluid banner" id="banner-1">
            <div>
                <div>
                    <h2>Quality accommodation that exceeds the expectations</h2>
                    <a href="../room/rooms.html" class="btn-1">
                        LEARN MORE
                    </a>
                </div>
            </div>
        </div>
        <section class="review">
            <div class="container-md">
                <div class="row">
                    <div class="col-md">
                        <div class="">
                            <span class="sub-heading">Reviews</span>
                            <h2 class="heading">Guest Reviews</h2>
                            <a href="../about/about.html" alt="About Us page" class="page-link-custom"
                                style="margin-top: 20px;">READ ALL</a>
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
                            Welcome to the best five-star deluxe hotel in Da Nang. Hotel elementum sesue the aucan
                            vestibulum
                            aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id
                            velit ac
                            arcu posuere blane..
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
</body>
</template>

<script>
import "../javascript/mainScript.js";
import "../javascript/item-move-up.js";
import "../javascript/navigation.js";
import "../javascript/checkinDate.js";

</script>


<style scoped>
/* 
    MAIN :

    SECTION SERVICES
*/
body {
  /* font-family: 'Raleway', sans-serif; */

  font-family: "Rubik";
}
::selection {
  background-color: rgb(250, 100, 100);
  color: white;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.badge {
  transform: translate(-60%, -50%) !important;
  z-index: 4;
  font-size: 20px;
  background: red !important;
}
#heading-page .row {
  row-gap: 12px;
}
#heading-page .box {
  padding: 5px 20px;
  font-size: 14px;
  border-radius: 100px;
  background-color: rgba(245, 245, 245, 1);
}

/* SECTION : SERVICES */
section.services {
  display: block;
  margin: 100px 0 50px 0;
  background-color: #ffffff;
}
section .sub-heading {
  font-size: 16px;
  display: flex;
  font-weight: lighter;
  text-transform: uppercase;
  color: rgb(150, 150, 150);
}

section .sub-heading::after {
  content: "";
  height: 1px;
  background-color: rgb(150, 150, 150);
  width: 100px;
  margin: auto 10px;
}

section .heading {
  font-size: 45px;
  margin: 20px 0 0 0;
}

.services .row:not(:last-child) {
  margin: 0 0 100px 0;
}

.services__item {
  display: flex;
  cursor: pointer;
  margin-bottom: 80px;
  transition: all 0.2s ease-in-out;
}
.services__item h3,
.services__item p {
  transition: all 0.2s ease-in-out;
}
.services__item:hover h3,
.services__item:hover p {
  color: rgb(250, 100, 100);
}
.services__item:hover img {
  filter: grayscale(60%) contrast(250%);
}
.services__item img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin: 0 20px 0 0;
  transition: 0.2s ease-in-out;
  filter: grayscale(100%) contrast(250%) brightness(50%);
}
.services__item h3 {
  font-size: 16pt;
}
.services__item p {
  color: rgb(150, 150, 150);
  font-size: 10pt;
}

/* END OF : SECTION SERVICES */

/* SECTION ROOMS */
section.rooms {
  background-color: rgb(250, 250, 250);
  padding: 70px 0;
}
section .container-md {
  padding-left: 0;
  padding-right: 0;
}
.rooms-container {
  display: block;
  position: relative;
}
section .description {
  width: 50%;
  color: rgb(150, 150, 150);
  line-height: 25px;
}
.rooms .heading {
  margin-bottom: 40px;
}
.card-slider {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 20px 0;
  margin: 30px 0;
  scroll-behavior: smooth;
}
.card-slider .col-md-4 {
  min-width: 300px;
}
.card-1 {
  border: none;
  margin-bottom: 70px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  position: relative;
}
.card-1 * {
  transition: all 0.2s ease-in-out;
}
.card-1 .image-container {
  height: 300px;
  display: block;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
}
.card-1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-1 ul li {
  list-style-type: none;
  color: rgb(150, 150, 150);
  margin: 10px 0;
}
.card-1 ul {
  padding: 0;
}
.card-1 h3 {
  font-size: 30px;
  margin: 0 0 30px 0;
  cursor: pointer;
}
.card-1 .card-inner {
  padding: 30px 20px 20px 30px;
}
.card-1 .card__cost {
  font-size: 50px;
  font-weight: lighter;
  cursor: pointer;
}
.card-1 .card__cost small {
  font-size: 20px;
  color: rgb(150, 150, 150);
}
.card-1:hover li {
  color: black;
}
.card-1:hover h3 {
  color: rgb(255, 80, 80);
}
.card-1:hover img {
  filter: brightness(80%);
  transform: scale(1.01);
}
.card-slider::-webkit-scrollbar {
  height: 10px;
}
.card-slider::-webkit-scrollbar-track {
  background: #ffffff;
}
.card-slider::-webkit-scrollbar-thumb {
  background: rgb(220, 220, 220);
  opacity: 0.3;
}
.card-slider::-webkit-scrollbar-thumb:hover {
  background: rgb(200, 200, 200);
}
.rooms-container .back-btn,
.rooms-container .next-btn {
  display: flex;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 5;
  height: 70px;
  width: 70px;
  border: none;
  border-radius: 50% !important;
  transition: all 0.2s ease-in-out;
  background: rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
}
.rooms-container .back-btn:hover,
.rooms-container .next-btn:hover {
  background: rgba(0, 0, 0, 0.2);
}
.rooms-container .next-btn {
  right: 0%;
}

/* END OF SECTION ROOMS */

/* SECTION RESTAURANT */
section.restaurant {
  background-color: rgb(250, 250, 250);
  padding-top: 70px;
  padding-bottom: 200px;
}
.restaurant-options {
  margin: 50px 0;
  padding: 0;
  display: flex;
  width: 100%;
  height: 100px;
}
.restaurant-btn {
  width: 100%;
  font-size: 18px;
  color: rgb(150, 150, 150);
  background: none;
  border: none;
  border-bottom: 1px rgb(150, 150, 150) solid;
  padding: 50px auto;
  text-transform: uppercase;
  font-weight: lighter;
  transition: all 0.2s ease-in-out;
  letter-spacing: 2px;
}
.restaurant-btn:hover {
  filter: brightness(50%);
}
.restaurant-btn.active {
  border-color: rgb(255, 50, 50);
  border-width: 2px;
  color: rgb(255, 50, 50);
}
.restaurant__menu {
  display: block;
  width: 100%;
}
.restaurant__tab {
  display: none;
  width: 100%;
  gap: 20px;
  flex-wrap: nowrap;
  background: none;
}
.restaurant__tab.show {
  display: flex;
}

.restaurant__menu .card-2 {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  min-height: 500px;
  max-width: 70vw;
  margin: 0 auto;
  height: fit-content;
}
.restaurant__tab .image-container {
  width: 100%;
  height: 60%;
  overflow: hidden;
}
.restaurant__tab img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.restaurant__menu .card-info {
  padding: 30px;
}
.restaurant__menu .card-info p {
  font-size: 14px;
  color: rgb(150, 150, 150);
}
.restaurant__menu .card-cost {
  font-size: 40px;
}
.restaurant__menu .card-cost small {
  font-size: 25px;
  color: rgb(150, 150, 150);
}

/* END OF : SECTION RESTAURANT */

/* BANNER */
main .banner {
  position: relative;
  /* margin: 50px 0 0 0; */
  height: 80vh;
  width: 100%;
  padding: 0;
  /* background: url(https://preview.colorlib.com/theme/brighthotel/images/xbg_2.jpg.pagespeed.ic.4VF9hYXYfd.webp); */
  background: url(../home/images/banner-1.jpg);
  background-position: 0;
  /* background-size: 150%; */
  background-position: center center;
}
#banner-1 > div {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
}
#banner-1 h2 {
  letter-spacing: 2px;
  font-size: 70px;
  max-width: 50vw;
}
/* END OF : BANNER */

/* SECTION : REVIEW */
section.review {
  margin: 0 0 90px 0;
  padding-top: 200px;
  padding-bottom: 150px;
  background-color: rgb(250, 250, 250);
}

.review-container {
  margin-top: 50px;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  width: 100%;
}
.review-container .reviewer {
  margin-bottom: 30px;
  display: flex;
  flex-wrap: nowrap;
}
.review-container .reviewer small {
  color: rgb(150, 150, 150);
}
.reviewer .image-container {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.reviewer .image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.reviewer-info {
  height: fit-content;
  margin: 0 0 0 20px;
}
.reviewer-info h4 {
  margin: 0;
}
.review .card-3 {
  position: relative;
  padding: 30px;
  width: 100%;
  min-height: 200px;
  min-width: 300px;
  margin: 0 auto;
  max-width: 70vw;
  background-color: white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
/* END OF SECTION : REVIEW */

.item-move-up {
  opacity: 0;
  transform: translate(0, 100px);
  transition: all 0.6s ease-in-out;
}
.rooms .item-move-up {
  transition-delay: 1s;
  transition: all 1s ease-in-out;
  transform: translate(0, 50vh);
}
@media only screen and (min-width: 400px) and (max-width: 600px) {
  .services .row > .col-sm-4 {
    width: 50%;
  }
  .services__item {
    flex-wrap: wrap;
  }
  .services__item img {
    height: 70px !important;
    width: fit-content !important;
  }
}
@media only screen and (max-width: 750px) {
  section .container-md {
    padding-left: 12px;
    padding-right: 12px;
  }
  section.rooms {
    padding-bottom: 30px;
    padding-top: 50px;
  }
  .rooms .description {
    width: 100%;
  }
  .card-slider .col-md-4 {
    width: 70%;
  }
  .card-1 {
    margin-bottom: 30px;
  }
  .card-1 h3 {
    font-size: 20px;
    margin: 0 0 10px 0;
  }
  .card-1 .card-inner {
    padding: 20px;
  }
  .card-1 ul li {
    margin: 0px;
    font-size: 12px;
  }
  .rooms-container .back-btn,
  .rooms-container .next-btn {
    height: 40px;
    width: 40px;
  }

  section.restaurant {
    padding-bottom: 50px;
    padding-top: 30px;
  }
  .restaurant__tab {
    gap: 12px;
  }
  .restaurant__tab.show {
    flex-wrap: wrap;
  }
  .restaurant__tab.show .card-2 {
    min-height: 0;
  }
  .restaurant__menu .card-info {
    padding: 20px 30px 10px 30px;
  }
  .restaurant__menu .card-info p {
    font-size: 14px;
  }
  #banner-1 h2 {
    font-size: 40px;
    max-width: 90vw;
  }
  section.review {
    margin: 0 0 30px 0;
    padding-bottom: 100px;
    padding-top: 100px;
  }
  .review-container {
    flex-wrap: wrap;
  }
}
@media only screen and (min-width: 1200px) {
  .review-container {
    flex-wrap: nowrap;
  }
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
.nav-item-search{
  margin-top: 8px;
  width: 100px;
  text-decoration: none;
  height: 25px;
}

.navbar__brand{
  padding-left: 135px;
}
.cart-img{
  width: 20px;
  height: 20px;
  background-color: aqua;
}
* {
  box-sizing: border-box;
}
:root {
  --text-color-1: white;
}
html,
body {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
main #heading-page h1 {
  text-align: center;
  padding: 100px 0 50px 0;
  text-transform: uppercase;
  letter-spacing: 10px;
}
main #heading-page h1::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  margin-top: 50px;
  background-color: rgb(150, 150, 150);
}
.item-move-up {
  opacity: 0;
  transform: translate(0, 100px);
  transition: all 0.6s ease-in-out;
}

.page-link-custom {
  color: blueviolet;
  text-decoration: none;
  display: inline-block;
  width: fit-content;
}
.page-link-custom::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: center left;
  background-color: blueviolet;
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}
.page-link-custom:hover::after {
  animation-name: underline-show;
}
.page-link-custom:not(:hover)::after {
  animation-name: underline-leave;
}
/* 
------------------------------
          HEADER
------------------------------
*/
header {
  position: relative;
}
nav {
  position: absolute;
  top: 10px;
  width: 100%;
  height: auto;
  z-index: 10;
}
.navbar {
  position: absolute;
  transition: all 0.3s ease-in-out;
}
.nav-item .btn-nav-collapse {
  display: none;
}
.navbar a,
.navbar a:hover,
.navbar a:focus,
.navbar a:active {
  text-decoration: none;
  /* color: white; */
  color: var(--text-color-1);
}
nav .navbar__brand {
  font-size: 30px;
}
nav .nav-item {
  padding: 20px;
}
nav .nav-link {
  font-size: 16px;
}
nav .btn-booking {
  padding: 5px;
  color: white;
  background-color: #fc3c3c;
  border-color: #fc3c3c;
  min-width: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-transform: capitalize;
}
nav .btn-booking:hover {
  color: var(--text-color-1);
  border-color: var(--text-color-1);
}
.nav-item {
  position: relative;
}
.navbar-nav .more-info {
  display: none;
  position: absolute;
  top: 100%;
  color: #000000;
  background-color: white;
  padding: 40px;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}
.nav-item:hover .more-info {
  display: block;
}
.nav-item .more-info a {
  color: blueviolet;
}
.navbar-nav .more-info::before {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
  background-color: white;
  position: absolute;
  top: -10px;
  left: 10px;
}
.navbar-nav .more-info ul {
  list-style-type: none;
  padding: 0;
}
.navbar-nav ul li {
  display: flex;
  gap: 20px;
  padding: 10px 0;
  border-radius: 5px;
  width: fit-content;
}
.navbar-nav ul li:hover {
  color: #fc3c3c;
  background-color: whitesmoke;
}
.navbar-nav ul li:not(:last-child) {
  margin-bottom: 20px;
}
.navbar-nav ul li .thumbnail {
  width: 150px;
  height: fit-content;
}
.navbar-nav ul li .thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
nav.nav-white {
  position: fixed;
  top: 0;
  z-index: 7;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
@keyframes nav-scroll-down {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  100% {
    transform: scaleY(1);
    transform-origin: top;
  }
}
.btn-custom::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: center left;
  background-color: var(--text-color-1);
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}
.btn-custom.active::after {
  transform: scaleX(1) !important;
}
.btn-custom:hover::after {
  animation-name: underline-show;
}

.btn-custom:not(:hover)::after {
  animation-name: underline-leave;
}
#btn-show-navbar {
  display: none;
  padding: 5px 10px;
  background: none;
  border: none;
  color: white;
  font-weight: bold;
}
@keyframes underline-show {
  0% {
    transform: scaleX(0);
    transform-origin: center left;
  }
  100% {
    transform: scaleX(1);
    transform-origin: center left;
  }
}
@keyframes underline-leave {
  0% {
    transform: scaleX(1);
    transform-origin: center right;
  }
  100% {
    transform: scaleX(0);
    transform-origin: center right;
  }
}
.slide-container {
  display: block;
  padding: 0;
  position: relative;
  width: 100%;
  height: 100vh;
}
#carouselTop {
  height: 100%;
  width: 100%;
  position: relative;
}
.carousel-indicators {
  bottom: 100px;
}
.carousel-item {
  position: relative;
  width: 100%;
  height: 100%;
}
.carousel-inner {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
header .carousel-image {
  display: block;
  filter: brightness(80%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  scroll-behavior: smooth;
}
.header .carousel-image img {
  scroll-behavior: smooth;
}
header .carousel-heading {
  display: block;
  position: absolute;
  color: white;
  width: 50%;
  top: 50%;
  left: 20%;
  z-index: 5;
}
header .carousel-item:nth-child(1) .carousel-heading {
  top: 20%;
  left: 20%;
}
header .carousel-item:nth-child(2) .carousel-heading {
  left: auto;
  top: 30%;
  left: 10%;
}
header .carousel-item:nth-child(3) .carousel-heading {
  top: 20%;
}
.carousel-heading .heading {
  font-size: 50pt;
}

.carousel-heading .sub-heading {
  font-size: 16pt;
}
.carousel-heading .sub-heading::after {
  content: "";
  display: inline-block;
  margin: auto 0 auto 10px;
  width: 100px;
  height: 1px;

  background-color: white;
}
.btn-1 {
  display: block;
  width: fit-content;
  padding: 20px 40px;
  min-width: 200px;
  margin: 20px 0 0 0;
  border: none;
  color: gray;
  background: white;
  border: 2px white solid;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  text-align: center;
}

.btn-1:hover {
  background: none;
  color: white;
}

/* 
------------------------------
        END OF HEADER
------------------------------
*/

/* 
------------------------------
  MAIN : Booking container
------------------------------
*/
.booking-container {
  display: block;
  padding: 20px 40px 30px 40px;
  /* max-width: 500px; */
  margin: 0 auto;
  background-color: white;
  transform: translate(0, -50%);
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}
.booking-container input,
textarea,
button,
select {
  border-radius: 0 !important;
}
.booking-item__title {
  font-size: 14pt;
}
.booking-container .row {
  row-gap: 10px;
  height: 100%;
}
.booking-container__item {
  display: block;
  position: relative;
}
.booking-container__item > div {
  width: 100%;
  height: 100%;
}
.booking-container__item > div {
  height: 50%;
}
.booking-container > div .input-container {
  display: block;
  height: 50%;
  padding: 20px 0 0 0;
}
.booking__btn {
  background-color: #fc3c3c;
  color: white;
  padding: 10px 40px;
  border: none;
  font-size: 16pt;
  width: 90%;
  position: relative;
  height: fit-content;
  margin: auto;
  margin-bottom: 0;
  border: 2px solid #fc3c3c;
  transition: 0.2s ease-in-out;
}
@media only screen and (min-width: 768px) and (max-width: 1000px) {
  .booking-container .row .col-md-3:nth-child(1),
  .booking-container .row .col-md-3:nth-child(2) {
    width: 100%;
  }
  .booking-container .row .col-md-3:nth-child(3) {
    width: 100%;
  }
  .booking-container__item {
    width: 100% !important;
  }
  .booking__btn {
    margin-top: 10px;
    width: 100% !important;
    padding: 10px 20px;
  }
}
.booking__btn:hover {
  border: 2px solid #fc3c3c;
  background: none;
  color: #fc3c3c;
}

input[type="date"] {
  letter-spacing: 2px;
}
/* 
------------------------------
  End of Booking container
------------------------------
*/

/* 
------------------------------
          FOOTER
------------------------------
*/

footer {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background-color: #333;
  margin: 50px 0 0 0;
  min-height: 90vh;
  /* max-height: 700px; */
  color: white;
  align-items: center;
  justify-content: center;
}
.footer__inner {
  padding: 15px;
}
footer ul,
footer li {
  list-style-type: none;
  padding: 0;
}
.footer__heading {
  font-size: 16px;
  text-transform: uppercase;
  margin: 0 0 80px 0;
}
.footer__item {
  padding: 0 20px;
}
footer .col-md:nth-of-type(3) .footer__item li {
  display: flex;
}
footer .col-md:nth-of-type(3) .footer__item i {
  font-size: 20px;
  margin-right: 20px;
}
.footer__item p {
  line-height: 30px;
}
.footer__item .btn-1 {
  background-color: #fc3c3c;
  border-color: #fc3c3c;
  color: white;
}

.footer__item .btn-1:hover {
  background: none;
  border-color: white;
  color: white;
}
footer .card-inner {
  display: flex;
  gap: 20px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
footer .card-inner:not(:last-child) {
  margin-bottom: 15%;
}
footer .card-inner:hover {
  filter: brightness(60%);
}
footer .card-inner img {
  width: 100px;
  height: 60px;
}
footer .card-content span {
  color: rgb(182, 182, 182);
}
footer .card-content span:not(:last-child) {
  margin: 0 20px 0 0;
}

footer .card-content i {
  margin-right: 5px;
  font-size: 80%;
}
footer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
footer .copyright-container {
  width: 100%;
  text-align: center;
  color: rgb(150, 150, 150);
}
.btn-back-top {
  display: flex;
  z-index: 5;
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 70px;
  height: 70px;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 50% !important;
  background-color: rgba(255, 0, 0, 0.5);
  color: #ffffff;
  transition: all 0.2s ease-in-out;
  animation: btn-back-top-move;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.btn-back-top:hover {
  background-color: rgba(255, 0, 0, 0.7);
}
.mask-dark {
  display: block;
  z-index: 6;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

@keyframes btn-back-top-move {
  0% {
    transform: translate(0, -5px);
  }
  100% {
    transform: translate(0, 5px);
  }
}

/* RESPONSIVE for Mobile */
@media only screen and (max-width: 1200px) {
  nav .nav-item {
    padding: 10px;
  }
}
@media only screen and (max-width: 750px) {
  .navbar-nav .more-info {
    display: none;
  }
  .nav-item:hover .more-info {
    display: none;
  }
  nav .navbar__brand {
    color: var(--text-color-1);
    font-size: 20px;
  }
  .navbar-nav {
    display: block;
    position: absolute;
    z-index: 10;
    right: -100%;
    top: 0px;
    height: 100vh;
    background: white;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.2);
  }
  nav .nav-item {
    padding: 20px;
    padding-left: 30px;
  }
  .nav-item .btn-nav-collapse {
    display: block;
    background: none;
    border: none;
    font-size: 20px;
  }

  .navbar-nav a,
  .navbar-nav a:hover,
  .navbar-nav a:focus,
  .navbar-nav a:active {
    color: black;
  }
  .navbar-nav a.btn-booking {
    color: white !important;
  }
  .navbar-nav a.btn-booking:hover {
    color: black !important;
  }
  header .btn-1 {
    padding: 10px 20px;
  }
  #btn-show-navbar {
    display: block;
    color: var(--text-color-1);
  }
  .slide-container {
    height: 500px;
  }
  nav .nav-item:hover {
    background-color: whitesmoke;
  }
  .btn-custom::after {
    height: 1px;
    background-color: black;
  }

  .carousel-heading .heading {
    font-size: 30pt;
  }
  .carousel-heading .sub-heading {
    font-size: 10pt;
  }

  header .carousel-item:nth-child(1) .carousel-heading {
    top: 20%;
    left: 20%;
  }
  header .carousel-item:nth-child(2) .carousel-heading {
    left: auto;
    top: 20%;
    left: 20%;
  }
  header .carousel-item:nth-child(3) .carousel-heading {
    top: 20%;
    left: 20%;
  }
  .booking-container {
    transform: translate(0, -20%);
    max-width: 500px;
  }
  .booking-container .row {
    row-gap: 20px;
  }

  .btn-back-top {
    display: none;
  }
  footer {
    margin: 10px 0 0 0;
  }
  .footer__inner {
    row-gap: 20px;
    padding-top: 50px;
  }
  .footer__item .btn-1 {
    padding: 10px 20px;
    margin: 5px 0 10px 0;
  }
  .footer__item p {
    line-height: 20px;
    font-size: 14px;
  }
  .footer__heading {
    font-weight: bold;
    margin: 0 0 20px 0;
  }
  footer .copyright-container {
    font-size: 12px;
    width: 80%;
  }
}

.center {
  position: fixed;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

@keyframes loading {
  0% {
    height: 50px;
    top: 0px;
  }

  50% {
    height: 70px;
    top: -10px;
  }

  100% {
    height: 50px;
    top: 0px;
  }
}
.loading-container {
  display: none;
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: whitesmoke;
}

#loading {
  position: absolute;
  background-color: #000000;
  height: 50px;
  width: 15px;
  animation-name: loading;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

#loading.loading1 {
  left: -25px;
  animation-delay: 0.2s;
}

#loading.loading2 {
  left: 0px;
  animation-delay: 0.4s;
}

#loading.loading3 {
  left: 25px;
  animation-delay: 0.6s;
}

</style>


