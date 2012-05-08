<?php
/**
 * @package nxcHotkeys
 * @author  Serhey Dolgushev <serhey.dolgushev@nxc.no>
 * @date    28 Nov 2010
 **/

$ini = eZINI::instance( 'hotkeys.ini' );
if( $ini->hasGroup( 'HotKeys' ) ) {
	echo json_encode( $ini->group( 'HotKeys' ) );
}
eZExecution::cleanExit();
?>
