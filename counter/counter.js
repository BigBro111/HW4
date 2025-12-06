function ToBasket(id) {
  document.getElementById("zb" + id).style.display = "none"; 
  document.getElementById("cbd" + id).style.display = "inline"; 
  document.getElementById("c" + id).style.display = "inline"; 
  document.getElementById("cbi" + id).style.display = "inline"; 
  document.getElementById("cs" + id).style.display = "inline"; 
}

function ProdCntInc(id) { 
  n = 0; 
  nv = 0;
  n = parseInt(document.getElementById("c" + id).value); 
  nv = n + 1;
  document.getElementById("c" + id).value = n + 1; 
  document.getElementById("cs" + id).value = nv * 150; 
} 

function ProdCntDec(id) { 
  n = 0; 
  nv = 0; 
  n = parseInt(document.getElementById("c" + id).value); 
  nv = n - 1; 
  document.getElementById("c" + id).value = nv; 
  document.getElementById("cs" + id).value = nv * 150; 
  if (nv < 1) { 
    document.getElementById("zb" + id).style.display = "inline"; 
    document.getElementById("cbd" + id).style.display = "none"; 
    document.getElementById("c" + id).style.display = "none"; 
    document.getElementById("cbi" + id).style.display = "none"; 
    document.getElementById("cs" + id).style.display = "none"; 
  }
} 

