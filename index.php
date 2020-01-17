<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Large file upload</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="video-container">

        </div>
        <form id="file-upload" onsubmit="return false" method="post" action="upload.php" enctype="multipart/form-data">
            <input type="file" name="video">
            <button type="submit" id="upload-btn">Upload</button>
        </form>
        <div id="progress">
            <div class="progress">

            </div>
            <span></span>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.js"></script>
    <script src="custom.js"></script>
</body>
</html>