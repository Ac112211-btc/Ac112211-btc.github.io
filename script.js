// ========== 轮播图 ==========
const banner = document.getElementById('banner');

const images = [
    'images/banner1.jpg',
    'images/banner2.jpg',
    'images/banner3.jpg'
];

let current = 0;

setInterval(() => {
    current++;

    if (current >= images.length) {
        current = 0;
    }

    banner.src = images[current];
}, 4000);


// ========== 弹窗功能 ==========
const modal = document.getElementById('bookingModal');

const openModal = document.getElementById('openModal');
const bookBtn = document.getElementById('bookBtn');
const chatBtn = document.getElementById('chatBtn');
const closeModal = document.getElementById('closeModal');


// 打开弹窗（导航栏按钮）
openModal.addEventListener('click', () => {
    modal.style.display = 'flex';
});


// 打开弹窗（首页按钮）
bookBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});


// 在线咨询按钮
chatBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});


// 关闭弹窗（×）
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});


// 点击弹窗外部关闭
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
// 获取提交按钮
const submitBtn = document.getElementById("submitBooking");

submitBtn.addEventListener("click", function () {

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    // 判断是否填写
    if (name === "") {
        alert("请输入姓名！");
        return;
    }

    if (phone === "") {
        alert("请输入联系电话！");
        return;
    }

    if (service === "") {
        alert("请选择预约项目！");
        return;
    }

    // 模拟提交成功
    alert("🎉 预约提交成功！\n\n感谢您的预约，我们将尽快与您联系。");

    // 清空表单
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("service").selectedIndex = 0;
    document.getElementById("message").value = "";

    // 关闭弹窗
    document.getElementById("bookingModal").style.display = "none";
});