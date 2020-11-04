function callData()
{
    var param = {
        'team': $('#team').val(),
        'category': $('#category').val(),
        'version': $('#version').val()

    };

    jQuery.ajax({
        url: '/custom',
        type: 'post',
        data: JSON.stringify(param),
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        success: function (result) {
            $('#view').html(result['data']);
            load();
        }
    })
}

$(document).ready(function(){
    $('.select2').select2();

    $('#team').change(function() {
        callData(JSON.stringify())
    });
    $('#category').change(function() {
        callData(JSON.stringify())
    });
    $('#version').change(function() {
        callData(JSON.stringify())
    });
});