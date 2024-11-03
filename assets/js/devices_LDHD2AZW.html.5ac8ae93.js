"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[50038],{71831:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>r,data:()=>n});var i=o(24691);const a={},r=(0,o(89260).A)(a,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"leedarson-ldhd2azw",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#leedarson-ldhd2azw"},[(0,i.Lk)("span",null,"Leedarson LDHD2AZW")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"LDHD2AZW")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Leedarson"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Leedarson")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Magnetic door & window contact sensor")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"contact, battery_low, tamper, temperature, battery, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/LDHD2AZW.png",alt:"Leedarson LDHD2AZW"})])],-1))])]),t[9]||(t[9]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><ol><li>Slide the top cover open to expose the battery pull tab, pull the plastic tab to activate the sensor, slide the top cover to the closed position</li><li>The LED indicator will be lit green for two seconds while the device is booting.</li><li>Once booted the LED will blink green three times every 5 seconds while scanning for a network.</li><li>If network is not found after 10 minutes, the sensor will go into sleep mode. To restart the pairing process, tamper the sensor by sliding the battery cover open and then closed or create a zone event by placing the magnet near the sensor and then move it more than 3” away from the sensor.</li><li>Once the device has successfully paired to the home controller or security system it is ready for installation, follow the steps in the installation section.</li></ol><h3 id="operation" tabindex="-1"><a class="header-anchor" href="#operation"><span>Operation</span></a></h3><ol><li>The LED on the sensor will remain off during the normal operation.</li><li>The sensor is equipped with a tamper switch. Sliding the battery cover to the open position will cause a trouble fault on the home controller or security system. Sliding the cover open will also activate the communication test for 30 seconds. Once battery cover is closed the trouble will clear.</li></ol><h3 id="reset-to-factory-defaults-reboot" tabindex="-1"><a class="header-anchor" href="#reset-to-factory-defaults-reboot"><span>Reset to Factory Defaults &amp; Reboot</span></a></h3><p>If the sensor needs to be factory defaulted:</p><ol><li>Enter the home controller or security system and use the device menus to delete the sensor that requires a factory reset.</li><li>Slide the battery cover to expose the battery and the reset release button.</li><li>Depress the small reset release button while continuing to the slide the battery cover until you expose the red reset text. You may need to use a small screwdriver or paper clip to press the release</li><li>Remove the battery, wait 10 seconds and then re-insert the battery.</li><li>Once the battery is installed slide the battery cover such that the reset button is no longer exposed but such that the cover is not completely closed. <em>(<strong>Note:</strong> You must perform this operation within 4 seconds of installing the battery.)</em></li><li>The factory reset process will take approximately 1 minute, during this time the LED will remain solid green, if the LED does not remain solid green this mean you did not release the reset in less than 4 seconds and must repeat steps 1 thru 4.</li><li>Upon completion of the factory reset the LED will blink green three times every 5 seconds indicating it’s ready to be paired.</li></ol><h3 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h3><p>If device has trouble with pairing to the home controller or security system try the following steps:</p><ol><li>Open, then close the battery cover to trigger a tamper and re-start the pairing process.</li><li>If device continues to have trouble pairing, remove the battery for 10 seconds and then re-insert it.</li><li>If device continues to have trouble pairing, use “Reset to Factory Defaults” procedure to attempt pairing again.</li></ol><p>If the device was communicating with the home controller or security system but is no longer communicating, try the following steps:</p><ol><li>If the device has been in use for months or years and the failure is sudden, check the controller to see if the device has a low battery. Follow the instructions provided for replacing the battery.</li><li>Perform a Factory Reset and then Re-pair the sensor as indicated in the steps above.</li><li>Trigger a tamper by opening and closing the battery cover, if the LED is blinking RED it’s an indication that your sensor can no longer communicate with the home controller or security system due to changes in your RF environment. Install a repeater so the system’s range can reach the desired location for the sensor.</li></ol><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',14)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,i.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary"><span>Contact (binary)</span></a></h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14))])}]]),n=JSON.parse('{"path":"/devices/LDHD2AZW.html","title":"Leedarson LDHD2AZW control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Leedarson LDHD2AZW control via MQTT","description":"Integrate your Leedarson LDHD2AZW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-11-01T12:47:02.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Operation","slug":"operation","link":"#operation","children":[]},{"level":3,"title":"Reset to Factory Defaults & Reboot","slug":"reset-to-factory-defaults-reboot","link":"#reset-to-factory-defaults-reboot","children":[]},{"level":3,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Contact (binary)","slug":"contact-binary","link":"#contact-binary","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1730576982000},"filePathRelative":"devices/LDHD2AZW.md"}')}}]);