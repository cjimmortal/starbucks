function openmenu(){
    document.getElementById("p").style.display="block";
   }
   function closemenu(){
    document.getElementById("p").style.display="none";
    document.getElementById(html).style.overflow="hidden";
    document.getElementById("body").style.overflow="hidden";
   }

   const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }   else{
                // entry.target.classList.remove('show');
            }
        });
   });

   const hiddenElements = document.querySelectorAll('.hidden');
   hiddenElements.forEach((el) => observer.observe(el));
