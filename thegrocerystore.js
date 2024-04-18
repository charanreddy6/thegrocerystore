//productStock variables
var product_code=["10001","10002","10003","10004","10005","10006","10007","10008","10009","10010","10011","10012","10013","10014","10015","10016","10017","10018","10019","10020","10021","10022","10023","10024","10025","10026","10027","10028","10029","10030","10031","10032","10033","10034","10035","10036","10037","10038","10039","10040"];
var product_name=["Apple","Banana","Grapes(1Kg)","Strawberries(7Pcs)","Watermelon(1Kg)","Tomato(1Kg)","Greenchilli(250g)","Brinjal(250g)","Potato(1Kg)","Bittergourd(250g)","Blackgram(500g)","Dal(1Kg)","CoffeePowder(500g)","Wheatflour(1Kg)","Turmeric Powder(250g)","Detergent","Toothpaste","Dishwasher","Toothbrush","FloorCleaner","Milkpacket","Curdbox","Cheese(100g)","Butter(50g)","Milkpowder(100g)","Facecream","Eyeliner","Moisturizer","Perfume","Lipstick","Chekki","Potatochips","Lollipop","Chocolate","BiscuitPacket","Fanta(300ml)","Mazza(1L)","Thumsup(600ml)","Sprite(700ml)","PulpyOrange(1.1L)"];
var product_price=[25,10,52,100,27,24,10,16,21,15,62,74,53,81,20,150,22,92,15,70,27,42,20,15,50,80,242,220,456,150,10,20,5,20,15,40,52,50,55,55];
var product_stock=[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
var username=["charanreddy","raja"];
var user_phonenumber=["9624716666","9391236666"];
var user_password=["reddy","raja"];
var user_address=["ravulapalem"];
var oo_cart_product_code=[];
var oo_cart_product_name=[];
var oo_cart_product_price=[];
var oo_cart_product_quantity=[];
var cart_products_body_cont=document.getElementById("cart_products_body");
var oo_total_price_num=0;
var username_temp;
var userphonenumber_temp;
var user_address_temp;
var m;
//inital hidings
document.getElementById("onlineorderingpage").style.display="none";
//loginpage hidings
document.getElementById("signin_cont").style.display="none";
//online ordering hidings
document.getElementById("account_div").style.display="none";
document.getElementById("account_newaddress").style.display="none";
document.getElementById("fruitstypelist").style.display="none";
document.getElementById("vegetablestypelist").style.display="none";
document.getElementById("grocerytypelist").style.display="none";
document.getElementById("householdtypelist").style.display="none";
document.getElementById("dairytypelist").style.display="none";
document.getElementById("personalcaretypelist").style.display="none";
document.getElementById("snackstypelist").style.display="none";
document.getElementById("cooldrinkstypelist").style.display="none";
categorytypeproduct_quantity=document.querySelectorAll(".categorytypeproduct_quantity");
for(i=0;i<categorytypeproduct_quantity.length;i++)
{
    categorytypeproduct_quantity[i].style.display="none";
}
document.getElementById("viewcart_button").style.display="none";
document.getElementById("cart_div").style.display="none";
//loginpage code
function signup_open()
{
    document.getElementById("signin_cont").style.display="block";
    document.getElementById("login_cont").style.display="none";
}
function login_open()
{
    document.getElementById("signin_cont").style.display="none";
    document.getElementById("login_cont").style.display="block";
}
function signin()
{
    if(document.getElementById("signin_name").value=="" || document.getElementById("signin_phonenumber").value=="" || document.getElementById("signin_password").value=="")
    {
        document.getElementById("signin_status").innerHTML="Enter Fulldetails";
    }
    else
    {
        username.push(document.getElementById("signin_name").value);
        user_phonenumber.push(document.getElementById("signin_phonenumber").value);
        user_password.push(document.getElementById("signin_password").value);
        username_temp=username[username.length-1];
        user_phonenumber=user_phonenumber[user_phonenumber.length-1];
        document.getElementById("login_page").style.display="none";
        document.getElementById("onlineorderingpage").style.display="block";
    }
    
}
function login()
{
    for(m=0;m<username.length;m++)
    {
        document.getElementById("login_status").innerHTML="";
        if(user_phonenumber[m]==document.getElementById("login_phonenumber").value)
        {
            if(user_password[m]==document.getElementById("login_password").value)
            {
                document.getElementById("login_page").style.display="none";
                document.getElementById("onlineorderingpage").style.display="block";
                username_temp=username[m];
                userphonenumber_temp=user_phonenumber[m];
                break;
            }
            else
            {
                document.getElementById("login_status").innerHTML="Wrong Password";
                break;
            }
        }
        else
        {
            document.getElementById("login_status").innerHTML="Phonenumber not found";
        }
    }
}
//online ordering code
function fruits()
{
    document.getElementById("oo_body").style.display="none";
    document.getElementById("fruitstypelist").style.display="flex";
}
function fruitsback()
{
    document.getElementById("oo_body").style.display="flex";
    document.getElementById("fruitstypelist").style.display="none";
}
function vegetables()
{
    document.getElementById("oo_body").style.display="none";
    document.getElementById("vegetablestypelist").style.display="flex";
}
function vegetablesback()
{
    document.getElementById("oo_body").style.display="flex";
    document.getElementById("vegetablestypelist").style.display="none";
}
function grocery()
{
    document.getElementById("oo_body").style.display="none";
    document.getElementById("grocerytypelist").style.display="flex";
}
function groceryback()
{
    document.getElementById("oo_body").style.display="flex";
    document.getElementById("grocerytypelist").style.display="none";
}
function household()
{
    document.getElementById("oo_body").style.display="none";
    document.getElementById("householdtypelist").style.display="flex";
}
function householdback()
{
    document.getElementById("oo_body").style.display="flex";
    document.getElementById("householdtypelist").style.display="none";
}
function dairy()
{
    document.getElementById("oo_body").style.display="none";
    document.getElementById("dairytypelist").style.display="flex";
}
function dairyback()
{
    document.getElementById("oo_body").style.display="flex";
    document.getElementById("dairytypelist").style.display="none";
}
function personalcare()
{
    document.getElementById("oo_body").style.display="none";
    document.getElementById("personalcaretypelist").style.display="flex";
}
function personalcareback()
{
    document.getElementById("oo_body").style.display="flex";
    document.getElementById("personalcaretypelist").style.display="none";
}
function snacks()
{
    document.getElementById("oo_body").style.display="none";
    document.getElementById("snackstypelist").style.display="flex";
}
function snacksback()
{
    document.getElementById("oo_body").style.display="flex";
    document.getElementById("snackstypelist").style.display="none";
}
function cooldrinks()
{
    document.getElementById("oo_body").style.display="none";
    document.getElementById("cooldrinkstypelist").style.display="flex";
}
function cooldrinksback()
{
    document.getElementById("oo_body").style.display="flex";
    document.getElementById("cooldrinkstypelist").style.display="none";
}
function oo_product_add_btn(add_btn_id)
{
    //extracting button id
    oo_add_productcode=add_btn_id.id;
    oo_add_productcode=oo_add_productcode.slice(0,5);
    document.getElementById(oo_add_productcode+"_addbtn").style.display="none";
    document.getElementById(oo_add_productcode+"_addqnty").style.display="flex";
    oo_cart_product_code.push(oo_add_productcode);
    oo_cart_product_quantity.push(1);
    document.getElementById(oo_add_productcode+"_product_quan_display").value=1;
    //viewcartbutton
    if(oo_cart_product_quantity.length>0)
    {
        document.getElementById("viewcart_button").style.display="flex";
        document.getElementById("viewcart_button").innerHTML="View Cart("+oo_cart_product_quantity.length+")";
    }
    //cart_product_add
    for(i=0;i<product_code.length;i++)
    {
        if(product_code[i]==oo_add_productcode)
        {
            oo_cart_product_name.push(product_name[i]);
            oo_cart_product_price.push(product_price[i]);
            break;
        }

    }
    //cart product creation
    for(j=0;j<oo_cart_product_code.length;j++)
    {
        if(oo_cart_product_code[j]==oo_add_productcode)
        {
            break;
        }
    }
    //totalprice
    oo_total_price_num=0;
    for(p=0;p<oo_cart_product_price.length;p++)
    {
        oo_total_price_num+=oo_cart_product_price[p];
    }
    document.getElementById("oo_total_price").innerHTML=oo_total_price_num+"/-";
    //cart div creation
    var cart_product_card=document.createElement("div");
    cart_product_card.id=oo_add_productcode+"_cart_product_card";
    cart_product_card.className="cart_product_card";
    var cart_product_name=document.createElement("span");
    cart_product_name.id=oo_add_productcode+"_cart_product_name";
    cart_product_name.className="cart_product_name";
    cart_product_name.innerHTML=product_name[i];
    cart_product_card.appendChild(cart_product_name);
    var cart_product_quantity=document.createElement("span");
    cart_product_quantity.id=oo_add_productcode+"_cart_product_quantity";
    cart_product_quantity.className="cart_product_quantity";
    cart_product_quantity.innerHTML=oo_cart_product_quantity[j];
    cart_product_card.appendChild(cart_product_quantity);
    var cart_product_price=document.createElement("span");
    cart_product_price.id=oo_add_productcode+"_cart_product_price";
    cart_product_price.className="cart_product_price";
    cart_product_price.innerHTML=product_price[i];
    cart_product_card.appendChild(cart_product_price);
    cart_products_body_cont.insertBefore(cart_product_card,cart_products_body_cont.firstChild);
}
//online ordering add quantity
function quan_plus_btn(plus_btn_id)
{
    //extracting button id
    oo_add_productplus=plus_btn_id.id;
    oo_add_productplus=oo_add_productplus.slice(0,5);
    //increasing product qnty
    for(i=0;i<oo_cart_product_quantity.length;i++)
    {
        if(oo_cart_product_code[i]==oo_add_productplus)
        {
            oo_cart_product_quantity[i]+=1;
            break;
        }
    }
    for(j=0;j<product_code.length;j++)
    {
        if(product_code[j]==oo_add_productplus)
        {
            oo_cart_product_price[i]=oo_cart_product_quantity[i]*product_price[j];
            break;
        }
    }
    document.getElementById(oo_add_productplus+"_product_quan_display").value=oo_cart_product_quantity[i];
    document.getElementById(oo_add_productplus+"_cart_product_quantity").innerHTML=oo_cart_product_quantity[i];
    document.getElementById(oo_add_productplus+"_cart_product_price").innerHTML=oo_cart_product_price[i];
    //total price
    oo_total_price_num=0;
    for(p=0;p<oo_cart_product_price.length;p++)
    {
        oo_total_price_num+=oo_cart_product_price[p];
    }
    document.getElementById("oo_total_price").innerHTML=oo_total_price_num+"/-";
}
//online ordering remove quantity
function quan_minus_btn(minus_btn_id)
{
    oo_add_productminus=minus_btn_id.id;
    oo_add_productminus=oo_add_productminus.slice(0,5);
    for(i=0;i<oo_cart_product_quantity.length;i++)
    {
        if(oo_cart_product_code[i]==oo_add_productminus)
        {
            oo_cart_product_quantity[i]-=1;
            break;
        }
    }
    if(oo_cart_product_quantity[i]==0)
    {
        document.getElementById(oo_add_productminus+"_addbtn").style.display="block";
        document.getElementById(oo_add_productminus+"_addqnty").style.display="none";
        var cart_products_body_cont_2=document.getElementById("cart_products_body");
        cart_products_body_cont_2.removeChild(document.getElementById(oo_add_productminus+"_cart_product_card"));
        for(i=0;i<oo_cart_product_code.length;i++)
        {
            if(oo_cart_product_code[i]==oo_add_productminus)
            {
                oo_cart_product_code.splice(i,1);
                oo_cart_product_quantity.splice(i,1);
                oo_cart_product_price.splice(i,1);
                break;
            }
        }
        document.getElementById("viewcart_button").innerHTML="View Cart("+oo_cart_product_quantity.length+")";
    }
    if(oo_cart_product_quantity[i]>0)
    {
        document.getElementById(oo_add_productminus+"_product_quan_display").value=oo_cart_product_quantity[i];
        document.getElementById(oo_add_productminus+"_cart_product_quantity").innerHTML=oo_cart_product_quantity[i];
        for(j=0;j<product_code.length;j++)
        {
            if(product_code[j]==oo_add_productminus)
            {
                oo_cart_product_price[i]=oo_cart_product_quantity[i]*product_price[j];
                document.getElementById(oo_add_productminus+"_cart_product_price").innerHTML=oo_cart_product_price[i];
                break;
            }
        }
    }
    //view cart btn
    if(oo_cart_product_quantity.length==0)
    {
        document.getElementById("viewcart_button").style.display="none";
        document.getElementById("cart_div").style.display="none";
    }
    //totalprice
    oo_total_price_num=0;
    for(p=0;p<oo_cart_product_price.length;p++)
    {
        oo_total_price_num+=oo_cart_product_price[p];
    }
    document.getElementById("oo_total_price").innerHTML=oo_total_price_num+"/-";
}
//online ordering cart
function cart_open()
{
    document.getElementById("viewcart_button").style.display="none";
    document.getElementById("cart_div").style.display="block";
}
function cart_close()
{
    document.getElementById("viewcart_button").style.display="flex";
    document.getElementById("cart_div").style.display="none";
}

//account settings temp
function account()
{
    document.getElementById("account_div").style.display="block";
    document.getElementById("account_username").innerHTML="Hi, "+username_temp+"&#128526";
}
function acc_close()
{
    document.getElementById("account_div").style.display="none";
    document.getElementById("account_username").innerHTML="";
}


console.log(oo_cart_product_code);
console.log(oo_cart_product_quantity);
console.log(oo_cart_product_price);
console.log(username);
console.log(user_phonenumber);
console.log(user_password);