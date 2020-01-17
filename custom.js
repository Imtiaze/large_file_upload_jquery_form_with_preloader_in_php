$().ready(function () {
    $('#upload-btn').on('click', function() {
        $('#file-upload').ajaxSubmit({
            beforeSubmit: function(formData, formObject, formOptions) {
                // formData.push(
                //     {name: 'website', value: 'https://hello.com'},
                //     {name: 'website', value: 'https://hello.com'}
                // )
                // console.log('formData');
                // console.log(formData);
                // console.log('formObject');
                // console.log(formObject);
                // console.log('formOptions');
                // console.log(formOptions);
            },
            beforeSend: function() {
                // console.log('beforeSend');
            },
            uploadProgress: function(event, position, total, percentComplete) {

                $('.progress').css('width', percentComplete+'%');
                $('#progress span').html(percentComplete+'%');
                // console.log('event')
                // console.log(event)
                // console.log('position')
                // console.log(position)
                // console.log('total')
                // console.log(total)
                // console.log('percentComplete')
                // console.log(percentComplete)
            },
            success: function(response) {
                // console.log(response);

                var videoResponse = $.parseJSON(response);

                var htmlVideoTag = '<video width="490" height="350" controls>'+
                                        '<source src="./uploads/'+ videoResponse.message +'" type="video/mp4">'+
                                        '<source src="movie.ogg" type="video/ogg">'+
                                        'Your browser does not support the video tag.'+
                                    '</video>';

                $('.video-container').html(htmlVideoTag);
            }
        });
    });
});