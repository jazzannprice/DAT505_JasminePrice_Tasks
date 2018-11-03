// Task 1

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
  geometry1 = new THREE.BoxGeometry(100, 100, 100);
  geometry2 = new THREE.BoxGeometry(150, 150, 150);
  geometry3 = new THREE.BoxGeometry(50, 50, 50);
  geometry4 = new THREE.BoxGeometry(100, 100, 100);
  geometry5 = new THREE.BoxGeometry(50, 50, 50);
  geometry6 = new THREE.BoxGeometry(100, 100, 100);
  geometry7 = new THREE.CircleGeometry(40, 40, 40);
  geometry8 = new THREE.CircleGeometry(40, 40, 40);

  // Adding the materials to the shapes
  material1 = new THREE.MeshLambertMaterial({ color: "#FF5E5D" } );
  material2 = new THREE.MeshBasicMaterial({
    color: 0xBF0E00,
    wireframe: true
  });
  material3 = new THREE.MeshLambertMaterial({ color: "#87D1FF" } );
  material4 = new THREE.MeshBasicMaterial({
    color: 0x3D5E73,
    wireframe: true
  });
  material5 = new THREE.MeshLambertMaterial({ color: "#FFFF8D" } );
  material6 = new THREE.MeshBasicMaterial({
    color: 0xFFFF00,
    wireframe: true
  });
  material7 = new THREE.MeshPhongMaterial({
  color: 0xFF983B,
  shininess: 5} );
  material8 = new THREE.MeshPhongMaterial({
  color: 0xFF983B,
  shininess: 5} );

  // Creating mesh
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh4 = new THREE.Mesh( geometry4, material4 );
  mesh5 = new THREE.Mesh( geometry5, material5 );
  mesh6 = new THREE.Mesh( geometry6, material6 );
  mesh7 = new THREE.Mesh( geometry7, material7 );
  mesh8 = new THREE.Mesh( geometry8, material8 );

  // Adjusting the shapes position
  mesh1.position.z = -1000;
  mesh2.position.z = -1000;

  mesh3.position.z = -1000;
  mesh3.position.x = -250;

  mesh4.position.z = -1000;
  mesh4.position.x = -250;

  mesh5.position.z = -1000;
  mesh5.position.x = 250;

  mesh6.position.z = -1000;
  mesh6.position.x = 250;

  mesh7.position.z = -1000;
  mesh7.position.y = 200;

  mesh8.position.z = -1000;
  mesh8.position.y = -200;

  // Add mesh to scene
  scene.add( mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8);
}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  // Rotating the shapes
  mesh1.rotation.x += 0.01;
  mesh1.rotation.y += 0.01;

  mesh2.rotation.x += -0.01;
  mesh2.rotation.y += 0.01;

  mesh3.rotation.x += -0.03;
  mesh3.rotation.y += -0.03;

  mesh4.rotation.x += 0.03;
  mesh4.rotation.y += 0.03;

  mesh5.rotation.x += -0.03;
  mesh5.rotation.y += -0.03;

  mesh6.rotation.x += -0.03;
  mesh6.rotation.y += 0.03;

  mesh7.rotation.y += 0.08;

  mesh8.rotation.y += 0.09;

  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
