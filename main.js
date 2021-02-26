var canvas=new fabric.Canvas('myCanvas');

Block_width=30;
Block_height=30;

Boy_x=10;
Boy_y=10;

var player_object="";
var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png", function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);   
    player_object.set({
        top:Boy_y,
        left:Boy_x
    });  
    canvas.add(player_object);
    });
}

function new_image(get_img)
{
    fabric.Image.fromURL(get_img, function(Img){
    block_image_object=Img;
    block_image_object.scaleToWidth(Block_width);
    block_image_object.scaleToHeight(Block_height);   
    block_image_object.set({
        top:Boy_y,
        left:Boy_x
    });  
    canvas.add(block_image_object);
    });
}

