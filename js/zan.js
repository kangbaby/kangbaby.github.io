// 点赞功能
    $(document).ready(function() {
        $.fn.postLike = function() {
            if ($(this).hasClass('done')) {
                alert('^_^您已赞过此文章了');
                return false;
            } else {
                $(this).addClass('done');
                var id = $(this).data("id"),
                    action = $(this).data('action'),
                    rateHolder = $(this).children('.count');
                var ajax_data = {
                    action: "bigfa_like",
                    um_id: id,
                    um_action: action
                };
                $.post("http://www.xuanmomo.com/wp-admin/admin-ajax.php", ajax_data, function(data) {
                    $(rateHolder).html(data);
                });
                return false;
            }
        };
        $(document).on("click", ".favorite", function() {
            $(this).postLike();
        });
    });