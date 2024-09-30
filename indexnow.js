import https from "https";

const host = "paper24.com";
const key = process.env.INDEXNOW_KEY;
const keyLocation = `https://${host}/${key}.txt`;

async function main() {
  try {
    const filteredUrls = process.argv.splice(2, process.argv.length);
    console.log(filteredUrls);

    if (filteredUrls.length > 0) {
      const response = await postToIndexNow(filteredUrls);
      console.log("IndexNow API Response:");
      console.log("Status:", response.statusCode, response.statusMessage);
      console.log("Data:", response.data);
    } else {
      console.log("No URLs modified since the specified date.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

function postToIndexNow(urlList) {
  const data = JSON.stringify({
    host,
    key,
    keyLocation,
    urlList,
  });

  const options = {
    hostname: "api.indexnow.org",
    port: 443,
    path: "/IndexNow",
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": data.length,
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = "";
      res.on("data", (chunk) => {
        responseData += chunk;
      });
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          data: responseData,
        });
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

main();
