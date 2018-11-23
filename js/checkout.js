document.addEventListener("DOMContentLoaded", function(){
    var precio = 21.9;
    var shipping = 16.00;
    var campoCantidad = document.getElementById("campo-cantidad");
    var precioTotal = document.getElementById("precio-cantidad");
    var subtotal = document.getElementById("subtotal-price");
    var total = document.getElementById("subtotal-price");
    var montoSubtotal = 0;
    var standardShipping = document.getElementById("standard");
    var specialShipping = document.getElementById("special");
    var premiumShipping = document.getElementById("premium");
    var shippingWrapper = document.getElementById("shipping-wrapper");
    var radioDigital = document.getElementById("digital-videogame");
    var radioPhysical = document.getElementById("dvd-videogame");
    var physicalWrapper = document.getElementById("physical-wrapper");
    var cantidad = 0;
    var total = 0;

    function calcularCostos(){
        subtotal.innerHTML = "$" + montoSubtotal.toFixed(2);
        
        total = document.getElementById("final-total");
        
        total.innerHTML = "$" + (montoSubtotal + shipping).toFixed(2);
    }

    campoCantidad.addEventListener("change", function(){
        cantidad = parseInt(campoCantidad.value);
        montoSubtotal = cantidad * precio;
        calcularCostos();
    });

    standardShipping.addEventListener("change", function(){
        shipping = cantidad * precio * 1.05;
        calcularCostos();

        if(standardShipping.checked)
        {
            shippingWrapper.style.display = "block";
        }
    });

    specialShipping.addEventListener("change", function(){
        shipping = cantidad * precio * 1.2;
        calcularCostos();

        if(specialShipping.checked)
        {
            shippingWrapper.style.display = "block";
        }
    });
    
    premiumShipping.addEventListener("change", function(){
        shipping = cantidad * precio * 1.5;
        calcularCostos();

        if(premiumShipping.checked)
        {
           shippingWrapper.style.display = "block";
        }
    });

    radioDigital.addEventListener("change", function(){

        if(radioDigital.checked)
        {
          physicalWrapper.style.display = "none";
        }
    });

    radioPhysical.addEventListener("change", function(){

        if(radioPhysical.checked)
        {
          physicalWrapper.style.display = "block";
        }
    });
});