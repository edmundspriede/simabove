<script>
    
    jQuery( document ).ready( function() {
        
        let $ = jQuery;
        
        $( document ).on( 'jet-form-builder/ajax/on-success', formHandle );
        
        $( document ).on( 'jet-form-builder/ajax/on-error', formHandleError );
        
        function formHandleError( event, response, $form, data ) {
            	const popup = document.getElementById('popup-error');
                popup.style.display = 'block';
                popup.style.bottom = '10px';
                setTimeout(function() {
                   popup.style.display = 'none';
                   popup.style.bottom = '-100px';
                   
                }, 3000);
        }        

        function formHandle( event, response, $form, data ) {
            
            if ( ! window.JetEngine ) {
                return;
            }
    
            let formId = $form.data('form-id');
    
            $( '.update-on-form-' + formId ).each( function() {
                
                let $listing = $( this ),
                    nav   = $listing.find( '.jet-listing-grid__items' ).data( 'nav' ),
        			query = nav.query;
    	
    			let args = {
    				handler:'get_listing',
    				container:$listing.find( '.elementor-widget-container' ),
    				masonry:false,
    				slider:false,
    				append:false,
    				query: query,
    				widgetSettings: nav.widget_settings,
    			};
    	
    			window.JetEngine.ajaxGetListing( args, function( response ) {
    				let $container = $listing.children( '.elementor-widget-container' );
    				$container.html( $( response.data.html ) );
    				window.JetEngine.widgetListingGrid( $listing );
    				window.JetEngine.initElementsHandlers( $container );
    			});
    			
    			const popup = document.getElementById('popup-success');
                popup.style.display = 'block';
                popup.style.bottom = '10px';
                setTimeout(function() {
                   popup.style.display = 'none';
                   popup.style.bottom = '-100px';
                   
                }, 3000);
    			
            } );
            
        }
        
    } );
    
</script>

  <style>
        #popup-success {
            color: #18363E ;
            display: block;
            position: fixed;
            right: 1%;
            bottom: -100px;
            transform: translate(-50%, -50%);
            padding: 20px 30px;
            background-color: #e5972b;
            border: 0px solid #ccc;
            border-radius: 30px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            transition: 1.5s ;
            transition-timing-function: ease;
        }
          #popup-error {
            color: #18363E ;
            display: block;
            position: fixed;
            right: 1%;
            bottom: -100px;
            transform: translate(-50%, -50%);
            padding: 20px 30px;
            background-color: #e5972b;
            border: 0px solid #ccc;
            border-radius: 30px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            transition: 1.5s ;
            transition-timing-function: ease;
        }
        
        .esim-popup-close {
            position: absolute;
            top: 5px;
            right: 20px;
            height: 7px;
            width: 7px;
        }
    </style>

<div id="popup-success">Data refreshed
   <div class="esim-popup-close" >
       <a class="">
			<svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#18363E"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>			
								
			</a>
       
   </div>
   
</div>
<div id="popup-error">Something went wrong
   <div class="esim-popup-close" >
       <a class="">
			<svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#18363E"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>			
								
			</a>
       
   </div>
   
</div>
