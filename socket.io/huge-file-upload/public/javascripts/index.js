/**
 * Created by I073349 on 11/19/2014.
 */
$(function(){
  var socket = io.connect('/user');
  $('#file').change(function(e) {
    var file = e.target.files[0];
    var stream = ss.createStream();

    // upload a file to the server.
    ss(socket).emit('file', stream, {size: file.size,name:file.name});
    //ss.createBlobReadStream(file).pipe(stream);
    var blobStream = ss.createBlobReadStream(file);
    var size = 0;
    blobStream.on('data', function(chunk) {
      size += chunk.length;
      console.log(Math.floor(size / file.size * 100) + '%');
      // -> e.g. '42%'
    });
    blobStream.pipe(stream);
  });
});