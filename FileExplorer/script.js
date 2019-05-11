var fs,url,arr,link="icons/folder.png";
var setdird = new Array();
function AUTOCALL()
{
    pc.style.backgroundColor = "whitesmoke";
    pc.style.color = "slateblue"
    home.style.backgroundColor = "darkblue";
    home.style.color = "white";
    fs = require('fs');
    url = process.cwd();
    arr = url.split("\\");    
    seturl(arr[arr.length-1]);    
    setdir(url)
}
function seturl(string)
{    
    path = '';    
    for(i=0;i<arr.length;i++)
    {
        if(string==arr[i])
        {
            path+='<a style="color: black; cursor: default; font-size: 4.3vmin">'+arr[i]+'</a>';                        
        }
        else
        {            
            path+='<a style="color: darkblue; cursor: pointer; font-size: 4.3vmin" onclick="setpath('+i+')">'+arr[i]+'</a>';
        }        
        if(arr.length-1!==i)
        {
            path+='  /  ';           
        }        
    }    
    urlbox.innerHTML = path;    
}
function setpath(str)
{
    seturl(arr[str]);
    str = url.split("\\"+arr[str+1]);    
    if(str[0]=="C:")
    {
        str[0]="C:\\"        
    }    
    setdir(str[0]);
}
function setdir(str)
{
    var inc=-1;    
    var dir=new Array();
    var folders = '';    
    fs.readdirSync(str).forEach(file => {
        inc++;
        dir[inc]=file;
    });    
    for(i=0;i<dir.length;i++)
    {
        inc  = dir[i].split(".");        
        link="icons/folder.png";
        if(inc.length>1)
        {
            switch(inc[inc.length-1])
            {
                case "html": link="icons/html.png"; break;
                case "js": link="icons/blank.png"; break;
                case "json": link="icons/blank.png"; break;
                case "txt": link="icons/text.png"; break;
                case "mp3": link="icons/music.png"; break;
                case "css": link="icons/css.png"; break;
                case "png": link=str+"\\"+dir[i];  break;
                case "jpg": link=str+"\\"+dir[i];  break;
                case "JPG": link=str+"\\"+dir[i];  break;
                case "mp4": link="icons/movie.png"; break;
                case "pdf": link="icons/pdf.png"; break;
                case "zip": link="icons/compressed.png"; break;
                case "exe": link="icons/flash.png"; break;
                default: link="icons/folder.png"; break;
            }
        }                  
        setdird[i] = str+"\\"+dir[i];
        folders+='<button onclick="insdefolder('+i+')" style="height: 70px; width: 90px; cursor: pointer; background: none; border: none; float: left; margin-left: 3%; margin-right: 3%"><img style="height: 40px; width: 40px" src="'+link+'"><br>'+dir[i]+'</button>';    
    }    
    directory.innerHTML = folders;
}
function insdefolder(x)
{    
    url = setdird[x];    
    arr = url.split("\\");    
    seturl(arr[arr.length-1]);
    setdir(url);
}

var pic = new Array();
var directories = new Array();
var pic_id=-1,dir_id=-1,gflag=-1;
function getpic(urlid)
{               
    fs.readdirSync(urlid).forEach(file => { 
        try{ 
            fs.rmdirSync(x+"/"+file); 
            fs.mkdirSync(x+"/"+file);             
        }
        catch(err){ 
            inc = file.split(".");  hiphon = file.split("-");
            if(inc.length>1 && (inc[inc.length-1]=="png" || inc[inc.length-1]=="jpg")){
                pic[++pic_id] = urlid+"/"+file;                 
            }
            if(inc.length==1 && hiphon.length==1){
                directories[++dir_id]=urlid+"/"+file;                 
            }            
        }         
    });        
    if(gflag==-1){
        gflag=0; fldr="";        
        urlbox.innerHTML = '<a>PICTURES</a>';                    
        for(i=0;i<directories.length;i++){
            getpic(directories[i]);            
        }                    
        for(i=0;i<pic.length;i++){
            picname = pic[i].split("/");
            fldr+='<button onclick="" style="height: 200px; width: 200px; cursor: pointer; background: none; border: none; float: left; margin-left: 3%; margin-right: 3%"><img style="height: 180px; width: 180px" src="'+pic[i]+'"><br>'+picname[picname.length-1]+'</button>';    
            directory.innerHTML = fldr;            
        }               
    }     
}
function pictures()
{
    pc.style.backgroundColor = "darkblue";
    pc.style.color = "white";
    home.style.backgroundColor = "whitesmoke";
    home.style.color = "slateblue";
    pic = new Array();
    directories = new Array();
    pic_id=-1,dir_id=-1,gflag=-1;
    getpic('C:/Users/admin/Desktop/yuvraj/DRIVE/zPERSONAL');
}