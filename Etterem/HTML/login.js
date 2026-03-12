 
 

 

function mutasdKapcsolatot() {
    
    let nev = prompt("Kérem adja meg a nevét:");
    
    
    if (nev === null || nev.trim() === "") {
        alert("A név megadása kötelező!");
        return; //
    }

    let email = prompt("Kérem adja meg az email címét:");
    
    if (email === null || email.trim() === "") {
        alert("Az email cím megadása kötelező!");
        return; //
        
    }

    
    alert(`Köszönjük, ${nev} (${email})! Hamarosan értesítünk a Habibiz újdonságairól.`);
    
    
    console.log("Új feliratkozó:", { nev, email });
}