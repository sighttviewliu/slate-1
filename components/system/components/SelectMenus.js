import * as React from "react";
import * as Constants from "~/common/constants";
import * as SVG from "~/components/system/svg";

import { css } from "@emotion/react";

import { DescriptionGroup } from "~/components/system/components/fragments/DescriptionGroup";

const INPUT_STYLES = `
  font-family: ${Constants.font.text};
  -webkit-appearance: none;
  width: 100%;
  height: 40px;
  background: ${Constants.system.white};
  color: ${Constants.system.black};
  border-radius: 4px;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: flex-start;
  outline: 0;
  border: 0;
  box-sizing: border-box;
  transition: 200ms ease all;
`;

const STYLES_SELECT_MENU = css`
  display: inline-flex;
  position: relative;
  height: 40px;
  max-width: 320px;
  width: 100%;
`;

const STYLES_SELECT_MENU_FULL = css`
  display: inline-flex;
  position: relative;
  height: 40px;
  width: 100%;
`;

const STYLES_SELECT_MENU_ANCHOR = css`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  width: 100%;
  height: 40px;
`;

const STYLES_SELECT_MENU_LABEL = css`
  ${INPUT_STYLES}
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15),
    inset 0 0 0 1px ${Constants.system.darkGray};
  padding: 0 48px 0 24px;
`;

const STYLES_SELECT_MENU_CATEGORY = css`
  color: ${Constants.system.darkGray};
  margin-left: 4px;
`;

const STYLES_SELECT_MENU_CHEVRON = css`
  position: absolute;
  right: 12px;
  margin-top: 1px;
`;

const SELECT_COUNTRY_OPTIONS = [
	{ value: "Afghanistan", name: "Afghanistan" },
	{ value: "Albania", name: "Albania" },
	{ value: "Algeria", name: "Algeria" },
	{ value: "American Samoa", name: "American Samoa" },
	{ value: "Andorra", name: "Andorra" },
	{ value: "Angola", name: "Angola" },
	{ value: "Anguilla", name: "Anguilla" },
	{ value: "Antarctica", name: "Antarctica" },
	{ value: "Antigua and Barbuda", name: "Antigua and Barbuda" },
	{ value: "Argentina", name: "Argentina" },
	{ value: "Armenia", name: "Armenia" },
	{ value: "Aruba", name: "Aruba" },
	{ value: "Australia", name: "Australia" },
	{ value: "Austria", name: "Austria" },
	{ value: "Azerbaijan", name: "Azerbaijan" },
	{ value: "Bahamas", name: "Bahamas" },
	{ value: "Bahrain", name: "Bahrain" },
	{ value: "Bangladesh", name: "Bangladesh" },
	{ value: "Barbados", name: "Barbados" },
	{ value: "Belarus", name: "Belarus" },
	{ value: "Belgium", name: "Belgium" },
	{ value: "Belize", name: "Belize" },
	{ value: "Benin", name: "Benin" },
	{ value: "Bermuda", name: "Bermuda" },
	{ value: "Bhutan", name: "Bhutan" },
	{ value: "Bolivia (Plurinational State of)", name: "Bolivia (Plurinational State of)" },
	{ value: "Bonaire, Sint Eustatius and Saba", name: "Bonaire, Sint Eustatius and Saba" },
	{ value: "Bosnia and Herzegovina", name: "Bosnia and Herzegovina" },
	{ value: "Botswana", name: "Botswana" },
	{ value: "Bouvet Island", name: "Bouvet Island" },
	{ value: "Brazil", name: "Brazil" },
	{ value: "British Indian Ocean Territory", name: "British Indian Ocean Territory" },
	{ value: "Brunei Darussalam", name: "Brunei Darussalam" },
	{ value: "Bulgaria", name: "Bulgaria" },
	{ value: "Burkina Faso", name: "Burkina Faso" },
	{ value: "Burundi", name: "Burundi" },
	{ value: "Cabo Verde", name: "Cabo Verde" },
	{ value: "Cambodia", name: "Cambodia" },
	{ value: "Cameroon", name: "Cameroon" },
	{ value: "Canada", name: "Canada" },
	{ value: "Cayman Islands", name: "Cayman Islands" },
	{ value: "Central African Republic", name: "Central African Republic" },
	{ value: "Chad", name: "Chad" },
	{ value: "Chile", name: "Chile" },
	{ value: "China", name: "China" },
	{ value: "Christmas Island", name: "Christmas Island" },
	{ value: "Cocos (Keeling) Islands", name: "Cocos (Keeling) Islands" },
	{ value: "Colombia", name: "Colombia" },
	{ value: "Comoros", name: "Comoros" },
	{ value: "Congo (the Democratic Republic of the)", name: "Congo (the Democratic Republic of the)" },
	{ value: "Congo", name: "Congo" },
	{ value: "Cook Islands", name: "Cook Islands" },
	{ value: "Costa Rica", name: "Costa Rica" },
	{ value: "Croatia", name: "Croatia" },
	{ value: "Cuba", name: "Cuba" },
	{ value: "Curaçao", name: "Curaçao" },
	{ value: "Cyprus", name: "Cyprus" },
	{ value: "Czechia", name: "Czechia" },
	{ value: "Côte d'Ivoire", name: "Côte d'Ivoire" },
	{ value: "Denmark", name: "Denmark" },
	{ value: "Djibouti", name: "Djibouti" },
	{ value: "Dominica", name: "Dominica" },
	{ value: "Dominican Republic", name: "Dominican Republic" },
	{ value: "Ecuador", name: "Ecuador" },
	{ value: "Egypt", name: "Egypt" },
	{ value: "El Salvador", name: "El Salvador" },
	{ value: "Equatorial Guinea", name: "Equatorial Guinea" },
	{ value: "Eritrea", name: "Eritrea" },
	{ value: "Estonia", name: "Estonia" },
	{ value: "Eswatini", name: "Eswatini" },
	{ value: "Ethiopia", name: "Ethiopia" },
	{ value: "Falkland Islands [Malvinas]", name: "Falkland Islands [Malvinas]" },
	{ value: "Faroe Islands", name: "Faroe Islands" },
	{ value: "Fiji", name: "Fiji" },
	{ value: "Finland", name: "Finland" },
	{ value: "France", name: "France" },
	{ value: "French Guiana", name: "French Guiana" },
	{ value: "French Polynesia", name: "French Polynesia" },
	{ value: "French Southern Territories", name: "French Southern Territories" },
	{ value: "Gabon", name: "Gabon" },
	{ value: "Gambia", name: "Gambia" },
	{ value: "Georgia", name: "Georgia" },
	{ value: "Germany", name: "Germany" },
	{ value: "Ghana", name: "Ghana" },
	{ value: "Gibraltar", name: "Gibraltar" },
	{ value: "Greece", name: "Greece" },
	{ value: "Greenland", name: "Greenland" },
	{ value: "Grenada", name: "Grenada" },
	{ value: "Guadeloupe", name: "Guadeloupe" },
	{ value: "Guam", name: "Guam" },
	{ value: "Guatemala", name: "Guatemala" },
	{ value: "Guernsey", name: "Guernsey" },
	{ value: "Guinea", name: "Guinea" },
	{ value: "Guinea-Bissau", name: "Guinea-Bissau" },
	{ value: "Guyana", name: "Guyana" },
	{ value: "Haiti", name: "Haiti" },
	{ value: "Heard Island and McDonald Islands", name: "Heard Island and McDonald Islands" },
	{ value: "Holy See", name: "Holy See" },
	{ value: "Honduras", name: "Honduras" },
	{ value: "Hong Kong", name: "Hong Kong" },
	{ value: "Hungary", name: "Hungary" },
	{ value: "Iceland", name: "Iceland" },
	{ value: "India", name: "India" },
	{ value: "Indonesia", name: "Indonesia" },
	{ value: "Iran (Islamic Republic of)", name: "Iran (Islamic Republic of)" },
	{ value: "Iraq", name: "Iraq" },
	{ value: "Ireland", name: "Ireland" },
	{ value: "Isle of Man", name: "Isle of Man" },
	{ value: "Israel", name: "Israel" },
	{ value: "Italy", name: "Italy" },
	{ value: "Jamaica", name: "Jamaica" },
	{ value: "Japan", name: "Japan" },
	{ value: "Jersey", name: "Jersey" },
	{ value: "Jordan", name: "Jordan" },
	{ value: "Kazakhstan", name: "Kazakhstan" },
	{ value: "Kenya", name: "Kenya" },
	{ value: "Kiribati", name: "Kiribati" },
	{ value: "Korea (the Democratic People's Republic of)", name: "Korea (the Democratic People's Republic of)" },
	{ value: "Korea (the Republic of)", name: "Korea (the Republic of)" },
	{ value: "Kuwait", name: "Kuwait" },
	{ value: "Kyrgyzstan", name: "Kyrgyzstan" },
	{ value: "Lao People's Democratic Republic", name: "Lao People's Democratic Republic" },
	{ value: "Latvia", name: "Latvia" },
	{ value: "Lebanon", name: "Lebanon" },
	{ value: "Lesotho", name: "Lesotho" },
	{ value: "Liberia", name: "Liberia" },
	{ value: "Libya", name: "Libya" },
	{ value: "Liechtenstein", name: "Liechtenstein" },
	{ value: "Lithuania", name: "Lithuania" },
	{ value: "Luxembourg", name: "Luxembourg" },
	{ value: "Macao", name: "Macao" },
	{ value: "Madagascar", name: "Madagascar" },
	{ value: "Malawi", name: "Malawi" },
	{ value: "Malaysia", name: "Malaysia" },
	{ value: "Maldives", name: "Maldives" },
	{ value: "Mali", name: "Mali" },
	{ value: "Malta", name: "Malta" },
	{ value: "Marshall Islands", name: "Marshall Islands" },
	{ value: "Martinique", name: "Martinique" },
	{ value: "Mauritania", name: "Mauritania" },
	{ value: "Mauritius", name: "Mauritius" },
	{ value: "Mayotte", name: "Mayotte" },
	{ value: "Mexico", name: "Mexico" },
	{ value: "Micronesia (Federated States of)", name: "Micronesia (Federated States of)" },
	{ value: "Moldova (the Republic of)", name: "Moldova (the Republic of)" },
	{ value: "Monaco", name: "Monaco" },
	{ value: "Mongolia", name: "Mongolia" },
	{ value: "Montenegro", name: "Montenegro" },
	{ value: "Montserrat", name: "Montserrat" },
	{ value: "Morocco", name: "Morocco" },
	{ value: "Mozambique", name: "Mozambique" },
	{ value: "Myanmar", name: "Myanmar" },
	{ value: "Namibia", name: "Namibia" },
	{ value: "Nauru", name: "Nauru" },
	{ value: "Nepal", name: "Nepal" },
	{ value: "Netherlands", name: "Netherlands" },
	{ value: "New Caledonia", name: "New Caledonia" },
	{ value: "New Zealand", name: "New Zealand" },
	{ value: "Nicaragua", name: "Nicaragua" },
	{ value: "Niger", name: "Niger" },
	{ value: "Nigeria", name: "Nigeria" },
	{ value: "Niue", name: "Niue" },
	{ value: "Norfolk Island", name: "Norfolk Island" },
	{ value: "Northern Mariana Islands", name: "Northern Mariana Islands" },
	{ value: "Norway", name: "Norway" },
	{ value: "Oman", name: "Oman" },
	{ value: "Pakistan", name: "Pakistan" },
	{ value: "Palau", name: "Palau" },
	{ value: "Palestine, State of", name: "Palestine, State of" },
	{ value: "Panama", name: "Panama" },
	{ value: "Papua New Guinea", name: "Papua New Guinea" },
	{ value: "Paraguay", name: "Paraguay" },
	{ value: "Peru", name: "Peru" },
	{ value: "Philippines", name: "Philippines" },
	{ value: "Pitcairn", name: "Pitcairn" },
	{ value: "Poland", name: "Poland" },
	{ value: "Portugal", name: "Portugal" },
	{ value: "Puerto Rico", name: "Puerto Rico" },
	{ value: "Qatar", name: "Qatar" },
	{ value: "Republic of North Macedonia", name: "Republic of North Macedonia" },
	{ value: "Romania", name: "Romania" },
	{ value: "Russian Federation", name: "Russian Federation" },
	{ value: "Rwanda", name: "Rwanda" },
	{ value: "Réunion", name: "Réunion" },
	{ value: "Saint Barthélemy", name: "Saint Barthélemy" },
	{ value: "Saint Helena, Ascension and Tristan da Cunha", name: "Saint Helena, Ascension and Tristan da Cunha" },
	{ value: "Saint Kitts and Nevis", name: "Saint Kitts and Nevis" },
	{ value: "Saint Lucia", name: "Saint Lucia" },
	{ value: "Saint Martin (French part)", name: "Saint Martin (French part)" },
	{ value: "Saint Pierre and Miquelon", name: "Saint Pierre and Miquelon" },
	{ value: "Saint Vincent and the Grenadines", name: "Saint Vincent and the Grenadines" },
	{ value: "Samoa", name: "Samoa" },
	{ value: "San Marino", name: "San Marino" },
	{ value: "Sao Tome and Principe", name: "Sao Tome and Principe" },
	{ value: "Saudi Arabia", name: "Saudi Arabia" },
	{ value: "Senegal", name: "Senegal" },
	{ value: "Serbia", name: "Serbia" },
	{ value: "Seychelles", name: "Seychelles" },
	{ value: "Sierra Leone", name: "Sierra Leone" },
	{ value: "Singapore", name: "Singapore" },
	{ value: "Sint Maarten (Dutch part)", name: "Sint Maarten (Dutch part)" },
	{ value: "Slovakia", name: "Slovakia" },
	{ value: "Slovenia", name: "Slovenia" },
	{ value: "Solomon Islands", name: "Solomon Islands" },
	{ value: "Somalia", name: "Somalia" },
	{ value: "South Africa", name: "South Africa" },
	{ value: "South Georgia and the South Sandwich Islands", name: "South Georgia and the South Sandwich Islands" },
	{ value: "South Sudan", name: "South Sudan" },
	{ value: "Spain", name: "Spain" },
	{ value: "Sri Lanka", name: "Sri Lanka" },
	{ value: "Sudan", name: "Sudan" },
	{ value: "Suriname", name: "Suriname" },
	{ value: "Svalbard and Jan Mayen", name: "Svalbard and Jan Mayen" },
	{ value: "Sweden", name: "Sweden" },
	{ value: "Switzerland", name: "Switzerland" },
	{ value: "Syrian Arab Republic", name: "Syrian Arab Republic" },
	{ value: "Taiwan", name: "Taiwan" },
	{ value: "Tajikistan", name: "Tajikistan" },
	{ value: "Tanzania, United Republic of", name: "Tanzania, United Republic of" },
	{ value: "Thailand", name: "Thailand" },
	{ value: "Timor-Leste", name: "Timor-Leste" },
	{ value: "Togo", name: "Togo" },
	{ value: "Tokelau", name: "Tokelau" },
	{ value: "Tonga", name: "Tonga" },
	{ value: "Trinidad and Tobago", name: "Trinidad and Tobago" },
	{ value: "Tunisia", name: "Tunisia" },
	{ value: "Turkey", name: "Turkey" },
	{ value: "Turkmenistan", name: "Turkmenistan" },
	{ value: "Turks and Caicos Islands", name: "Turks and Caicos Islands" },
	{ value: "Tuvalu", name: "Tuvalu" },
	{ value: "Uganda", name: "Uganda" },
	{ value: "Ukraine", name: "Ukraine" },
	{ value: "United Arab Emirates", name: "United Arab Emirates" },
	{ value: "United Kingdom of Great Britain and Northern Ireland", name: "United Kingdom of Great Britain and Northern Ireland" },
	{ value: "United States Minor Outlying Islands", name: "United States Minor Outlying Islands" },
	{ value: "United States of America", name: "United States of America" },
	{ value: "Uruguay", name: "Uruguay" },
	{ value: "Uzbekistan", name: "Uzbekistan" },
	{ value: "Vanuatu", name: "Vanuatu" },
	{ value: "Venezuela (Bolivarian Republic of)", name: "Venezuela (Bolivarian Republic of)" },
	{ value: "Viet Nam", name: "Viet Nam" },
	{ value: "Virgin Islands (British)", name: "Virgin Islands (British)" },
	{ value: "Virgin Islands (U.S.)", name: "Virgin Islands (U.S.)" },
	{ value: "Wallis and Futuna", name: "Wallis and Futuna" },
	{ value: "Western Sahara", name: "Western Sahara" },
	{ value: "Yemen", name: "Yemen" },
	{ value: "Zambia", name: "Zambia" },
	{ value: "Zimbabwe", name: "Zimbabwe" },
	{ value: "Åland Islands", name: "Åland Islands" },
];

export const SelectMenu = (props) => {
  let map = {};
  for (let option of props.options) {
    map[option.value] = option.name
  }
  return (
    <React.Fragment>
      <DescriptionGroup
        label={props.label}
        description={props.description}
        tooltip={props.tooltip}
        style={props.containerStyle}
      />

      <div css={props.className ? props.className : props.full ? STYLES_SELECT_MENU_FULL : STYLES_SELECT_MENU}>
        <label css={STYLES_SELECT_MENU_LABEL} htmlFor={`id-${props.name}`}>
<<<<<<< HEAD
          {props.children}{" "}
=======
          {map[props.value]}{" "}
>>>>>>> added country dropdown and refactored dropdown options
          {props.category ? (
            <span css={STYLES_SELECT_MENU_CATEGORY}>{props.category}</span>
          ) : null}
          <SVG.ChevronDown height="16px" css={STYLES_SELECT_MENU_CHEVRON} />
        </label>
        <select
          css={STYLES_SELECT_MENU_ANCHOR}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          id={`id-${props.name}`}
        >
          {props.options.map((each) => {
            return (
              <option value={each.value} key={each.value}>
                {each.name}
              </option>
            );
          })}
        </select>
      </div>
    </React.Fragment>
  );
};

<<<<<<< HEAD
export const SelectMenuFull = (props) => (
  <SelectMenu {...props} css={STYLES_SELECT_MENU_FULL} />
);
=======
export const SelectCountryMenu = (props) => {
  return (
    <SelectMenu
      css={props.full ? STYLES_SELECT_MENU_FULL : STYLES_SELECT_MENU}
      label={props.label}
      name={props.name}
      value={props.value}
      category={props.category}
      onChange={props.onChange}
      options={SELECT_COUNTRY_OPTIONS}
    >
    </SelectMenu>
  );
};
>>>>>>> added country dropdown and refactored dropdown options
