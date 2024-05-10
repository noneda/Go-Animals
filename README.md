# Empresa 


Falta Que lenguaje de programación se va a Implementar  -> Entorno en el que se va a desarrollar -> Para que sistema Operativo va a ser Desarrollado (Opciones "Servidor Local" -> Falta Aclarar) y en que se va a Manejar las Bases de Datos (Por temas de Costos) Ubicación Frameworks y Librerías explica que es un Modelo Iterativo

Metodologia RUP

Esta empresa se basa a la **Venta de Comida de Animales Domésticos** donde el representante es

*Kellin Alejandra Guerrero Leiva*
*cc:* 

Donde se contacta con ella por medio de *WhatsApp* para llegar a la conclusión de la necesidades que ella exige para la creación del Proyecto

Donde se presentan las siguientes Necesidades que ellas No Presentación  

	Visualización de la información que ella Maneja para una facil Interpretación
	
	Necesita un generador de Reporter de las Actividades y de los Productos que ella administra 
	
	Necesita la Integración de Imagenes en el Software para una Mejor Interpretación del Sistema


## Introducción

	El presente documento establece los requisitos esenciales para el desarrollo de un sistema
	administrativo (SAC) para gestionar eficientemente las actividades de contabilidad y
	administración de Go Animals pet store.

### OBJETIVO

	El objetivo general de este proyecto es implementar un sistema administrativo (SAC)
	eficiente para Go Animals pet store, con el propósito de optimizar la gestión interna,
	mejorar el control financiero y garantizar la sostenibilidad del negocio.

### ÁMBITO DEL SISTEMA

	Go Animals Pet Store es una tienda de comidas de animales domésticos al que se le creará
	un SAC que establece los límites y alcance de la solución que se desarrollará para
	Go Animals Pet Store. Teniendo en cuenta  que no se abordará áreas ajenas a la
	administración y contabilidad.


### VISIÓN GENERAL DEL DOCUMENTO

	La misión del Sistema Administrativo (SAC) para Go Animals Pet Store es proporcionar una
	herramienta integral que revolucione la gestión de productos e inventario,
	asegurando una operación comercial eficiente y efectiva.

	Nos comprometemos a ofrecer una solución que permita una organización meticulosa y una
	actualización ágil de productos, precios e inventario.

	Nuestro objetivo es capacitar a los empleados con información precisa en tiempo real
	con este SAC, Go Animals Pet Store establecerá nuevos estándares de excelencia en la
	administración de tiendas de mascotas, garantizando el éxito continuo y la satisfacción
	del cliente.


### DESCRIPCIÓN GENERAL

	El proyecto para Go Animals Pet Store tiene como meta la creación de un sistema
	administrativo (SAC) diseñado a medida para la mejoración de la eficiencia operativa y
	la gestión de productos e inventario. Este sistema permitirá una organización
	meticulosa de los productos e inventario. Este sistema permitirá mostrar de forma
	detallada los productos, ofreciendo una plataforma donde se podrán registrar y
	categorizar con información detallada, facilitando así su búsqueda y actualización.
	Además, el SAC proporcionará un acceso sencillo a la gestión de precios, permitiendo
	actualizaciones ágiles en respuesta a las fluctuaciones del mercado o necesidades
	empresariales.

	Un aspecto crucial será el control de inventario, con un registro actualizado que
	refleje la disponibilidad de productos, lo que permitirá a los empleados verificar
	el stock en tiempo real. Por último, el sistema generará informes detallados sobre
	el estado del inventario y los precios, en conclusión este SAC está destinado a ser
	una herramienta importante para Go Animals.


### FUNCIONES DEL PRODUCTO 

****Usar con formato de historias de Usuario***

- Organización de Productos:
	- El SAC registra y clasifica los productos de manera ordenada.
	- Cada producto tiene información relevante, como nombre, descripción y categoría.
	+ Facilita la búsqueda y actualización de datos, optimizando la gestión interna.
- Gestión de Precios:
	+ Los precios de los productos están disponibles en el sistema.
	+ Se pueden actualizar fácilmente según las necesidades del negocio o cambios en el mercado.
- Control de inventario:
	+ El sistema mantiene un registro actualizado de la cantidad de productos disponibles.
- Informes y Análisis:
	+ El SAC genera informes sobre el estado del inventario y los precios.**

### CARACTERÍSTICAS DE LOS USUARIOS

***Expecificar cuales son ROLES***

	El Sistema Administrativo para Go Animals Pet Store está diseñado para satisfacer las
	necesidades de usuario específicos como el nivel de experiencia dentro del contexto de
	una tienda de mascotas. Al considerar características como el nivel de experiencia,
	habilidades tecnológicas, preferencias y contexto laboral, el SAC se adapta para ofrecer una
	experiencia de usuario óptima. Esto asegura que los usuarios puedan gestionar eficientemente
	el inventario, actualizar precios, y analizar datos relevantes, optimizados así la
	administración de la tienda y mejorando la experiencia de la compra. 


#  Sistema

## Como se va a implementar

	Arquitectura  : Modular -> 
		Para dividir las apps por Modulos independientes y bien definidos asi podiendo obtener numerosos beneficios
			Mantenimiento Simplificado
			Mayor recaudación de Código
			Escabilidad
			Compresión Sencilla
			
	Patron de Diseño : Factory Method -> 
		Para proporcionar una interfaz que pueda elaborar objetos en una superclase,  permitiendo que unas subclases concretas alteren el tipo de objetos ayudadon con
		La modularidad y reusabilidad
		Flexibilidad
		Facilita el intercambio
		Oculta la complejidad de la creación de objetos


## Requisitos

### Funcionales

*Tener en cuenta que los Elementos son Objetos pero ya en son procesos mas grandes donde ya interactúa con el Sistema*

	Gestor de Objetos
		Intructivo de Objetos
		Administrador de Objetos
		SubDivición de Objetos
	
	Gestor de Elementos 
		Categorizacion de Elementos
		Alertas por Acciones (Falta de Stock - Vencimiento de Objeto - ETC)
		Visualizacion de Elementos 
		Envio de Objetos
	
	Gestor de Reportes 
		Seleccion de la Información que necesita
		Conversion de la Informacion (Formatos pdf - xlsx)

### No Funcionales


***Colores y Fuentes Diseño***

*Datos adicionales - (Solo se va a usar en un Computo)*

	Este SoftWare sera creado con el Propocito de 
		Ser un software Local
		Que se ha de bajo rendimiento
		Que se ha rapido
		Que no posea Bugs
		Que se ha Especifico
		Que se ha Seguro 

### Diagrama Entidad Relación

![[medias/DER.png]]

### Diagrama de Clases

***No existe un Unico Formato -> :P ***