#!/bin/sh
# Downloads and fixes up the map
curl https://simplemaps.com/static/demos/resources/svg-library/svgs/world.svg | \
sed \
	-e 's/viewbox/viewBox/g' \
	-e 's/class="Angola"/class="AO"/g' \
	-e 's/class="Antigua and Barbuda"/class="AG"/g' \
	-e 's/class="Argentina"/class="AR"/g' \
	-e 's/class="Australia"/class="AU"/g' \
	-e 's/class="Azerbaijan"/class="AZ"/g' \
	-e 's/class="Bahamas"/class="BS"/g' \
	-e 's/class="Canada"/class="CA"/g' \
	-e 's/class="Cape Verde"/class="CV"/g' \
	-e 's/class="Chile"/class="CL"/g' \
	-e 's/class="China"/class="CN"/g' \
	-e 's/class="Comoros"/class="KM"/g' \
	-e 's/class="Cyprus"/class="CY"/g' \
	-e 's/class="Denmark"/class="DK"/g' \
	-e 's/class="Federated States of Micronesia"/class="FM"/g' \
	-e 's/class="Fiji"/class="FJ"/g' \
	-e 's/class="France"/class="FR"/g' \
	-e 's/class="Greece"/class="GR"/g' \
	-e 's/class="Indonesia"/class="ID"/g' \
	-e 's/class="Italy"/class="IT"/g' \
	-e 's/class="Japan"/class="JP"/g' \
	-e 's/class="Malaysia"/class="MY"/g' \
	-e 's/class="Malta"/class="MT"/g' \
	-e 's/class="Mauritius"/class="MU"/g' \
	-e 's/class="Norway"/class="NO"/g' \
	-e 's/class="New Zealand"/class="NZ"/g' \
	-e 's/class="Oman"/class="OM"/g' \
	-e 's/class="Papua New Guinea"/class="PG"/g' \
	-e 's/class="Philippines"/class="PH"/g' \
	-e 's/class="Russian Federation"/class="RU"/g' \
	-e 's/class="Saint Kitts and Nevis"/class="KN"/g' \
	-e 's/class="Samoa"/class="WS"/g' \
	-e 's/class="São Tomé and Principe"/class="ST"/g' \
	-e 's/class="Seychelles"/class="SC"/g' \
	-e 's/class="Solomon Islands"/class="SB"/g' \
	-e 's/class="Tonga"/class="TO"/g' \
	-e 's/class="Trinidad and Tobago"/class="TT"/g' \
	-e 's/class="Turkey"/class="TR"/g' \
	-e 's/class="United Kingdom"/class="GB"/g' \
	-e 's/class="United States"/class="US"/g' \
	-e 's/class="Vanuatu"/class="VU"/g' \
	-e '/<\/svg>/i \
 <circle id="VA" cx="1051" cy="234" r="2"/> \
 <circle id="SM" cx="1051" cy="220" r="2"/> \
 <circle id="MC" cx="1022" cy="223" r="2"/> \
 <circle id="AD" cx="994" cy="229" r="2"/> \
 <circle id="LI" cx="1034" cy="200" r="2"/> \
 <circle id="SG" cx="1575" cy="493" r="2"/> \
 <circle id="KI" cx="1986" cy="489" r="2"/> \
' \
> world.svg

