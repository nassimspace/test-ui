'use strict';
class FloatingMenu extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
    }
    async connectedCallback() {
        this.shadowRoot.innerHTML = `<style>        
      @font-face {
        font-family: 'Nunito Sans';
        font-weight: 400;
        src: url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap') format('woff2');
      }
      }


[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
  position: fixed;
  left: -9999px;
}
.menu-icon:checked + label,
.menu-icon:not(:checked) + label{
  position: fixed;
  top: 63px;
  right: 75px;
  display: block;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  z-index: 10;
}
.menu-icon:checked + label:before,
.menu-icon:not(:checked) + label:before{
  position: absolute;
  content: '';
  display: block;
  width: 30px;
  height: 20px;
  z-index: 20;
  top: 0;
  left: 0;
  border-top: 2px solid #ececee;
  border-bottom: 2px solid #ececee;
  transition: border-width 100ms 1500ms ease, 
              top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
              height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), 
              background-color 200ms ease,
              transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu-icon:checked + label:after,
.menu-icon:not(:checked) + label:after{
  position: absolute;
  content: '';
  display: block;
  width: 22px;
  height: 2px;
  z-index: 20;
  top: 10px;
  right: 4px;
  background-color: #C22966;
  margin-top: -1px;
  transition: width 100ms 1750ms ease, 
              right 100ms 1750ms ease,
              margin-top 100ms ease, 
              transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu-icon:checked + label:before{
  top: 10px;
  transform: rotate(45deg);
  height: 2px;
  background-color: #2965C0;
  border-width: 0;
  transition: border-width 100ms 340ms ease, 
              top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
              height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), 
              background-color 200ms 500ms ease,
              transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu-icon:checked + label:after{
  width: 30px;
  margin-top: 0;
  right: 0;
  transform: rotate(-45deg);
  transition: width 100ms ease,
              right 100ms ease,  
              margin-top 100ms 500ms ease, 
              transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav{
  position: fixed;
  top: 33px;
  right: 50px;
  display: block;
  width: 80px;
  height: 80px;
  padding: 0;
  margin: 0;
  z-index: 0;
  overflow: hidden;
  box-shadow: 0 8px 30px 0 rgba(0,0,0,0.3);
  background-color: #1d0087;
  animation: border-transform 7s linear infinite;
  transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),  
              right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
              transform 250ms 1100ms ease,
              width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1),
              height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
}
@keyframes border-transform{
    0%,100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
  14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
  28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; } 
  42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; } 
  56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
  70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
  84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; } 
}

.menu-icon:checked ~ .nav {
  animation-play-state: paused;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 200%;
  height: 200%;
  transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),  
              right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
              transform 250ms 700ms ease,
              width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1),
              height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav ul{
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 100%;
  padding: 5px;
  margin: 0;
  z-index: 6;
  text-align: center;
  transform: translateY(-50%);
  list-style: none;
}
.nav ul li{
  padding-top: 5px;
  padding-bottom: 5px;
  position: relative;
  display: block;
  width: 100%;
  padding: 5px;
  margin: 10px 0;
  text-align: center;
  list-style: none;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(30px);
  transition: all 250ms linear;
}
.nav ul li:nth-child(1){
  transition-delay: 300ms;
}
.nav ul li:nth-child(2){
  transition-delay: 250ms;
}
.nav ul li:nth-child(3){
  transition-delay: 200ms;
}
.nav ul li:nth-child(4){
  transition-delay: 150ms;
}
.nav ul li:nth-child(5){
  transition-delay: 100ms;
}
.nav ul li:nth-child(6){
  transition-delay: 50ms;
}
.nav ul li a{
  font-family: 'Montserrat', sans-serif;
  font-size: 9vh;
  text-transform: uppercase;
  line-height: .6;
  font-weight: 800;
  display: inline-block;
  position: relative;
  color: #ffec73;
  transition: all 250ms linear;
}
.nav ul li a:hover{
  text-decoration: none;
  color: #000000;
}
.nav ul li a:after{
  display: block;
  position: absolute;
  top: 50%;
  content: '';
  height: 2vh;
  margin-top: -1vh;
  width: 0;
  left: 0;
  background-color: #ff5805;
  opacity: 0.2;
  transition: width 250ms cubic-bezier(0.05, 0.87, 0.62, 0.97);
}
.nav ul li a:hover:after{
  width: 30vw;
}


.menu-icon:checked ~ .nav  ul li {
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 350ms ease,
              transform 250ms ease;
}
.menu-icon:checked ~ .nav ul li:nth-child(1){
  transition-delay: 1400ms;
}
.menu-icon:checked ~ .nav ul li:nth-child(2){
  transition-delay: 1480ms;
}
.menu-icon:checked ~ .nav ul li:nth-child(3){
  transition-delay: 1560ms;
}
.menu-icon:checked ~ .nav ul li:nth-child(4){
  transition-delay: 1640ms;
}
.menu-icon:checked ~ .nav ul li:nth-child(5){
  transition-delay: 1720ms;
}
.menu-icon:checked ~ .nav ul li:nth-child(6){
  transition-delay: 1800ms;
}

@media screen and (max-width: 991px) {
  .menu-icon:checked + label,
  .menu-icon:not(:checked) + label{
    right: 55px;
  }
  .logo {
    left: 30px;
  }
  .nav{
    right: 30px;
  }
  h1{
    font-size: 9vw;
    -webkit-text-stroke: 2px transparent;
    text-stroke: 2px transparent;
    -webkit-text-fill-color: #ffeba7;
    text-fill-color: #ffeba7;
    color: #ffeba7;
  }
  .nav ul li a{
    font-size: 8vh;
  }
}</style>
      	<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" style="display: none;">
  	<label for="menu-icon"></label>
  	<nav class="nav" itemscope itemtype="http://schema.org/SiteNavigationElement"> 		
  		<ul class="pt-5">
  			<li itemprop="name"><a href="#" itemprop="url">Work</a></li>
  			<li itemprop="name"><a href="#" itemprop="url">Studio</a></li>
  			<li itemprop="name"><a href="#" itemprop="url">News</a></li>
  			<li itemprop="name"><a href="#" itemprop="url">Contact</a></li>
  		  <li itemprop="name"><a href="#" itemprop="url">Work</a></li>
        <li itemprop="name"><a href="#" itemprop="url">Work</a></li>
      </ul>
  	</nav>`;
    }
}
// optional
const deepFreeze = (obj) => {
    Object.keys(obj).forEach((prop) => {
        if (typeof obj[prop] === 'object') deepFreeze(obj[prop]);
    });
    return Object.seal(obj);
};
const frozenComponent = deepFreeze(FloatingMenu);
customElements.define('nav-menu', frozenComponent);