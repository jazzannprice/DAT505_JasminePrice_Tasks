// Task 2

//Global variables
var scene, camera, renderer;
var geometry, material, mesh;

function init(){
  // Create an empty scene
  scene = new THREE.Scene();

  // Create a perspective camera
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){

  // Configure lights -------------------------------
  var light1 = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light1);

  var light2 = new THREE.PointLight(0xffffff, 0.8);
  scene.add(light2);

  // Adding shapes into the scene
  geometry = new THREE.BoxGeometry(50, 50, 50);


  for(var i = 0; i<50; i++){
  // Creating mesh
  mesh = new THREE.Mesh( geometry, material );
  material = new THREE.MeshLambertMaterial({ color: Math.random() * 0xFFFFFF } );
  mesh.position.x = (Math.random() - 0.5) * 1000;
  mesh.position.y = (Math.random() - 0.5) * 1000;
  mesh.position.z = -1000;

  mesh.rotation.x = Math.random();
  mesh.rotation.y = Math.random();
  mesh.rotation.z = Math.random();


  // Add mesh to scene
  scene.add( mesh );
  }
}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
