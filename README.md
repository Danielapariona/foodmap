# foodmap
Foodmap es una aplicación web que muestra los restaurante 'cerca de ti', donde puedes seleccionar un plato del restaurante y hacer tu pedido.

![foodmap-preview](https://user-images.githubusercontent.com/4741745/37867430-7e87ad04-2f66-11e8-9341-92c671884b67.png)

## Desarrollado para 
[Laboratoria](http://laboratoria.la)



foodmap
* **Track:** _Common Core_
* **Curso:** _Crea tu propia red social_
* **Unidad:** _3. Agiliza tu desarrollo_
***

En este trabajo se pidió crear una web-app que a través de un input pueda filtrar los restaurantes que se encuentran 'cerca de ti'. La estructura de los datos es libre, de igual manera el diseño.

### Flujos de la aplicación

* Vista splash con duración de 2 a 5 segundos que redirecciona a tu vista principal.  
![MVP Primera](assets/images/mvp/pantalla1.jpg)

* En la vista principal se muestran todos los restaurantes "cerca de ti" junto con el input para filtrar tu elección (Los criterios de filtrado son decisión tuya, puede ser por tipo de comida, costos, orden alfabético, etc.). El resultado debe mostrar únicamente aquellos restaurantes que cumplan con la condición. 
![MVP Segunda pantalla](assets/images/mvp/pantalla2.jpg)
![MVP Segunda pantalla](assets/images/mvp/pantalla3.jpg)

* Agregar un evento mouseover a las imágenes, lo que pase con el efecto es decisión tuya (Cambio de tamaño, muestra de texto, cambio de imagen, información, etc).
![MVP Segunda pantalla](assets/images/mvp/pantalla4.jpg)

* Al seleccionar alguno de los restaurantes, deberá mostrarse la información de este a través de un modal. Una vez cerrado el modal debe volver a la vista principal.
![MVP Segunda pantalla](assets/images/mvp/pantalla5.jpg)


### Se utilizó
`HTML` `CSS` `JS` y Jquery.

#### Primero se realizó un rediseño de la estructura de los datos:

* Detecta los restaurantes 'cerca de ti'  

![Primera pantalla](assets/images/mockup/Pantalla1.png "Pantalla")

* Muestra todos los restaurantes y puedes filtrar según el tipo de restaurant cómo pollería, chifa, cevicherí, etc.  

![Primera pantalla](assets/images/mockup/Pantalla2.png "Pantalla")

* Muestra los platos del restaurante, separado en dos listas como entradas, y plato principal. 

![Primera pantalla](assets/images/mockup/Pantalla3.png "Platos")

* Al pasar el cursor se muestra el nombre del plato. 

![Primera pantalla](assets/images/mockup/Pantalla4.png "Platos")

* Puedes seleccionar el plato que desees y hacer tu pedido 

![Primera pantalla](assets/images/mockup/Pantalla5.png "Platos")

#### Funcionalidad
* Para la funcionalidad se usó Jquery, para llenar la vista HTML de forma dinámica accediendo a la data (data.js), mostrando los restaurantes y los platos que tienen disponibles.
