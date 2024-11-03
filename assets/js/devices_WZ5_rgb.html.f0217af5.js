"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[18282],{34513:(o,t,e)=>{e.r(t),e.d(t,{comp:()=>d,data:()=>c});var u=e(24691);const l={},d=(0,e(89260).A)(l,[["render",function(o,t){const e=(0,u.g2)("RouteLink");return(0,u.uX)(),(0,u.CE)("div",null,[t[7]||(t[7]=(0,u.Lk)("h1",{id:"skydance-wz5-rgb",tabindex:"-1"},[(0,u.Lk)("a",{class:"header-anchor",href:"#skydance-wz5-rgb"},[(0,u.Lk)("span",null,"Skydance WZ5_rgb")])],-1)),(0,u.Lk)("table",null,[t[6]||(t[6]=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("th"),(0,u.Lk)("th")])],-1)),(0,u.Lk)("tbody",null,[t[2]||(t[2]=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Model"),(0,u.Lk)("td",null,"WZ5_rgb")],-1)),(0,u.Lk)("tr",null,[t[1]||(t[1]=(0,u.Lk)("td",null,"Vendor",-1)),(0,u.Lk)("td",null,[(0,u.bF)(e,{to:"/supported-devices/#v=Skydance"},{default:(0,u.k6)((()=>t[0]||(t[0]=[(0,u.eW)("Skydance")]))),_:1})])]),t[3]||(t[3]=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Description"),(0,u.Lk)("td",null,"Zigbee & RF 5 in 1 LED controller (RGB mode)")],-1)),t[4]||(t[4]=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Exposes"),(0,u.Lk)("td",null,"light (state, brightness, color_hs), linkquality")],-1)),t[5]||(t[5]=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Picture"),(0,u.Lk)("td",null,[(0,u.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WZ5_rgb.png",alt:"Skydance WZ5_rgb"})])],-1))])]),t[8]||(t[8]=(0,u.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_hs</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_hs</code>: To control the hue/saturation (color) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;hue&quot;: HUE, &quot;saturation&quot;: SATURATION}}</code> (e.g. <code>{&quot;color&quot;:{&quot;hue&quot;:360,&quot;saturation&quot;:100}}</code>). To read the hue/saturation send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;hue&quot;:&quot;&quot;,&quot;saturation&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the hue/saturation via: <ul><li>HSB space (hue, saturation, brightness): <code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;b&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsb&quot;: &quot;H,S,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsb&quot;:&quot;360,100,100&quot;}}</code></li><li>HSV space (hue, saturation, value):<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;v&quot;: V}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;v&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsv&quot;: &quot;H,S,V&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsv&quot;:&quot;360,100,100&quot;}}</code></li><li>HSL space (hue, saturation, lightness)<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;l&quot;: L}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;l&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsl&quot;: &quot;H,S,L&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsl&quot;:&quot;360,100,100&quot;}}</code></li></ul></li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6))])}]]),c=JSON.parse('{"path":"/devices/WZ5_rgb.html","title":"Skydance WZ5_rgb control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Skydance WZ5_rgb control via MQTT","description":"Integrate your Skydance WZ5_rgb via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-01-31T17:42:44.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1730576982000},"filePathRelative":"devices/WZ5_rgb.md"}')}}]);