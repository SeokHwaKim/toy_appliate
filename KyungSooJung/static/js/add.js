$('#clueAdd_btn').click( function() {
    var clueCnt = $('#clues').children('.row').length;
    clueCnt += 1;

    var data = AddClue(clueCnt);
    $('#clues').append(data);
});

function AddClue(cnt)
{
    var html = '<div class="row">\n' +
'                <div class="col-2">\n' +
'                   <label class="form-check-label">종류</label>\n' +
'                   <input type="text" class="form-control" name="clueCategory'+cnt+'" placeholder="Enter ...">\n' +
'                </div>\n' +
'                <div class="col-5">\n' +
'                   <label class="form-check-label">근거</label>\n' +
'                   <textarea class="form-control" name="clueContent'+cnt+'" rows="3" placeholder="Enter ..."></textarea>\n' +
'                </div>\n' +
'                <div class="col-5">\n' +
'                   <label class="form-check-label">해석</label>\n' +
'                   <textarea class="form-control" name="clueExplain'+cnt+'" rows="3" placeholder="Enter ..."></textarea>\n' +
'                </div>\n' +
'               </div>';
    return html;
}
$('#confirm_btn').click( function(){
    var params = jQuery('#issue_form').serializeArray();
    var params_json = JSON.stringify(params);

    jQuery.ajax({
        url: '/issue',
        type: 'post',
        data:params_json,
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        success: function (result) {
            alert(result);
            location.reload();
        }
    });
});

$('#submit_btn').click( function() {
    var tagId = "";
    var clueData = {};
    $(".clueList_tr").remove();

    $.each($('#issue_form').serializeArray(), function(key, val)
        {
            if (String(val['name']) == "uploadAnalysisFile")
            {
                var value = "";
                $("input[name=uploadAnalysisFile]:checked").each(function () {
                    value += $(this).val() + ", ";
                });

                if (value.length > 2)
                {
                    value = value.substr(0,value.length-2);
                }

                tagId = val['name'] + "_tb";
                $('#'+tagId).empty();
                $('#'+tagId).text(value);
            }
            else if(String(val['name']).indexOf("clue") != -1)
            {
                clueData[val['name']] = val['value'];
            }
            else
            {
                tagId = val['name'] + "_tb";
                $('#'+tagId).empty();
                $('#'+tagId).text(val['value']);
            }

        }
    );

    var clueCnt = $('#clues').children('.row').length;
    for (var cnt=1; cnt<=clueCnt; cnt++)
    {
        $('#confirm_tb').append(addClue_tb(clueData['clueCategory'+cnt],
            clueData['clueContent'+cnt], clueData['clueExplain'+cnt]));
    }

    $("#clues_tb").attr("rowspan", ($(".clueList_tr").length+1));
});

function addClue_tb(cate, content, explain)
{
    var html = '<tr class="clueList_tr">\n' +
'                 <td>'+cate+'</td>\n' +
'                 <td>'+content+'</td>\n' +
'                 <td>'+explain+'</td>\n' +
'               </tr>';
    return html;
}

$(function (){
       $('.select2').select2();
    });