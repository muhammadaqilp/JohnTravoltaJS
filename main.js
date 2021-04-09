function hasil() {
    // entered data from the form
    let jamKerja = document.getElementById('jam-kerja').value;
    jamKerja = parseInt(jamKerja)
    let jam_normal = 40
    let gaji_normal = 15000
    let gaji_lembur = 1.5 * 15000
    let gaji_total = 0

    if (jamKerja > jam_normal){
        gaji_total = (jam_normal * gaji_normal) + ((jamKerja - jam_normal) * gaji_lembur);
        document.getElementById('hasil').innerHTML = gaji_total;
        localStorage.setItem("gaji_total", gaji_total);
    } else {
        gaji_total = jamKerja * gaji_normal;
        document.getElementById('hasil').innerHTML = gaji_total;
        localStorage.setItem("gaji_total", gaji_total);
    }
}

function hasil2() {
    let pengeluaran = document.getElementById('pengeluaran').value;
    pengeluaran = parseInt(pengeluaran)
    let gaji_total = localStorage.getItem('gaji_total');
    gaji_total = parseInt(gaji_total)

    if (gaji_total > pengeluaran) {
        let hasil2 = gaji_total - pengeluaran;
        document.getElementById('hasil2').innerHTML = "John BISA MENABUNG sebesar Rp." + hasil2;
    } else if (gaji_total == pengeluaran) {
        document.getElementById('hasil2').innerHTML = "John TIDAK BISA MENABUNG";
    } else {
        document.getElementById('hasil2').innerHTML = "John butuh CARI TAMBAHAN";
    }
}