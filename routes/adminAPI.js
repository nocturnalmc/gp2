// Base
const express = require("express");
const router = express.Router();

// Controller
const admincon = require("../controllers/adminController");
const adminAPI = require("../controllers/adminAPI");

// Routes
router.get("/", adminAPI.helloUser);
router.post("/adduser", adminAPI.addAdmin);
router.post("/getuser", adminAPI.getCurrentUser);

router.post("/kp", adminAPI.listKp);
router.post("/kp/add", adminAPI.addKp);

router.post("/pg", adminAPI.listPg);
router.post("/pg/add", adminAPI.addPg);
router.post("/pg/find", adminAPI.findPegawai);
router.post("/pg/edit", adminAPI.editPegawai);

router.post("/taska", adminAPI.listTaska);
router.post("/taska/add", adminAPI.addTaska);

router.post("/tadika", adminAPI.listTadika);
router.post("/tadika/add", adminAPI.addTadika);

router.post("/sr", adminAPI.listSr);
router.post("/sr/add", adminAPI.addSR);

router.post("/sm", adminAPI.listSm);
router.post("/sm/add", adminAPI.addSM);

router.post("/ins", adminAPI.listInstitusi);
router.post("/ins/add", adminAPI.addInstitusi);

router.post("/facility/add/:id", adminAPI.addFacility);
router.post("/facility/find", adminAPI.findFacility);
router.post("/facility/edit", adminAPI.editFacility);
router.post("/facility/list", adminAPI.listFacility);

router.post("/delete", adminAPI.deleteData);

router.post("/search", admincon.searchAll);
router.post("/searchpg", admincon.searchPg);

router.post("/login", adminAPI.loginUser);
router.post("/logout", admincon.logOut);

module.exports = router;
