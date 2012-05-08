jQuery(
	function() {
		var buttons = {
			'Edit': jQuery( 'input[name="EditButton"]' ),
			'Publish': jQuery( 'input[name="PublishButton"]' ),
			'Store': jQuery( 'input[name="StoreButton"]' ),
			'Discard': jQuery( 'input[name="DiscardButton"]' ),
			'Preview': jQuery( 'input[name="PreviewButton"]' ),
			'PreviewPublish': jQuery( 'input[name="PreviewPublishButton"]' )
		};

		rootURI = '';
		var rootURIEl = jQuery( 'input[name="RootURI"]' );
		if( rootURIEl.length > 0 ) {
			rootURI = rootURIEl.val();
		}

		jQuery.getJSON( rootURI + '/nxc_hotkeys/get_settings', function( data ) {
			jQuery.each( buttons, function( index, button ) {
				if(
					button.length > 0
					&& typeof data[ index ] !== 'undefined'
				) {
					var keys = data[ index ].split( ',' );
					jQuery.each( keys, function( i, key ) {
						shortcut.add(
							jQuery.trim( key ),
							function( e ) {
								jQuery( button[0] ).trigger( 'click' );
								return false;
							}
						);
					} );
				}
			} );
		} );
	}
);
