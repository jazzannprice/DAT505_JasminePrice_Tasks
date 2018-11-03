//Task 3

//Setup the global variables
var camera, scene, renderer, mesh1, light1, light2;

function init() {
	// Create a scene
	scene = new THREE.Scene();

  //Configure shapes settings-------------------------------------------------
var sphere = new THREE.SphereBufferGeometry( 1, 16, 8 );

	light1 = new THREE.PointLight( 0xff0040, 5, 50 );
		light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
		scene.add( light1 );
	light2 = new THREE.PointLight( 0x0040ff, 5, 50 );
			light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0040ff } ) ) );
			scene.add( light2 );
	var geometry1 = new THREE.SphereGeometry( 10, 30, 15 );

	var material1 = new THREE.MeshPhongMaterial({
		color: 0xffffff,
		shading: THREE.FlatShading
	});

	mesh1 = new THREE.Mesh( geometry1, material1 );

	scene.add(mesh1);

	light1.position.x = -15;
	light2.position.x = 15;
  //--------------------------------------------------------------------------


  //Configure camera/render settings------------------------------------------
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 2, 1000 );
	// Move the camera 'out' by 30
	camera.position.z = 30;
	// Create a WebGL Rendered
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0x000000);
	renderer.setSize( window.innerWidth, window.innerHeight );
	// Add in the created DOM element to the body of the document
	document.body.appendChild( renderer.domElement );
}
	//--------------------------------------------------------------------------



function animate() {

	requestAnimationFrame( animate );

	mesh1.rotation.y += 0.01

	light1.position.y -= 0.3;

	if (light1.position.y<-55){
		light1.position.y = 60;
	}

	light2.position.y -= 0.3;

	if (light2.position.y<-55){
		light2.position.y = 60;
	}

	// Render everything using the created renderer, scene, and camera
	renderer.render( scene, camera );
}

init();
animate();
