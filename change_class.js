var class_active = ['page-template-top_page', 'btn-share', 'woocommerce-cart', 'woocommerce-wishlist', 'um-own-profile'];
        $.each(class_active, function( index, value ) {
            if($('body').hasClass(value)){
                var li_items = $('.footer li');
                li_items[index].classList.add('active');
            }
        });
