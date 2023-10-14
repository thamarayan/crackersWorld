
var Product = require('../modals/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://crackersworld:p97wCW7y4hNykRgd@cluster0.slsto1f.mongodb.net/?retryWrites=true&w=majority');

var products =  [
      
     
        new Product({
            name:"4 Gold Deluxe Lakshmi",
            content:"1PKT",
            type:"SOUND CRACKERS",
            actualPrice:150,
            discountPrice: 37.5,
        }),
    
        new Product({
            name: "4 Dlx Lakshmi",
            content:"1PKT",
            type:"SOUND CRACKERS",
            actualPrice:120,
            discountPrice: 30
        }),
        
        new Product({
            name: "4 Lakshmi",
            content:"1PKT",
            type:"SOUND CRACKERS",
            actualPrice:100,
            discountPrice: 25
        }),
    
         new Product({
            name: "3½ Lakshmi",
            content:"1PKT",
            type:"SOUND CRACKERS",
            actualPrice:76,
            discountPrice: 19
        }),
    
        new Product({
            name: "2¾ Kuruvi",
            content:"1PKT",
            type:"SOUND CRACKERS",
            actualPrice:40,
            discountPrice: 10
        }),
    
        new Product({
            name: "Two Sound",
            content:"1PKT",
            type:"SOUND CRACKERS",
            actualPrice:110,
            discountPrice: 27.5
        }),
    
        new Product({
            name: "Red Bijili",
            content:"1PKT",
            type:"BIJILI CRACKERS",
            actualPrice:150,
            discountPrice: 37.5
        }),
    
        new Product({
            name: "Stripped Bijili",
            content:"1PKT",
            type:"BIJILI CRACKERS",
            actualPrice:170,
            discountPrice: 42.5
        }),
    
        new Product({
            name: "Bullet Bomb",
            content:"1Box",
            type:"BOMBS",
            actualPrice:104,
            discountPrice: 26
        }),
    
        new Product({
            name: "Atom Bomb",
            content:"1Box",
            type:"BOMBS",
            actualPrice:156,
            discountPrice: 39
        }),
    
        new Product({
            name: "Hydro Bomb",
            content:"1Box",
            type:"BOMBS",
            actualPrice:200,
            discountPrice: 50
        }),
    
        new Product({
            name: "Avatar Bomb",
            content:"1BOX",
            type:"BOMBS",
            actualPrice:264,
            discountPrice: 66
        }),
    
        new Product({
            name: "King of Kongo",
            content:"1PKT",
            type:"BOMBS",
            actualPrice:320,
            discountPrice: 80
        }),
    
        new Product({
            name: "Jug Mug 3000",
            content:"1Box",
            type:"MICRO FUSE BOMBS",
            actualPrice:280,
            discountPrice: 70
        }),
    
        new Product({
            name: "Jug Mug 5000",
            content:"1Box",
            type:"MICRO FUSE BOMBS",
            actualPrice:340,
            discountPrice: 85
        }),
    
        new Product({
            name: "DTX Bomb (Mega)",
            content:"1Box",
            type:"MICRO FUSE BOMBS",
            actualPrice:720,
            discountPrice: 180
        }),
    
    new Product({
            name: "Chakkar Big",
            content:"1Box",
            type:"GROUND CHAKKARS",
            actualPrice:168,
            discountPrice: 42
        }),
    
    new Product({
            name: "Chakkar Asoka",
            content:"1Box",
            type:"GROUND CHAKKARS",
            actualPrice:208,
            discountPrice: 52
        }),
    
    new Product({
            name: "Chakkar Special",
            content:"1Box",
            type:"GROUND CHAKKARS",
            actualPrice:270,
            discountPrice: 67.5
        }),
    
    new Product({
            name: "Chakkar Deluxe",
            content:"1Box",
            type:"GROUND CHAKKARS",
            actualPrice:460,
            discountPrice: 115
        }),
    
    new Product({
            name: "Flower Pots Small",
            content:"1Box",
            type:"FLOWER POTS",
            actualPrice:180,
            discountPrice: 45
        }),
    
    new Product({
            name: "Flower Pots Big",
            content:"1Box",
            type:"FLOWER POTS",
            actualPrice:252,
            discountPrice: 63
        }),
    
    new Product({
            name: "Flower Pots Special",
            content:"1Box",
            type:"FLOWER POTS",
            actualPrice:340,
            discountPrice: 85
        }),
    
    new Product({
            name: "Flower Pots Ashoka",
            content:"1Box",
            type:"FLOWER POTS",
            actualPrice:480,
            discountPrice: 120
        }),
    
    
    new Product({
            name: "Colour Koti (10 Pcs)",
            content:"1Box",
            type:"FLOWER POTS",
            actualPrice:850,
            discountPrice: 212.5
        }),
    
    new Product({
            name: "Colour Pots (5 Pcs) (Window)",
            content:"1Box",
            type:"FLOWER POTS",
            actualPrice:1040,
            discountPrice: 260
        }),
    
    new Product({
            name: "Ganga Jamuna (5 Pcs)",
            content:"1Box",
            type:"FLOWER POTS",
            actualPrice:250,
            discountPrice: 62.5
        }),
    
    new Product({
            name: "Baby Rocket",
            content:"1Box",
            type:"ROCKET",
            actualPrice:156,
            discountPrice: 39
        }),
    
    new Product({
            name: "Rocket Bomb",
            content:"1Box",
            type:"ROCKET",
            actualPrice:260,
            discountPrice: 65
        }),
    
    new Product({
            name: "Super Rocket",
            content:"1Box",
            type:"ROCKET",
            actualPrice:300,
            discountPrice: 75
        }),
    
    new Product({
            name: "Lunik Ex-press",
            content:"1Box",
            type:"ROCKET",
            actualPrice:580,
            discountPrice: 145
        }),
    
    new Product({
            name: "1½'' Twinkling Star",
            content:"1Box",
            type:"TWINKLING STARS & PENCIL",
            actualPrice:120,
            discountPrice: 30
        }),
    
    new Product({
            name: "4'' Twinkling Star",
            content:"1Box",
            type:"TWINKLING STARS & PENCIL",
            actualPrice:332,
            discountPrice: 83
        }),
    
    new Product({
            name: "7'' Pencil",
            content:"1Box",
            type:"TWINKLING STARS & PENCIL",
            actualPrice:132,
            discountPrice: 33
        }),
    
    new Product({
            name: "10'' Pencil",
            content:"1Box",
            type:"TWINKLING STARS & PENCIL",
            actualPrice:208,
            discountPrice: 52
        }),
    
    new Product({
            name: "12'' Pencil",
            content:"1Box",
            type:"TWINKLING STARS & PENCIL",
            actualPrice:260,
            discountPrice: 65
        }),
    
    new Product({
            name: "Electric Stone",
            content:"1Box",
            type:"KIDS ZONE",
            actualPrice:60,
            discountPrice: 15
        }),
    
    new Product({
            name: "Assorted Cartoon",
            content:"1Box",
            type:"KIDS ZONE",
            actualPrice:132,
            discountPrice: 33
        }),
    
    new Product({
            name: "Kit Kat",
            content:"1Box",
            type:"KIDS ZONE",
            actualPrice:156,
            discountPrice: 39
        }),
    
    new Product({
            name: "Cherry Berry (5 Pcs Window)",
            content:"1Box",
            type:"FANCY NOVELTIES",
            actualPrice:480,
            discountPrice: 120
        }),
    
    new Product({
            name: "Fun Colour (5 Pcs Window)",
            content:"1Box",
            type:"FANCY NOVELTIES",
            actualPrice:860,
            discountPrice: 215
        }),
    
    new Product({
            name: "VIP Pencil (5 Pcs Window)",
            content:"1Box",
            type:"FANCY NOVELTIES",
            actualPrice:580,
            discountPrice: 145
        }),
    
    new Product({
            name: "7 Shots Color",
            content:"1Box",
            type:"FANCY NOVELTIES",
            actualPrice:550,
            discountPrice: 137.5
        }),
    
    
    new Product({
            name: "Siren (2 Pcs) (Big)",
            content:"1Box",
            type:"FANCY NOVELTIES",
            actualPrice:712,
            discountPrice: 178
        }),
    
    new Product({
            name: "Helicopter",
            content:"1Box",
            type:"FANCY NOVELTIES",
            actualPrice:420,
            discountPrice: 105
        }),
    
    
    new Product({
            name: "Bambaram - 10 pcs",
            content:"1Box",
            type:"FANCY NOVELTIES",
            actualPrice:600,
            discountPrice: 150
        }),
    
    
    new Product({
            name: "Butterfly - 10 pcs",
            content:"1Box",
            type:"FANCY NOVELTIES",
            actualPrice:550,
            discountPrice: 137.5
        }),
    
    
    new Product({
            name: "Rainbow Shower - 5 in 1",
            content:"1Box",
            type:"FANCY NOVELTIES",
            actualPrice:1260,
            discountPrice: 315
        }),
    
    
    new Product({
            name: "Color Collection - 5 pcs",
            content:"1Box",
            type:"FANCY NOVELTIES",
            actualPrice:720,
            discountPrice: 180
        }),
    
    new Product({
            name: "Peacock Special - 5 in 1",
            content:"1Box",
            type:"FANCY NOVELTIES",
            actualPrice:750,
            discountPrice: 187.5
        }),
    
    new Product({
            name: "12 Shot Color",
            content:"1Box",
            type:"AERIAL SHOTS",
            actualPrice:600,
            discountPrice: 150
        }),
    
    new Product({
            name: "12 Shot Crackling",
            content:"1Box",
            type:"AERIAL SHOTS",
            actualPrice:660,
            discountPrice: 165
        }),
    
    new Product({
            name: "15 Shot - Multi Colour",
            content:"1Box",
            type:"AERIAL SHOTS",
            actualPrice:1040,
            discountPrice: 260
        }),
    
    new Product({
            name: "30 Shot - Multi Colour",
            content:"1Box",
            type:"AERIAL SHOTS",
            actualPrice:1900,
            discountPrice: 475
        }),
    
    new Product({
            name: "60 Shot - Multi Colour",
            content:"1Box",
            type:"AERIAL SHOTS",
            actualPrice:3800,
            discountPrice: 950
        }),
    
    new Product({
            name: "120 Shot - Multi Colour",
            content:"1Box",
            type:"AERIAL SHOTS",
            actualPrice:7600,
            discountPrice: 1900
        }),
    
    new Product({
            name: "240 Shot - Multi Colour",
            content:"1Box",
            type:"AERIAL SHOTS",
            actualPrice:15200,
            discountPrice: 3800
        }),
    
    new Product({
            name: "Rush",
            content:"1Pcs",
            type:"CHOTA FANCY",
            actualPrice:248,
            discountPrice: 62
        }),
    
    new Product({
            name: "Rock Star",
            content:"1Pcs",
            type:"CHOTA FANCY",
            actualPrice:248,
            discountPrice: 62
        }),
    
    new Product({
            name: "Ra-One",
            content:"1Pcs",
            type:"CHOTA FANCY",
            actualPrice:248,
            discountPrice: 62
        }),
    
    new Product({
            name: "MR.Mirchi",
            content:"1Box",
            type:"CHOTA FANCY",
            actualPrice:248,
            discountPrice: 62
        }),
    
    new Product({
            name: "Rush",
            content:"1Box",
            type:"CHOTA FANCY",
            actualPrice:248,
            discountPrice: 62
        }),
    
    new Product({
            name: "Cocktail (3 Pcs)",
            content:"1Box",
            type:"CHOTA FANCY",
            actualPrice:660,
            discountPrice: 165 
        }),
    
    new Product({
            name: "Green Fantasy",
            content:"1Box",
            type:"2” AERIAL FANCY",
            actualPrice:520,
            discountPrice: 130
        }),
    
    new Product({
            name: "Red Carpet",
            content:"1Box",
            type:"2” AERIAL FANCY",
            actualPrice:520,
            discountPrice: 130
        }),
    
    new Product({
            name: "Multi Media",
            content:"1Box",
            type:"2” AERIAL FANCY",
            actualPrice:520,
            discountPrice: 130
        }),
    
    new Product({
            name: "Golden War",
            content:"1Box",
            type:"2” AERIAL FANCY",
            actualPrice:520,
            discountPrice: 130
        }),
    
    new Product({
            name: "Star Voice",
            content:"1Box",
            type:"2” AERIAL FANCY",
            actualPrice:520,
            discountPrice: 130
        }),
    
    new Product({
            name: "Silver Shine",
            content:"1Box",
            type:"2” AERIAL FANCY",
            actualPrice:520,
            discountPrice: 130
        }),
    
    new Product({
            name: "Spiderman - Red (3 Pcs)",
            content:"1Box",
            type:"2” AERIAL FANCY - (3 Pcs)",
            actualPrice:1300,
            discountPrice: 325 
        }),
    
    new Product({
            name: "Hulk - Green (3 Pcs)",
            content:"1Box",
            type:"2” AERIAL FANCY - (3 Pcs)",
            actualPrice:1300,
            discountPrice: 325
        }),
    
    new Product({
            name: "Avengers - Mix (3 Pcs)",
            content:"1Box",
            type:"2” AERIAL FANCY - (3 Pcs)",
            actualPrice:1300,
            discountPrice: 325
        }),
    
    new Product({
            name: "Gangster - Yellow (3 Pcs)",
            content:"1Box",
            type:"2” AERIAL FANCY - (3 Pcs)",
            actualPrice:1300,
            discountPrice: 325
        }),
    
    new Product({
            name: "Climax - White (3 Pcs)",
            content:"1Box",
            type:"2” AERIAL FANCY - (3 Pcs)",
            actualPrice:1300,
            discountPrice: 325
        }),
    
    new Product({
            name: "Super Red Balls",
            content:"1Box",
            type:"4” AERIAL FANCY",
            actualPrice:1300,
            discountPrice: 325
        }),
    
    new Product({
            name: "Block Buster",
            content:"1Box",
            type:"4” AERIAL FANCY",
            actualPrice:1300,
            discountPrice: 325
        }),
    
    new Product({
            name: "Mega Hit",
            content:"1Box",
            type:"4” AERIAL FANCY",
            actualPrice:1300,
            discountPrice: 325
        }),
    
    new Product({
            name: "Climaxe",
            content:"1Box",
            type:"4” AERIAL FANCY",
            actualPrice:1300,
            discountPrice: 325
        }),
    
    new Product({
            name: "7cm Electric",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:44,
            discountPrice: 11
        }),
    
    new Product({
            name: "7cm Color",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:48,
            discountPrice: 12
        }),
    
    new Product({
            name: "7cm Green",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:52,
            discountPrice: 13
        }),
    
    new Product({
            name: "7cm Red",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:60,
            discountPrice: 15
        }),
    
    new Product({
            name: "10cm Electric",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:72,
            discountPrice: 18
        }),
    
    new Product({
            name: "10cm Color",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:84,
            discountPrice: 21
        }),
    
    new Product({
            name: "10cm Green",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:92,
            discountPrice: 23
        }),
    
    new Product({
            name: "10cm Red",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:100,
            discountPrice: 25
        }),
    
    new Product({
            name: "12cm Electric",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:104,
            discountPrice: 26
        }),
    
    new Product({
            name: "12cm Color",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:116,
            discountPrice: 29
        }),
    
    new Product({
            name: "12cm Green",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:128,
            discountPrice: 32
        }),
    
    new Product({
            name: "12cm Red",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:140,
            discountPrice: 35
        }),
    
    new Product({
            name: "15cm Electric",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:200,
            discountPrice: 50
        }),	
    
    new Product({
            name: "15cm Color",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:216,
            discountPrice: 54
        }),
    
    new Product({
            name: "15cm Green",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:224,
            discountPrice: 56
        }),
    
    new Product({
            name: "15cm Red",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:240,
            discountPrice: 60
        }),
    
    new Product({
            name: "30cm Electric",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:200,
            discountPrice: 50
        }),
    
    new Product({
            name: "30cm Color",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:216,
            discountPrice: 54
        }),
    
    new Product({
            name: "30cm Green",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:224,
            discountPrice: 56
        }),
    
    new Product({
            name: "30cm Red",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:240,
            discountPrice: 60
        }),
    
    new Product({
            name: "50cm Electric (Tube)",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:660,
            discountPrice: 165
        }),
    
    new Product({
            name: "50cm Super Mix (Tube)1",
            content:"1Box",
            type:"SPARKLERS",
            actualPrice:720,
            discountPrice: 180
        }),
    
    
]


var done = 0;
for(var i=0; i<products.length; i++){
    products[i].save(function(err,result){
        if(err){
            console.log(err);
        }
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}