function show() {
    const int_value = Number(document.getElementById('inp').value);
    if (int_value >= 80) {
        document.getElementById("result").innerText = "Grade 4 Very Good";
    }
    else if (int_value >= 70) {
        document.getElementById("result").innerText = "Grade 3 Good";
    }
    else if (int_value >= 60) {
        document.getElementById("result").innerText = "Grade 2 Nice";
    }
    else if (int_value >= 50) {
        document.getElementById("result").innerText = "Grade 1 Nice Try";
    }
    else if (int_value >= 40) {
        document.getElementById("result").innerText = "ไม่ผ่านน้าา พยายามเข้า";
    }
    else if (int_value < 40) {
        document.getElementById("result").innerText = "ไม่ผ่านน้าาพยายามเข้า";
    }
    else 
        document.getElementById("result").innerText = "ไม่มีคำตอบให้เว้ยยย";
}