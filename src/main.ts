import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import { openWebSocket } from "./common/websocket";
// import fs from "fs";
// import netUtil from "./utils/netUtil.js";
// import constUtil from "./utils/constUtil.js";
// import logUtil from "./utils/logUtil.js";

let app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "100mb",
  })
);
app.use(
  bodyParser.json({
    limit: "100mb",
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

let staticUrl = path.resolve("webapp/");
// let staticUrl = path.resolve("../Data-structure-visualization/build");

// 过滤器
// import requestFilter from "./filter/requestFilter";
import forwardFilter from "./filter/forwardFilter";
import requestFilter from "./filter/requestFilter";
import responseFilter from "./filter/responseFilter";
forwardFilter.use(app);
requestFilter.use(app);
responseFilter.use(app);
// app.use(requestFilter.requestFilter);

// 转发
// function forwardFile(source, aim) {
//   app.get(source, function (req, res) {
//     if (aim == null) {
//       res.sendStatus(404);
//       res.send();
//     } else {
//       netUtil.returnResources(aim, res);
//     }
//   });
// }

// forwardFile('/', path.join(staticUrl, 'faker.html'));
// forwardFile('/index.html', null);
// forwardFile('/login.html', null);
// forwardFile('/warning.html', null);

// 静态资源目录
app.use(express.static(staticUrl));

// 控制器
import {
  userController,
  projectController,
  videoController,
  algorithmController,
  imageController,
} from "./net";
userController(app);
projectController(app);
videoController(app);
algorithmController(app);
imageController(app);

// import projectController from "./controller/projectController.js";
// import otherController from "./controller/otherController.js";
// projectController.run(app);
// otherController.run(app);

// 端口
const port = 12345;

openWebSocket(3001);
app.listen(port);
console.log(`local test  : http://localhost:${port}`);
// console.log("server test : http://159.75.249.227:8848");
console.log();

// 记录当前进程号
// let pid = process.pid;
// fs.writeFileSync("log/pid.log", "" + pid);
