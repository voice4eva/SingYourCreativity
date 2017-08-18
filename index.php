<?php
require_once('geoplugin.class.php');
$geoplugin = new geoPlugin();
$geoplugin->locate();
// create a variable for the country code
$var_country_code = $geoplugin->countryCode;
// redirect based on country code:
if ($var_country_code == "FR" || $var_country_code == "CH") {
header('Location: http://www.singyourcreativity.com/fr/index.html');
}
else {
header('Location: http://www.singyourcreativity.com/en/index.html');
}
?>
