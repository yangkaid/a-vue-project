interface INode {
  id: number;
  name: string;
  logoUrl: string;
  type: string;
  uid: string;
  properties: any;
  status: any;
  statusCode: string;
}
interface ILink {
  destId: string;
  endNodeId: string;
  label: string;
  properties: any;
  srcId: string;
  startNodeId: string;
  type: string;
}
interface IGraphData {
  endP: INode;
  linkList: ILink[];
  startP: INode;
  nodeList: INode[];
  pathList: any[];
}


export const mockData: any = {
  "endP": {
    "id": 523953705,
    "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/b23d6a92ff3856d835f487ac9610b015.jpg",
    "name": "小米通讯技术有限公司",
    "properties": {},
    "status": null,
    "statusCode": "1",
    "type": "E",
    "uid": "de7f2292-4482-4790-92b3-b1564c636bd5"
  },
  "linkList": [
    {
      "destId": "229668698",
      "endNodeId": 229668698,
      "label": "工商股东",
      "properties": {
        "SH": {
          "relation_percent": "100.00%",
          "relation_desc": "工商股东",
          "relation_amount": "200.00"
        }
      },
      "srcId": "523953705",
      "startNodeId": 523953705,
      "type": "SH"
    },
    {
      "destId": "435438215",
      "endNodeId": 435438215,
      "label": "疑似实控人",
      "properties": {
        "ACTUAL_CONTROLLER": {
          "relation_percent": "100.00%",
          "relation_desc": "疑似实控人"
        }
      },
      "srcId": "602643448",
      "startNodeId": 602643448,
      "type": "ACTUAL_CONTROLLER"
    },
    {
      "destId": "502654865",
      "endNodeId": 502654865,
      "label": "执行董事",
      "properties": {
        "HEXEC": {
          "relation_desc": "执行董事",
          "relation_date": "2021-12-10"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "HEXEC"
    },
    {
      "destId": "428975727",
      "endNodeId": 428975727,
      "label": "董事",
      "properties": {
        "HEXEC": {
          "relation_desc": "董事",
          "relation_date": "2020-05-14"
        }
      },
      "srcId": "182071253",
      "startNodeId": 182071253,
      "type": "HEXEC"
    },
    {
      "destId": "630349267",
      "endNodeId": 630349267,
      "label": "董事",
      "properties": {
        "EXEC": {
          "relation_desc": "董事"
        }
      },
      "srcId": "182071253",
      "startNodeId": 182071253,
      "type": "EXEC"
    },
    {
      "destId": "184780623",
      "endNodeId": 184780623,
      "label": "受益所有人;执行董事",
      "properties": {
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        },
        "EXEC": {
          "relation_desc": "执行董事"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "BENEFICIARY;EXEC"
    },
    {
      "destId": "54895634",
      "endNodeId": 54895634,
      "label": "董事;受益所有人",
      "properties": {
        "EXEC": {
          "relation_desc": "董事"
        },
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        }
      },
      "srcId": "113311751",
      "startNodeId": 113311751,
      "type": "EXEC;BENEFICIARY"
    },
    {
      "destId": "218292071",
      "endNodeId": 218292071,
      "label": "董事;受益所有人",
      "properties": {
        "EXEC": {
          "relation_desc": "董事"
        },
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        }
      },
      "srcId": "113311751",
      "startNodeId": 113311751,
      "type": "EXEC;BENEFICIARY"
    },
    {
      "destId": "486653200",
      "endNodeId": 486653200,
      "label": "受益所有人;执行董事",
      "properties": {
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        },
        "EXEC": {
          "relation_desc": "执行董事"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "BENEFICIARY;EXEC"
    },
    {
      "destId": "229668698",
      "endNodeId": 229668698,
      "label": "董事长",
      "properties": {
        "HEXEC": {
          "relation_desc": "董事长",
          "relation_date": "2021-12-09"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "HEXEC"
    },
    {
      "destId": "668790416",
      "endNodeId": 668790416,
      "label": "受益所有人;疑似实控人",
      "properties": {
        "BENEFICIARY": {
          "relation_percent": "90.00%",
          "relation_desc": "受益所有人"
        },
        "ACTUAL_CONTROLLER": {
          "relation_percent": "90.00%",
          "relation_desc": "疑似实控人"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "BENEFICIARY;ACTUAL_CONTROLLER"
    },
    {
      "destId": "243408537",
      "endNodeId": 243408537,
      "label": "受益所有人;董事长",
      "properties": {
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        },
        "EXEC": {
          "relation_desc": "董事长"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "BENEFICIARY;EXEC"
    },
    {
      "destId": "428975727",
      "endNodeId": 428975727,
      "label": "受益所有人;疑似实控人",
      "properties": {
        "BENEFICIARY": {
          "relation_percent": "90.00%",
          "relation_desc": "受益所有人"
        },
        "ACTUAL_CONTROLLER": {
          "relation_percent": "90.00%",
          "relation_desc": "疑似实控人"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "BENEFICIARY;ACTUAL_CONTROLLER"
    },
    {
      "destId": "232177727",
      "endNodeId": 232177727,
      "label": "工商股东",
      "properties": {
        "SH": {
          "relation_percent": "100.00%",
          "relation_desc": "工商股东",
          "relation_amount": "4000.00"
        }
      },
      "srcId": "523953705",
      "startNodeId": 523953705,
      "type": "SH"
    },
    {
      "destId": "641414586",
      "endNodeId": 641414586,
      "label": "历史股东",
      "properties": {
        "HSH": {
          "relation_percent": "100.00%",
          "relation_desc": "历史股东",
          "relation_amount": "1000000.00",
          "relation_date": "2021-10-19"
        }
      },
      "srcId": "523953705",
      "startNodeId": 523953705,
      "type": "HSH"
    },
    {
      "destId": "486653200",
      "endNodeId": 486653200,
      "label": "工商股东",
      "properties": {
        "SH": {
          "relation_percent": "100.00%",
          "relation_desc": "工商股东",
          "relation_amount": "10000.00"
        }
      },
      "srcId": "523953705",
      "startNodeId": 523953705,
      "type": "SH"
    },
    {
      "destId": "184780623",
      "endNodeId": 184780623,
      "label": "疑似实控人",
      "properties": {
        "ACTUAL_CONTROLLER": {
          "relation_percent": "100.00%",
          "relation_desc": "疑似实控人"
        }
      },
      "srcId": "602643448",
      "startNodeId": 602643448,
      "type": "ACTUAL_CONTROLLER"
    },
    {
      "destId": "523953705",
      "endNodeId": 523953705,
      "label": "受益所有人",
      "properties": {
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        }
      },
      "srcId": "182071253",
      "startNodeId": 182071253,
      "type": "BENEFICIARY"
    },
    {
      "destId": "232177727",
      "endNodeId": 232177727,
      "label": "执行董事",
      "properties": {
        "HEXEC": {
          "relation_desc": "执行董事"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "HEXEC"
    },
    {
      "destId": "486653200",
      "endNodeId": 486653200,
      "label": "疑似实控人",
      "properties": {
        "ACTUAL_CONTROLLER": {
          "relation_percent": "100.00%",
          "relation_desc": "疑似实控人"
        }
      },
      "srcId": "602643448",
      "startNodeId": 602643448,
      "type": "ACTUAL_CONTROLLER"
    },
    {
      "destId": "184780623",
      "endNodeId": 184780623,
      "label": "工商股东",
      "properties": {
        "SH": {
          "relation_percent": "100.00%",
          "relation_desc": "工商股东",
          "relation_amount": "8000.00"
        }
      },
      "srcId": "523953705",
      "startNodeId": 523953705,
      "type": "SH"
    },
    {
      "destId": "523953705",
      "endNodeId": 523953705,
      "label": "董事长;受益所有人",
      "properties": {
        "EXEC": {
          "relation_desc": "董事长"
        },
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "EXEC;BENEFICIARY"
    },
    {
      "destId": "512366682",
      "endNodeId": 512366682,
      "label": "董事;工商股东",
      "properties": {
        "EXEC": {
          "relation_desc": "董事"
        },
        "SH": {
          "relation_percent": "12.50%",
          "relation_desc": "工商股东",
          "relation_amount": "12.50"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "EXEC;SH"
    },
    {
      "destId": "530488371",
      "endNodeId": 530488371,
      "label": "董事;受益所有人",
      "properties": {
        "EXEC": {
          "relation_desc": "董事"
        },
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "EXEC;BENEFICIARY"
    },
    {
      "destId": "184780623",
      "endNodeId": 184780623,
      "label": "经理",
      "properties": {
        "HEXEC": {
          "relation_desc": "经理",
          "relation_date": "2020-06-04"
        }
      },
      "srcId": "182071253",
      "startNodeId": 182071253,
      "type": "HEXEC"
    },
    {
      "destId": "392082278",
      "endNodeId": 392082278,
      "label": "董事;受益所有人",
      "properties": {
        "EXEC": {
          "relation_desc": "董事"
        },
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "EXEC;BENEFICIARY"
    },
    {
      "destId": "621382816",
      "endNodeId": 621382816,
      "label": "受益所有人;董事",
      "properties": {
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        },
        "EXEC": {
          "relation_desc": "董事"
        }
      },
      "srcId": "113311751",
      "startNodeId": 113311751,
      "type": "BENEFICIARY;EXEC"
    },
    {
      "destId": "392082278",
      "endNodeId": 392082278,
      "label": "董事",
      "properties": {
        "HEXEC": {
          "relation_desc": "董事",
          "relation_date": "2017-03-16"
        }
      },
      "srcId": "113311751",
      "startNodeId": 113311751,
      "type": "HEXEC"
    },
    {
      "destId": "414117980",
      "endNodeId": 414117980,
      "label": "董事",
      "properties": {
        "HEXEC": {
          "relation_desc": "董事"
        }
      },
      "srcId": "113311751",
      "startNodeId": 113311751,
      "type": "HEXEC"
    },
    {
      "destId": "123551618",
      "endNodeId": 123551618,
      "label": "执行董事兼总经理",
      "properties": {
        "HEXEC": {
          "relation_desc": "执行董事兼总经理",
          "relation_date": "2021-12-06"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "HEXEC"
    },
    {
      "destId": "54895634",
      "endNodeId": 54895634,
      "label": "受益所有人;董事",
      "properties": {
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        },
        "EXEC": {
          "relation_desc": "董事"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "BENEFICIARY;EXEC"
    },
    {
      "destId": "243408537",
      "endNodeId": 243408537,
      "label": "董事;受益所有人",
      "properties": {
        "EXEC": {
          "relation_desc": "董事"
        },
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        }
      },
      "srcId": "182071253",
      "startNodeId": 182071253,
      "type": "EXEC;BENEFICIARY"
    },
    {
      "destId": "668790416",
      "endNodeId": 668790416,
      "label": "董事",
      "properties": {
        "HEXEC": {
          "relation_desc": "董事"
        }
      },
      "srcId": "182071253",
      "startNodeId": 182071253,
      "type": "HEXEC"
    },
    {
      "destId": "512366682",
      "endNodeId": 512366682,
      "label": "董事;工商股东",
      "properties": {
        "EXEC": {
          "relation_desc": "董事"
        },
        "SH": {
          "relation_percent": "6.25%",
          "relation_desc": "工商股东",
          "relation_amount": "6.25"
        }
      },
      "srcId": "113311751",
      "startNodeId": 113311751,
      "type": "EXEC;SH"
    },
    {
      "destId": "630349267",
      "endNodeId": 630349267,
      "label": "董事",
      "properties": {
        "EXEC": {
          "relation_desc": "董事"
        }
      },
      "srcId": "113311751",
      "startNodeId": 113311751,
      "type": "EXEC"
    },
    {
      "destId": "523953705",
      "endNodeId": 523953705,
      "label": "受益所有人",
      "properties": {
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        }
      },
      "srcId": "113311751",
      "startNodeId": 113311751,
      "type": "BENEFICIARY"
    },
    {
      "destId": "641414586",
      "endNodeId": 641414586,
      "label": "经理,执行董事;受益所有人;法定代表人",
      "properties": {
        "EXEC": {
          "relation_desc": "经理,执行董事"
        },
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        },
        "LR": {
          "relation_desc": "法定代表人"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "EXEC;BENEFICIARY;LR"
    },
    {
      "destId": "523953705",
      "endNodeId": 523953705,
      "label": "疑似实控人",
      "properties": {
        "ACTUAL_CONTROLLER": {
          "relation_percent": "100.00%",
          "relation_desc": "疑似实控人"
        }
      },
      "srcId": "602643448",
      "startNodeId": 602643448,
      "type": "ACTUAL_CONTROLLER"
    },
    {
      "destId": "139699190",
      "endNodeId": 139699190,
      "label": "工商股东",
      "properties": {
        "SH": {
          "relation_percent": "70.00%",
          "relation_desc": "工商股东",
          "relation_amount": "171.50"
        }
      },
      "srcId": "523953705",
      "startNodeId": 523953705,
      "type": "SH"
    },
    {
      "destId": "139699190",
      "endNodeId": 139699190,
      "label": "董事",
      "properties": {
        "HEXEC": {
          "relation_desc": "董事"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "HEXEC"
    },
    {
      "destId": "630349267",
      "endNodeId": 630349267,
      "label": "受益所有人;经理,董事长;疑似实控人;工商股东",
      "properties": {
        "BENEFICIARY": {
          "relation_percent": "77.80%",
          "relation_desc": "受益所有人"
        },
        "EXEC": {
          "relation_desc": "经理,董事长"
        },
        "ACTUAL_CONTROLLER": {
          "relation_percent": "77.80%",
          "relation_desc": "疑似实控人"
        },
        "SH": {
          "relation_percent": "77.80%",
          "relation_desc": "工商股东",
          "relation_amount": "143934.05"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "BENEFICIARY;EXEC;ACTUAL_CONTROLLER;SH"
    },
    {
      "destId": "155956951",
      "endNodeId": 155956951,
      "label": "工商股东",
      "properties": {
        "SH": {
          "relation_percent": "100.00%",
          "relation_desc": "工商股东",
          "relation_amount": "95100.00"
        }
      },
      "srcId": "523953705",
      "startNodeId": 523953705,
      "type": "SH"
    },
    {
      "destId": "155956951",
      "endNodeId": 155956951,
      "label": "董事长",
      "properties": {
        "HEXEC": {
          "relation_desc": "董事长",
          "relation_date": "2021-12-10"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "HEXEC"
    },
    {
      "destId": "530488371",
      "endNodeId": 530488371,
      "label": "董事;受益所有人",
      "properties": {
        "EXEC": {
          "relation_desc": "董事"
        },
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        }
      },
      "srcId": "113311751",
      "startNodeId": 113311751,
      "type": "EXEC;BENEFICIARY"
    },
    {
      "destId": "621382816",
      "endNodeId": 621382816,
      "label": "董事;受益所有人",
      "properties": {
        "EXEC": {
          "relation_desc": "董事"
        },
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "EXEC;BENEFICIARY"
    },
    {
      "destId": "218292071",
      "endNodeId": 218292071,
      "label": "董事;受益所有人",
      "properties": {
        "EXEC": {
          "relation_desc": "董事"
        },
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "EXEC;BENEFICIARY"
    },
    {
      "destId": "502654865",
      "endNodeId": 502654865,
      "label": "工商股东",
      "properties": {
        "SH": {
          "relation_percent": "100.00%",
          "relation_desc": "工商股东",
          "relation_amount": "100000.00"
        }
      },
      "srcId": "523953705",
      "startNodeId": 523953705,
      "type": "SH"
    },
    {
      "destId": "414117980",
      "endNodeId": 414117980,
      "label": "受益所有人;工商股东",
      "properties": {
        "BENEFICIARY": {
          "relation_percent": "38.25%",
          "relation_desc": "受益所有人"
        },
        "SH": {
          "relation_percent": "38.25%",
          "relation_desc": "工商股东",
          "relation_amount": "382.50"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "BENEFICIARY;SH"
    },
    {
      "destId": "435438215",
      "endNodeId": 435438215,
      "label": "受益所有人;执行董事,经理;法定代表人",
      "properties": {
        "BENEFICIARY": {
          "relation_desc": "受益所有人"
        },
        "EXEC": {
          "relation_desc": "执行董事,经理"
        },
        "LR": {
          "relation_desc": "法定代表人"
        }
      },
      "srcId": "488599807",
      "startNodeId": 488599807,
      "type": "BENEFICIARY;EXEC;LR"
    },
    {
      "destId": "123551618",
      "endNodeId": 123551618,
      "label": "工商股东",
      "properties": {
        "SH": {
          "relation_percent": "100.00%",
          "relation_desc": "工商股东",
          "relation_amount": "21000.00"
        }
      },
      "srcId": "523953705",
      "startNodeId": 523953705,
      "type": "SH"
    },
    {
      "destId": "435438215",
      "endNodeId": 435438215,
      "label": "工商股东",
      "properties": {
        "SH": {
          "relation_percent": "100.00%",
          "relation_desc": "工商股东",
          "relation_amount": "66600.00"
        }
      },
      "srcId": "523953705",
      "startNodeId": 523953705,
      "type": "SH"
    }
  ],
  "nodeList": [
    {
      "id": 488599807,
      "logoUrl": null,
      "name": "雷军",
      "properties": {},
      "status": null,
      "statusCode": null,
      "type": "P",
      "uid": "02ad6587897a976a793aa72ead924a47"
    },
    {
      "id": 523953705,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/b23d6a92ff3856d835f487ac9610b015.jpg",
      "name": "小米通讯技术有限公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "de7f2292-4482-4790-92b3-b1564c636bd5"
    },
    {
      "id": 641414586,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/c18ba025b0e2b69d5f7852b8871bf6db.jpg",
      "name": "小米汽车有限公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "a1a56ca3-0337-4fca-a61c-c1090daba1e1"
    },
    {
      "id": 139699190,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/ab618b7e32a658f5d48bca3837f86266.jpg",
      "name": "北京田米科技有限公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "de401900-23fa-461d-a57b-1687da9e3291"
    },
    {
      "id": 502654865,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/487346d7102acbd36e6f7861b7ad54e6.jpg",
      "name": "广东小米科技有限责任公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "d5365cd9-42ec-4f56-a5e7-c94cfc51dae4"
    },
    {
      "id": 229668698,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/4a017dc6dc8a968f33a5cbccc30bbb0b.jpg",
      "name": "珠海小米通讯技术有限公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "ff7f1203-811d-4395-9d30-26208791a39e"
    },
    {
      "id": 435438215,
      "logoUrl": "",
      "name": "小米智能技术有限公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "7173af55-f393-4dde-8259-60849d1242e0"
    },
    {
      "id": 232177727,
      "logoUrl": "",
      "name": "北京小米智能科技有限公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "b3234e6d-9f67-403f-b12f-de98aee00442"
    },
    {
      "id": 123551618,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/34f9182e6941bc1379836ebaf19cca18.jpg",
      "name": "小米科技（武汉）有限公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "0ecaa471-dbca-4f31-8ea3-cd678bf6ef73"
    },
    {
      "id": 184780623,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/c18ba025b0e2b69d5f7852b8871bf6db.jpg",
      "name": "小米之家科技有限公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "cbf33610-6a2c-4c52-8a34-e45da38351a4"
    },
    {
      "id": 486653200,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/da0d860c8572efecfa856a3059045d22.jpg",
      "name": "小米之家商业有限公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "ae0afc7c-1bb8-4983-87ce-7d5ec33f7fe1"
    },
    {
      "id": 155956951,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/f347cae17d7c14baa4af39ec2fa26eb1.jpg",
      "name": "广州小米通讯技术有限公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "32756751-ff1b-44be-8af5-2345322a602e"
    },
    {
      "id": 621382816,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/e092d8442a33ae67cf76b83880e913be.jpg",
      "name": "东莞太美鞋业有限公司",
      "properties": {},
      "status": "注销",
      "statusCode": "2",
      "type": "E",
      "uid": "5afde1c8-da16-471a-bfb1-a29a64715aab"
    },
    {
      "id": 113311751,
      "logoUrl": null,
      "name": "刘芹",
      "properties": {},
      "status": null,
      "statusCode": null,
      "type": "P",
      "uid": "0a912ef282dbb18fa443f034775dd2cd"
    },
    {
      "id": 668790416,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/c74f846c52b8b6936fe565f3aec6f81f.jpg",
      "name": "小米信用管理有限公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "229ac970-c2ac-4854-a0cf-2cbcbbb86e42"
    },
    {
      "id": 182071253,
      "logoUrl": null,
      "name": "林斌",
      "properties": {},
      "status": null,
      "statusCode": null,
      "type": "P",
      "uid": "208a521520fd675557e4a8920bea3557"
    },
    {
      "id": 414117980,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/674a7c8e5a2fd73bdba651f62bbca558.jpg",
      "name": "北京多看科技有限公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "3841fc1a-f9bf-4273-9dea-1a57df931e52"
    },
    {
      "id": 392082278,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/152039a5083c2045279b2a27d3648235.jpg",
      "name": "北京金山办公软件股份有限公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "0385982c-778a-4022-973e-25a5832c490a"
    },
    {
      "id": 218292071,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/c7831a2b6026182dc0fd32128f1276ba.jpg",
      "name": "广州多玩信息技术有限公司",
      "properties": {},
      "status": null,
      "statusCode": "5",
      "type": "E",
      "uid": "0595044d-bd45-48da-a1c6-31809c632761"
    },
    {
      "id": 630349267,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/406f8feb54cf1565f227d3915e1589bb.jpg",
      "name": "小米科技有限责任公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "534472fd-7d53-4958-8132-d6a6242423d8"
    },
    {
      "id": 602643448,
      "logoUrl": null,
      "name": "XIAOMIHKLIMITED",
      "properties": {},
      "status": null,
      "statusCode": null,
      "type": "P",
      "uid": "76b9742cb157c6773719a35afa451cea"
    },
    {
      "id": 243408537,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/aa48ad7c0034964303380f39c27ca641.jpg",
      "name": "天星数科科技有限公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "527baee4-8d0c-4b6a-8eb4-582ae1fc4718"
    },
    {
      "id": 530488371,
      "logoUrl": "",
      "name": "上海迅销网络科技有限公司",
      "properties": {},
      "status": "注销",
      "statusCode": "2",
      "type": "E",
      "uid": "e9fc2c3a-53e8-4307-a314-a4e85a629b8b"
    },
    {
      "id": 512366682,
      "logoUrl": "https://qxb-logo-url.oss-cn-hangzhou.aliyuncs.com/OriginalUrl/8f8ffe80af4297b7fbe83ae5dee88700.jpg",
      "name": "上海敏尚网络科技有限公司",
      "properties": {},
      "status": "注销",
      "statusCode": "2",
      "type": "E",
      "uid": "e7ba1ecf-88cc-4bda-853f-f8745a0f991e"
    },
    {
      "id": 428975727,
      "logoUrl": "",
      "name": "北京小米电子软件技术有限公司",
      "properties": {},
      "status": null,
      "statusCode": "1",
      "type": "E",
      "uid": "af998c21-82f4-4de5-ac0f-23258ec8e62f"
    },
    {
      "id": 54895634,
      "logoUrl": "",
      "name": "图扑尚贸易（上海）有限公司",
      "properties": {},
      "status": "注销",
      "statusCode": "2",
      "type": "E",
      "uid": "86cf381f-b2c4-4aca-9727-686101ecf7e5"
    }
  ],
  "pathList": [
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_523953705"
      ],
      "nodeList": [
        "488599807",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "435438215"
        },
        {
          "left2Right": false,
          "source": "435438215",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_435438215",
        "523953705_435438215"
      ],
      "nodeList": [
        "488599807",
        "435438215",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "486653200"
        },
        {
          "left2Right": false,
          "source": "486653200",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_486653200",
        "523953705_486653200"
      ],
      "nodeList": [
        "488599807",
        "486653200",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "232177727"
        },
        {
          "left2Right": false,
          "source": "232177727",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_232177727",
        "523953705_232177727"
      ],
      "nodeList": [
        "488599807",
        "232177727",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "123551618"
        },
        {
          "left2Right": false,
          "source": "123551618",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_123551618",
        "523953705_123551618"
      ],
      "nodeList": [
        "488599807",
        "123551618",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "139699190"
        },
        {
          "left2Right": false,
          "source": "139699190",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_139699190",
        "523953705_139699190"
      ],
      "nodeList": [
        "488599807",
        "139699190",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "502654865"
        },
        {
          "left2Right": false,
          "source": "502654865",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_502654865",
        "523953705_502654865"
      ],
      "nodeList": [
        "488599807",
        "502654865",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "641414586"
        },
        {
          "left2Right": false,
          "source": "641414586",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_641414586",
        "523953705_641414586"
      ],
      "nodeList": [
        "488599807",
        "641414586",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "229668698"
        },
        {
          "left2Right": false,
          "source": "229668698",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_229668698",
        "523953705_229668698"
      ],
      "nodeList": [
        "488599807",
        "229668698",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "155956951"
        },
        {
          "left2Right": false,
          "source": "155956951",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_155956951",
        "523953705_155956951"
      ],
      "nodeList": [
        "488599807",
        "155956951",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "184780623"
        },
        {
          "left2Right": false,
          "source": "184780623",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_184780623",
        "523953705_184780623"
      ],
      "nodeList": [
        "488599807",
        "184780623",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "512366682"
        },
        {
          "left2Right": false,
          "source": "512366682",
          "target": "113311751"
        },
        {
          "left2Right": true,
          "source": "113311751",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_512366682",
        "113311751_512366682",
        "113311751_523953705"
      ],
      "nodeList": [
        "488599807",
        "113311751",
        "512366682",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "630349267"
        },
        {
          "left2Right": false,
          "source": "630349267",
          "target": "182071253"
        },
        {
          "left2Right": true,
          "source": "182071253",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_630349267",
        "182071253_630349267",
        "182071253_523953705"
      ],
      "nodeList": [
        "488599807",
        "182071253",
        "630349267",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "392082278"
        },
        {
          "left2Right": false,
          "source": "392082278",
          "target": "113311751"
        },
        {
          "left2Right": true,
          "source": "113311751",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_392082278",
        "113311751_392082278",
        "113311751_523953705"
      ],
      "nodeList": [
        "488599807",
        "113311751",
        "392082278",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "668790416"
        },
        {
          "left2Right": false,
          "source": "668790416",
          "target": "182071253"
        },
        {
          "left2Right": true,
          "source": "182071253",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_668790416",
        "182071253_668790416",
        "182071253_523953705"
      ],
      "nodeList": [
        "488599807",
        "182071253",
        "668790416",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "621382816"
        },
        {
          "left2Right": false,
          "source": "621382816",
          "target": "113311751"
        },
        {
          "left2Right": true,
          "source": "113311751",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_621382816",
        "113311751_621382816",
        "113311751_523953705"
      ],
      "nodeList": [
        "488599807",
        "113311751",
        "621382816",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "630349267"
        },
        {
          "left2Right": false,
          "source": "630349267",
          "target": "113311751"
        },
        {
          "left2Right": true,
          "source": "113311751",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_630349267",
        "113311751_630349267",
        "113311751_523953705"
      ],
      "nodeList": [
        "488599807",
        "113311751",
        "630349267",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "428975727"
        },
        {
          "left2Right": false,
          "source": "428975727",
          "target": "182071253"
        },
        {
          "left2Right": true,
          "source": "182071253",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_428975727",
        "182071253_428975727",
        "182071253_523953705"
      ],
      "nodeList": [
        "488599807",
        "182071253",
        "428975727",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "530488371"
        },
        {
          "left2Right": false,
          "source": "530488371",
          "target": "113311751"
        },
        {
          "left2Right": true,
          "source": "113311751",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_530488371",
        "113311751_530488371",
        "113311751_523953705"
      ],
      "nodeList": [
        "488599807",
        "113311751",
        "530488371",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "486653200"
        },
        {
          "left2Right": false,
          "source": "486653200",
          "target": "602643448"
        },
        {
          "left2Right": true,
          "source": "602643448",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_486653200",
        "602643448_486653200",
        "602643448_523953705"
      ],
      "nodeList": [
        "488599807",
        "486653200",
        "602643448",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "243408537"
        },
        {
          "left2Right": false,
          "source": "243408537",
          "target": "182071253"
        },
        {
          "left2Right": true,
          "source": "182071253",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_243408537",
        "182071253_243408537",
        "182071253_523953705"
      ],
      "nodeList": [
        "488599807",
        "182071253",
        "243408537",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "435438215"
        },
        {
          "left2Right": false,
          "source": "435438215",
          "target": "602643448"
        },
        {
          "left2Right": true,
          "source": "602643448",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_435438215",
        "602643448_435438215",
        "602643448_523953705"
      ],
      "nodeList": [
        "488599807",
        "435438215",
        "602643448",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "184780623"
        },
        {
          "left2Right": false,
          "source": "184780623",
          "target": "602643448"
        },
        {
          "left2Right": true,
          "source": "602643448",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_184780623",
        "602643448_184780623",
        "602643448_523953705"
      ],
      "nodeList": [
        "488599807",
        "184780623",
        "602643448",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "414117980"
        },
        {
          "left2Right": false,
          "source": "414117980",
          "target": "113311751"
        },
        {
          "left2Right": true,
          "source": "113311751",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_414117980",
        "113311751_414117980",
        "113311751_523953705"
      ],
      "nodeList": [
        "488599807",
        "113311751",
        "414117980",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "184780623"
        },
        {
          "left2Right": false,
          "source": "184780623",
          "target": "182071253"
        },
        {
          "left2Right": true,
          "source": "182071253",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_184780623",
        "182071253_184780623",
        "182071253_523953705"
      ],
      "nodeList": [
        "488599807",
        "182071253",
        "184780623",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "54895634"
        },
        {
          "left2Right": false,
          "source": "54895634",
          "target": "113311751"
        },
        {
          "left2Right": true,
          "source": "113311751",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_54895634",
        "113311751_54895634",
        "113311751_523953705"
      ],
      "nodeList": [
        "488599807",
        "113311751",
        "54895634",
        "523953705"
      ]
    },
    {
      "linkDirList": [
        {
          "left2Right": true,
          "source": "488599807",
          "target": "218292071"
        },
        {
          "left2Right": false,
          "source": "218292071",
          "target": "113311751"
        },
        {
          "left2Right": true,
          "source": "113311751",
          "target": "523953705"
        }
      ],
      "linkList": [
        "488599807_218292071",
        "113311751_218292071",
        "113311751_523953705"
      ],
      "nodeList": [
        "488599807",
        "113311751",
        "218292071",
        "523953705"
      ]
    }
  ],
  "startP": {
    "id": 488599807,
    "logoUrl": null,
    "name": "雷军",
    "properties": {},
    "status": null,
    "statusCode": null,
    "type": "P",
    "uid": "02ad6587897a976a793aa72ead924a47"
  }
}
