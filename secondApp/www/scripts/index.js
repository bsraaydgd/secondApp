﻿
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Cordova duraklama ve devam etme olaylarını işleme
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova yüklendi. Burada Cordova gerektiren tüm başlatma işlemlerini gerçekleştirin.
        $('#get-weather-btn').click(getWeatherWithZipCode);
    };

    function onPause() {
        // TODO: Bu uygulama askıya alındı. Burada uygulama durumunu kaydedin.
    };

    function onResume() {
        // TODO: Bu uygulama yeniden etkinleştirildi. Burada uygulama durumunu geri yükleyin.
    };
} )();