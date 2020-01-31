"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3
  
     
   Filename: ah_product.js  
   
   Variables:
   the donors multi-dimension array contains the following data with following column indices
      donors[0] - donorID
      donors[1] - frist name
      donors[2] - last name
      donors[3] - address
      donors[4] - city
      donors[5] - state
      donors[6] - postal code
      donors[7] - phone number
      donors[8] - email
      donors[9] - donation amount
      donors[10] - donation date   
*/


var donors = 
[
   ["donor87", "Mildred", "Moore", "9451 Pearse Grove Drive", "Maysville", "KY", "41056", "606-555-2928", "mmoore@example.com/mail", 200, "3/13/2018"],
   ["donor88", "Jodi", "Wells", "3463 Wolfe Lane", "Lexington", "KY", "40503", "859-555-4667", "jwells@example.com/mail", 1000, "3/13/2018"],
   ["donor89", "Irene", "Berry", "8058 King Villas Lane", "Louisville", "KY", "40211", "502-555-2851", "iberry@example.com/mail", 2000, "3/15/2018"],
   ["donor90", "Guillermo", "Shafer", "2862 Roppe Street", "Lexington", "KY", "40506", "859-555-9374", "gshafe@example.com/mail", 200, "3/16/2018"],
   ["donor91", "Monica", "Gray", "7383 Galwey Lane", "Bowling Green", "KY", "42104", "270-555-3249", "mgray@example.com/mail", 200, "3/17/2018"],
   ["donor92", "Jerold", "Cole", "9047 Temple Lane", "Frankfort", "KY", "40601", "502-555-9286", "jcole@example.com/mail", 100, "3/20/2018"],
   ["donor93", "David", "Butler", "6637 Clarence Street", "Lexington", "KY", "40512", "859-555-1769", "dbutle@example.com/mail", 200, "3/20/2018"],
   ["donor94", "Mae", "Tillman", "9307 Eden Avenue", "Frankfort", "KY", "40604", "502-555-7789", "mtillm@example.com/mail", 2000, "3/21/2018"],
   ["donor95", "Raymond", "Adams", "1039 Hill Court", "Bowling Green", "KY", "42101", "270-555-1686", "radams@example.com/mail", 200, "3/23/2018"],
   ["donor96", "James", "Smith", "8275 Strandside Way", "Lexington", "KY", "40518", "859-555-8359", "jsmith@example.com/mail", 200, "3/23/2018"],
   ["donor97", "Frederick", "Turner", "4106 Crampton Court", "Albany", "KY", "42602", "606-555-6493", "fturne@example.com/mail", 100, "3/23/2018"],
   ["donor98", "Alfred", "Woodson", "6211 Connell Way", "Louisville", "KY", "40211", "502-555-2485", "awoods@example.com/mail", 100, "3/29/2018"],
   ["donor99", "Matthew", "Hebert", "7697 Parkgate Street", "Louisville", "KY", "40220", "502-555-1445", "mheber@example.com/mail", 100, "3/29/2018"],
   ["donor100", "Michelle", "Hatfield", "2838 King Avenue SW", "Bowling Green", "KY", "42104", "270-555-5533", "mhatfi@example.com/mail", 100, "4/3/2018"],
   ["donor101", "Jeffrey", "Harris", "397 Crescent Drive", "Louisville", "KY", "40220", "502-555-7281", "jharri@example.com/mail", 100, "4/5/2018"],
   ["donor102", "Corene", "Reece", "1089 Sandstone Court", "Bowling Green", "KY", "42102", "270-555-5783", "creece@example.com/mail", 200, "4/7/2018"],
   ["donor103", "Francis", "Guzman", "9409 Applemarket Avenue", "Lexington", "KY", "40516", "859-555-7487", "fguzma@example.com/mail", 100, "4/11/2018"],
   ["donor104", "Patricia", "Curtis", "5837 Croft Street", "Lexington", "KY", "40518", "859-555-2443", "pcurti@example.com/mail", 100, "4/13/2018"],
   ["donor105", "William", "Joyce", "5317 Mead Court", "Louisville", "KY", "40206", "502-555-9262", "wjoyce@example.com/mail", 100, "4/14/2018"],
   ["donor106", "Margaret", "Parra", "4702 Barley Hill Street", "Louisville", "KY", "40213", "502-555-4388", "mparra@example.com/mail", 200, "4/17/2018"],
   ["donor107", "Toni", "Bourdon", "1567 House Street", "Ashland", "KY", "41102", "606-555-2757", "tbourd@example.com/mail", 5000, "4/19/2018"],
   ["donor108", "Joshua", "Voss", "6166 Sarsfield Lane", "Winchester", "KY", "40392", "859-555-9684", "jvoss@example.com/mail", 100, "4/19/2018"],
   ["donor109", "Marilyn", "Sams", "1321 Causeway Drive", "London", "KY", "40744", "606-555-2458", "msams@example.com/mail", 100, "4/20/2018"],
   ["donor110", "Donald", "Brown", "8500 Baggot Lane", "Frankfort", "KY", "40601", "502-555-2786", "dbrown@example.com/mail", 100, "4/26/2018"],
   ["donor111", "Richard", "Grahm", "1985 Henrietta Drive", "Maysville", "KY", "41056", "606-555-7384", "rgrahm@example.com/mail", 500, "4/26/2018"],
   ["donor112", "Marjorie", "Mendez", "3087 Abbey Terrace Lane", "Lexington", "KY", "40523", "859-555-2683", "mmende@example.com/mail", 500, "4/28/2018"],
   ["donor113", "Royce", "Natividad", "6245 Benburb  Lane", "Louisville", "KY", "40203", "502-555-8112", "rnativ@example.com/mail", 100, "5/2/2018"],
   ["donor114", "Robert", "Pelletier", "3350 Arnott Circle", "Lexington", "KY", "40519", "859-555-6454", "rpelle@example.com/mail", 200, "5/2/2018"],
   ["donor115", "Mary", "Tso", "2246 College Street", "Louisville", "KY", "40215", "502-555-3586", "mtso@example.com/mail", 200, "5/2/2018"],
   ["donor116", "Michele", "Reed", "820 Brabazon Court", "Shelbyville", "KY", "40065", "502-555-5133", "mreed@example.com/mail", 200, "5/4/2018"],
   ["donor117", "Tiffany", "Grainger", "6653 Jacknell Street", "Lexington", "KY", "40518", "859-555-6554", "tgrain@example.com/mail", 200, "5/4/2018"],
   ["donor118", "Megan", "Sanders", "1898 Strandside Lane", "Lexington", "KY", "40510", "859-555-3857", "msande@example.com/mail", 100, "5/4/2018"],
   ["donor119", "Grace", "Montgomery", "749 Jewell Drive", "Ashland", "KY", "41101", "606-555-2839", "gmontg@example.com/mail", 200, "5/4/2018"],
   ["donor120", "Harold", "Cook", "1897 Vale Street", "Bowling Green", "KY", "42104", "270-555-1134", "hcook@example.com/mail", 1000, "5/5/2018"],
   ["donor121", "Nicolette", "Howe", "7179 Serlondes Street", "Frankfort", "KY", "40604", "502-555-3462", "nhowe@example.com/mail", 1000, "5/9/2018"],
   ["donor122", "Todd", "Rhodes", "3287 Beresford Avenue", "Lexington", "KY", "40505", "859-555-8411", "trhode@example.com/mail", 200, "5/11/2018"],
   ["donor123", "Louis", "Valdez", "9902 Chancery Drive", "Louisville", "KY", "40222", "502-555-9779", "lvalde@example.com/mail", 100, "5/16/2018"],
   ["donor124", "Cruz", "Thomas", "4636 New Terrace Street", "Lexington", "KY", "40504", "859-555-7678", "cthoma@example.com/mail", 100, "5/16/2018"],
   ["donor125", "Jennifer", "Garcia", "2175 Horsefield Avenue", "Lexington", "KY", "40510", "859-555-4523", "jgarci@example.com/mail", 200, "5/16/2018"],
   ["donor126", "Robert", "Payne", "5384 Weatherline Drive", "Winchester", "KY", "40391", "859-555-6626", "rpayne@example.com/mail", 200, "5/16/2018"],
   ["donor127", "Jack", "Jackson", "1346 Quay Street", "Bowling Green", "KY", "42102", "270-555-3749", "jjacks@example.com/mail", 500, "5/19/2018"],
   ["donor128", "Jerry", "Medina", "5966 Crampton Row", "Louisville", "KY", "40205", "502-555-2267", "jmedin@example.com/mail", 100, "5/19/2018"],
   ["donor129", "Jorge", "Valdes", "3676 Church Place Court", "Louisville", "KY", "40201", "502-555-5134", "jvalde@example.com/mail", 25000, "5/19/2018"],
   ["donor130", "Valerie", "Hoskins", "1752 Bolton Avenue", "Louisville", "KY", "40209", "502-555-2385", "vhoski@example.com/mail", 100, "5/23/2018"],
   ["donor131", "John", "Arnold", "3547 Wellington Lane", "Lexington", "KY", "40509", "859-555-2484", "jarnol@example.com/mail", 100, "5/25/2018"],
   ["donor132", "Jordan", "Jones", "3344 Bakehouse Lawn", "Bowling Green", "KY", "42104", "270-555-5633", "jjones@example.com/mail", 100, "5/25/2018"],
   ["donor133", "John", "Randall", "3234 Clare Close Avenue", "Bowling Green", "KY", "42101", "270-555-5265", "jranda@example.com/mail", 100, "5/29/2018"],
   ["donor134", "Bonnie", "Jones", "2308 Dean Street", "Louisville", "KY", "40205", "502-555-9219", "bjones@example.com/mail", 1000, "5/31/2018"],
   ["donor135", "Kathy", "Hayes", "203 Garden Court", "Bowling Green", "KY", "42103", "270-555-8545", "khayes@example.com/mail", 100, "6/2/2018"],
   ["donor136", "Gerald", "Boone", "595 Brighton Drive", "Bowling Green", "KY", "42102", "270-555-1456", "gboone@example.com/mail", 100, "6/5/2018"],
   ["donor137", "James", "Cash", "693 Ellis Quay Avenue", "Louisville", "KY", "40222", "502-555-9726", "jcash@example.com/mail", 100, "6/5/2018"],
   ["donor138", "Maria", "Swindler", "4488 Parnell Street", "Frankfort", "KY", "40601", "502-555-5856", "mswind@example.com/mail", 100, "6/5/2018"],
   ["donor139", "Mildred", "Smith", "7762 French Avenue", "Lexington", "KY", "40517", "859-555-9831", "msmith@example.com/mail", 1000, "6/8/2018"],
   ["donor140", "Patricia", "Hall", "9820 Fosters Road", "Maysville", "KY", "41056", "606-555-2489", "phall@example.com/mail", 200, "6/12/2018"],
   ["donor141", "Clifford", "Chandler", "4011 Hilton Lane", "Lexington", "KY", "40509", "859-555-2424", "cchand@example.com/mail", 100, "6/15/2018"],
   ["donor142", "Terrance", "Sterling", "6944 Gardiner Drive", "Louisville", "KY", "40213", "502-555-8642", "tsterl@example.com/mail", 100, "6/21/2018"],
   ["donor143", "James", "Huard", "645 Close Street", "Bowling Green", "KY", "42101", "270-555-7112", "jhuard@example.com/mail", 1000, "6/22/2018"],
   ["donor144", "Kathleen", "Todd", "929 Lookout Way", "Bowling Green", "KY", "42101", "270-555-6345", "ktodd@example.com/mail", 200, "6/22/2018"],
   ["donor145", "Margaret", "Curtis", "6216 Brower Lane", "Louisville", "KY", "40203", "502-555-9677", "mcurti@example.com/mail", 100, "6/22/2018"],
   ["donor146", "Keith", "Gomez", "9005 Horse Mill Crescent", "Bowling Green", "KY", "42101", "270-555-8115", "kgomez@example.com/mail", 200, "6/26/2018"],
   ["donor147", "Robert", "Massey", "1804 Ellis Row", "Bowling Green", "KY", "42102", "270-555-5348", "rmasse@example.com/mail", 100, "6/30/2018"],
   ["donor148", "Ellen", "Burris", "9476 Pipewell Street", "London", "KY", "40745", "606-555-1469", "eburri@example.com/mail", 500, "6/30/2018"],
   ["donor149", "Edward", "Williams", "2300 Dominick Street", "Liberty", "KY", "42539", "606-555-9378", "ewilli@example.com/mail", 1000, "6/30/2018"],
   ["donor150", "Jayne", "Sites", "22 Eden Vale Drive", "Lexington", "KY", "40503", "859-555-3997", "jsites@example.com/mail", 500, "6/30/2018"],
   ["donor151", "Grace", "Cannady", "8836 Victor Avenue", "Lexington", "KY", "40519", "859-555-1834", "gcanna@example.com/mail", 200, "7/3/2018"],
   ["donor152", "David", "Bradford", "1372 Milkan Road", "Bowling Green", "KY", "42104", "270-555-5793", "dbradf@example.com/mail", 200, "7/3/2018"],
   ["donor153", "Zelma", "Deluca", "5718 Mill Bridge Square", "Bowling Green", "KY", "42102", "270-555-1751", "zdeluc@example.com/mail", 100, "7/6/2018"],
   ["donor154", "Audrey", "Pipkins", "4905 Harvard Alley", "Lexington", "KY", "40513", "859-555-5377", "apipki@example.com/mail", 100, "7/10/2018"],
   ["donor155", "Donald", "Rader", "9703 Terry Way", "Lexington", "KY", "40521", "859-555-5323", "drader@example.com/mail", 500, "7/11/2018"],
   ["donor156", "Brian", "Lane", "6179 King Street", "Lexington", "KY", "40520", "859-555-2974", "blane@example.com/mail", 100, "7/12/2018"],
   ["donor157", "Gladys", "Crawford", "1619 Hatch Drive", "Frankfort", "KY", "40601", "502-555-7268", "gcrawf@example.com/mail", 200, "7/14/2018"],
   ["donor158", "Lucille", "Dobson", "5760 Boreenatra Drive", "Louisville", "KY", "40221", "502-555-8865", "ldobso@example.com/mail", 10000, "7/19/2018"],
   ["donor159", "Fred", "Murphy", "6292 Emmett Square", "Lexington", "KY", "40509", "859-555-3746", "fmurph@example.com/mail", 10000, "7/21/2018"],
   ["donor160", "John", "Abbott", "9582 Ship Lane", "Louisville", "KY", "40216", "502-555-3452", "jabbot@example.com/mail", 100, "7/21/2018"],
   ["donor161", "Stephen", "Bryant", "5320 Derby Avenue", "Lexington", "KY", "40506", "859-555-6265", "sbryan@example.com/mail", 100, "7/21/2018"],
   ["donor162", "Shirley", "Lane", "8642 Passage Lane", "Winchester", "KY", "40392", "859-555-2387", "slane@example.com/mail", 1000, "7/26/2018"],
   ["donor163", "Myong", "Levine", "1580 Tanner Drive", "Lexington", "KY", "40510", "859-555-2543", "mlevin@example.com/mail", 100, "7/28/2018"],
   ["donor164", "Timothy", "Decarlo", "6828 William Court", "Lexington", "KY", "40522", "859-555-9431", "tdecar@example.com/mail", 200, "7/28/2018"],
   ["donor165", "Frankie", "Burpo", "287 Inns Avenue", "Lexington", "KY", "40509", "859-555-5279", "fburpo@example.com/mail", 100, "7/28/2018"],
   ["donor166", "Louis", "Williams", "8079 Wolfe Avenue", "Louisville", "KY", "40211", "502-555-2867", "lwilli@example.com/mail", 500, "7/28/2018"],
   ["donor167", "Heather", "Ahner", "371 Parnell Lane", "Louisville", "KY", "40221", "502-555-8369", "hahner@example.com/mail", 100, "7/28/2018"],
   ["donor168", "Joann", "Close", "1170 Essex Road", "Louisville", "KY", "40210", "502-555-8177", "jclose@example.com/mail", 500, "8/1/2018"],
   ["donor169", "Edward", "Griffin", "4392 Grovener Avenue", "Bowling Green", "KY", "42101", "270-555-3862", "egriff@example.com/mail", 100, "8/2/2018"],
   ["donor170", "Sharon", "Rodriguez", "8234 Ely Circus Drive", "Bowling Green", "KY", "42101", "270-555-6949", "srodri@example.com/mail", 50000, "8/2/2018"],
   ["donor171", "Evelyn", "Gilliland", "8172 Grattan Place", "Lexington", "KY", "40506", "859-555-2892", "egilli@example.com/mail", 100, "8/3/2018"],
   ["donor172", "Bennie", "Jackson", "11 Embankment Court", "Louisville", "KY", "40201", "502-555-1243", "bjacks@example.com/mail", 500, "8/4/2018"],
   ["donor173", "James", "Mannion", "9369 Barrack Yard Street", "Frankfort", "KY", "40601", "502-555-4172", "jmanni@example.com/mail", 200, "8/7/2018"]
]