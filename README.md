# Aspose.Words Cloud SDK for Node.js

This repository contains Aspose.Words Cloud SDK for Node.js source code. This SDK allows you to work with Aspose.Words Cloud REST APIs in your Node.js applications quickly and easily. 

## How to use the SDK?

The complete source code is available in this repository folder. For more details, please visit our [documentation website](http://www.aspose.com/docs/display/wordscloud/How+to+Setup+Aspose.Words+Cloud+SDK+for+Node.js).

## Quick SDK Tutorial
```javascript
var fs = require('fs');
var assert = require('assert');
var StorageApi =require("asposestoragecloud")
var WordsApi =require("asposewordscloud")

var AppSID = 'XXX'; //sepcify App SID
var AppKey = 'XXX'; //sepcify App Key
var config = {'appSid':AppSID,'apiKey':AppKey};
var data_path = '../data/';

try {
//Instantiate Aspose.Storage API SDK
var storageApi = new StorageApi(config);

//Instantiate Aspose.Words API SDK
var wordsApi = new WordsApi(config);

//set input file name
var filename = "SampleWordDocument";
var name = filename + ".docx";
var format = "pdf";

//upload file to aspose cloud storage
storageApi.PutCreate(name, null, null, file= data_path + name , function(responseMessage) {
	assert.equal(responseMessage.status, 'OK');
	//invoke Aspose.Words Cloud SDK API to convert words document to required format  
	wordsApi.GetDocumentWithFormat(name, format, null, null, null, function(responseMessage) {
			assert.equal(responseMessage.status, 'OK');		
			//download output document from response
			var outfilename = filename + '.' + format;
			var writeStream = fs.createWriteStream('c:/temp/' + outfilename);
			writeStream.write(responseMessage.body);
			});
	});

}catch (e) {
  console.log("exception in example");
  console.log(e);
}
```