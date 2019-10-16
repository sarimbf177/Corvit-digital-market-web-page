// var modal= document.getElementById('modal');

// function openModal(){
//     modal.style.display='block';
// }

function closeModal1(){
    var modal=document.getElementById('module1');
    modal.style.display='none';
    window.location.reload();
}

function closeModal2(){
    var modal=document.getElementById('module2');
    modal.style.display='none';
    window.location.reload();
}

function closeModal3(){
    var modal=document.getElementById('module3');
    modal.style.display='none';
    window.location.reload();
}

function closeModal4(){
    var modal=document.getElementById('module4');
    modal.style.display='none';
    window.location.reload();
}

function closeModal5(){
    var modal=document.getElementById('module5');
    modal.style.display='none';
    window.location.reload();
}
//module3

function openModal1(){
    var modal = document.getElementById('modal1');
     var items=['What is Digital Marketing?','fundamentals of Digital Marketing','Digital Marketing step-by-step','Search marketing','Search Query I keyword','Search Engine marketing','Local Search results'];
    var items2=['SEO- organic Search results','Display advertising','Content marketing','Video Marketing','Email Marketing','Responsive design'];

    var size= items.length;
    var size2= items2.length;
    // console.log(size);
     var ul= document.createElement('ul');
     ul.setAttribute('class','ul');
     var ul2= document.createElement('ul');
     ul2.setAttribute('class','ul');
    console.log(ul);
    var module= document.getElementById('module1');
    
    for(var i=0;i<size;i++)
    {
        var li= document.createElement('li');
        li.setAttribute('class','li');
        li.appendChild(document.createTextNode(items[i]));
        ul.appendChild(li);

    }
    for(var i=0;i<size2;i++)
    {
        var li= document.createElement('li');
        li.setAttribute('class','li');
        li.appendChild(document.createTextNode(items2[i]));
        ul2.appendChild(li);

    }
    module.appendChild(ul);
    module.appendChild(ul2);
    modal.style.display='block';
}
        function openModal2(){
            var modal = document.getElementById('modal2');
            var items=['Why SEO?','Google search engine Algorithm','How search engine works?','19 important SEO tips?','Backlinks','Mobile SEO'];
           
        
            var size= items.length;
            console.log(size);
            var ul= document.createElement('ul');
            ul.setAttribute('class','ul');
            console.log(ul);
            var module= document.getElementById('module2');
            
            for(var i=0;i<size;i++)
            {
                var li= document.createElement('li');
                li.setAttribute('class','li');
                li.appendChild(document.createTextNode(items[i]));
                ul.appendChild(li);
        
            }
            module.appendChild(ul);
            if(size<=7){
                ul.style.width='100%';
            }
            if(size<7){
                ul.style.lineHeight= '40px';
                
            }
            
            modal.style.display='block';
            
        }

function openModal3(){
    var modal = document.getElementById('modal3');
    var items=['Paid (or PPC, CPC) Ads','Keyword research','Google Keyword planner','Applying keywords match options','Adwords account Structure','Things to remember while setting up PPC campaigns','Remarketing I Retargeting'];
   

    var size= items.length;
    console.log(size);
     var ul= document.createElement('ul');
     ul.setAttribute('class','ul');
    console.log(ul);
    var module= document.getElementById('module3');
    
    for(var i=0;i<size;i++)
    {
        var li= document.createElement('li');
        li.setAttribute('class','li');
        li.appendChild(document.createTextNode(items[i]));
        ul.appendChild(li);

    }
    if(size<=7){
        ul.style.width='100%';
        ul.style.lineHeight='40px';
    }
    module.appendChild(ul);
    modal.style.display='block';
    
}


function openModal4(){
    var modal = document.getElementById('modal4');
    var items=['Google Analytics - measure your success',
        'How to setup Google Analytics',
        'What needs to be measured',
        'Google Analytics - real Time reporting',
        'Google Analytics - Comparisons',
        'Google Analytics - Export and Share reports',
        'How do visitors find our website?',
        'Acquisition',
        'Track conversions'];
   

    var size= items.length;
    console.log(size);
     var ul= document.createElement('ul');
     ul.setAttribute('class','ul');
    console.log(ul);
    var module= document.getElementById('module4');
    
    for(var i=0;i<size;i++)
    {
        var li= document.createElement('li');
        li.setAttribute('class','li');
        li.appendChild(document.createTextNode(items[i]));
        ul.appendChild(li);

    }
    module.appendChild(ul);
    if(size<=7){
        ul.style.width='100%';
        ul.style.lineHeight='40px';
    }
    modal.style.display='block';
    
}

function openModal5(){
    var modal = document.getElementById('modal5');
    var items=['Social Media marketing strategy',
        'Social Media marketing Plan',
        'Social Media networks',
        'How to setup Social Media business pages?',
        'How to setup Ads on social Media networks?',
        'Google Alerts',
        'Convert website visitors into Leads',
        'Manage/ Schedule your updates easily',
        'Measure Success',
        'Viral marketing'];
   

    var size= items.length;
    console.log(size);
     var ul= document.createElement('ul');
     ul.setAttribute('class','ul');
    console.log(ul);
    var module= document.getElementById('module5');
    
    for(var i=0;i<size;i++)
    {
        var li= document.createElement('li');
        li.setAttribute('class','li');
        li.appendChild(document.createTextNode(items[i]));
        ul.appendChild(li);

    }
    module.appendChild(ul);
    if(size<=7){
        ul.style.width='100%';
        ul.style.lineHeight='40px';
    }
    modal.style.display='block';
    
}