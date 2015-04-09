/**
 * Main script
 **/
(function($){
    $(document).ready(function()
    {
        //Resize
        contentResize();

        //Resize content when window resizing
        $(window).resize(function()
        {
            contentResize();
        });

        function contentResize()
        {
            var winWidth    = $(window).width();
            var winHeight   = $(window).height();

            if ( winWidth >= 768 )
            {
                var titleHeight = $( '.site-title' ).height();
                var textHeight  = $( '.csoon-text' ).height();
                var socialWidth = $( '.social-links' ).width();
                var contWidth   = $( '.container' ).width();
                var leftWidth   = $( '.csoon-left' ).width();

                var titleMargin = ( (winHeight - titleHeight) / 2 ) - 15;
                var textMargin  = ( (winHeight - textHeight) / 2 ) - 15;
                var socialLeft  = ( ( winWidth - contWidth ) / 2 ) + leftWidth + 40;

                $( '.skin' )
                    .width( winWidth )
                    .height( winHeight );

                $( '.csoon-left' ).height( winHeight );
                $( '.csoon-right' ).height( winHeight );
                $( '.csoon-text' ).css( 'margin-top', textMargin );
                $( '.site-title' ).css( 'margin-top', titleMargin );
                $( '.social-links' ).css( 'left', socialLeft );
            }
            else
            {
                $( '.skin' )
                    .width( winWidth )
                    .height( 'auto' );

                $( '.csoon-left' ).height( 'auto' );
                $( '.csoon-right' ).height( 'auto' );
                $( '.csoon-text' ).css( 'margin-top', 0 );
                $( '.site-title' ).css( 'margin-top', 0 );
                $( '.social-links' ).css( 'left', 0 );
            }
        }
    });
})(jQuery);
