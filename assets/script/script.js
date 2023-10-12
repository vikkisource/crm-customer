
        var progresslabels =['facebook','instagram','drivestorage']
        var progressvalues=[45,62,15]
        function loadprogress(){
            
           for(var i = 0;i<progresslabels.length;i++){
            
             var getprogressbarelement = document.getElementById(progresslabels[i]+'progressbar');
             var getprogresslabelvalue = document.getElementById(progresslabels[i]+'progresslabel');
             getprogresslabelvalue.innerHTML = progressvalues[i]+'%'
             console.log(getprogressbarelement);
             getprogressbarelement.style.width=progressvalues[i]+'%';


               
           }
        }
        loadprogress();

        function opendrodown(getvalue){
            var getelement = document.getElementById(getvalue);
            getelement.classList.toggle('show');
        }
 