function onFormSubmit(e){
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName("score-board");
  var data = sheet.getDataRange().getValues();
  var colNum, rowNum;
  var ColNam = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
                'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 
                'AS', 'AT', 'AU', 'AV','AW', 'AX', 'AY', 'AZ', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ'];
  var dt2 = new Date(e.namedValues['Week'][0]);
  var dt1, t1, t2, diffInDays;
  for(var j=0; j<data[1].length;j++){
    dt1 = new Date(data[0][j]);
    t1 = dt1.getTime(),
    t2 = dt2.getTime();
    diffInDays = Math.floor((t1-t2)/(24*3600*1000));
    if(diffInDays == 0){
      colNum = j;
      for(var k=0; k<20;k++){
        if(data[k][colNum - 1] == e.namedValues['Player Name'][0]){
          rowNum = k+1;
          var m = ColNam[colNum];
          sheet.getRange(ColNam[colNum]+rowNum).setValue(e.namedValues['Round 1 Score'][0]);
          sheet.getRange(ColNam[colNum+1]+rowNum).setValue(e.namedValues['Round 2 Score'][0]);
          sheet.getRange(ColNam[colNum+2]+rowNum).setValue(e.namedValues['Round 3 Score'][0]);
          sheet.getRange(ColNam[colNum+3]+rowNum).setValue(e.namedValues['Round 4 Score'][0]);
          break;
        }
      }
      break;
    }
  }
}
