let data:string="hello world yogesh this is typescript";
console.log(data);
class Vedios{
   constructor(protected vedioTitle:string,protected videoId : number,protected videoUploadDate:String,videoLength :string,protected views : number, protected likes : number,protected disLikes : number,protected comments :string [],protected uploadedBy : string)
{
    this.vedioTitle=vedioTitle;
    this.comments=comments;
    this.disLikes=disLikes;
    this.likes=likes;
    this.uploadedBy=uploadedBy;
    this.videoId=videoId;
    this.videoUploadDate=videoUploadDate;
    this.views=views;
                    }
  getVedioTitles=()=>{
      return this.vedioTitle;
                             }
  getVedioId=()=>{
    return this.videoId;
                        }

  getVedioUploadDate=()=>{
    return this.videoUploadDate;
                        }
getViews=()=>{
    return this.views;
}
getUploadedBy=()=>{
    return this.uploadedBy;
}
getLikes=()=>{
    return this.likes;
}

getDislikes=()=>{
    return this.disLikes;
}
getComments=()=>{
    return this.comments;
}

}
class YoutubeChannel extends Vedios{


    constructor(protected channelName:string,protected subscriberNo:number,protected totalVedio:number,protected vedioTitle:string,protected videoId : number,protected videoUploadDate:string,videoLength :string,protected views : number, protected likes : number,protected disLikes : number,protected comments :string [],protected uploadedBy : string){
        super(vedioTitle,videoId,videoUploadDate,videoLength,views,likes,disLikes,comments,uploadedBy);
        
        this.channelName=channelName;
        this.subscriberNo=subscriberNo;
        this.totalVedio=totalVedio;
        
            }

   getchannelName(){
       return this.channelName;
   }
   getsubscriberNo(){
       return this.subscriberNo;
   }
   gettotalVedio(){
       return this.totalVedio;
   }

}

let vediosInfo1 = new YoutubeChannel("WorriorSongs",40000,5,"Baghi 2 tere sang yaraaa song",123,"35/5/2018","3 min",50000,1000,200,["good","superp"],"raju");
console.log(vediosInfo1);

console.log("<----------------2nd vedioss iNformation ------------------------------------>")
let vediosInfo2 = new YoutubeChannel("WorriorSongs",40000,5,"Baghi 2 tere sang yaraaa song",123,"35/5/2018","3 min",50000,1000,200,["good","superp"],"raju");
  
let vedioname = vediosInfo2.getVedioTitles();
let vedioviews = vediosInfo2.getViews();
let vedioChannel= vediosInfo2.getchannelName();
let vedioComments= vediosInfo2.getComments();


console.log("<----------------vedio name------------------------------------>")
console.log(vedioname);
console.log("<----------------vedio views------------------------------------>")
console.log(vedioviews);
console.log("<---------------------vedio channel------------------------------->")
console.log(vedioChannel);
console.log("<----------------vedio name------------------------------------>")
console.log(vediosInfo2.getUploadedBy());
console.log("<----------------vedio comments------------------------------------>")
console.log(vediosInfo2.getComments());
console.log("<---------------------vedio likes------------------------------->")
console.log(vediosInfo2.getLikes());
console.log("<----------------vedio dislikes------------------------------------>")
console.log(vediosInfo2.getDislikes());


