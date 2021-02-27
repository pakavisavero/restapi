'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/').get(jsonku.index);
    app.route('/view').get(jsonku.tampilsemuamahasiswa);
    app.route('/view/:id').get(jsonku.tampilberdasarkanid);
    app.route('/tambah').post(jsonku.tambahMahasiswa);
    app.route('/ubah').put(jsonku.ubahMahasiswa);
    app.route('/hapus').delete(jsonku.hapusMahasiswa);
}

