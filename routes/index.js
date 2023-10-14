var express = require('express');
var router = express.Router();
var Product = require('../modals/product');
var ejs = require("ejs");
var nodemailer = require('nodemailer');
const {google} = require('googleapis');
var path = require('path');


const CLIENT_ID = '896512013094-m16n5h4nk5rfk59549fnumino8pgclge.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04waVGbdIAaqMCgYIARAAGAQSNwF-L9Iro7unf42He0PZo9zkCr4h3afSUQK-QLq8jbKXr9vpgw4T05bN7gUQmmt9xXuM_UjYnLc'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

const accessToken = oAuth2Client.getAccessToken()

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
      type:'OAuth2',
      user: 'thamarayan@gmail.com',
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Crackers World' });
});

router.get('/shop', function(req, res, next) {
  Product.find(function(err,result){
    if(err){
      console.log(err);
    }
    res.render('shop', { title: 'Shop | Crackers World', products:result });
  })
});

router.post('/addProducts', function(req,res,next){
  const {name, aPrice, dPrice, qty, ids, content } = req.body;
  
  var names = [];
  names = name;

  var actPrice = [];
  actPrice = aPrice;

  var disPrice = [];
  disPrice = dPrice;

  var quantities = [];
  quantities = qty;

  var idss = [];
  idss = ids;

  var contents = [];
  contents = content;
 
  var totalItems = 0;
  var totalBillValue = 0;
  var savings = 0;
  var combinedArray = [];
   
  for(i=0; i< quantities.length; i++){
    if(quantities[i] > 0){
      combinedArray[i] = { 
        name:names[i], 
        aprice:actPrice[i], 
        price:disPrice[i],
        quantity:quantities[i], 
        amount: disPrice[i]* quantities[i],
        ids:idss[i], 
        content:contents[i]};
    }
  }
  
  combinedArray.forEach(item=>{
    totalItems += Number(item.quantity);
    totalBillValue = totalBillValue + (Number(item.price) * Number(item.quantity)); 
  })

 console.log('Total Items : ' + totalItems);
 console.log('Total Bill Value :' + totalBillValue);
 var overallTotalValue =  req.body.overallTotalVal;
 var discountTotalValue = req.body.discountTotalVal;
 var subTotalValue = req.body.subTotalVal;
 var packingChargeValue = req.body.pckChargeVal;
 var finalBillvalue = req.body.finalBillValuee;
 
 var cart = [];
 cart = [{
  items:combinedArray,
  netValue: overallTotalValue,
  savings: discountTotalValue,
  subTotal: subTotalValue,
  packingCharge: packingChargeValue,
  finalBillvalue: finalBillvalue,
  partyName:req.body.partyName,
  partyMob:req.body.partyMob,
  partyEmail:req.body.partyEmail,
  partyAddress:req.body.partyAddress,
  itemsQty:totalItems,
  date: new Date().toISOString().slice(0, 10)
 }];

 console.log(combinedArray);

 ejs.renderFile(path.join(__dirname,'..','views','mailTemplate.ejs'), { cart: cart, items:combinedArray }, 'utf-8', function(errr, data){
  if(errr){
    return console.log(errr);
  }

 const mainOptions = {
  from: '"Crackers World - Order Estimation" thamarayan@gmail.com',
  to: [
    { name: "Client", address: req.body.partyEmail },
    {name: "Crackers World", address:"thamarayan@gmail.com"}
  ],
  subject: 'New Order Estimation' + '-' +  req.body.partyName,
  html: data
};

transporter.sendMail(mainOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    res.render('successPage',{title:'Crackers World'});
  }
  transporter.close();
});


});

});

router.get('/successPage', function(req,res,next){
  res.render('successPage', {title:'Order Success | Crackers World'});
})

router.get('/world', function(req,res,next){
  res.render('world', {title:'Crackers World', products:[]});
})

router.get('/productsControl', function(req,res,next){
  Product.find(function(err,result){
    if(err){
      console.log(err);
      return res.render('world', {products:[]});
    }
    res.render('world',{title:'Products | Crackers World', products:result});
  })
})

router.post('/update/:id', function(req,res,next){
  var id = req.params.id;
  Product.updateOne(
    {_id:id},
    {$set: {
      name: req.body.newName,
      content: req.body.newContent,
      actualPrice: req.body.newActualPrice,
      discountPrice: req.body.newDiscountPrice
    }}, function(err,ress){
      if(err){
        console.log(err);
        return res.render('world', {products:[], title:'Control | Arunjunai Traders'});
      }
      res.redirect('/productsControl');
    })
})

router.get('/makeAvailable/:id', function(req,res,next){
  var id=req.params.id;
  Product.updateOne(
    {_id:id},
    {$set:{
      availability:false
    }},
    function(err,ress){
      if(err){
        console.log(err);
        return res.render('world', {products:[], title:'Control | Arunjunai Traders'});
      }
      res.redirect('/productsControl');
    })
})

router.get('/makeUnavailable/:id', function(req,res,next){
  var id=req.params.id;
  Product.updateOne(
    {_id:id},
    {$set:{
      availability:true
    }},
    function(err,ress){
      if(err){
        console.log(err);
        return res.render('world', {products:[], title:'Control | Arunjunai Traders'});
      }
      res.redirect('/productsControl');
    })
})

router.post('/changeDiscount', function(req,res,next){
  var discValue = req.body.discValue;
  console.log(discValue);
  var discRate = (100 - discValue)/100;
 
  console.log(discRate);

  Product.updateMany(
    {},
    [{
      $set: {discountPrice : { $multiply: [discRate, "$actualPrice"]}}
    }],
    {multi:true},
    function(err,result){
      if(err){
        console.log(err);
      }
      console.log(result);
      res.redirect('/productsControl');
    }
  )
})

router.post('/newProduct', function(req,res,next){

  var product = new Product({
    name : req.body.prodName,
    content : req.body.prodContent,
    type : req.body.prodType,
    actualPrice : req.body.prodActPrice,
    discountPrice : req.body.prodDiscPrice
  })

  product.save(function(err,result){
    if(err){
        console.log(err);
        return res.redirect('/productsControl');
    }
    res.redirect('/world');
})

} )


router.get('/deleteProduct/:id', function(req,res,next){
  var id = req.params.id;
  Product.deleteOne({_id:id}, function(err,result){
    if(err){
      console.log(err);
      return res.render('world');
    }
    console.log(result);
    res.redirect('/productsControl');
  })
})

module.exports = router;
