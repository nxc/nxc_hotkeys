<?php
/**
 * @package nxcHotkeys
 * @author  Serhey Dolgushev <serhey.dolgushev@nxc.no>
 * @date    28 Nov 2010
 **/

$Module = array(
	'name'            => 'NXC Hotkeys',
 	'variable_params' => true
);

$ViewList = array(
	'get_settings' => array(
		'functions' => array( 'settings' ),
		'script'    => 'get_settings.php'
	)
);

$FunctionList = array(
	'settings' => array()
);
?>
