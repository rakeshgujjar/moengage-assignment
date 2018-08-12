import _ from 'underscore';


const mockData = [
  {
     id:1,
     campaignName:"campaignName-1",
     type:"type-1",
     lastSaved:"07/10/2018",
     
  },
  {
     id:2,
     campaignName:"campaignName-2",
     type:"type-2",
     lastSaved:"07/10/2018",
     
  },
  {
     id:3,
     campaignName:"campaignName-3",
     type:"type-3",
     lastSaved:"07/10/2018",
     
  },
  {
     id:4,
     campaignName:"campaignName-4",
     type:"type-4",
     lastSaved:"07/10/2018",
     
  },
  {
     id:5,
     campaignName:"campaignName-5",
     type:"type-5",
     lastSaved:"07/10/2018",
     
  },
  {
     id:6,
     campaignName:"campaignName-6",
     type:"type-6",
     lastSaved:"07/10/2018",
     
  },
  {
     id:7,
     campaignName:"campaignName-7",
     type:"type-7",
     lastSaved:"07/10/2018",
     
  },
  {
     id:8,
     campaignName:"campaignName-8",
     type:"type-8",
     lastSaved:"07/10/2018",
     
  },
  {
     id:9,
     campaignName:"campaignName-9",
     type:"type-9",
     lastSaved:"07/10/2018",
     
  },
  {
     id:10,
     campaignName:"campaignName-10",
     type:"type-10",
     lastSaved:"07/10/2018",
     
  },
  {
     id:11,
     campaignName:"campaignName-11",
     type:"type-11",
     lastSaved:"07/10/2018",
     
  },
  {
     id:12,
     campaignName:"campaignName-12",
     type:"type-12",
     lastSaved:"07/10/2018",
     
  },
  {
     id:13,
     campaignName:"campaignName-13",
     type:"type-13",
     lastSaved:"07/10/2018",
     
  },
  {
     id:14,
     campaignName:"campaignName-14",
     type:"type-14",
     lastSaved:"07/10/2018",
     
  },
  {
     id:15,
     campaignName:"campaignName-15",
     type:"type-15",
     lastSaved:"07/10/2018",
     
  },
  {
     id:16,
     campaignName:"campaignName-16",
     type:"type-16",
     lastSaved:"07/10/2018",
     
  },
  {
     id:17,
     campaignName:"campaignName-17",
     type:"type-17",
     lastSaved:"07/10/2018",
     
  },
  {
     id:18,
     campaignName:"campaignName-18",
     type:"type-18",
     lastSaved:"07/10/2018",
     
  },
  {
     id:19,
     campaignName:"campaignName-19",
     type:"type-19",
     lastSaved:"07/10/2018",
     
  },
  {
     id:20,
     campaignName:"campaignName-20",
     type:"type-20",
     lastSaved:"07/10/2018",
     
  },
  {
     id:21,
     campaignName:"campaignName-21",
     type:"type-21",
     lastSaved:"07/10/2018",
     
  },
  {
     id:22,
     campaignName:"campaignName-22",
     type:"type-22",
     lastSaved:"07/10/2018",
     
  },
  {
     id:23,
     campaignName:"campaignName-23",
     type:"type-23",
     lastSaved:"07/10/2018",
     
  },
  {
     id:24,
     campaignName:"campaignName-24",
     type:"type-24",
     lastSaved:"07/10/2018",
     
  },
  {
     id:25,
     campaignName:"campaignName-25",
     type:"type-25",
     lastSaved:"07/10/2018",
     
  },
  {
     id:26,
     campaignName:"campaignName-26",
     type:"type-26",
     lastSaved:"07/10/2018",
     
  },
  {
     id:27,
     campaignName:"campaignName-27",
     type:"type-27",
     lastSaved:"07/10/2018",
     
  },
  {
     id:28,
     campaignName:"campaignName-28",
     type:"type-28",
     lastSaved:"07/10/2018",
     
  },
  {
     id:29,
     campaignName:"campaignName-29",
     type:"type-29",
     lastSaved:"07/10/2018",
     
  },
  {
     id:30,
     campaignName:"campaignName-30",
     type:"type-30",
     lastSaved:"07/10/2018",
     
  },
  {
     id:31,
     campaignName:"campaignName-31",
     type:"type-31",
     lastSaved:"07/10/2018",
     
  },
  {
     id:32,
     campaignName:"campaignName-32",
     type:"type-32",
     lastSaved:"07/10/2018",
     
  },
  {
     id:33,
     campaignName:"campaignName-33",
     type:"type-33",
     lastSaved:"07/10/2018",
     
  },
  {
     id:34,
     campaignName:"campaignName-34",
     type:"type-34",
     lastSaved:"07/10/2018",
     
  },
  {
     id:35,
     campaignName:"campaignName-35",
     type:"type-35",
     lastSaved:"07/10/2018",
     
  },
  {
     id:36,
     campaignName:"campaignName-36",
     type:"type-36",
     lastSaved:"07/10/2018",
     
  },
  {
     id:37,
     campaignName:"campaignName-37",
     type:"type-37",
     lastSaved:"07/10/2018",
     
  },
  {
     id:38,
     campaignName:"campaignName-38",
     type:"type-38",
     lastSaved:"07/10/2018",
     
  },
  {
     id:39,
     campaignName:"campaignName-39",
     type:"type-39",
     lastSaved:"07/10/2018",
     
  },
  {
     id:40,
     campaignName:"campaignName-40",
     type:"type-40",
     lastSaved:"07/10/2018",
     
  },
  {
     id:41,
     campaignName:"campaignName-41",
     type:"type-41",
     lastSaved:"07/10/2018",
     
  },
  {
     id:42,
     campaignName:"campaignName-42",
     type:"type-42",
     lastSaved:"07/10/2018",
     
  },
  {
     id:43,
     campaignName:"campaignName-43",
     type:"type-43",
     lastSaved:"07/10/2018",
     
  },
  {
     id:44,
     campaignName:"campaignName-44",
     type:"type-44",
     lastSaved:"07/10/2018",
     
  },
  {
     id:45,
     campaignName:"campaignName-45",
     type:"type-45",
     lastSaved:"07/10/2018",
     
  },
  {
     id:46,
     campaignName:"campaignName-46",
     type:"type-46",
     lastSaved:"07/10/2018",
     
  },
  {
     id:47,
     campaignName:"campaignName-47",
     type:"type-47",
     lastSaved:"07/10/2018",
     
  },
  {
     id:48,
     campaignName:"campaignName-48",
     type:"type-48",
     lastSaved:"07/10/2018",
     
  },
  {
     id:49,
     campaignName:"campaignName-49",
     type:"type-49",
     lastSaved:"07/10/2018",
     
  },
  {
     id:50,
     campaignName:"campaignName-50",
     type:"type-50",
     lastSaved:"07/10/2018",
     
  },
  {
     id:51,
     campaignName:"campaignName-51",
     type:"type-51",
     lastSaved:"07/10/2018",
     
  },
  {
     id:52,
     campaignName:"campaignName-52",
     type:"type-52",
     lastSaved:"07/10/2018",
     
  },
  {
     id:53,
     campaignName:"campaignName-53",
     type:"type-53",
     lastSaved:"07/10/2018",
     
  },
  {
     id:54,
     campaignName:"campaignName-54",
     type:"type-54",
     lastSaved:"07/10/2018",
     
  },
  {
     id:55,
     campaignName:"campaignName-55",
     type:"type-55",
     lastSaved:"07/10/2018",
     
  },
  {
     id:56,
     campaignName:"campaignName-56",
     type:"type-56",
     lastSaved:"07/10/2018",
     
  },
  {
     id:57,
     campaignName:"campaignName-57",
     type:"type-57",
     lastSaved:"07/10/2018",
     
  },
  {
     id:58,
     campaignName:"campaignName-58",
     type:"type-58",
     lastSaved:"07/10/2018",
     
  },
  {
     id:59,
     campaignName:"campaignName-59",
     type:"type-59",
     lastSaved:"07/10/2018",
     
  },
  {
     id:60,
     campaignName:"campaignName-60",
     type:"type-60",
     lastSaved:"07/10/2018",
     
  },
  {
     id:61,
     campaignName:"campaignName-61",
     type:"type-61",
     lastSaved:"07/10/2018",
     
  },
  {
     id:62,
     campaignName:"campaignName-62",
     type:"type-62",
     lastSaved:"07/10/2018",
     
  },
  {
     id:63,
     campaignName:"campaignName-63",
     type:"type-63",
     lastSaved:"07/10/2018",
     
  },
  {
     id:64,
     campaignName:"campaignName-64",
     type:"type-64",
     lastSaved:"07/10/2018",
     
  },
  {
     id:65,
     campaignName:"campaignName-65",
     type:"type-65",
     lastSaved:"07/10/2018",
     
  },
  {
     id:66,
     campaignName:"campaignName-66",
     type:"type-66",
     lastSaved:"07/10/2018",
     
  },
  {
     id:67,
     campaignName:"campaignName-67",
     type:"type-67",
     lastSaved:"07/10/2018",
     
  },
  {
     id:68,
     campaignName:"campaignName-68",
     type:"type-68",
     lastSaved:"07/10/2018",
     
  },
  {
     id:69,
     campaignName:"campaignName-69",
     type:"type-69",
     lastSaved:"07/10/2018",
     
  },
  {
     id:70,
     campaignName:"campaignName-70",
     type:"type-70",
     lastSaved:"07/10/2018",
     
  },
  {
     id:71,
     campaignName:"campaignName-71",
     type:"type-71",
     lastSaved:"07/10/2018",
     
  },
  {
     id:72,
     campaignName:"campaignName-72",
     type:"type-72",
     lastSaved:"07/10/2018",
     
  },
  {
     id:73,
     campaignName:"campaignName-73",
     type:"type-73",
     lastSaved:"07/10/2018",
     
  },
  {
     id:74,
     campaignName:"campaignName-74",
     type:"type-74",
     lastSaved:"07/10/2018",
     
  },
  {
     id:75,
     campaignName:"campaignName-75",
     type:"type-75",
     lastSaved:"07/10/2018",
     
  },
  {
     id:76,
     campaignName:"campaignName-76",
     type:"type-76",
     lastSaved:"07/10/2018",
     
  },
  {
     id:77,
     campaignName:"campaignName-77",
     type:"type-77",
     lastSaved:"07/10/2018",
     
  },
  {
     id:78,
     campaignName:"campaignName-78",
     type:"type-78",
     lastSaved:"07/10/2018",
     
  },
  {
     id:79,
     campaignName:"campaignName-79",
     type:"type-79",
     lastSaved:"07/10/2018",
     
  },
  {
     id:80,
     campaignName:"campaignName-80",
     type:"type-80",
     lastSaved:"07/10/2018",
     
  },
  {
     id:81,
     campaignName:"campaignName-81",
     type:"type-81",
     lastSaved:"07/10/2018",
     
  },
  {
     id:82,
     campaignName:"campaignName-82",
     type:"type-82",
     lastSaved:"07/10/2018",
     
  },
  {
     id:83,
     campaignName:"campaignName-83",
     type:"type-83",
     lastSaved:"07/10/2018",
     
  },
  {
     id:84,
     campaignName:"campaignName-84",
     type:"type-84",
     lastSaved:"07/10/2018",
     
  },
  {
     id:85,
     campaignName:"campaignName-85",
     type:"type-85",
     lastSaved:"07/10/2018",
     
  },
  {
     id:86,
     campaignName:"campaignName-86",
     type:"type-86",
     lastSaved:"07/10/2018",
     
  },
  {
     id:87,
     campaignName:"campaignName-87",
     type:"type-87",
     lastSaved:"07/10/2018",
     
  },
  {
     id:88,
     campaignName:"campaignName-88",
     type:"type-88",
     lastSaved:"07/10/2018",
     
  },
  {
     id:89,
     campaignName:"campaignName-89",
     type:"type-89",
     lastSaved:"07/10/2018",
     
  },
  {
     id:90,
     campaignName:"campaignName-90",
     type:"type-90",
     lastSaved:"07/10/2018",
     
  },
  {
     id:91,
     campaignName:"campaignName-91",
     type:"type-91",
     lastSaved:"07/10/2018",
     
  },
  {
     id:92,
     campaignName:"campaignName-92",
     type:"type-92",
     lastSaved:"07/10/2018",
     
  },
  {
     id:93,
     campaignName:"campaignName-93",
     type:"type-93",
     lastSaved:"07/10/2018",
     
  },
  {
     id:94,
     campaignName:"campaignName-94",
     type:"type-94",
     lastSaved:"07/10/2018",
     
  },
  {
     id:95,
     campaignName:"campaignName-95",
     type:"type-95",
     lastSaved:"07/10/2018",
     
  },
  {
     id:96,
     campaignName:"campaignName-96",
     type:"type-96",
     lastSaved:"07/10/2018",
     
  },
  {
     id:97,
     campaignName:"campaignName-97",
     type:"type-97",
     lastSaved:"07/10/2018",
     
  },
  {
     id:98,
     campaignName:"campaignName-98",
     type:"type-98",
     lastSaved:"07/10/2018",
     
  },
  {
     id:99,
     campaignName:"campaignName-99",
     type:"type-99",
     lastSaved:"07/10/2018",
     
  },
  {
     id:100,
     campaignName:"campaignName-100",
     type:"type-100",
     lastSaved:"07/10/2018",
     
  },
  {
     id:101,
     campaignName:"campaignName-101",
     type:"type-101",
     lastSaved:"07/10/2018",
     
  },
  {
     id:102,
     campaignName:"campaignName-102",
     type:"type-102",
     lastSaved:"07/10/2018",
     
  },
  {
     id:103,
     campaignName:"campaignName-103",
     type:"type-103",
     lastSaved:"07/10/2018",
     
  },
  {
     id:104,
     campaignName:"campaignName-104",
     type:"type-104",
     lastSaved:"07/10/2018",
     
  },
  {
     id:105,
     campaignName:"campaignName-105",
     type:"type-105",
     lastSaved:"07/10/2018",
     
  },
  {
     id:106,
     campaignName:"campaignName-106",
     type:"type-106",
     lastSaved:"07/10/2018",
     
  },
  {
     id:107,
     campaignName:"campaignName-107",
     type:"type-107",
     lastSaved:"07/10/2018",
     
  },
  {
     id:108,
     campaignName:"campaignName-108",
     type:"type-108",
     lastSaved:"07/10/2018",
     
  },
  {
     id:109,
     campaignName:"campaignName-109",
     type:"type-109",
     lastSaved:"07/10/2018",
     
  },
  {
     id:110,
     campaignName:"campaignName-110",
     type:"type-110",
     lastSaved:"07/10/2018",
     
  },
  {
     id:111,
     campaignName:"campaignName-111",
     type:"type-111",
     lastSaved:"07/10/2018",
     
  },
  {
     id:112,
     campaignName:"campaignName-112",
     type:"type-112",
     lastSaved:"07/10/2018",
     
  },
  {
     id:113,
     campaignName:"campaignName-113",
     type:"type-113",
     lastSaved:"07/10/2018",
     
  },
  {
     id:114,
     campaignName:"campaignName-114",
     type:"type-114",
     lastSaved:"07/10/2018",
     
  },
  {
     id:115,
     campaignName:"campaignName-115",
     type:"type-115",
     lastSaved:"07/10/2018",
     
  },
  {
     id:116,
     campaignName:"campaignName-116",
     type:"type-116",
     lastSaved:"07/10/2018",
     
  },
  {
     id:117,
     campaignName:"campaignName-117",
     type:"type-117",
     lastSaved:"07/10/2018",
     
  },
  {
     id:118,
     campaignName:"campaignName-118",
     type:"type-118",
     lastSaved:"07/10/2018",
     
  },
  {
     id:119,
     campaignName:"campaignName-119",
     type:"type-119",
     lastSaved:"07/10/2018",
     
  },
  {
     id:120,
     campaignName:"campaignName-120",
     type:"type-120",
     lastSaved:"07/10/2018",
     
  },
  {
     id:121,
     campaignName:"campaignName-121",
     type:"type-121",
     lastSaved:"07/10/2018",
     
  },
  {
     id:122,
     campaignName:"campaignName-122",
     type:"type-122",
     lastSaved:"07/10/2018",
     
  },
  {
     id:123,
     campaignName:"campaignName-123",
     type:"type-123",
     lastSaved:"07/10/2018",
     
  },
  {
     id:124,
     campaignName:"campaignName-124",
     type:"type-124",
     lastSaved:"07/10/2018",
     
  },
  {
     id:125,
     campaignName:"campaignName-125",
     type:"type-125",
     lastSaved:"07/10/2018",
     
  },
  {
     id:126,
     campaignName:"campaignName-126",
     type:"type-126",
     lastSaved:"07/10/2018",
     
  },
  {
     id:127,
     campaignName:"campaignName-127",
     type:"type-127",
     lastSaved:"07/10/2018",
     
  },
  {
     id:128,
     campaignName:"campaignName-128",
     type:"type-128",
     lastSaved:"07/10/2018",
     
  },
  {
     id:129,
     campaignName:"campaignName-129",
     type:"type-129",
     lastSaved:"07/10/2018",
     
  },
  {
     id:130,
     campaignName:"campaignName-130",
     type:"type-130",
     lastSaved:"07/10/2018",
     
  },
  {
     id:131,
     campaignName:"campaignName-131",
     type:"type-131",
     lastSaved:"07/10/2018",
     
  },
  {
     id:132,
     campaignName:"campaignName-132",
     type:"type-132",
     lastSaved:"07/10/2018",
     
  },
  {
     id:133,
     campaignName:"campaignName-133",
     type:"type-133",
     lastSaved:"07/10/2018",
     
  },
  {
     id:134,
     campaignName:"campaignName-134",
     type:"type-134",
     lastSaved:"07/10/2018",
     
  },
  {
     id:135,
     campaignName:"campaignName-135",
     type:"type-135",
     lastSaved:"07/10/2018",
     
  },
  {
     id:136,
     campaignName:"campaignName-136",
     type:"type-136",
     lastSaved:"07/10/2018",
     
  },
  {
     id:137,
     campaignName:"campaignName-137",
     type:"type-137",
     lastSaved:"07/10/2018",
     
  },
  {
     id:138,
     campaignName:"campaignName-138",
     type:"type-138",
     lastSaved:"07/10/2018",
     
  },
  {
     id:139,
     campaignName:"campaignName-139",
     type:"type-139",
     lastSaved:"07/10/2018",
     
  },
  {
     id:140,
     campaignName:"campaignName-140",
     type:"type-140",
     lastSaved:"07/10/2018",
     
  },
  {
     id:141,
     campaignName:"campaignName-141",
     type:"type-141",
     lastSaved:"07/10/2018",
     
  },
  {
     id:142,
     campaignName:"campaignName-142",
     type:"type-142",
     lastSaved:"07/10/2018",
     
  },
  {
     id:143,
     campaignName:"campaignName-143",
     type:"type-143",
     lastSaved:"07/10/2018",
     
  },
  {
     id:144,
     campaignName:"campaignName-144",
     type:"type-144",
     lastSaved:"07/10/2018",
     
  },
  {
     id:145,
     campaignName:"campaignName-145",
     type:"type-145",
     lastSaved:"07/10/2018",
     
  },
  {
     id:146,
     campaignName:"campaignName-146",
     type:"type-146",
     lastSaved:"07/10/2018",
     
  },
  {
     id:147,
     campaignName:"campaignName-147",
     type:"type-147",
     lastSaved:"07/10/2018",
     
  },
  {
     id:148,
     campaignName:"campaignName-148",
     type:"type-148",
     lastSaved:"07/10/2018",
     
  },
  {
     id:149,
     campaignName:"campaignName-149",
     type:"type-149",
     lastSaved:"07/10/2018",
     
  }
];

class ProductApi {
  static getProducts(page) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let products = {};
        products.pageCount = 10;
        products.resultsCount = 100;
        products.productList = _.first(_.rest(mockData, page * 10 - 10), 10);
        resolve(Object.assign({}, products));
      }, 100);
    });
  }
}

export default ProductApi;

// for (let i = 1; i <= 10; i++) {
//   console.log(_.first(_.rest(mockData, i * 10 - 10), 10));
// }

// console.log(_.filter(mockData, function(item) {
//   return item.price === 42;
// }));
