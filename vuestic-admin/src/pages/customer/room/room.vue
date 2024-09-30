<template>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rooms page</title>

    <!-- Small ICON -->
    <link rel="shortcut icon" href="../logo_brower.png" type="image/x-icon">

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

            Moi nguoi tiep tuc code noi dung cua trang o phia duoi nhe :D
            ...
         -->
        <div id="heading-page">
            <div class="container-md">
                <h1>ROOMS PAGE</h1>
            </div>
        </div>
        <section class="rooms-top">
            <div class="container-md">
                <div class="row">
                    <div class="col-md" style="padding: 0;">
                        <div class="">
                            <span class="sub-heading">Hot rooms</span>
                            <h2 class="heading">Suitable for you</h2>
                        </div>
                    </div>
                </div> 
                <div class="container-md">
                    <div class="room-row">
                        <div class="room-oder item-move-up">
                            <div class="room-imgae"><img class="room-img" src="./room-img/1-1.jpg"></div>
                            <div class="room-des">
                                <h2 class="heading">Bachelor Room</h2>
                                <div class="price"><sup>$</sup><span class="number">150</span><sub>/per night</sub>
                                </div>
                                <ul class="room-info">
                                    <li><strong>Adults:</strong> 1</li>
                                    <li><strong>Categories:</strong> Single</li>
                                    <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV, Telephone
                                    </li>
                                    <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                    <li><strong>Bed Type:</strong> One bed</li>
                                </ul>
                                <a href="../customer/room-detail" class="btn-readmore" type="link"
                                    style="margin: 0;">
                                    READ MORE
                                </a>
                            </div>
                        </div>
                        <div class="room-oder item-move-up">
                            <div class="room-des">
                                <h2 class="heading">Bachelor Room</h2>
                                <div class="price"><sup>$</sup><span class="number">150</span><sub>/per night</sub>
                                </div>
                                <ul class="room-info">
                                    <li><strong>Adults:</strong> 1</li>
                                    <li><strong>Categories:</strong> Single</li>
                                    <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV, Telephone
                                    </li>
                                    <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                    <li><strong>Bed Type:</strong> One bed</li>
                                </ul>
                                <a href="../customer/room-detail" class="btn-readmore" type="link"
                                    style="margin: 0;">
                                    READ MORE
                                </a>
                            </div>
                            <div class="room-imgae"><img class="room-img" src="./room-img/2.jpg"></div>
                        </div>
                        <div class="room-oder item-move-up">
                            <div class="room-imgae"><img class="room-img" src="./room-img/3.jpg"></div>
                            <div class="room-des">
                                <h2 class="heading">Bachelor Room</h2>
                                <div class="price"><sup>$</sup><span class="number">150</span><sub>/per night</sub>
                                </div>
                                <ul class="room-info">
                                    <li><strong>Adults:</strong> 1</li>
                                    <li><strong>Categories:</strong> Single</li>
                                    <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV, Telephone
                                    </li>
                                    <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                    <li><strong>Bed Type:</strong> One bed</li>
                                </ul>
                                <a href="../customer/room-detail" class="btn-readmore" type="link"
                                    style="margin: 0;">
                                    READ MORE
                                </a>
                            </div>
                        </div>
                    </div>


                    <div class="more-room-wrap">
                        <div class="more-room">
                            <h2 class="heading">More Rooms</h2>
                            <p class="more-room-content">
                                There are room options to suit your customers' needs!
                            </p>
                        </div>
                    </div>
                </div>

                <div class="room-bot">
                    <div class="room-bot-wrap">
                        <div class="room-bot-detail item-move-up">
                            <div class="room-bot-img">
                                <a href="../customer/room-detail" alt="Room">
                                    <img src="./room-img/4.jpg">
                                </a>
                            </div>
                            <div class="room-bot-text">
                                <div class="text">
                                    <h2 class="heading">
                                        <a href="../customer/room-detail" alt="Room">
                                            Bachelor Room
                                        </a>
                                    </h2>
                                    <div class="price"><sup>$</sup><span class="number">156</span><sub>/per night</sub>
                                    </div>
                                    <ul class="specs">
                                        <li><strong>Adults:</strong> 1</li>
                                        <li><strong>Categories:</strong> Single</li>
                                        <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV,
                                            Telephone
                                        </li>
                                        <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                        <li><strong>Bed Type:</strong> One bed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="room-bot-detail item-move-up">
                            <div class="room-bot-img">
                                <a href="../customer/room-detail" alt="room detail"><img
                                        src="./room-img/5.jpg"></a>
                            </div>
                            <div class="room-bot-text">
                                <div class="text">
                                    <h2 class="heading">
                                        <a href="../customer/room-detail" alt="room detail">
                                            Bachelor Room
                                        </a>
                                    </h2>
                                    <div class="price"><sup>$</sup><span class="number">156</span><sub>/per night</sub>
                                    </div>
                                    <ul class="specs">
                                        <li><strong>Adults:</strong> 1</li>
                                        <li><strong>Categories:</strong> Single</li>
                                        <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV,
                                            Telephone
                                        </li>
                                        <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                        <li><strong>Bed Type:</strong> One bed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="room-bot-detail item-move-up">
                            <div class="room-bot-img">
                                <a href="../customer/room-detail" alt="room detail"><img
                                        src="./room-img/6.jpg"></a>
                            </div>
                            <div class="room-bot-text">
                                <div class="text">
                                    <h2 class="heading">
                                        <a href="../customer/room-detail" alt="room detail">
                                            Bachelor Room
                                        </a>
                                    </h2>
                                    <div class="price"><sup>$</sup><span class="number">156</span><sub>/per night</sub>
                                    </div>
                                    <ul class="specs">
                                        <li><strong>Adults:</strong> 1</li>
                                        <li><strong>Categories:</strong> Single</li>
                                        <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV,
                                            Telephone
                                        </li>
                                        <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                        <li><strong>Bed Type:</strong> One bed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="room-bot-detail item-move-up">
                            <div class="room-bot-img">
                                <a href="../customer/room-detail" alt="room detail"><img
                                        src="./room-img/7.jpg"></a>
                            </div>
                            <div class="room-bot-text">
                                <div class="text">
                                    <h2 class="heading">
                                        <a href="../customer/room-detail" alt="room detail">
                                            Bachelor Room
                                        </a>
                                    </h2>
                                    <div class="price"><sup>$</sup><span class="number">156</span><sub>/per night</sub>
                                    </div>
                                    <ul class="specs">
                                        <li><strong>Adults:</strong> 1</li>
                                        <li><strong>Categories:</strong> Single</li>
                                        <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV,
                                            Telephone
                                        </li>
                                        <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                        <li><strong>Bed Type:</strong> One bed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="room-bot-detail item-move-up">
                            <div class="room-bot-img">
                                <a href="../customer/room-detail" alt="room detail"><img
                                        src="./room-img/8.jpg"></a>
                            </div>
                            <div class="room-bot-text">
                                <div class="text">
                                    <h2 class="heading">
                                        <a href="../customer/room-detail" alt="room detail">
                                            Bachelor Room
                                        </a>
                                    </h2>
                                    <div class="price"><sup>$</sup><span class="number">156</span><sub>/per night</sub>
                                    </div>
                                    <ul class="specs">
                                        <li><strong>Adults:</strong> 1</li>
                                        <li><strong>Categories:</strong> Single</li>
                                        <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV,
                                            Telephone
                                        </li>
                                        <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                        <li><strong>Bed Type:</strong> One bed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="room-bot-detail item-move-up">
                            <div class="room-bot-img">
                                <a href="../customer/room-detail" alt="room detail"><img
                                        src="./room-img/9.jpg"></a>
                            </div>
                            <div class="room-bot-text">
                                <div class="text">
                                    <h2 class="heading">
                                        <a href="../customer/room-detail" alt="room detail">
                                            Bachelor Room
                                        </a>
                                    </h2>
                                    <div class="price"><sup>$</sup><span class="number">156</span><sub>/per night</sub>
                                    </div>
                                    <ul class="specs">
                                        <li><strong>Adults:</strong> 1</li>
                                        <li><strong>Categories:</strong> Single</li>
                                        <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV,
                                            Telephone
                                        </li>
                                        <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                        <li><strong>Bed Type:</strong> One bed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="room-bot-detail item-move-up">
                            <div class="room-bot-img">
                                <a href="../customer/room-detail" alt="room detail"><img
                                        src="./room-img/10.jpg"> </a>
                            </div>
                            <div class="room-bot-text">
                                <div class="text">
                                    <h2 class="heading">
                                        <a href="../customer/room-detail" alt="room detail">
                                            Bachelor Room
                                        </a>
                                    </h2>
                                    <div class="price"><sup>$</sup><span class="number">156</span><sub>/per night</sub>
                                    </div>
                                    <ul class="specs">
                                        <li><strong>Adults:</strong> 1</li>
                                        <li><strong>Categories:</strong> Single</li>
                                        <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV,
                                            Telephone
                                        </li>
                                        <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                        <li><strong>Bed Type:</strong> One bed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="room-bot-detail item-move-up">
                            <div class="room-bot-img">
                                <a href="../customer/room-detail" alt="room detail"><img
                                        src="./room-img/11.jpg"> </a>
                            </div>
                            <div class="room-bot-text">
                                <div class="text">
                                    <h2 class="heading">
                                        <a href="../customer/room-detail" alt="room detail">
                                            Bachelor Room
                                        </a>
                                    </h2>
                                    <div class="price"><sup>$</sup><span class="number">156</span><sub>/per night</sub>
                                    </div>
                                    <ul class="specs">
                                        <li><strong>Adults:</strong> 1</li>
                                        <li><strong>Categories:</strong> Single</li>
                                        <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV,
                                            Telephone
                                        </li>
                                        <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                        <li><strong>Bed Type:</strong> One bed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="room-bot-detail item-move-up">
                            <div class="room-bot-img">
                                <a href="../customer/room-detail" alt="room detail"><img
                                        src="./room-img/12.jpg"> </a>
                            </div>
                            <div class="room-bot-text">
                                <div class="text">
                                    <h2 class="heading">
                                        <a href="../customer/room-detail" alt="room detail">
                                            Bachelor Room
                                        </a>
                                    </h2>
                                    <div class="price"><sup>$</sup><span class="number">156</span><sub>/per night</sub>
                                    </div>
                                    <ul class="specs">
                                        <li><strong>Adults:</strong> 1</li>
                                        <li><strong>Categories:</strong> Single</li>
                                        <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV,
                                            Telephone
                                        </li>
                                        <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                        <li><strong>Bed Type:</strong> One bed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <img src="./food-images/food_bk_0.jpg" alt="">
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
                                <img src="./food-images/food_bk_1.jpg" alt="">
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
                                <img src="./food-images/food_bk_2.jpg" alt="">
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
                                <img src="./food-images/food_lu_0.jpg" alt="">
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
                                <img src="./food-images/food_lu_1.jpg" alt="">
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
                                <img src="./food-images/food_lu_2.jpg" alt="">
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
                                <img src="./food-images/food_dn_0.jpg" alt="">
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
                                <img src="./food-images/food_dn_1.jpg" alt="">
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
                                <img src="./food-images/food_dn_2.jpg" alt="">
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
                        <p>” Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse
                            veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque
                            inventore accusantium tempore dolores sunt. “</p>
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
                        <p>” Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse
                            veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque
                            inventore accusantium tempore dolores sunt. “</p>
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
                        <p>” Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse
                            veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque
                            inventore accusantium tempore dolores sunt. “</p>
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
import "../javascript/checkinDate.js" ;
import "../javascript/mainScript.js";
import "../javascript/navigation.js";
import "../javascript/item-move-up.js";
import "../home/index.js";
import $ from 'jquery';


$(document).ready(function () {

  // Restaurant Options
  $(".restaurant-btn").click(function () {
    let curr_element = parseInt($(this).attr("data-id"));
    $(".restaurant-btn").removeClass("active");
    // console.log("test");
    $(this).addClass("active");
    $(".restaurant__tab").fadeOut(300, "swing");
    $(`.restaurant__tab:nth-of-type(${curr_element})`)
      .addClass("show")
      .fadeIn(300, "swing");
  });
});
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap'); */
@import "../css/main.css";
@import "../home/index.css";
html,
body {
  font-family: "Rubik";
}

/* Body */

/* HEADING OF SECTIONS */
a {
  text-decoration: none;
  color: #000;
  transition: all 0.2s ease-in-out;
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
main div:has(.sub-heading + .heading) {
  padding: 0 12px;
  margin-bottom: 20px;
}
section .heading {
  font-size: 45px;
  margin: 20px 0 0 0;
}

section .description {
  width: 50%;
  color: rgb(150, 150, 150);
  line-height: 25px;
}
/* END OF : HEADING OF SECTIONS */
.container-md{
  padding-left: 0px !important; 
  padding-right: 0px !important;
}
.rooms-top {
  padding: 112px;
}

.room-row {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 45px;
}

.room-oder {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  border-radius: 5px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
}

.room-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
}

.room-des {
  padding: 90px 111px 90px 111px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
}

.room-des .heading {
  font-size: 38px;
  margin-bottom: 30px;
  font-weight: 10;
  line-height: 1.5;
  color: #000000c2;
}

.room-des span {
  font-size: 40px;
  color: #212529;
}

.room-des sup {
  font-size: 20px;
  color: #212529;
  top: -1em;
}

.room-des sub {
  font-size: 20px;
  color: #212529;
  bottom: 0em;
}

.room-des ul {
  margin: 0px;
  padding: 0px;
}

.room-des li {
  font-size: 18px;
  margin: 10px;
  padding: 0px;
  list-style: none;
  color: #808080;
  line-height: 1.5;
  margin-bottom: 10px;
}

.room-des li strong {
  font-weight: 450;
  color: #000;
  font-size: 18px;
}

.room-des li sup {
  color: #808080;
  font-size: 12px;
  top: -6px;
}

.btn-readmore {
  display: block;
  width: fit-content;
  padding: 15px 40px;
  margin-top: 35px !important;
  color: white;
  background-color: #fc3c3c;
  border: 2px #fc3c3c solid;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
  text-transform: capitalize;
  transition: all 0.2s ease-in-out;
}

.btn-readmore:hover {
  background: none;
  color: #fc3c3c;
}

/* More rooms text */

.more-room-wrap {
  padding: 0px 25% 48px 25%;
}

.more-room {
  padding: 100px 0px 0px;
  margin: 0px -15px 48px;
  text-align: center;
}

.more-room .heading {
  color: #000000e3;
  font-size: 53px;
  font-weight: 350;
  line-height: 1.2;
  margin-bottom: 40px;
}

.more-room-content {
  font-size: 17px;
  margin-bottom: 1rem;
  font-weight: 350;
}

/* Room bot  */
.room-bot-wrap {
  background-color: #fff;
  display: grid;
  padding: 12px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, 800px);
  grid-column-gap: 45px;
  grid-row-gap: 48px;
}

.room-bot-detail { 
  height: 100%;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
}
.room-bot-img {
  width: 100%;
  height: 40%;
  overflow: hidden;
}
.room-bot-img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
}

.room-bot-img:hover img {
  transform: scale(1.05);
  filter: brightness(70%);
}
.room-bot-text {
  padding: 30px;
}

.room-bot-text .heading {
  font-size: 30px;
  margin-bottom: 26px;
  font-weight: 10;
  line-height: 1.5;
  color: #000000c2;
}

.room-bot-text .heading:hover a,
.room-bot-detail .heading:active a {
  color: rgb(255, 50, 50);
}

.room-bot-text span {
  font-size: 35px;
  /* color: #212529; */
  color: #808080;
}

.room-bot-text .price .number,
.rooms-top .price .number {
  font-size: 50px;
  color: #212529;
}

.room-bot-text sup,
.rooms-top .price sup {
  font-size: 18px;
  /* color: #212529; */
  color: #808080;
  top: -1em;
}

.room-bot-text sub,
.rooms-top .price sub {
  font-size: 18px;
  /* color: #212529; */
  color: #808080;
  bottom: 0em;
}

.room-bot-text ul {
  margin: 0px;
  padding: 0px;
}

.room-bot-text li {
  font-size: 16px;
  margin: 10px;
  padding: 0px;
  list-style: none;
  color: #808080;
  line-height: 1.5;
  margin-bottom: 10px;
}

.room-bot-text li strong {
  font-weight: 450;
  color: #000;
  font-size: 16px;
}

.room-bot-text li sup {
  color: #808080;
  font-size: 12px;
  top: -6px;
}

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
.restaurant__menu .card-cost {
  font-size: 40px;
}
.restaurant__menu .card-cost small {
  font-size: 25px;
  color: rgb(150, 150, 150);
}

/* END OF : SECTION RESTAURANT */

/* SECTION : REVIEW */
section.review {
  margin: 0 0 90px 0;
  padding-top: 20px;
  padding-bottom: 150px;
  background-color: rgb(250, 250, 250);
}

.review-container {
  margin-top: 50px;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
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
  padding: 30px;
  width: 100%;
  min-height: 200px;
  min-width: 300px;
  background-color: white;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
/* END OF SECTION : REVIEW */
@media only screen and (max-width: 1000px) {
  .room-des {
    padding: 40px 30px;
  }
  .room-des .heading {
    font-size: 30px;
  }
  .room-des li {
    font-size: 14px;
    margin: 5px;
  }
  .room-des li strong {
    font-size: 14px;
  }
  .room-bot-wrap {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: repeat(auto-fit, 800px);
    grid-column-gap: 20px;
    grid-row-gap: 35px;
  }
}

/* Responsive for mobile */
@media only screen and (max-width: 750px) {
  section .container-md {
    padding-left: 12px;
    padding-right: 12px;
  }
  .rooms-top {
    padding: 100px 0;
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
/* END OF: Responsive for mobile */

/* Responsive for large screens */
@media only screen and (min-width: 1200px) {
  .review-container {
    flex-wrap: nowrap;
  }
}
/* END OF: Responsive for large screens */

</style>