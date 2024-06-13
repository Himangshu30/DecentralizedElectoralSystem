import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Voterlogin(props) {
  const states = [
    { id: "1", name: "Andaman And Nicobar Islands" },
    { id: "2", name: "Andhra Pradesh" },
    { id: "3", name: "Arunachal Pradesh" },
    { id: "4", name: "Assam" },
    { id: "5", name: "Bihar" },
    { id: "6", name: "Chandigarh" },
    { id: "7", name: "Chhattisgarh" },
    { id: "8", name: "Delhi" },
    { id: "9", name: "Goa" },
    { id: "10", name: "Gujarat" },
    { id: "11", name: "Haryana" },
    { id: "12", name: "Himachal Pradesh" },
    { id: "13", name: "Jammu And Kashmir" },
    { id: "14", name: "Jharkhand" },
    { id: "15", name: "Karnataka" },
    { id: "16", name: "Kerala" },
    { id: "17", name: "Ladakh" },
    { id: "18", name: "Lakshadweep" },
    { id: "19", name: "Madhya Pradesh" },
    { id: "20", name: "Maharashtra" },
    { id: "21", name: "Manipur" },
    { id: "22", name: "Meghalaya" },
    { id: "23", name: "Mizoram" },
    { id: "24", name: "Nagaland" },
    { id: "25", name: "Odisha" },
    { id: "26", name: "Puducherry" },
    { id: "27", name: "Punjab" },
    { id: "28", name: "Rajasthan" },
    { id: "29", name: "Sikkim" },
    { id: "30", name: "Tamil Nadu" },
    { id: "31", name: "Telangana" },
    { id: "32", name: "The Dadra And Nagar Haveli And Daman And Diu" },
    { id: "33", name: "Tripura" },
    { id: "34", name: "Uttarakhand" },
    { id: "35", name: "Uttar Pradesh" },
    { id: "36", name: "West Bengal" },
  ];
  const constituencies = [
    { id: "1", stateId: "1", name: "Andaman and Nicobar Islands" },
    { id: "2", stateId: "2", name: "Araku" },
    { id: "3", stateId: "2", name: "Srikakulam" },
    { id: "4", stateId: "2", name: "Vizianagaram" },
    { id: "5", stateId: "2", name: "Visakhapatnam" },
    { id: "6", stateId: "2", name: "Anakapalli" },
    { id: "7", stateId: "2", name: "Kakinada" },
    { id: "8", stateId: "2", name: "Amalapuram" },
    { id: "9", stateId: "2", name: "Rajahmundry" },
    { id: "10", stateId: "2", name: "Narsapuram" },
    { id: "11", stateId: "2", name: "Eluru" },
    { id: "12", stateId: "2", name: "Machilipatnam" },
    { id: "13", stateId: "2", name: "Vijayawada" },
    { id: "14", stateId: "2", name: "Guntur" },
    { id: "15", stateId: "2", name: "Narasaraopet" },
    { id: "16", stateId: "2", name: "Bapatla" },
    { id: "17", stateId: "2", name: "Ongole" },
    { id: "18", stateId: "2", name: "Nandyal" },
    { id: "19", stateId: "2", name: "Kurnool" },
    { id: "20", stateId: "2", name: "Anantapur" },
    { id: "21", stateId: "2", name: "Hindupur" },
    { id: "22", stateId: "2", name: "Kadapa" },
    { id: "23", stateId: "2", name: "Nellore" },
    { id: "24", stateId: "2", name: "Tirupati" },
    { id: "25", stateId: "2", name: "Rajampet" },
    { id: "26", stateId: "2", name: "Chittoor" },
    { id: "27", stateId: "3", name: "Arunachal West" },
    { id: "28", stateId: "3", name: "Arunachal East" },
    { id: "29", stateId: "4", name: "Karimganj" },
    { id: "30", stateId: "4", name: "Silchar" },
    { id: "31", stateId: "4", name: "Autonomous District" },
    { id: "32", stateId: "4", name: "Dhubri" },
    { id: "33", stateId: "4", name: "Kokrajhar" },
    { id: "34", stateId: "4", name: "Barpeta" },
    { id: "35", stateId: "4", name: "Gauhati" },
    { id: "36", stateId: "4", name: "Mangaldoi" },
    { id: "37", stateId: "4", name: "Nowgong" },
    { id: "38", stateId: "4", name: "Tezpur" },
    { id: "39", stateId: "4", name: "Kaliabor" },
    { id: "40", stateId: "4", name: "Jorhat" },
    { id: "41", stateId: "4", name: "Dibrugarh" },
    { id: "42", stateId: "4", name: "Lakhimpur" },
    { id: "43", stateId: "5", name: "Valmiki Nagar" },
    { id: "44", stateId: "5", name: "Paschim Champaran" },
    { id: "45", stateId: "5", name: "Purvi Champaran" },
    { id: "46", stateId: "5", name: "Sheohar" },
    { id: "47", stateId: "5", name: "Sitamarhi" },
    { id: "48", stateId: "5", name: "Madhubani" },
    { id: "49", stateId: "5", name: "Jhanjharpur" },
    { id: "50", stateId: "5", name: "Supaul" },
    { id: "51", stateId: "5", name: "Araria" },
    { id: "52", stateId: "5", name: "Kishanganj" },
    { id: "53", stateId: "5", name: "Katihar" },
    { id: "54", stateId: "5", name: "Purnia" },
    { id: "55", stateId: "5", name: "Madhepura" },
    { id: "56", stateId: "5", name: "Darbhanga" },
    { id: "57", stateId: "5", name: "Muzaffarpur" },
    { id: "58", stateId: "5", name: "Vaishali" },
    { id: "59", stateId: "5", name: "Gopalganj" },
    { id: "60", stateId: "5", name: "Siwan" },
    { id: "61", stateId: "5", name: "Maharajganj" },
    { id: "62", stateId: "5", name: "Saran" },
    { id: "63", stateId: "5", name: "Hajipur" },
    { id: "64", stateId: "5", name: "Ujiarpur" },
    { id: "65", stateId: "5", name: "Samastipur" },
    { id: "66", stateId: "5", name: "Begusarai" },
    { id: "67", stateId: "5", name: "Khagaria" },
    { id: "68", stateId: "5", name: "Bhagalpur" },
    { id: "69", stateId: "5", name: "Banka" },
    { id: "70", stateId: "5", name: "Munger" },
    { id: "71", stateId: "5", name: "Nalanda" },
    { id: "72", stateId: "5", name: "Patna Sahib" },
    { id: "73", stateId: "5", name: "Pataliputra" },
    { id: "74", stateId: "5", name: "Ara" },
    { id: "75", stateId: "5", name: "Buxar" },
    { id: "76", stateId: "5", name: "Sasaram" },
    { id: "77", stateId: "5", name: "Karakat" },
    { id: "78", stateId: "5", name: "Jahanabad" },
    { id: "79", stateId: "5", name: "Aurangabad" },
    { id: "80", stateId: "5", name: "Gaya" },
    { id: "81", stateId: "5", name: "Nawada" },
    { id: "82", stateId: "5", name: "Jamui" },
    { id: "83", stateId: "6", name: "Chandigarh" },
    { id: "84", stateId: "7", name: "Surguja" },
    { id: "85", stateId: "7", name: "Raigarh" },
    { id: "86", stateId: "7", name: "Janjgir-Champa" },
    { id: "87", stateId: "7", name: "Korba" },
    { id: "88", stateId: "7", name: "Bilaspur" },
    { id: "89", stateId: "7", name: "Rajnandgaon" },
    { id: "90", stateId: "7", name: "Mahasamund" },
    { id: "91", stateId: "7", name: "Durg" },
    { id: "92", stateId: "7", name: "Raipur" },
    { id: "93", stateId: "7", name: "Bastar" },
    { id: "94", stateId: "7", name: "Kanker" },
    { id: "95", stateId: "8", name: "Chandni Chowk" },
    { id: "96", stateId: "8", name: "North East Delhi" },
    { id: "97", stateId: "8", name: "East Delhi" },
    { id: "98", stateId: "8", name: "New Delhi" },
    { id: "99", stateId: "8", name: "North West Delhi" },
    { id: "100", stateId: "8", name: "West Delhi" },
    { id: "101", stateId: "8", name: "South Delhi" },
    { id: "102", stateId: "9", name: "NORTH GOA" },
    { id: "103", stateId: "9", name: "SOUTH GOA" },
    { id: "104", stateId: "10", name: "Kachchh" },
    { id: "105", stateId: "10", name: "Banaskantha" },
    { id: "106", stateId: "10", name: "Patan" },
    { id: "107", stateId: "10", name: "Mahesana" },
    { id: "108", stateId: "10", name: "Sabarkantha" },
    { id: "109", stateId: "10", name: "Gandhinagar" },
    { id: "110", stateId: "10", name: "Ahmedabad East" },
    { id: "111", stateId: "10", name: "Ahmedabad West" },
    { id: "112", stateId: "10", name: "Surendranagar" },
    { id: "113", stateId: "10", name: "Rajkot" },
    { id: "114", stateId: "10", name: "Porbandar" },
    { id: "115", stateId: "10", name: "Jamnagar" },
    { id: "116", stateId: "10", name: "Junagadh" },
    { id: "117", stateId: "10", name: "Amreli" },
    { id: "118", stateId: "10", name: "Bhavnagar" },
    { id: "119", stateId: "10", name: "Anand" },
    { id: "120", stateId: "10", name: "Kheda" },
    { id: "121", stateId: "10", name: "Panchmahal" },
    { id: "122", stateId: "10", name: "Dahod" },
    { id: "123", stateId: "10", name: "Vadodara" },
    { id: "124", stateId: "10", name: "Chhota Udaipur" },
    { id: "125", stateId: "10", name: "Bharuch" },
    { id: "126", stateId: "10", name: "Bardoli" },
    { id: "127", stateId: "10", name: "Surat" },
    { id: "128", stateId: "10", name: "Navsari" },
    { id: "129", stateId: "10", name: "Valsad" },
    { id: "130", stateId: "11", name: "Ambala" },
    { id: "131", stateId: "11", name: "Kurukshetra" },
    { id: "132", stateId: "11", name: "Sirsa" },
    { id: "133", stateId: "11", name: "Hisar" },
    { id: "134", stateId: "11", name: "Karnal" },
    { id: "135", stateId: "11", name: "Sonipat" },
    { id: "136", stateId: "11", name: "Rohtak" },
    { id: "137", stateId: "11", name: "Bhiwani-Mahendragarh" },
    { id: "138", stateId: "11", name: "Gurgaon" },
    { id: "139", stateId: "11", name: "Faridabad" },
    { id: "140", stateId: "12", name: "Kangra" },
    { id: "141", stateId: "12", name: "Mandi" },
    { id: "142", stateId: "12", name: "Hamirpur" },
    { id: "143", stateId: "12", name: "Shimla" },
    { id: "144", stateId: "13", name: "Baramulla" },
    { id: "145", stateId: "13", name: "Srinagar" },
    { id: "146", stateId: "13", name: "Anantnag–Rajouri" },
    { id: "147", stateId: "13", name: "Udhampur" },
    { id: "148", stateId: "13", name: "Jammu" },
    { id: "149", stateId: "14", name: "Rajmahal" },
    { id: "150", stateId: "14", name: "Dumka" },
    { id: "151", stateId: "14", name: "Godda" },
    { id: "152", stateId: "14", name: "Chatra" },
    { id: "153", stateId: "14", name: "Koderma" },
    { id: "154", stateId: "14", name: "Giridih" },
    { id: "155", stateId: "14", name: "Dhanbad" },
    { id: "156", stateId: "14", name: "Hazaribagh" },
    { id: "157", stateId: "14", name: "Ranchi" },
    { id: "158", stateId: "14", name: "Jamshedpur" },
    { id: "159", stateId: "14", name: "Singhbhum" },
    { id: "160", stateId: "14", name: "Khunti" },
    { id: "161", stateId: "14", name: "Lohardaga" },
    { id: "162", stateId: "14", name: "Palamu" },
    { id: "163", stateId: "15", name: "Chikkodi" },
    { id: "164", stateId: "15", name: "Belgaum" },
    { id: "165", stateId: "15", name: "Bagalkot" },
    { id: "166", stateId: "15", name: "Bijapur" },
    { id: "167", stateId: "15", name: "Gulbarga" },
    { id: "168", stateId: "15", name: "Raichur" },
    { id: "169", stateId: "15", name: "Bidar" },
    { id: "170", stateId: "15", name: "Koppal" },
    { id: "171", stateId: "15", name: "Bellary" },
    { id: "172", stateId: "15", name: "Haveri" },
    { id: "173", stateId: "15", name: "Dharwad" },
    { id: "174", stateId: "15", name: "Uttara Kannada" },
    { id: "175", stateId: "15", name: "Davanagere" },
    { id: "176", stateId: "15", name: "Shimoga" },
    { id: "177", stateId: "15", name: "Udupi Chikmagalur" },
    { id: "178", stateId: "15", name: "Hassan" },
    { id: "179", stateId: "15", name: "Dakshina Kannada" },
    { id: "180", stateId: "15", name: "Chitradurga" },
    { id: "181", stateId: "15", name: "Tumkur" },
    { id: "182", stateId: "15", name: "Mandya" },
    { id: "183", stateId: "15", name: "Mysore" },
    { id: "184", stateId: "15", name: "Chamarajanagar" },
    { id: "185", stateId: "15", name: "Bangalore Rural" },
    { id: "186", stateId: "15", name: "Bangalore North" },
    { id: "187", stateId: "15", name: "Bangalore Central" },
    { id: "188", stateId: "15", name: "Bangalore South" },
    { id: "189", stateId: "15", name: "Chikkaballapur" },
    { id: "190", stateId: "15", name: "Kolar" },
    { id: "191", stateId: "16", name: "Kasaragod" },
    { id: "192", stateId: "16", name: "Kannur" },
    { id: "193", stateId: "16", name: "Vadakara" },
    { id: "194", stateId: "16", name: "Wayanad" },
    { id: "195", stateId: "16", name: "Kozhikode" },
    { id: "196", stateId: "16", name: "Malappuram" },
    { id: "197", stateId: "16", name: "Ponnani" },
    { id: "198", stateId: "16", name: "Palakkad" },
    { id: "199", stateId: "16", name: "Alathur" },
    { id: "200", stateId: "16", name: "Thrissur" },
    { id: "201", stateId: "16", name: "Chalakudy" },
    { id: "202", stateId: "16", name: "Ernakulam" },
    { id: "203", stateId: "16", name: "Idukki" },
    { id: "204", stateId: "16", name: "Kottayam" },
    { id: "205", stateId: "16", name: "Alappuzha" },
    { id: "206", stateId: "16", name: "Mavelikkara" },
    { id: "207", stateId: "16", name: "Pathanamthitta" },
    { id: "208", stateId: "16", name: "Kollam" },
    { id: "209", stateId: "16", name: "Attingal" },
    { id: "210", stateId: "16", name: "Thiruvananthapuram" },
    { id: "211", stateId: "17", name: "Ladakh" },
    { id: "212", stateId: "18", name: "Lakshadweep" },
    { id: "213", stateId: "19", name: "Morena" },
    { id: "214", stateId: "19", name: "Bhind" },
    { id: "215", stateId: "19", name: "Gwalior" },
    { id: "216", stateId: "19", name: "Guna" },
    { id: "217", stateId: "19", name: "Sagar" },
    { id: "218", stateId: "19", name: "Vidisha" },
    { id: "219", stateId: "19", name: "Bhopal" },
    { id: "220", stateId: "19", name: "Rajgarh" },
    { id: "221", stateId: "19", name: "Dewas" },
    { id: "222", stateId: "19", name: "Ujjain" },
    { id: "223", stateId: "19", name: "Mandsour" },
    { id: "224", stateId: "19", name: "Ratlam" },
    { id: "225", stateId: "19", name: "Dhar" },
    { id: "226", stateId: "19", name: "Indore" },
    { id: "227", stateId: "19", name: "Khargone" },
    { id: "228", stateId: "19", name: "Khandwa" },
    { id: "229", stateId: "19", name: "Betul" },
    { id: "230", stateId: "19", name: "Hoshangabad" },
    { id: "231", stateId: "19", name: "Vidisha" },
    { id: "232", stateId: "19", name: "Bhopal" },
    { id: "233", stateId: "19", name: "Rajgarh" },
    { id: "234", stateId: "19", name: "Dewas" },
    { id: "235", stateId: "19", name: "Ujjain" },
    { id: "236", stateId: "19", name: "Mandsour" },
    { id: "237", stateId: "19", name: "Ratlam" },
    { id: "238", stateId: "19", name: "Dhar" },
    { id: "239", stateId: "19", name: "Indore" },
    { id: "240", stateId: "19", name: "Khargone" },
    { id: "241", stateId: "19", name: "Khandwa" },
    { id: "242", stateId: "20", name: "Nandurbar" },
    { id: "243", stateId: "20", name: "Dhule" },
    { id: "244", stateId: "20", name: "Jalgaon" },
    { id: "245", stateId: "20", name: "Raver" },
    { id: "246", stateId: "20", name: "Buldhana" },
    { id: "247", stateId: "20", name: "Akola" },
    { id: "248", stateId: "20", name: "Amravati" },
    { id: "249", stateId: "20", name: "Wardha" },
    { id: "250", stateId: "20", name: "Ramtek" },
    { id: "251", stateId: "20", name: "Nagpur" },
    { id: "252", stateId: "20", name: "Bhandara-Gondiya" },
    { id: "253", stateId: "20", name: "Gadchiroli-Chimur" },
    { id: "254", stateId: "20", name: "Chandrapur" },
    { id: "255", stateId: "20", name: "Yavatmal-Washim" },
    { id: "256", stateId: "20", name: "Hingoli" },
    { id: "257", stateId: "20", name: "Nanded" },
    { id: "258", stateId: "20", name: "Parbhani" },
    { id: "259", stateId: "20", name: "Jalna" },
    { id: "260", stateId: "20", name: "Aurangabad" },
    { id: "261", stateId: "20", name: "Dindori" },
    { id: "262", stateId: "20", name: "Nashik" },
    { id: "263", stateId: "20", name: "Palghar" },
    { id: "264", stateId: "20", name: "Bhiwandi" },
    { id: "265", stateId: "20", name: "Kalyan" },
    { id: "266", stateId: "20", name: "Thane" },
    { id: "267", stateId: "20", name: "Mumbai North" },
    { id: "268", stateId: "20", name: "Mumbai North-West" },
    { id: "269", stateId: "20", name: "Mumbai North-East" },
    { id: "270", stateId: "20", name: "Mumbai North-Central" },
    { id: "271", stateId: "20", name: "Mumbai South-Central" },
    { id: "272", stateId: "20", name: "Mumbai South" },
    { id: "273", stateId: "20", name: "Raigad" },
    { id: "274", stateId: "20", name: "Maval" },
    { id: "275", stateId: "20", name: "Pune" },
    { id: "276", stateId: "20", name: "Baramati" },
    { id: "277", stateId: "20", name: "Shirur" },
    { id: "278", stateId: "20", name: "Ahmednagar" },
    { id: "279", stateId: "20", name: "Shirdi" },
    { id: "280", stateId: "20", name: "Beed" },
    { id: "281", stateId: "20", name: "Osmanabad" },
    { id: "282", stateId: "20", name: "Latur" },
    { id: "283", stateId: "20", name: "Solapur" },
    { id: "284", stateId: "20", name: "Madha" },
    { id: "285", stateId: "20", name: "Sangli" },
    { id: "286", stateId: "20", name: "Satara" },
    { id: "287", stateId: "20", name: "Ratnagiri-Sindhudurg" },
    { id: "288", stateId: "20", name: "Kolhapur" },
    { id: "289", stateId: "20", name: "Hatkanangle" },
    { id: "290", stateId: "21", name: "Inner Manipur" },
    { id: "291", stateId: "21", name: "Outer Manipur" },
    { id: "292", stateId: "22", name: "Shillong" },
    { id: "293", stateId: "22", name: "Tura" },
    { id: "294", stateId: "23", name: "Mizoram" },
    { id: "295", stateId: "24", name: "Nagaland" },
    { id: "296", stateId: "25", name: "Bargarh" },
    { id: "297", stateId: "25", name: "Sundargarh" },
    { id: "298", stateId: "25", name: "Sambalpur" },
    { id: "299", stateId: "25", name: "Keonjhar" },
    { id: "300", stateId: "25", name: "Mayurbhanj" },
    { id: "301", stateId: "25", name: "Balasore" },
    { id: "302", stateId: "25", name: "Bhadrak" },
    { id: "303", stateId: "25", name: "Jajpur" },
    { id: "304", stateId: "25", name: "Dhenkanal" },
    { id: "305", stateId: "25", name: "Bolangir" },
    { id: "306", stateId: "25", name: "Kalahandi" },
    { id: "307", stateId: "25", name: "Nabarangpur" },
    { id: "308", stateId: "25", name: "Koraput" },
    { id: "309", stateId: "25", name: "Berhampur" },
    { id: "310", stateId: "25", name: "Aska" },
    { id: "311", stateId: "25", name: "Kandhamal" },
    { id: "312", stateId: "25", name: "Cuttack" },
    { id: "313", stateId: "25", name: "Kendrapara" },
    { id: "314", stateId: "25", name: "Jagatsinghpur" },
    { id: "315", stateId: "25", name: "Puri" },
    { id: "316", stateId: "25", name: "Bhubaneswar" },
    { id: "317", stateId: "26", name: "	Puducherry" },
    { id: "318", stateId: "27", name: "Gurdaspur" },
    { id: "319", stateId: "27", name: "Amritsar" },
    { id: "320", stateId: "27", name: "Khadoor Sahib" },
    { id: "321", stateId: "27", name: "Jalandhar" },
    { id: "322", stateId: "27", name: "Hoshiarpur" },
    { id: "323", stateId: "27", name: "Anandpur Sahib" },
    { id: "324", stateId: "27", name: "Ludhiana" },
    { id: "325", stateId: "27", name: "Fatehgarh Sahib" },
    { id: "326", stateId: "27", name: "Faridkot" },
    { id: "327", stateId: "27", name: "Firozpur" },
    { id: "328", stateId: "27", name: "Bathinda" },
    { id: "329", stateId: "27", name: "Sangrur" },
    { id: "330", stateId: "27", name: "Patiala" },
    { id: "331", stateId: "28", name: "Ganganagar" },
    { id: "332", stateId: "28", name: "Bikaner" },
    { id: "333", stateId: "28", name: "Churu" },
    { id: "334", stateId: "28", name: "Jhunjhunu" },
    { id: "335", stateId: "28", name: "Sikar" },
    { id: "336", stateId: "28", name: "Jaipur Rural" },
    { id: "337", stateId: "28", name: "Jaipur" },
    { id: "338", stateId: "28", name: "Alwar" },
    { id: "339", stateId: "28", name: "Bharatpur" },
    { id: "340", stateId: "28", name: "Karauli-Dholpur" },
    { id: "341", stateId: "28", name: "Dausa" },
    { id: "342", stateId: "28", name: "Tonk-Sawai Madhopur" },
    { id: "343", stateId: "28", name: "Ajmer" },
    { id: "344", stateId: "28", name: "Nagaur" },
    { id: "345", stateId: "28", name: "Pali" },
    { id: "346", stateId: "28", name: "Jodhpur" },
    { id: "347", stateId: "28", name: "Barmer" },
    { id: "348", stateId: "28", name: "Jalore" },
    { id: "349", stateId: "28", name: "Udaipur" },
    { id: "350", stateId: "28", name: "Banswara" },
    { id: "351", stateId: "28", name: "Chittorgarh" },
    { id: "352", stateId: "28", name: "Rajsamand" },
    { id: "353", stateId: "28", name: "Bhilwara" },
    { id: "354", stateId: "28", name: "Kota" },
    { id: "355", stateId: "28", name: "Jhalawar–Baran" },
    { id: "356", stateId: "29", name: "	Sikkim" },
    { id: "357", stateId: "30", name: "Thiruvallur" },
    { id: "358", stateId: "30", name: "Chennai North" },
    { id: "359", stateId: "30", name: "Chennai South" },
    { id: "360", stateId: "30", name: "Chennai Central" },
    { id: "361", stateId: "30", name: "Sriperumbudur" },
    { id: "362", stateId: "30", name: "Kancheepuram" },
    { id: "363", stateId: "30", name: "Arakkonam" },
    { id: "364", stateId: "30", name: "Vellore" },
    { id: "365", stateId: "30", name: "Krishnagiri" },
    { id: "366", stateId: "30", name: "Dharmapuri" },
    { id: "367", stateId: "30", name: "Tiruvannamalai" },
    { id: "368", stateId: "30", name: "Arani" },
    { id: "369", stateId: "30", name: "Viluppuram" },
    { id: "370", stateId: "30", name: "Kallakurichi" },
    { id: "371", stateId: "30", name: "Salem" },
    { id: "372", stateId: "30", name: "Namakkal" },
    { id: "373", stateId: "30", name: "Erode" },
    { id: "374", stateId: "30", name: "Tiruppur" },
    { id: "375", stateId: "30", name: "Nilgiris" },
    { id: "376", stateId: "30", name: "Coimbatore" },
    { id: "377", stateId: "30", name: "Pollachi" },
    { id: "378", stateId: "30", name: "Dindigul" },
    { id: "379", stateId: "30", name: "Karur" },
    { id: "380", stateId: "30", name: "Tiruchirappalli" },
    { id: "381", stateId: "30", name: "Perambalur" },
    { id: "382", stateId: "30", name: "Cuddalore" },
    { id: "383", stateId: "30", name: "Chidambaram" },
    { id: "384", stateId: "30", name: "Mayiladuthurai" },
    { id: "385", stateId: "30", name: "Nagapattinam" },
    { id: "386", stateId: "30", name: "Thanjavur" },
    { id: "387", stateId: "30", name: "Sivaganga" },
    { id: "388", stateId: "30", name: "Madurai" },
    { id: "389", stateId: "30", name: "Theni" },
    { id: "390", stateId: "30", name: "Virudhunagar" },
    { id: "391", stateId: "30", name: "Ramanathapuram" },
    { id: "392", stateId: "30", name: "Thoothukkudi" },
    { id: "393", stateId: "30", name: "Tenkasi" },
    { id: "394", stateId: "30", name: "Tirunelveli" },
    { id: "395", stateId: "30", name: "Kanniyakumari" },
    { id: "396", stateId: "31", name: "Adilabad" },
    { id: "397", stateId: "31", name: "Peddapalle" },
    { id: "398", stateId: "31", name: "Karimnagar" },
    { id: "399", stateId: "31", name: "Nizamabad" },
    { id: "400", stateId: "31", name: "Zahirabad" },
    { id: "401", stateId: "31", name: "Medak" },
    { id: "402", stateId: "31", name: "Malkajgiri" },
    { id: "403", stateId: "31", name: "Secunderabad" },
    { id: "404", stateId: "31", name: "Hyderabad" },
    { id: "405", stateId: "31", name: "Chevella" },
    { id: "406", stateId: "31", name: "Mahbubnagar" },
    { id: "407", stateId: "31", name: "Nagarkurnool" },
    { id: "408", stateId: "31", name: "Nalgonda" },
    { id: "409", stateId: "31", name: "Bhongir" },
    { id: "410", stateId: "31", name: "Warangal" },
    { id: "411", stateId: "31", name: "Mahabubabad" },
    { id: "412", stateId: "31", name: "Khammam" },
    { id: "413", stateId: "32", name: "Dadra and Nagar Haveli" },
    { id: "414", stateId: "32", name: "Daman and Diu" },
    { id: "415", stateId: "33", name: "Tripura West" },
    { id: "416", stateId: "33", name: "Tripura East" },
    { id: "417", stateId: "34", name: "Tehri Garhwal" },
    { id: "418", stateId: "34", name: "Garhwal" },
    { id: "419", stateId: "34", name: "Almora" },
    { id: "420", stateId: "34", name: "Nainital-Udhamsingh Nagar" },
    { id: "421", stateId: "34", name: "Haridwar" },
    { id: "422", stateId: "35", name: "Saharanpur" },
    { id: "423", stateId: "35", name: "Kairana" },
    { id: "424", stateId: "35", name: "Muzaffarnagar" },
    { id: "425", stateId: "35", name: "Bijnor" },
    { id: "426", stateId: "35", name: "Nagina" },
    { id: "427", stateId: "35", name: "Moradabad" },
    { id: "428", stateId: "35", name: "Rampur" },
    { id: "429", stateId: "35", name: "Sambhal" },
    { id: "430", stateId: "35", name: "Amroha" },
    { id: "431", stateId: "35", name: "Meerut" },
    { id: "432", stateId: "35", name: "Baghpat" },
    { id: "433", stateId: "35", name: "Ghaziabad" },
    { id: "434", stateId: "35", name: "Gautam Buddha Nagar" },
    { id: "435", stateId: "35", name: "Bulandshahr" },
    { id: "436", stateId: "35", name: "Aligarh" },
    { id: "437", stateId: "35", name: "Hathras" },
    { id: "438", stateId: "35", name: "Mathura" },
    { id: "439", stateId: "35", name: "Agra" },
    { id: "440", stateId: "35", name: "Fatehpur Sikri" },
    { id: "441", stateId: "35", name: "Firozabad" },
    { id: "442", stateId: "35", name: "Mainpuri" },
    { id: "443", stateId: "35", name: "Etah" },
    { id: "444", stateId: "35", name: "Badaun" },
    { id: "445", stateId: "35", name: "Aonla" },
    { id: "446", stateId: "35", name: "Bareilly" },
    { id: "447", stateId: "35", name: "Pilibhit" },
    { id: "448", stateId: "35", name: "Shahjahanpur" },
    { id: "449", stateId: "35", name: "Kheri" },
    { id: "450", stateId: "35", name: "Dhaurahra" },
    { id: "451", stateId: "35", name: "Sitapur" },
    { id: "452", stateId: "35", name: "Hardoi" },
    { id: "453", stateId: "35", name: "Misrikh" },
    { id: "454", stateId: "35", name: "Unnao" },
    { id: "455", stateId: "35", name: "Mohanlalganj" },
    { id: "456", stateId: "35", name: "Lucknow" },
    { id: "457", stateId: "35", name: "Rae Bareli" },
    { id: "458", stateId: "35", name: "Amethi" },
    { id: "459", stateId: "35", name: "Sultanpur" },
    { id: "460", stateId: "35", name: "Pratapgarh" },
    { id: "461", stateId: "35", name: "Farrukhabad" },
    { id: "462", stateId: "35", name: "Etawah" },
    { id: "463", stateId: "35", name: "Kannauj" },
    { id: "464", stateId: "35", name: "Kanpur" },
    { id: "465", stateId: "35", name: "Akbarpur" },
    { id: "466", stateId: "35", name: "Jalaun" },
    { id: "467", stateId: "35", name: "Jhansi" },
    { id: "468", stateId: "35", name: "Hamirpur" },
    { id: "469", stateId: "35", name: "Banda" },
    { id: "470", stateId: "35", name: "Fatehpur" },
    { id: "471", stateId: "35", name: "Kaushambi" },
    { id: "472", stateId: "35", name: "Phulpur" },
    { id: "473", stateId: "35", name: "Allahabad" },
    { id: "474", stateId: "35", name: "Barabanki" },
    { id: "475", stateId: "35", name: "Faizabad" },
    { id: "476", stateId: "35", name: "Ambedkar Nagar" },
    { id: "477", stateId: "35", name: "Bahraich" },
    { id: "478", stateId: "35", name: "Kaiserganj" },
    { id: "479", stateId: "35", name: "Shrawasti" },
    { id: "480", stateId: "35", name: "Gonda" },
    { id: "481", stateId: "35", name: "Domariyaganj" },
    { id: "482", stateId: "35", name: "Basti" },
    { id: "483", stateId: "35", name: "Sant Kabir Nagar" },
    { id: "484", stateId: "35", name: "Maharajganj" },
    { id: "485", stateId: "35", name: "Gorakhpur" },
    { id: "486", stateId: "35", name: "Kushi Nagar" },
    { id: "487", stateId: "35", name: "Deoria" },
    { id: "488", stateId: "35", name: "Bansgaon" },
    { id: "489", stateId: "35", name: "Lalganj" },
    { id: "490", stateId: "35", name: "Azamgarh" },
    { id: "491", stateId: "35", name: "Ghosi" },
    { id: "492", stateId: "35", name: "Salempur" },
    { id: "493", stateId: "35", name: "Ballia" },
    { id: "494", stateId: "35", name: "Jaunpur" },
    { id: "495", stateId: "35", name: "Machhlishahr" },
    { id: "496", stateId: "35", name: "Ghazipur" },
    { id: "497", stateId: "35", name: "Chandauli" },
    { id: "498", stateId: "35", name: "Varanasi" },
    { id: "499", stateId: "35", name: "Bhadohi" },
    { id: "500", stateId: "35", name: "Mirzapur" },
    { id: "501", stateId: "35", name: "Robertsganj" },
    { id: "502", stateId: "36", name: "Cooch Behar" },
    { id: "503", stateId: "36", name: "Alipurduar" },
    { id: "504", stateId: "36", name: "Jalpaiguri" },
    { id: "505", stateId: "36", name: "Darjeeling" },
    { id: "506", stateId: "36", name: "Raiganj" },
    { id: "507", stateId: "36", name: "Balurghat" },
    { id: "508", stateId: "36", name: "Maldaha Uttar" },
    { id: "509", stateId: "36", name: "Maldaha Dakshin" },
    { id: "510", stateId: "36", name: "Jangipur" },
    { id: "511", stateId: "36", name: "Baharampur" },
    { id: "512", stateId: "36", name: "Murshidabad" },
    { id: "513", stateId: "36", name: "Krishnanagar" },
    { id: "514", stateId: "36", name: "Ranaghat" },
    { id: "515", stateId: "36", name: "Bangaon" },
    { id: "516", stateId: "36", name: "Barrackpore" },
    { id: "517", stateId: "36", name: "Dum Dum" },
    { id: "518", stateId: "36", name: "Barasat" },
    { id: "519", stateId: "36", name: "Basirhat" },
    { id: "520", stateId: "36", name: "Jaynagar" },
    { id: "521", stateId: "36", name: "Mathurapur" },
    { id: "522", stateId: "36", name: "Diamond Harbour" },
    { id: "523", stateId: "36", name: "Jadavpur" },
    { id: "524", stateId: "36", name: "Kolkata Dakshin" },
    { id: "525", stateId: "36", name: "Kolkata Uttar" },
    { id: "526", stateId: "36", name: "Howrah" },
    { id: "527", stateId: "36", name: "Uluberia" },
    { id: "528", stateId: "36", name: "Serampore" },
    { id: "529", stateId: "36", name: "Hooghly" },
    { id: "530", stateId: "36", name: "Arambagh" },
    { id: "531", stateId: "36", name: "Tamluk" },
    { id: "532", stateId: "36", name: "Kanthi" },
    { id: "533", stateId: "36", name: "Ghatal" },
    { id: "534", stateId: "36", name: "Jhargram" },
    { id: "535", stateId: "36", name: "Medinipur" },
    { id: "536", stateId: "36", name: "Purulia" },
    { id: "537", stateId: "36", name: "Bankura" },
    { id: "538", stateId: "36", name: "Bishnupur" },
    { id: "539", stateId: "36", name: "Bardhaman Purba" },
    { id: "540", stateId: "36", name: "Bardhaman Durgapur" },
    { id: "541", stateId: "36", name: "Asansol" },
    { id: "542", stateId: "36", name: "Bolpur" },
    { id: "543", stateId: "36", name: "Birbhum" },
  ];
  const [state, setState] = useState([]);
  const [constituency, setConstituency] = useState([]);
  useEffect(() => {
    setState(states);
  }, [])
  const handleState = (id) => {
    const dt = constituencies.filter(x => x.stateId === id);
    setConstituency(dt);
  }

  return (
    <div>
      <br />
      <br />
      <div className="container-sm" style={{ backgroundColor: props.mode === 'dark' ? '#495057' : 'white', maxWidth: "650px" }}>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Voter Log In</h1>
        <br /><br />
        <form className="row g-3">
          <div className="col-md-12">
            <input type="number" className={`form-control input ${props.mode === 'dark' ? 'white-placeholder' : ''}`} id="AadharNumber" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="Enter your Voter Unique Id" minLength={12} maxLength={12} required />
          </div>
          <div className="col-md-6">
            <select id="states" class="form-select" aria-label="Default select example" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={(e) => handleState(e.target.value)}>
              <option selected style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Select your State or Union Territory</option>
              {
                state &&
                  state !== undefined ?
                  state.map((st, index) => {
                    return (
                      <option key={index} value={st.id} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>{st.name}</option>
                    )
                  })
                  : "No state"
              }
            </select>
          </div>
          <div className="col-md-6">
            <select id="constituencies" class="form-select" aria-label="Default select example" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
              <option selected style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Select your Constituency</option>
              {
                constituency &&
                  constituency !== undefined ?
                  constituency.sort((a, b) => (a.name > b.name) ? 1 : -1).map((cnst, index) => {
                    return (
                      <option key={index} value={cnst.id} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>{cnst.name}</option>
                    )
                  })
                  : "No constituency"
              }
            </select>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            <label className="form-check-label" htmlFor="defaultCheck1" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
              Are you visually impaired ?
            </label>
          </div>
          <div className="col-12">
            <Link to="/voter">
              <button type="submit" className="btn btn-primary">Log in</button>
            </Link>
          </div>
        </form>
        <br />
      </div>
    </div>
  )
}

export default Voterlogin
