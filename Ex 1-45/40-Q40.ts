interface Album{
    artist:string,
    album_title:string,
    tracks?:number
}
function make_album(artist:string,album_title:string,tracks?:number){
 const album:Album={
     artist:artist,
     album_title:album_title
 }
 if(tracks!==undefined){
    album.tracks=tracks
 }
 console.log(album)
 
}
make_album('Huzaifa','codesong')
make_album('Annie','codesong',234)
make_album('John','codesong')
export{}