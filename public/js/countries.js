var countries =  [
    { id: 'Afghanistan', text: 'Afghanistan'},
    { id: 'Aland Islands', text: 'Aland Islands'},
    { id: 'Albania', text: 'Albania'},
    { id: 'Algeria', text: 'Algeria'},
    { id: 'American Samoa', text: 'American Samoa'},
    { id: 'Andorra', text: 'Andorra'},
    { id: 'Angola', text: 'Angola'},
    { id: 'Anguilla', text: 'Anguilla'},
    { id: 'Antarctica', text: 'Antarctica'},
    { id: 'Antigua And Barbuda', text: 'Antigua And Barbuda'},
    { id: 'Argentina', text: 'Argentina'},
    { id: 'Armenia', text: 'Armenia'},
    { id: 'Aruba', text: 'Aruba'},
    { id: 'Australia', text: 'Australia'},
    { id: 'Austria', text: 'Austria'},
    { id: 'Azerbaijan', text: 'Azerbaijan'},
    { id: 'Bahamas', text: 'Bahamas'},
    { id: 'Bahrain', text: 'Bahrain'},
    { id: 'Bangladesh', text: 'Bangladesh'},
    { id: 'Barbados', text: 'Barbados'},
    { id: 'Belarus', text: 'Belarus'},
    { id: 'Belgium', text: 'Belgium'},
    { id: 'Belize', text: 'Belize'},
    { id: 'Benin', text: 'Benin'},
    { id: 'Bermuda', text: 'Bermuda'},
    { id: 'Bhutan', text: 'Bhutan'},
    { id: 'Bolivia', text: 'Bolivia'},
    { id: 'Bosnia And Herzegovina', text: 'Bosnia And Herzegovina'},
    { id: 'Botswana', text: 'Botswana'},
    { id: 'Bouvet Island', text: 'Bouvet Island'},
    { id: 'Brazil', text: 'Brazil'},
    { id: 'British Indian Ocean Territory', text: 'British Indian Ocean Territory'},
    { id: 'Brunei Darussalam', text: 'Brunei Darussalam'},
    { id: 'Bulgaria', text: 'Bulgaria'},
    { id: 'Burkina Faso', text: 'Burkina Faso'},
    { id: 'Burundi', text: 'Burundi'},
    { id: 'Cambodia', text: 'Cambodia'},
    { id: 'Cameroon', text: 'Cameroon'},
    { id: 'Canada', text: 'Canada'},
    { id: 'Cape Verde', text: 'Cape Verde'},
    { id: 'Cayman Islands', text: 'Cayman Islands'},
    { id: 'Central African Republic', text: 'Central African Republic'},
    { id: 'Chad', text: 'Chad'},
    { id: 'Chile', text: 'Chile'},
    { id: 'China', text: 'China'},
    { id: 'Christmas Island', text: 'Christmas Island'},
    { id: 'Cocos (Keeling) Islands', text: 'Cocos (Keeling) Islands'},
    { id: 'Colombia', text: 'Colombia'},
    { id: 'Comoros', text: 'Comoros'},
    { id: 'Congo', text: 'Congo'},
    { id: 'Congo}, Democratic Republic', text: 'Congo}, Democratic Republic'},
    { id: 'Cook Islands', text: 'Cook Islands'},
    { id: 'Costa Rica', text: 'Costa Rica'},
    { id: 'Cote D\'Ivoire', text: 'Cote D\'Ivoire'},
    { id: 'Croatia', text: 'Croatia'},
    { id: 'Cuba', text: 'Cuba'},
    { id: 'Cyprus', text: 'Cyprus'},
    { id: 'Czech Republic', text: 'Czech Republic'},
    { id: 'Denmark', text: 'Denmark'},
    { id: 'Djibouti', text: 'Djibouti'},
    { id: 'Dominica', text: 'Dominica'},
    { id: 'Dominican Republic', text: 'Dominican Republic'},
    { id: 'Ecuador', text: 'Ecuador'},
    { id: 'Egypt', text: 'Egypt'},
    { id: 'El Salvador', text: 'El Salvador'},
    { id: 'Equatorial Guinea', text: 'Equatorial Guinea'},
    { id: 'Eritrea', text: 'Eritrea'},
    { id: 'Estonia', text: 'Estonia'},
    { id: 'Ethiopia', text: 'Ethiopia'},
    { id: 'Falkland Islands (Malvinas)', text: 'Falkland Islands (Malvinas)'},
    { id: 'Faroe Islands', text: 'Faroe Islands'},
    { id: 'Fiji', text: 'Fiji'},
    { id: 'Finland', text: 'Finland'},
    { id: 'France', text: 'France'},
    { id: 'French Guiana', text: 'French Guiana'},
    { id: 'French Polynesia', text: 'French Polynesia'},
    { id: 'French Southern Territories', text: 'French Southern Territories'},
    { id: 'Gabon', text: 'Gabon'},
    { id: 'Gambia', text: 'Gambia'},
    { id: 'Georgia', text: 'Georgia'},
    { id: 'Germany', text: 'Germany'},
    { id: 'Ghana', text: 'Ghana'},
    { id: 'Gibraltar', text: 'Gibraltar'},
    { id: 'Greece', text: 'Greece'},
    { id: 'Greenland', text: 'Greenland'},
    { id: 'Grenada', text: 'Grenada'},
    { id: 'Guadeloupe', text: 'Guadeloupe'},
    { id: 'Guam', text: 'Guam'},
    { id: 'Guatemala', text: 'Guatemala'},
    { id: 'Guernsey', text: 'Guernsey'},
    { id: 'Guinea', text: 'Guinea'},
    { id: 'Guinea-Bissau', text: 'Guinea-Bissau'},
    { id: 'Guyana', text: 'Guyana'},
    { id: 'Haiti', text: 'Haiti'},
    { id: 'Heard Island & Mcdonald Islands', text: 'Heard Island & Mcdonald Islands'},
    { id: 'Holy See (Vatican City State)', text: 'Holy See (Vatican City State)'},
    { id: 'Honduras', text: 'Honduras'},
    { id: 'Hong Kong', text: 'Hong Kong'},
    { id: 'Hungary', text: 'Hungary'},
    { id: 'Iceland', text: 'Iceland'},
    { id: 'India', text: 'India'},
    { id: 'Indonesia', text: 'Indonesia'},
    { id: 'Iran}, Islamic Republic Of', text: 'Iran}, Islamic Republic Of'},
    { id: 'Iraq', text: 'Iraq'},
    { id: 'Ireland', text: 'Ireland'},
    { id: 'Isle Of Man', text: 'Isle Of Man'},
    { id: 'Israel', text: 'Israel'},
    { id: 'Italy', text: 'Italy'},
    { id: 'Jamaica', text: 'Jamaica'},
    { id: 'Japan', text: 'Japan'},
    { id: 'Jersey', text: 'Jersey'},
    { id: 'Jordan', text: 'Jordan'},
    { id: 'Kazakhstan', text: 'Kazakhstan'},
    { id: 'Kenya', text: 'Kenya'},
    { id: 'Kiribati', text: 'Kiribati'},
    { id: 'Korea', text: 'Korea'},
    { id: 'Kuwait', text: 'Kuwait'},
    { id: 'Kyrgyzstan', text: 'Kyrgyzstan'},
    { id: 'Lao People\'s Democratic Republic', text: 'Lao People\'s Democratic Republic'},
    { id: 'Latvia', text: 'Latvia'},
    { id: 'Lebanon', text: 'Lebanon'},
    { id: 'Lesotho', text: 'Lesotho'},
    { id: 'Liberia', text: 'Liberia'},
    { id: 'Libyan Arab Jamahiriya', text: 'Libyan Arab Jamahiriya'},
    { id: 'Liechtenstein', text: 'Liechtenstein'},
    { id: 'Lithuania', text: 'Lithuania'},
    { id: 'Luxembourg', text: 'Luxembourg'},
    { id: 'Macao', text: 'Macao'},
    { id: 'Macedonia', text: 'Macedonia'},
    { id: 'Madagascar', text: 'Madagascar'},
    { id: 'Malawi', text: 'Malawi'},
    { id: 'Malaysia', text: 'Malaysia'},
    { id: 'Maldives', text: 'Maldives'},
    { id: 'Mali', text: 'Mali'},
    { id: 'Malta', text: 'Malta'},
    { id: 'Marshall Islands', text: 'Marshall Islands'},
    { id: 'Martinique', text: 'Martinique'},
    { id: 'Mauritania', text: 'Mauritania'},
    { id: 'Mauritius', text: 'Mauritius'},
    { id: 'Mayotte', text: 'Mayotte'},
    { id: 'Mexico', text: 'Mexico'},
    { id: 'Micronesia}, Federated States Of', text: 'Micronesia}, Federated States Of'},
    { id: 'Moldova', text: 'Moldova'},
    { id: 'Monaco', text: 'Monaco'},
    { id: 'Mongolia', text: 'Mongolia'},
    { id: 'Montenegro', text: 'Montenegro'},
    { id: 'Montserrat', text: 'Montserrat'},
    { id: 'Morocco', text: 'Morocco'},
    { id: 'Mozambique', text: 'Mozambique'},
    { id: 'Myanmar', text: 'Myanmar'},
    { id: 'Namibia', text: 'Namibia'},
    { id: 'Nauru', text: 'Nauru'},
    { id: 'Nepal', text: 'Nepal'},
    { id: 'Netherlands', text: 'Netherlands'},
    { id: 'Netherlands Antilles', text: 'Netherlands Antilles'},
    { id: 'New Caledonia', text: 'New Caledonia'},
    { id: 'New Zealand', text: 'New Zealand'},
    { id: 'Nicaragua', text: 'Nicaragua'},
    { id: 'Niger', text: 'Niger'},
    { id: 'Nigeria', text: 'Nigeria'},
    { id: 'Niue', text: 'Niue'},
    { id: 'Norfolk Island', text: 'Norfolk Island'},
    { id: 'Northern Mariana Islands', text: 'Northern Mariana Islands'},
    { id: 'Norway', text: 'Norway'},
    { id: 'Oman', text: 'Oman'},
    { id: 'Pakistan', text: 'Pakistan'},
    { id: 'Palau', text: 'Palau'},
    { id: 'Palestinian Territory}, Occupied', text: 'Palestinian Territory}, Occupied'},
    { id: 'Panama', text: 'Panama'},
    { id: 'Papua New Guinea', text: 'Papua New Guinea'},
    { id: 'Paraguay', text: 'Paraguay'},
    { id: 'Peru', text: 'Peru'},
    { id: 'Philippines', text: 'Philippines'},
    { id: 'Pitcairn', text: 'Pitcairn'},
    { id: 'Poland', text: 'Poland'},
    { id: 'Portugal', text: 'Portugal'},
    { id: 'Puerto Rico', text: 'Puerto Rico'},
    { id: 'Qatar', text: 'Qatar'},
    { id: 'Reunion', text: 'Reunion'},
    { id: 'Romania', text: 'Romania'},
    { id: 'Russian Federation', text: 'Russian Federation'},
    { id: 'Rwanda', text: 'Rwanda'},
    { id: 'aint Barthelemy', text: 'Saint Barthelemy'},
    { id: 'Saint Helena', text: 'Saint Helena'},
    { id: 'Saint Kitts And Nevis', text: 'Saint Kitts And Nevis'},
    { id: 'Saint Lucia', text: 'Saint Lucia'},
    { id: 'Saint Martin', text: 'Saint Martin'},
    { id: 'Saint Pierre And Miquelon', text: 'Saint Pierre And Miquelon'},
    { id: 'Saint Vincent And Grenadines', text: 'Saint Vincent And Grenadines'},
    { id: 'Samoa', text: 'Samoa'},
    { id: 'San Marino', text: 'San Marino'},
    { id: 'Sao Tome And Principe', text: 'Sao Tome And Principe'},
    { id: 'Saudi Arabia', text: 'Saudi Arabia'},
    { id: 'Senegal', text: 'Senegal'},
    { id: 'Serbia', text: 'Serbia'},
    { id: 'Seychelles', text: 'Seychelles'},
    { id: 'Sierra Leone', text: 'Sierra Leone'},
    { id: 'Singapore', text: 'Singapore'},
    { id: 'Slovakia', text: 'Slovakia'},
    { id: 'Slovenia', text: 'Slovenia'},
    { id: 'Solomon Islands', text: 'Solomon Islands'},
    { id: 'Somalia', text: 'Somalia'},
    { id: 'South Africa', text: 'South Africa'},
    { id: 'South Georgia And Sandwich Isl.', text: 'South Georgia And Sandwich Isl.'},
    { id: 'Spain', text: 'Spain'},
    { id: 'Sri Lanka', text: 'Sri Lanka'},
    { id: 'Sudan', text: 'Sudan'},
    { id: 'Suriname', text: 'Suriname'},
    { id: 'Svalbard And Jan Mayen', text: 'Svalbard And Jan Mayen'},
    { id: 'Swaziland', text: 'Swaziland'},
    { id: 'Sweden', text: 'Sweden'},
    { id: 'Switzerland', text: 'Switzerland'},
    { id: 'Syrian Arab Republic', text: 'Syrian Arab Republic'},
    { id: 'Taiwan', text: 'Taiwan'},
    { id: 'Tajikistan', text: 'Tajikistan'},
    { id: 'Tanzania', text: 'Tanzania'},
    { id: 'Thailand', text: 'Thailand'},
    { id: 'Timor-Leste', text: 'Timor-Leste'},
    { id: 'Togo', text: 'Togo'},
    { id: 'Tokelau', text: 'Tokelau'},
    { id: 'Tonga', text: 'Tonga'},
    { id: 'Trinidad And Tobago', text: 'Trinidad And Tobago'},
    { id: 'Tunisia', text: 'Tunisia'},
    { id: 'Turkey', text: 'Turkey'},
    { id: 'Turkmenistan', text: 'Turkmenistan'},
    { id: 'Turks And Caicos Islands', text: 'Turks And Caicos Islands'},
    { id: 'Tuvalu', text: 'Tuvalu'},
    { id: 'Uganda', text: 'Uganda'},
    { id: 'Ukraine', text: 'Ukraine'},
    { id: 'United Arab Emirates', text: 'United Arab Emirates'},
    { id: 'United Kingdom', text: 'United Kingdom'},
    { id: 'United States', text: 'United States'},
    { id: 'United States Outlying Islands', text: 'United States Outlying Islands'},
    { id: 'Uruguay', text: 'Uruguay'},
    { id: 'Uzbekistan', text: 'Uzbekistan'},
    { id: 'Vanuatu', text: 'Vanuatu'},
    { id: 'Venezuela', text: 'Venezuela'},
    { id: 'Viet Nam', text: 'Viet Nam'},
    { id: 'Virgin Islands}, British', text: 'Virgin Islands}, British'},
    { id: 'Virgin Islands}, U.S.', text: 'Virgin Islands}, U.S.'},
    { id: 'Wallis And Futuna', text: 'Wallis And Futuna'},
    { id: 'Western Sahara', text: 'Western Sahara'},
    { id: 'Yemen', text: 'Yemen'},
    { id: 'Zambia', text: 'Zambia'},
    { id: 'Zimbabwe', text: 'Zimbabwe'}
];

$(".countrylist").select2({
    data: countries
  })

  $(".countrylist").select2({
    placeholder: "Select a Country",
    allowClear: true
});