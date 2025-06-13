export default function Footer ({ is }  : { is : boolean}) {
    console.log(is);
    
    return (
        <>
           <footer 
               className = {is ? 'prd' : ''}
           >
                <h3 id="h3">
                    Աշխատանքային ժամերը
                    <h6>Երկ-Շբթ 10:00 -  20:00  </h6>  
                    <h6>Կիրակի 11:00 - 19:00</h6>  
                </h3>
                <h3 id="second">
                    Առաքում
                    <h6>1 աշխատանքային օրվա ընթացքում 10:00 - 20:00</h6>
                    <h6>ընթացքում 10:00 - 20:00</h6>
                </h3>
           </footer>     
        </>
    )
}


