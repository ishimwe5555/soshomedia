/**
 * Created by pirate on 19.04.17.
 */
jQuery(document).ready(function(){
    let main_url = jQuery('#main_url').val();
    jQuery('.social').click(function(){
        var sort = '';
        var social=jQuery('.social');
        var len = social.length;
        var flag = 1;
        social.each(function (n, i) {
            if (!jQuery(i).is(':checked')) {
                flag = 0;
            }
            else
            {
                if(n==len-1)
                    sort += (jQuery(i).data('social'));
                else
                    sort += (jQuery(i).data('social'))+',';
            }
        })
        if(flag==0) {
            var query = '&social=' + sort;
        }
        else
        {
            var query = '';
        }
        megaFilter(query, 'social');
    })
    jQuery('.filter').click(function(){
        var filter=jQuery('.filter');
        var flag = 1;
        var sort = '';
        var len = social.length;
        filter.each(function (n, i) {
            if (!jQuery(i).is(':checked')) {
                flag = 0;
            }
            else
            {
                if(n==len-1)
                    sort += (jQuery(i).data('filter'));
                else
                    sort += (jQuery(i).data('filter'))+',';
            }
        })
        var query = '&filter=' + sort;
        megaFilter(query, 'filter');
    })
    jQuery('#checkAll').click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery(".checkCategory").prop('checked', true);
            var query = '';
            megaFilter(query,'cat');
        }
        else {
            jQuery(".checkCategory").prop('checked', false);
            var query = '&cat=';
            megaFilter(query,'cat');
        }
    });
    jQuery('.checkCategory').click(function () {

        if (!jQuery(this).is(':checked')) {
            jQuery("#checkAll").prop('checked', false);
        }
        var flag = 1;
        var checkCategory = jQuery('.checkCategory');
        var catSelect = '';
        var len = checkCategory.length;
        checkCategory.each(function (n, i) {
            if (!jQuery(i).is(':checked')) {
                flag = 0;
            }
            else {
                catSelect += jQuery(i).val() + ',';
            }
        })
        if (flag == 1) {
            jQuery("#checkAll").prop('checked', true);
            query = '';
            megaFilter(query,'cat');
        }
        else {
            catSelect = catSelect.substring(0, catSelect.length - 1);
            var query = '&cat=' + catSelect;
            megaFilter(query, 'cat');
        }
    })
    jQuery('.order').click(function () {
        var sort = jQuery(this).data('name');
        var attr = jQuery('#attr').val();
            if (attr == 'asc') {
                attr = 'desc';
            }
            else {
                attr = 'asc';
            }
        var query = '&sort=' + sort + '&attr=' + attr;
        megaFilter(query, 'sort');

    })
    function megaFilter(query, command ) {
        var page = jQuery('.pagination li.active').children().html();

        if (page) {
            page = 'page=' + page;
        }
        else {
            page = '';
        }
        if (command != 'social') {
            if (!jQuery('#social').val() == '') {
                query += '&social=' + jQuery('#social').val();
            }
        }
        if (command != 'filter') {
            if (!jQuery('#filter').val() == '') {
                query += '&filter=' + jQuery('#filter').val();
            }
        }
        if (command != 'sort') {
            if (!jQuery('#sort').val() == '') {
                query += '&sort=' + jQuery('#sort').val() + '&attr=' + jQuery('#attr').val();
            }
        }
        if (command != 'cat') {
            if (!jQuery('#cat').val() == '') {
                query += '&cat=' + jQuery('#cat').val();
            }
        }
        if (command != 'search') {
            if (!jQuery('#search').val() == '') {
                query += '&search=' + jQuery('#search').val();
            }
        }
        window.location = '/'+main_url+'?' + page + query;
    }
})