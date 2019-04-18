
$('#Moyenne').click(function() {
  var name = $('#name').val();
  var note1 = parseFloat($('#1').val());
  var note2 = parseFloat($('#2').val());
  var note3 = parseFloat($('#3').val());
  var note4 = parseFloat($('#4').val());
  var note5 = parseFloat($('#5').val());
  var averageStudent = ((note1 + note2 + note3 + note4 + note5) / 5);
  var regexNote = /^([1]?[0-9][.]?[0-9]{0,2})|([2][0][.]?[0]{0,2})$/
  if(!regexNote.test(note1 || note2 || note3 || note4 || note5)){
    Swal.fire('Merci de rentrer des informations valides!!!');
  }else if (averageStudent == 0) {
    Swal.fire('Mr ' + name + ' votre moyenne est de ' + averageStudent + ' sur 20 LOSER faut se bouger oh!');
  } else if (averageStudent>=0 && averageStudent<5) {
    Swal.fire('Mr ' + name + ' votre moyenne est de ' + averageStudent + ' sur 20 c\'est vachement mauvais!');

  }else if (averageStudent>=5 && averageStudent<10) {
    Swal.fire('Mr ' + name + ' votre moyenne est de ' + averageStudent + ' sur 20 c\'est mauvais!');

  }else if (averageStudent>=10 && averageStudent<15) {
    Swal.fire('Mr ' + name + ' votre moyenne est de ' + averageStudent + ' sur 20 c\'est bien!');

  }else if (averageStudent>=15 && averageStudent<20) {
    Swal.fire('Mr ' + name + ' votre moyenne est de ' + averageStudent + ' sur 20 c\'est trés bien!');

  }else if (averageStudent ==20) {
    Swal.fire('Mr ' + name + ' votre moyenne est de ' + averageStudent + ' sur 20 c\'est Excellent!');
 }

});
