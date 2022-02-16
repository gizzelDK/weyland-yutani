import { Component, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-var-menu',
  templateUrl: './var-menu.component.html',
  styleUrls: ['./var-menu.component.css'],
})
export class VarMenuComponent implements OnInit {

  constructor() {
    var scene = new THREE.Scene()
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
    
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight )
    var bgElem = document.getElementById("bg")
    console.log(bgElem)
 if(bgElem){
   bgElem.style.position = "fixed"
 }
    bgElem?.appendChild( renderer.domElement )
    // var bg =  document.body.appendChild( renderer.domElement )
    // bg.classList.add("bg")

    ///Light
    const pointLight = new THREE.PointLight(0xffffff)
    pointLight.position.set( 5, 5, 5)
    
    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(pointLight, ambientLight)

    /// Star backdrops
    const spaceTexture = new THREE.TextureLoader().load('./assets/pics/stars.jpg')
    scene.background = spaceTexture

    for(var i = 200;i > 0;i--){
      addStar()
    }
    
    ///Galaxy
    var torusGeometry = new THREE.TorusGeometry( 32, 5, 3, 100 )
    const galaxyMaterial = new THREE.TextureLoader().load('/assets/pics/milky_way.jpg')
    var torusMaterial = new THREE.MeshBasicMaterial( { map: galaxyMaterial, color: 0x444444 } )

    /// Logo
    const logoTexture = new THREE.TextureLoader().load('/assets/pics/wyalphabg.png')
    
    const logo = new THREE.Mesh(
      new THREE.BoxGeometry(9, 4, 9),
      new THREE.MeshBasicMaterial( { map: logoTexture})
    );
    scene.add(logo)

    var torus = new THREE.Mesh( torusGeometry, torusMaterial );
    scene.add( torus );
    ///Camera
    camera.position.setZ(50)
    const controls = new OrbitControls(camera, renderer.domElement)
    
    ///Animation
    var animate = function () {
      requestAnimationFrame( animate )
        ///Galaxy
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;
    
      controls.update()
      renderer.render( scene, camera )
    };
    function addStar(){
      const geometry = new THREE.SphereGeometry(0.1, 24, 24)
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
      const star = new THREE.Mesh( geometry, material )

      var dimArr = [THREE.MathUtils.randFloatSpread( 100), THREE.MathUtils.randFloatSpread( 100),THREE.MathUtils.randFloatSpread( 100)]
      star.position.set(dimArr[0], dimArr[1], dimArr[2])
      scene.add(star)
    }
    function moveCamera(){
      const t = document.body.getBoundingClientRect().top;
      logo.rotation.x += 0.01;
      logo.rotation.y += 0.005;
      logo.rotation.z += 0.01;

      camera.position.z = t * -0.01;
      camera.position.x = t * -0.002;
      camera.position.y = t * -0.002;

    }
    window.addEventListener("scroll", moveCamera)

    animate();
  }

  ngOnInit(): void {
  }

}
