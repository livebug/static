function togglePasswordVisibility(input_ele,i_ele) {
    var passwordField = document.getElementById(input_ele);
    var eyeicon = document.getElementById(i_ele);
    // 切换密码字段的 type 属性值来改变可见状态
    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeicon.classList.remove("bi-eye"); // 移除隐藏图标类
        eyeicon.classList.add("bi-eye-slash"); // 添加显示图标类
    } else {
        passwordField.type = "password";
        eyeicon.classList.remove("bi-eye-slash"); // 移除显示图标类
        eyeicon.classList.add("bi-eye"); // 添加隐藏图标类
    }
}