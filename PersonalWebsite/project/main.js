var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight/1.22 );
renderer.setClearColor( 0xffffff );
document.body.appendChild( renderer.domElement );

//MeshDrag = document.createElement('div');
//MeshDrag.className = 'mesh-drag';

var cone = new THREE.ConeGeometry(1, 2, 10);
var box1 = new THREE.BoxGeometry(2, 2, 2);

var singleGeometry = new THREE.Geometry();

var coneMesh = new THREE.Mesh(cone);
coneMesh.position.set( 0, 2, 0 )
var box1Mesh = new THREE.Mesh(box1);

coneMesh.updateMatrix(); 
singleGeometry.merge(coneMesh.geometry, coneMesh.matrix);

box1Mesh.updateMatrix(); 
singleGeometry.merge(box1Mesh.geometry, box1Mesh.matrix);

var material = new THREE.MeshPhongMaterial({color: 0x1111cc});
var mesh = new THREE.Mesh(singleGeometry, material);
mesh.position.set(0,0,0)
scene.add(mesh);

var helper = new THREE.EdgesHelper( mesh, 0xffffff );
scene.add( helper );


var light = new THREE.AmbientLight( 0x404040 , .5 );
scene.add( light );


var directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
directionalLight.position.set( 0, .5, 1 );
scene.add( directionalLight );

var scale = 0.005;
var lastX = 0;
var lastY = 0;
var meshX = 0;
var meshY = 0;

var dragger = new Draggable(document.createElement("div"), {
  onDrag: dragAction,
  onThrowUpdate: dragAction,
  trigger: renderer.domElement
});

camera.position.z = 5;

function render() {
	requestAnimationFrame( render );
  
  
  //TweenMax.set(MeshDrag, {
	//	position:'absolute',
	//	x:0
	//})
  
  //draggable.create(MeshDrag, {type:x,y})
  
	renderer.render( scene, camera );
}
function dragAction() {
      
  var x = this.x;
  var y = this.y;

  var dx = x - lastX;
  var dy = y - lastY;

  lastX = x;
  lastY = y;

  meshX += dx;
  meshY += dy;
  
  mesh.rotation.x = meshY * scale;
  mesh.rotation.y = meshX * scale;
}
render();
//body.appendChild(nullObject);
