var imgNumber = 0;

var picArray = new Array();
    picArray[0]=["images/devlogo.png"];
    picArray[1]=["images/missile.jpg"];
    picArray[2]=["images/air.jpg"];
    picArray[3]=["images/carburn.jpg"];
    picArray[4]=["images/redback.jpg"];

var img1 = document.getElementById("mainimg");
img1.src = picArray[imgNumber];

function right(){

    imgNumber++;
    if(imgNumber==5)
        {
            imgNumber = 0;
            img1.src = picArray[imgNumber];
        }
    else
        {
            img1.src = picArray[imgNumber];
        }
    
}

function left(){

    imgNumber--;
    if(imgNumber==-1)
        {
            imgNumber = 4;
            img1.src = picArray[imgNumber];
        }
    else
        {
            img1.src = picArray[imgNumber];   
        }
    
}


function rand(){
alert(" The 'SURPRISE ME' button is currently under construction and will be available in the next update ");

}
            /*{
              var int randommood =  Math.ceil(Math.random()*5);
                
                if( randommood == 1)
                {
                    
                }
            }
            */
