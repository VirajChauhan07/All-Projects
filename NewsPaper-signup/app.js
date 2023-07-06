// const mailchimp = require("@mailchimp/mailchimp_marketing");
// const express = require("express");
// const bodyParser = require("body-parser");
// // const request = require("request");
// // const https = require("https");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static("public"));

// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/signup.html");
// });

// mailchimp.setConfig({
//     apiKey: "570043f07a6227ebd85eff8e76f034e3-us12",
//     server: "us12"
// });

// app.post("/", function (req, res) {
//     const firstName = req.body.firstName;
//     const lastName = req.body.lastName;
//     const email = req.body.email;

//     const listId = "0d4434092a";

//     const subscribingUser = {
//         firstName: firstName,
//         lastName: lastName,
//         email: email
//     };

//     async function run() {
//         const response = await mailchimp.lists.addListMember(listId, {
//             email_address: subscribingUser.email,
//             status: "subscribed",
//             merge_fields: {
//                 FNAME: subscribingUser.firstName,
//                 LNAME: subscribingUser.lastName
//             }
//         });
//     }

//     });

// app.listen(process.env.PORT||3000, function () {
//     console.log("Server is running at Port 3000");
// });

// // API KEY
// // 570043f07a6227ebd85eff8e76f034e3-us12
// // Audience ID
// // 0d4434092a

const mailchimp = require("@mailchimp/mailchimp_marketing");
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/signup.html");
// });

mailchimp.setConfig({
    apiKey: "570043f07a6227ebd85eff8e76f034e3-us12",
    server: "us12",
});

async function getInformations() {
    const listId = "0d4434092a";
    const response = await mailchimp.lists.getListMembersInfo(
        listId
    );
    console.log(response);
}

// getInformations();

// ADD MEMBER TO THE AUDIANCE OR LIST
// https://mailchimp.com/developer/marketing/api/list-members/



const addMembers = async () => {
    const listId = "0d4434092a";
    const response = await mailchimp.lists.addListMember(listId, {
        email_address: "messi@yahoo.com",
        status: "subscribed",
    });
    console.log(response);
};

// addMembers();

app.get("/", async (req, res) => {
    // GET INFORMATIONS ABOUT MEMBERS
    // https://mailchimp.com/developer/marketing/api/list-members/list-members-info/
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", async (req, res) => {
        const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const listId = "0d4434092a";

    const subscribingUser = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    // const response = await mailchimp.lists.addListMember("ID_OF_YOUR_AUDIANCE", {

    //   email_address: email,
    //   status: status,
    // });
    //   res.status(201).json(response);

    const response = await mailchimp.lists.addListMember(listId, {
                    email_address: subscribingUser.email,
                    status: "subscribed",
                    merge_fields: {
                        FNAME: subscribingUser.firstName,
                        LNAME: subscribingUser.lastName
                    }
                });
    res.status(200).json(response);
});

app.listen(3000, () => console.log("server is running on 3000"));
