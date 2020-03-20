<?php
return array(
    // set your paypal credential
    'client_id' => 'AW0cUB9LXFGUWogn_YZdIYFY2jjWl_Uh3Rxu-I1agC7leBigRgYRrkSOB6ef_vTFIgavVDxTlX27wQtj',
    'secret' => 'EFR-AT-f9animBHvYHmk80pZqMXUUWYPeCpDwmfo9Zzfg8bWji6PbLjqLOH5YjXJki4AUGo2-xC-9Kh8',

    /**
     * SDK configuration
     */
    'settings' => array(
        /**
         * Available option 'sandbox' or 'live'
         */
        'mode' => 'sandbox',

        /**
         * Specify the max request time in seconds
         */
        'http.ConnectionTimeOut' => 30,

        /**
         * Whether want to log to a file
         */
        'log.LogEnabled' => true,

        /**
         * Specify the file that want to write on
         */
        'log.FileName' => storage_path() . '/logs/paypal.log',

        /**
         * Available option 'FINE', 'INFO', 'WARN' or 'ERROR'
         *
         * Logging is most verbose in the 'FINE' level and decreases as you
         * proceed towards ERROR
         */
        'log.LogLevel' => 'FINE'
    ),
);
