// initializing global variables
var 
     indexCharOne = []
    ,indexCharTwo = [];

// Getting the equation from the input tag
function getEquation(){
    var equation = document.getElementById('equation').value
    return equation;
}
// Spliting the equation from the input tag so it can be used
function getPieces(e){
    var 
        equation = e
        ,pieces = equation.split(' ');
    return pieces;
}
// Finding parentheses and brackets to do it operations first
function findChar(fc,sc,p){
    var 
        pieces = p
        ,firstChar = fc
        ,secondChar = sc
        ,c = 0
        ,c1 = 0;
    for(var i = 0; i <= pieces.length; i++){
        if(pieces[i] == firstChar){
            indexCharOne[c] = i;
            alert(indexCharOne[c]);
            c++;
        }
        else{
            if(pieces[i] == secondChar){
                indexCharTwo[c1] = i;
                alert(indexCharTwo[c1]);
                c1++;
            }
        }
    }
}
function writeParagraph(result){
    var textParagraph = result;
    var paragraph = document.createElement("p");
    paragraph.innerHTML(textParagraph);
    document.body.appendChild(paragraph);
}
/*function equation(p){
    var 
        pieces = p
        ,change = 0 
// The variable change is used for keeping track of any changes on the result,if it value is 1 then a p tag will be created to show the update
        ,cont = 0
// cont is used for keeping track of pieces index,because when a operation is made result and pieces can no longer follow the same index
        ,result = [];
    // checking if the  indexCharOne is null or not
    for(var j = 0; j <= pieces.length; i++){
       // passing all the values before the char
       for(var i = 0; i <= indexCharOne[j]; i++){
            result[i] =pieces[i];
        }
        // Doing all the multiplication and divisions inside the char
        for(i =indexCharOne[j]; i <= indexCharTwo[j]; i++){
            result[i] =pieces[cont];
            if(result[i] == '*'){
                result[i-1] = pieces[i-1] * pieces[i+1];
                change++;
            }
            else{
                if(result[i] == '/'){
                    result[i-1] = pieces[cont-1] / pieces[cont+1];
                    cont = cont+2;
                    change++;
                }
            }
            cont++
        }
        // if any multiplication or division is done the if statment will be true
        if(change ==1){
            /*
                if the closing char(been ')',']' or '}') is not the last character in the pieces array
                there is still characters to be passed to the result array
            */
  //         if(cont != pieces.length){
               /*
                A temporary variable is assign so we can add the last characters to the result array
               */
/*               var temp = result.length;
               for(i = cont; i == pieces.length; i++){
                   result[temp] = pieces[i];
                   temp++;
               }
               temp = 0;
               cont = 0;
           }
            writeParagraph(result);
            change = 0;
            pieces = result;
        }
        // Doing all the addtions and subtractions inside the char
        for(i =indexCharOne[j]; i <= indexCharTwo[j]; i++){
            result[i] =pieces[cont];
            if(result[i] == '+'){
                result[i-1] = pieces[i-1] + pieces[i+1];
                change++;
            }
            else{
                if(result[i] == '-'){
                    result[i-1] = pieces[cont-1] - pieces[cont+1];
                    cont = cont+2;
                    change++;
                }
            }
            cont++
        }*/
//        if(change ==1){
            /*
                if the closing char(been ')',']' or '}') is not the last character in the pieces array
                there is still characters to be passed to the result array
            */
  //          if(cont != pieces.length){
               /*
                A temporary variable is assign so we can add the last characters to the result array
               */
/*               temp = result.length;
               for(i = cont; i == pieces.length; i++){
                   result[temp] = pieces[i];
                   temp++;
               }
               temp = 0;
               cont = 0;
            }    
            writeParagraph(result);
            change = 0;
            pieces = result;
        }
    }
*/
function main(){
    var 
     formula = getEquation();
    var
    pieces = getPieces(formula);
    findChar('(',')',pieces);
    if(indexCharOne != null){
            //writeParagraph('dentro do if indexCharOne != null');
            document.getElementById('result').innerHTML = 'dentro do if indexCharOne != null';
                //checks if there is the same amount of 
        if(indexCharOne.length > indexCharTwo.length){
            //writeParagraph('Atenção, tem uma quantidade maior de "(" do que ")"');
           document.getElementById('result').innerHTML = 'Atenção, tem uma quantidade maior de "(" do que ")"';
        }
        else{
            if(indexCharOne.length < indexCharTwo.length){
                //writeParagraph('Atenção,tem uma quantidade maior de ")" do que "("');
                document.getElementById('result').innerHTML = 'Atenção,tem uma quantidade maior de ")" do que "("';
            }
            else{
            //writeParagraph('prestes a chamar a função equation');
              document.getElementById('result').innerHTML = 'prestes a chamar a função equation';
              //equation(pieces);
            }
        }
    }
    else{
        //writeParagraph('fora do if indexCharOne != null');
        document.getElementById('result').innerHTML = 'fora do if indexCharOne != null';
    }

}