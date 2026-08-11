/* =========================
   御颜阁 JavaScript
========================= */


/* =========================
   1. Banner 自动轮播
========================= */

const banners = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg"
];

const bannerElement = document.getElementById("banner");

let currentBanner = 0;


/* 确保 Banner 存在 */

if (bannerElement && banners.length > 0) {

    setInterval(function () {

        currentBanner++;

        if (currentBanner >= banners.length) {
            currentBanner = 0;
        }

        bannerElement.style.opacity = "0.2";

        setTimeout(function () {

            bannerElement.src =
                banners[currentBanner];

            bannerElement.style.opacity = "1";

        }, 300);

    }, 4000);

}


/* =========================
   2. AOS 滚动动画
========================= */

if (typeof AOS !== "undefined") {

    AOS.init({
        duration: 900,
        once: true,
        offset: 80
    });

}


/* =========================
   3. 预约弹窗
========================= */

const bookingModal =
    document.getElementById("bookingModal");

const openModal =
    document.getElementById("openModal");

const bookBtn =
    document.getElementById("bookBtn");

const closeModal =
    document.getElementById("closeModal");


/* 打开弹窗 */

function showBookingModal() {

    if (bookingModal) {

        bookingModal.classList.add("active");

        document.body.style.overflow = "hidden";

    }

}


/* 关闭弹窗 */

function hideBookingModal() {

    if (bookingModal) {

        bookingModal.classList.remove("active");

        document.body.style.overflow = "";

    }

}


/* 导航栏预约按钮 */

if (openModal) {

    openModal.addEventListener(
        "click",
        showBookingModal
    );

}


/* 首页预约按钮 */

if (bookBtn) {

    bookBtn.addEventListener(
        "click",
        showBookingModal
    );

}


/* 关闭按钮 */

if (closeModal) {

    closeModal.addEventListener(
        "click",
        hideBookingModal
    );

}


/* 点击弹窗外部关闭 */

if (bookingModal) {

    bookingModal.addEventListener(
        "click",
        function (event) {

            if (event.target === bookingModal) {

                hideBookingModal();

            }

        }
    );

}


/* =========================
   4. ESC 关闭弹窗
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            hideBookingModal();

        }

    }
);


/* =========================
   5. 在线咨询
========================= */

const chatBtn =
    document.getElementById("chatBtn");

if (chatBtn) {

    chatBtn.addEventListener(
        "click",
        function () {

            const phone =
                "85298895174";

            const url =
                "https://wa.me/" + phone;

            window.open(
                url,
                "_blank"
            );

        }
    );

}


/* =========================
   6. 提交预约
========================= */

const submitBooking =
    document.getElementById("submitBooking");


if (submitBooking) {

    submitBooking.addEventListener(
        "click",
        function () {

            const name =
                document.getElementById("name").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const service =
                document.getElementById("bookingService").value;

            const message =
                document.getElementById("message").value.trim();


            /* 检查姓名 */

            if (!name) {

                alert("请输入您的姓名");

                return;

            }


            /* 检查电话 */

            if (!phone) {

                alert("请输入您的联系电话");

                return;

            }


            /* 检查项目 */

            if (!service) {

                alert("请选择预约项目");

                return;

            }


            /* 暂时使用 WhatsApp 发送预约 */

            const text =
                "御颜阁预约\n\n" +
                "姓名：" + name + "\n" +
                "电话：" + phone + "\n" +
                "项目：" + service + "\n" +
                "需求：" + (message || "暂无");


            const whatsappUrl =
                "https://wa.me/85298895174?text=" +
                encodeURIComponent(text);


            window.open(
                whatsappUrl,
                "_blank"
            );


            /* 清空表单 */

            document.getElementById("name").value = "";

            document.getElementById("phone").value = "";

            document.getElementById("bookingService").value = "";

            document.getElementById("message").value = "";


            hideBookingModal();

        }
    );

}