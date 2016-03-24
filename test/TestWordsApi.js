var fs = require('fs');
var StorageApi = require('asposestoragecloud');
var WordsApi = require('../lib/WordsApi');
var assert = require('assert');

var AppSID = 'XXX'; //sepcify App SID
var AppKey = 'XXX'; //sepcify App Key
var config = {'appSid':AppSID,'apiKey':AppKey , 'debug' : true};
var data_path = './data/';

var storageApi = new StorageApi(config); 
var wordsApi = new WordsApi(config);
var nodeunit = require('nodeunit');

exports.testPutConvertDocument = function(test){
	test.expect(1);
	var filename = 'SampleWordDocument';
	var name = filename + '.docx';
	var format = 'pdf';
	
	wordsApi.PutConvertDocument(format, null, file= data_path + name, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				test.equal(responseMessage.status, 'OK', '');
				//var writeStream = fs.createWriteStream('c:/temp/' + filename + '.' +  format);
				//writeStream.write(responseMessage.body);
				test.done();
			});
};

exports.testPutExecuteMailMergeOnline = function(test){
	test.expect(1);
	var name = 'SampleMailMergeTemplateData.docx';
	
	wordsApi.PutExecuteMailMergeOnline(false, null, './data/SampleMailMergeTemplate.docx','./data/SampleMailMergeTemplateData.txt', function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				test.equal(responseMessage.status, 'OK', '');
				//var writeStream = fs.createWriteStream('c:/temp/' + name);
				//writeStream.write(responseMessage.body);
				test.done();
			});
};

exports.testPutExecuteTemplateOnline = function(test){
	test.expect(1);
	var name = 'SampleExecuteTemplate.doc';
	
	wordsApi.PutExecuteTemplateOnline(true, true, true, './data/SampleExecuteTemplate.doc','./data/SampleExecuteTemplateData.txt', function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				test.equal(responseMessage.status, 'OK', '');
				//var writeStream = fs.createWriteStream('c:/temp/' + name);
				//writeStream.write(responseMessage.body);
				test.done();
			});
};

exports.testPostLoadWebDocument = function(test){
	test.expect(2);
	var name = 'SampleExecuteTemplate.doc';
	var body =  {
			'LoadingDocumentUrl' : 'http://google.com',
			'SaveOptions' : {
				'SaveFormat' : 'doc',
				'FileName' : 'google.doc'	
			}	
	};
	
    wordsApi.PostLoadWebDocument(body, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.SaveResult !== 'undefined', "response body assertion should pass");
				test.done();
			});
};
exports.testPutDocumentFieldNames = function(test){
	test.expect(2);

	wordsApi.PutDocumentFieldNames(false, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.FieldNames !== 'undefined', "response body assertion should pass");
				test.done();
			});
};

exports.testGetDocument = function(test){
	test.expect(3);
	var filename = 'SampleWordDocument';
	var name = filename + '.docx';
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetDocument(name, storage=null, folder=null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Document !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});		
};


exports.testGetDocumentWithFormat = function(test){
	test.expect(2);
	var filename = 'SampleWordDocument';
	var name = filename + '.docx';
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {
		
		test.equal(responseMessage.status, 'OK', '');
		var format = 'pdf';
		wordsApi.GetDocumentWithFormat(name, format, null, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				test.equal(responseMessage.status, 'OK', '');
				var writeStream = fs.createWriteStream('c:/temp/' + filename + '.' +  format)
				writeStream.write(responseMessage.body)
				test.done();
			});
		});		
};


exports.testPostDocumentSaveAs = function(test){
	test.expect(3);
	var filename = 'SampleWordDocument';
	var name = filename + '.docx';
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		var saveOptions =  {
					'SaveFormat' : 'pdf',
					'FileName' : 'SampleWordDocument.pdf'	
				};	
		wordsApi.PostDocumentSaveAs(name, null, null, saveOptions, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.SaveResult !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});		
};

exports.testPutDocumentSaveAsTiff = function(test){
	test.expect(3);
	var filename = 'SampleWordDocument';
	var name = filename + '.docx';
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		var tiffSaveOptions =  {
					'SaveFormat' : 'tiff',
					'FileName' : 'SampleWordDocument.tiff'	
				};	
		wordsApi.PutDocumentSaveAsTiff(name, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, tiffSaveOptions, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.SaveResult !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});		
};
exports.testPostAppendDocument = function(test){

	test.expect(5);
	
	var name =  'SampleWordDocument.docx';
	var document1 =  'SampleWordDocument.docx';
	var document2 =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {
		test.equal(responseMessage.status, 'OK', '');
		
		storageApi.PutCreate(document1, versionId=null, storage=null, file= data_path + document1 , function(responseMessage) {
			test.equal(responseMessage.status, 'OK', '');
			
			storageApi.PutCreate(document2, versionId=null, storage=null, file= data_path + document2 , function(responseMessage) {
				test.equal(responseMessage.status, 'OK', '');
				
				var documentEntryList =  {'DocumentEntries' : [
				                          {
				                        	'Href' : document1,
				          					'ImportFormatMode' : 'KeepSourceFormatting'
				                        	  
				                          },
				                          {
				                        	'Href' : document2,
					          				'ImportFormatMode' : 'KeepSourceFormatting'
				                        	  
				                          }
				                       ]};
				var name = 'SampleWordDocument.docx';
				wordsApi.PostAppendDocument(name, null, null, null, documentEntryList, function(responseMessage) {
					if(config.debug){console.log('status:', responseMessage.status);}
					if(config.debug){console.log('body:', responseMessage.body);}
					test.equal(responseMessage.status, 'OK', '');
					test.ok(responseMessage.body !== null && typeof responseMessage.body.Document !== 'undefined', "response body assertion should pass");
					test.done();
				});

				
			});
			
			
		});
	
	});
};

exports.testGetDocumentBookmarks = function(test){
	test.expect(3);	
	var name = 'SampleWordDocument.docx';
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
			
		wordsApi.GetDocumentBookmarks(name, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Bookmarks !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};
exports.testPostUpdateDocumentBookmark = function(test){
	
	test.expect(3);	
	var name = 'SampleWordDocument.docx';
	
	var bookmarkData =  {
			'Name' : 'aspose',
			'Text' : 'Bookmark is very good.'	
		};	
	
    	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
			
		wordsApi.PostUpdateDocumentBookmark(name, 'aspose', null, null, null, bookmarkData, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Bookmark !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testGetDocumentBookmarkByName = function(test){

	test.expect(3);	
	var name = 'SampleWordDocument.docx';
	var bookmarkName = 'aspose';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
			
		wordsApi.GetDocumentBookmarkByName(name, bookmarkName, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Bookmark !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testGetDocumentProperties = function(test){

	test.expect(3);	
	var name = 'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
			
		wordsApi.GetDocumentProperties(name, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.DocumentProperties !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};
exports.testPutUpdateDocumentProperty = function(test){
	
	test.expect(3);	
	var name = 'SampleWordDocument.docx';
	var propertyName = 'Author';
	
	property = {
			'Name' : 'Author',
			'Value' : 'Farooq Sheikh'
	};
        	 
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
			
		wordsApi.PutUpdateDocumentProperty(name, propertyName, null, null, null, property, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.DocumentProperty !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testDeleteDocumentProperty = function(test){
	
	test.expect(3);	
	var name = 'SampleWordDocument.docx';
	var propertyName = 'Author';
	
	property = {
			'Name' : 'Author',
			'Value' : 'Farooq Sheikh'
	};
        	 
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
			
		wordsApi.DeleteDocumentProperty(name, propertyName, null, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.DocumentProperty !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testGetDocumentProperty = function(test){
	
	test.expect(3);	
	var name = 'SampleWordDocument.docx';
	var propertyName = 'Author';
	    	 
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
			
		wordsApi.GetDocumentProperty(name, propertyName, null, null,  function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.DocumentProperty !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testGetDocumentDrawingObjects = function(test){
	
	test.expect(3);	
	var name = 'SampleWordDocument.docx';
	    	 
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
			
		wordsApi.GetDocumentDrawingObjects(name, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.DrawingObjects !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};
exports.testGetDocumentDrawingObjectByIndex = function(test){
	
	test.expect(2);	
	var name = 'SampleWordDocument.docx';
	var objectIndex = 1;
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
			
		wordsApi.GetDocumentDrawingObjectByIndex(name, objectIndex, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				test.equal(responseMessage.status, 'OK', '');				
				test.done();
			});
		});
};

exports.testGetDocumentDrawingObjectByIndexWithFormat = function(test){
	
	test.expect(2);	
	var name = 'SampleWordDocument.docx';
	var objectIndex = 1;
	var format = 'jpg';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
			
		wordsApi.GetDocumentDrawingObjectByIndexWithFormat(name, objectIndex, format, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				test.equal(responseMessage.status, 'OK', '');				
				test.done();
			});
		});
};

exports.testGetDocumentDrawingObjectImageData = function(test){
	
	test.expect(2);	
	var name = 'SampleWordDocument.docx';
	var objectIndex = 1;
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
			
		wordsApi.GetDocumentDrawingObjectImageData(name, objectIndex, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				test.equal(responseMessage.status, 'OK', '');				
				test.done();
			});
		});
};

exports.testGetDocumentDrawingObjectOleData = function(test){
	
	test.expect(2);	
	var name = 'sample_EmbeddedOLE.docx';
	var objectIndex = 0;
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
			
		wordsApi.GetDocumentDrawingObjectOleData(name, objectIndex, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				test.equal(responseMessage.status, 'OK', '');				
				test.done();
			});
		});
};

exports.testPostDocumentExecuteMailMerge = function(test){
	
	test.expect(4);
	
	var name =  'SampleMailMergeTemplateImage.doc';
	var document1 =  'aspose-cloud.png';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {
		test.equal(responseMessage.status, 'OK', '');
		storageApi.PutCreate(document1, versionId=null, storage=null, file= data_path + document1 , function(responseMessage) {
			
			test.equal(responseMessage.status, 'OK', '');
			
			wordsApi.PostDocumentExecuteMailMerge(name, false, null, null, null, null, null, null, file= data_path + 'SampleMailMergeTemplateImageData.txt' , function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Document !== 'undefined', "response body assertion should pass");
				test.done();
			});				
		});	
	
	});
};

exports.testPostExecuteTemplate = function(test){
	
	test.expect(3);
	var name =  'SampleExecuteTemplate.doc';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PostExecuteTemplate(name, null, null, null, null, null, null, file= data_path + 'SampleExecuteTemplateData.txt' , function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Document !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testDeleteDocumentFields = function(test){
	
	test.expect(2);
	var name =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.DeleteDocumentFields(name, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.done();
			});
		});
};

exports.testDeleteHeadersFooters = function(test){
	
	test.expect(2);
	var name =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.DeleteHeadersFooters(name, null, null, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.done();
			});
		});
};

exports.testGetDocumentHyperlinks = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetDocumentHyperlinks(name, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}				
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Hyperlinks !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testGetDocumentHyperlinkByIndex = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	var hyperlinkIndex = 0;
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetDocumentHyperlinkByIndex(name, hyperlinkIndex, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}				
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Hyperlink !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};


exports.testPostInsertPageNumbers = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	var hyperlinkIndex = 0;
	
	var pagenumberBody = {
			'Format' : '{PAGE} of {NUMPAGES}',
			'Alignment' : 'center'
				};
    	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PostInsertPageNumbers(name, null, null, null, pagenumberBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}				
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Document !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testPostInsertWatermarkImage = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PostInsertWatermarkImage(name, null, '45', null, null, null, './data/aspose-cloud.png', function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}				
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Document !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testPostInsertWatermarkText = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	
	var watermarkTextBody = {
			'Text' : 'Welcome Aspose',
			'RotationAngle' : '45'
			};
	 
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PostInsertWatermarkText(name, null, null, null, null, null, watermarkTextBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}				
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Document !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testDeleteDocumentMacros = function(test){
	
	test.expect(2);
	var name =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.DeleteDocumentMacros(name, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}				
				test.equal(responseMessage.status, 'OK', '');
				test.done();
			});
		});
};

exports.testGetDocumentFieldNames = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetDocumentFieldNames(name, null, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}				
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.FieldNames !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testGetDocumentParagraphs = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetDocumentParagraphs(name, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}				
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Paragraphs !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testGetDocumentParagraph = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	var index = 1;
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetDocumentParagraph(name, index, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}				
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Paragraph !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testDeleteParagraphFields = function(test){
	
	test.expect(2);
	var name =  'SampleWordDocument.docx';
	var index = 0;
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.DeleteParagraphFields(name, index, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}				
				test.equal(responseMessage.status, 'OK', '');				
				test.done();
			});
		});
};

exports.testGetDocumentParagraphRun = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	var index = 0;
	var runIndex = 0;
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetDocumentParagraphRun(name, index, runIndex, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Run !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testGetDocumentParagraphRunFont = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	var index = 0;
	var runIndex = 0;
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetDocumentParagraphRunFont(name, index, runIndex, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Font !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testPostDocumentParagraphRunFont = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	var index = 0;
	var runIndex = 0;
	
	var fontBody = {
		'Name' : 'Arial',
		'Bold' : 'True'
	};
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PostDocumentParagraphRunFont(name, index, runIndex, null, null, null, fontBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Font !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testPutProtectDocument = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	
	var protectionDataBody = {
			'Password' : 'aspose',
			'ProtectionType' : 'ReadOnly'
	};
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PutProtectDocument(name, null, null, null, protectionDataBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.ProtectionData !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testPostChangeDocumentProtection = function(test){
	
	test.expect(3);
	var name =  'SampleProtectedBlankWordDocument.docx';
	
	var protectionDataBody = {
			'Password' : 'aspose',
			'NewPassword' : '',
			'ProtectionType': 'NoProtection'
	};
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PostChangeDocumentProtection(name, null, null, null, protectionDataBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.ProtectionData !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testDeleteUnprotectDocument = function(test){
	
	test.expect(3);
	var name =  'SampleProtectedBlankWordDocument.docx';
	
	var protectionDataBody = {
			'Password' : 'aspose'
	};
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.DeleteUnprotectDocument(name, null, null, null, protectionDataBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.ProtectionData !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testGetDocumentProtection = function(test){
	
	test.expect(3);
	var name =  'SampleProtectedBlankWordDocument.docx';
	
	var protectionDataBody = {
			'Password' : 'aspose'
	};
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.DeleteUnprotectDocument(name, null, null, null, protectionDataBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.ProtectionData !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testPostReplaceText = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	
	var replaceTextBody = {
			'OldValue' : 'aspose',
			'NewValue' :  'aspose.com'
	};
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PostReplaceText(name, null, null, null, replaceTextBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Matches !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testAcceptAllRevisions = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.AcceptAllRevisions(name, null, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Result !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testRejectAllRevisions = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.RejectAllRevisions(name, null, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Result !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testGetSections = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetSections(name, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Sections !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testGetSection = function(test){

	test.expect(3);
	var name =  'SampleWordDocument.docx';
	var sectionIndex = 0;
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetSection(name, sectionIndex, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Section !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
	
};

exports.testDeleteSectionFields = function(test){

	test.expect(2);
	var name =  'SampleWordDocument.docx';
	var sectionIndex = 0;
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.DeleteSectionFields(name, sectionIndex, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');				
				test.done();
			});
		});

};

exports.testGetSectionPageSetup = function(test){

	test.expect(3);
	var name =  'SampleWordDocument.docx';
	var sectionIndex = 0;
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetSectionPageSetup(name, sectionIndex, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.PageSetup !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});

};

exports.testUpdateSectionPageSetup = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	var sectionIndex = 0;
	
	var pageSetupBody = {
			'RtlGutter' : true,
			'LeftMargin' : 10.0,
			'Orientation' : 'Landscape',
			'PaperSize' : 'A5'
	};
    	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.UpdateSectionPageSetup(name, sectionIndex, null, null, null, pageSetupBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.PageSetup !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testDeleteSectionParagraphFields = function(test){

	test.expect(2);
	var name =  'SampleWordDocument.docx';
	var sectionIndex = 0;
	var paragraphIndex = 0;
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.DeleteSectionParagraphFields(name, sectionIndex, paragraphIndex, null, null,  function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');				
				test.done();
			});
		});

};

exports.testPutFormField = function(test){
	
	test.expect(3);
	var name =  'SampleBlankWordDocument.docx';
	var sectionIndex = 0;
	var paragraphIndex = 0;
	var insertBeforeNode = ""
	var formFieldBody = {
		'Name' : 'MyName',
		'Enabled' : 'true',
		'OwnStatus' : 'false',
		'CalculateOnExit' : 'true',
		'TextInputFormat' : 'UPPERCASE',
		'TextInputType' : 'Regular',
		'TextInputDefault' : 'Farooq Sheikh'
			};
	if(config.debug){console.log('xmlBody:', xmlBody);}
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PutFormField(name, sectionIndex, paragraphIndex, insertBeforeNode, null, null, null, formFieldBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.FormField !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testPostFormField = function(test){
	
	test.expect(3);
	var name =  'FormFilled.docx';
	var sectionIndex = 0;
	var paragraphIndex = 0;
	var formfieldIndex = 0;
	
		var xmlBody = '<FormFieldTextInput>'
            + '<Name>MyName</Name>'
            + '<Enabled>true</Enabled>'
            + '<StatusText />'
            + '<OwnStatus>false</OwnStatus>'
            + '<HelpText />'
            + '<OwnHelp>false</OwnHelp>'
            + '<CalculateOnExit>true</CalculateOnExit>'
            + '<EntryMacro />'
            + '<ExitMacro />'
            + '<TextInputFormat>UPPERCASE</TextInputFormat>'
            + '<TextInputType>Regular</TextInputType>'
            + '<TextInputDefault>Farooq Sheikh</TextInputDefault>'
            + '</FormFieldTextInput>';
	if(config.debug){console.log('xmlBody:', xmlBody);}
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PostFormField(name, sectionIndex, paragraphIndex, formfieldIndex, null, null, null, xmlBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.FormField !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testDeleteFormField = function(test){
	
	test.expect(2);
	var name =  'FormFilled.docx';
	var sectionIndex = 0;
	var paragraphIndex = 0;
	var formfieldIndex = 0;
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.DeleteFormField(name, sectionIndex, paragraphIndex, formfieldIndex, null, null, null,  function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');				
				test.done();
			});
		});
};

exports.testGetFormField = function(test){

	test.expect(3);
	var name =  'FormFilled.docx';
	var sectionIndex = 0;
	var paragraphIndex = 0;
	var formfieldIndex = 0;
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetFormField(name, sectionIndex, paragraphIndex, formfieldIndex, null, null,  function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.FormField !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});

};

exports.testPostSplitDocument = function(test){

	test.expect(3);
	var name =  'SampleWordDocument.docx';
	var format='text',from=1,to=2,zipOutput=false;
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PostSplitDocument(name, format, from, to, zipOutput, null, null,  function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.SplitResult !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});

};

exports.testGetDocumentStatistics = function(test){

	test.expect(3);
	var name =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetDocumentStatistics(name, null, null,  function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.StatData !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});

};

exports.testGetDocumentTextItems = function(test){
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetDocumentTextItems(name, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.TextItems !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
	
};

exports.testPostUpdateDocumentFields = function(test){

	test.expect(3);
	var name =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PostUpdateDocumentFields(name, null, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Document !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});

};

exports.testDeleteDocumentWatermark = function(test){

	test.expect(2);
	var name =  'SampleBlankWatermarkDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.DeleteDocumentWatermark(name, null, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.done();
			});
		});

};

exports.testPostInsertDocumentWatermarkImage = function(test){

	test.expect(3);
	var name =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PostInsertDocumentWatermarkImage(name, null, null, null, null, null, file = data_path + 'aspose-cloud.png', function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Document !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});

};

exports.testPostInsertDocumentWatermarkText = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
    var watermarkTextBody = {
    		'Text' : 'aspose.com'		
    };
    
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PostInsertDocumentWatermarkText(name, null, null, null, null, null, watermarkTextBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Document !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testPutComment = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
    var CommentDtoBody = {
    		'RangeStart': {
    		    'Node': {
    		    	'Text': 'Font Formatting',
    		        'NodeId': '0.0.1'
    		    }},
    		    'RangeEnd': {
        		    'Node': {
        		    	'Text': 'Font Formatting',
        		        'NodeId': '0.0.1'
        		    }},
        		    'Initial' : 'FS',
        		    'Author': 'Farooq Sheikh',
        		    'Text': 'This is a new comment'
    };
    
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PutComment(name, null, null, null, CommentDtoBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Comment !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testGetComments = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';

	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetComments(name, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Comments !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testPostComment = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	var commentIndex = 0;
    var CommentDtoBody = {
    		'RangeStart': {
    		    'Node': {
    		    	'Text': 'Font Formatting',
    		        'NodeId': '0.0.1'
    		    }},
    		    'RangeEnd': {
        		    'Node': {
        		    	'Text': 'Font Formatting',
        		        'NodeId': '0.0.1'
        		    }},
        		    'Initial' : 'FS',
        		    'Author': 'Farooq Sheikh',
        		    'Text': 'This is a new comment'
    };
    
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PostComment(name, commentIndex, null, null, null, CommentDtoBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Comment !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testGetComment = function(test){

	test.expect(3);
	var name =  'SampleWordDocument.docx';
	var commentIndex = 0;

	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetComment(name, commentIndex, null, null,function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Comment !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});

};

exports.testDeleteComment = function(test){

	test.expect(2);
	var name =  'SampleWordDocument.docx';
	var commentIndex = 0;

	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.DeleteComment(name, commentIndex, null, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');				
				test.done();
			});
		});

};

exports.testSearch = function(test){
	
	test.expect(3);
	var name =  'SampleWordDocument.docx';
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.Search(name, 'aspose', null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.SearchResults !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testGetField = function(test){

	test.expect(3);
	var name =  'FormFilled.docx';
	var sectionIndex = 0;
	var paragraphIndex = 0;
	var fieldIndex = 0;

	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.GetField(name, sectionIndex, paragraphIndex, fieldIndex, null, null, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Field !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testPostField = function(test){

	test.expect(3);
	var name =  'SampleWordDocument.docx';
	var sectionIndex = 0;
	var paragraphIndex = 0;
	var fieldIndex = 0;

	var fieldBody ={
		    'Result': 'John Doe'
	};
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PostField(name, sectionIndex, paragraphIndex, fieldIndex, null, null, null, fieldBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Field !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});

};

exports.testPutField = function(test){

	test.expect(3);
	var name =  'SampleWordDocument.docx';
	var sectionIndex = 0;
	var paragraphIndex = 0;

	var fieldBody ={
		    'Result': 'John Doe',
		    'FieldCode': '{FORMTEXT }',
		    'NodeId': '0.1'
	};
	
	storageApi.PutCreate(name, versionId=null, storage=null, file= data_path + name , function(responseMessage) {

		test.equal(responseMessage.status, 'OK', '');
		
		wordsApi.PutField(name, sectionIndex, paragraphIndex, null, null, null, null, fieldBody, function(responseMessage) {
				if(config.debug){console.log('status:', responseMessage.status);}
				if(config.debug){console.log('body:', responseMessage.body);}
				test.equal(responseMessage.status, 'OK', '');
				test.ok(responseMessage.body !== null && typeof responseMessage.body.Field !== 'undefined', "response body assertion should pass");
				test.done();
			});
		});
};

exports.testPostRunTask = function(test){

	test.expect(2);

	wordsApi.PostRunTask(file = './data/SampleWordDocument.docx', function(responseMessage) {
			if(config.debug){console.log('status:', responseMessage.status);}
			if(config.debug){console.log('body:', responseMessage.body);}
			test.equal(responseMessage.status, 'OK', '');
			test.done();
		});
};

