var path = require('path');
var fs = require('fs');
var apiClient = require('./api-client');


function WordsApi(config) {
	var self = this;
	
	apiClient = new apiClient(config);
	this.config = apiClient.config;
}


/**
* PutConvertDocument
* Convert document from request content to format specified.
*
* @param  (String) format  -  Format to convert. (optional) 
* @param  (String) outPath  -   (optional) 
* @param  (File) file  -   (required) 
* @returns ResponseMessage (Map)
*/
WordsApi.prototype.PutConvertDocument = function(format, outPath, file, callback) {

    var self = this;
	  	
	
	if( typeof file === 'undefined' || file === null && file === ''){
		throw new Error('missing required file.');
    }	
	var resourcePath = '/words/convert/?appSid={appSid}&amp;toFormat={toFormat}&amp;outPath={outPath}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof format !== 'undefined' &&  format !== null && format!== ''){            
			resourcePath = resourcePath.replace("{" + "format" + "}" , format);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]format.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof outPath !== 'undefined' &&  outPath !== null && outPath!== ''){            
			resourcePath = resourcePath.replace("{" + "outPath" + "}" , outPath);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]outPath.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'PUT'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	if(file !== 'undefined' && file !== null && file !== ''){
		postData = fs.readFileSync(file)
	}
	
	headerParams['Accept'] = 'application/xml,application/octet-stream'
    headerParams['Content-Type'] = 'multipart/form-data'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PutExecuteMailMergeOnline
* Execute document mail merge online.
*
* @param  (Boolean) withRegions  -  With regions flag. (required) 
* @param  (String) cleanup  -  Clean up options. (optional) 
* @param  (File) file  -   (required)
* @param  (File) data  -   (required)  
* @returns ResponseMessage (Map)
*/
WordsApi.prototype.PutExecuteMailMergeOnline = function(withRegions, cleanup, file, data, callback) {

    var self = this;
	
	if( typeof withRegions === 'undefined' || withRegions === null && withRegions === ''){
		throw new Error('missing required parameters.');
    }  	
	
	if( typeof file === 'undefined' || file === null && file === ''){
		throw new Error('missing required file.');
    }
	
	if( typeof data === 'undefined' || data === null && data === ''){
		throw new Error('missing required file.');
    }
	
	var resourcePath = '/words/executeMailMerge/?withRegions={withRegions}&amp;appSid={appSid}&amp;cleanup={cleanup}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof withRegions !== 'undefined' &&  withRegions !== null && withRegions!== ''){            
			resourcePath = resourcePath.replace("{" + "withRegions" + "}" , withRegions);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]withRegions.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof cleanup !== 'undefined' &&  cleanup !== null && cleanup!== ''){            
			resourcePath = resourcePath.replace("{" + "cleanup" + "}" , cleanup);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]cleanup.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'PUT'
    queryParams = {}
    headerParams = {}
    formParams = {}
	postData = null;
    
	files = [
	     		{
  			'Content-Type': 'application/octet-stream',
  		    'Content-Disposition': 'form-data; name="file"',
  		    body : fs.readFileSync(file)
	     		 },
	     		 {
			 	'Content-Type': 'application/xml',
			    'Content-Disposition': 'form-data; name="data"',
			    body : fs.readFileSync(data)
			 }
	     	];

	
	headerParams['Accept'] = 'application/xml,application/octet-stream'
    headerParams['Content-Type'] = 'multipart/form-data'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PutExecuteTemplateOnline
* Populate document template with data online.
*
* @param  (String) cleanup  -  Clean up options. (optional) 
* @param  (Boolean) useWholeParagraphAsRegion  -  Gets or sets a value indicating whether paragraph with TableStart or TableEnd field should be fully included into mail merge region or particular range between TableStart and TableEnd fields.             The default value is true. (optional) 
* @param  (Boolean) withRegions  -  Merge with regions or not. True by default (optional) 
* @param  (File) file  -   (required)
* @param  (File) data  -   (required) 
* @returns ResponseMessage (Map)
*/
WordsApi.prototype.PutExecuteTemplateOnline = function(cleanup, useWholeParagraphAsRegion, withRegions, file, data, callback) {

    var self = this;
	   	
	
	if( typeof file === 'undefined' || file === null && file === ''){
		throw new Error('missing required file.');
    }	
	var resourcePath = '/words/executeTemplate/?appSid={appSid}&amp;cleanup={cleanup}&amp;useWholeParagraphAsRegion={useWholeParagraphAsRegion}&amp;withRegions={withRegions}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof cleanup !== 'undefined' &&  cleanup !== null && cleanup!== ''){            
			resourcePath = resourcePath.replace("{" + "cleanup" + "}" , cleanup);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]cleanup.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof useWholeParagraphAsRegion !== 'undefined' &&  useWholeParagraphAsRegion !== null && useWholeParagraphAsRegion!== ''){            
			resourcePath = resourcePath.replace("{" + "useWholeParagraphAsRegion" + "}" , useWholeParagraphAsRegion);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]useWholeParagraphAsRegion.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof withRegions !== 'undefined' &&  withRegions !== null && withRegions!== ''){            
			resourcePath = resourcePath.replace("{" + "withRegions" + "}" , withRegions);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]withRegions.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'PUT'
    queryParams = {}
    headerParams = {}
    formParams = {}
	postData = null;
    
	files = [
	     		{
			'Content-Type': 'application/octet-stream',
		    'Content-Disposition': 'form-data; name="file"',
		    body : fs.readFileSync(file)
	     		 },
	     		 {
			 	'Content-Type': 'application/xml',
			    'Content-Disposition': 'form-data; name="data"',
			    body : fs.readFileSync(data)
			 }
	     	];

	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'multipart/form-data'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostLoadWebDocument
* Load new document from web into the file with any supported format of data.
*
* @returns SaveResponse (Map)
*/
WordsApi.prototype.PostLoadWebDocument = function(body, callback) {

    var self = this;
		
		
	var resourcePath = '/words/loadWebDocument/?appSid={appSid}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
    postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PutDocumentFieldNames
* Read document field names.
*
* @param  (Boolean) useNonMergeFields  -   (optional) 
* @returns FieldNamesResponse (Map)
*/
WordsApi.prototype.PutDocumentFieldNames = function(useNonMergeFields, callback) {

    var self = this;
	 	
		
	var resourcePath = '/words/mailMergeFieldNames/?appSid={appSid}&amp;useNonMergeFields={useNonMergeFields}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof useNonMergeFields !== 'undefined' &&  useNonMergeFields !== null && useNonMergeFields!== ''){            
			resourcePath = resourcePath.replace("{" + "useNonMergeFields" + "}" , useNonMergeFields);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]useNonMergeFields.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'PUT'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostRunTask
* Run tasks
*
* @returns ResponseMessage (Map)
*/
WordsApi.prototype.PostRunTask = function(file, callback) {

    var self = this;
		
		
	var resourcePath = '/words/tasks/?appSid={appSid}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	if(file !== 'undefined' && file !== null && file !== ''){
		postData = fs.readFileSync(file)
	}
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'multipart/form-data'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocument
* RRead document common info.
*
* @param  (String) name  -  The file name. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns ResponseMessage (Map)
*/
WordsApi.prototype.GetDocument = function(name, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentWithFormat
* Export the document into the specified format.
*
* @param  (String) name  -  The file name. (required) 
* @param  (String) format  -  The destination format. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (String) outPath  -  Path to save result (optional) 
* @returns ResponseMessage (Map)
*/
WordsApi.prototype.GetDocumentWithFormat = function(name, format, storage, folder, outPath, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof format === 'undefined' || format === null && format === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/?appSid={appSid}&amp;toFormat={toFormat}&amp;storage={storage}&amp;folder={folder}&amp;outPath={outPath}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof format !== 'undefined' &&  format !== null && format!== ''){            
			resourcePath = resourcePath.replace("{" + "format" + "}" , format);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]format.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof outPath !== 'undefined' &&  outPath !== null && outPath!== ''){            
			resourcePath = resourcePath.replace("{" + "outPath" + "}" , outPath);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]outPath.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/octet-stream'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostDocumentSaveAs
* Convert document to tiff with detailed settings and save result to storage.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (SaveOptionsData) body  -  Save options. (required) 
* @returns SaveResponse (Map)
*/
WordsApi.prototype.PostDocumentSaveAs = function(name, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/SaveAs/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PutDocumentSaveAsTiff
* Convert document to tiff with detailed settings and save result to storage.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) resultFile  -  The resulting file name. (optional) 
* @param  (Boolean) useAntiAliasing  -  Use antialiasing flag. (optional) 
* @param  (Boolean) useHighQualityRendering  -  Use high quality flag. (optional) 
* @param  (String) imageBrightness  -  Brightness for the generated images. (optional) 
* @param  (String) imageColorMode  -  Color mode for the generated images. (optional) 
* @param  (String) imageContrast  -  The contrast for the generated images. (optional) 
* @param  (String) numeralFormat  -  The images numeral format. (optional) 
* @param  (String) pageCount  -  Number of pages to render. (optional) 
* @param  (String) pageIndex  -  Page index to start rendering. (optional) 
* @param  (String) paperColor  -  Background image color. (optional) 
* @param  (String) pixelFormat  -  The pixel format of generated images. (optional) 
* @param  (String) resolution  -  The resolution of generated images. (optional) 
* @param  (String) scale  -  Zoom factor for generated images. (optional) 
* @param  (String) tiffCompression  -  The compression tipe. (optional) 
* @param  (String) dmlRenderingMode  -  Optional, default is Fallback. (optional) 
* @param  (String) dmlEffectsRenderingMode  -  Optional, default is Simplified. (optional) 
* @param  (String) tiffBinarizationMethod  -  Optional, Tiff binarization method, possible values are: FloydSteinbergDithering, Threshold. (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (Boolean) zipOutput  -  Optional. A value determining zip output or not. (optional) 
* @param  (TiffSaveOptionsData) body  -  Tiff save options. (required) 
* @returns SaveResponse (Map)
*/
WordsApi.prototype.PutDocumentSaveAsTiff = function(name, resultFile, useAntiAliasing, useHighQualityRendering, imageBrightness, imageColorMode, imageContrast, numeralFormat, pageCount, pageIndex, paperColor, pixelFormat, resolution, scale, tiffCompression, dmlRenderingMode, dmlEffectsRenderingMode, tiffBinarizationMethod, storage, folder, zipOutput, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }                     	
		
	var resourcePath = '/words/{name}/SaveAs/tiff/?appSid={appSid}&amp;resultFile={resultFile}&amp;useAntiAliasing={useAntiAliasing}&amp;useHighQualityRendering={useHighQualityRendering}&amp;imageBrightness={imageBrightness}&amp;imageColorMode={imageColorMode}&amp;imageContrast={imageContrast}&amp;numeralFormat={numeralFormat}&amp;pageCount={pageCount}&amp;pageIndex={pageIndex}&amp;paperColor={paperColor}&amp;pixelFormat={pixelFormat}&amp;resolution={resolution}&amp;scale={scale}&amp;tiffCompression={tiffCompression}&amp;dmlRenderingMode={dmlRenderingMode}&amp;dmlEffectsRenderingMode={dmlEffectsRenderingMode}&amp;tiffBinarizationMethod={tiffBinarizationMethod}&amp;storage={storage}&amp;folder={folder}&amp;zipOutput={zipOutput}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof resultFile !== 'undefined' &&  resultFile !== null && resultFile!== ''){            
			resourcePath = resourcePath.replace("{" + "resultFile" + "}" , resultFile);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]resultFile.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof useAntiAliasing !== 'undefined' &&  useAntiAliasing !== null && useAntiAliasing!== ''){            
			resourcePath = resourcePath.replace("{" + "useAntiAliasing" + "}" , useAntiAliasing);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]useAntiAliasing.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof useHighQualityRendering !== 'undefined' &&  useHighQualityRendering !== null && useHighQualityRendering!== ''){            
			resourcePath = resourcePath.replace("{" + "useHighQualityRendering" + "}" , useHighQualityRendering);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]useHighQualityRendering.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof imageBrightness !== 'undefined' &&  imageBrightness !== null && imageBrightness!== ''){            
			resourcePath = resourcePath.replace("{" + "imageBrightness" + "}" , imageBrightness);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]imageBrightness.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof imageColorMode !== 'undefined' &&  imageColorMode !== null && imageColorMode!== ''){            
			resourcePath = resourcePath.replace("{" + "imageColorMode" + "}" , imageColorMode);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]imageColorMode.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof imageContrast !== 'undefined' &&  imageContrast !== null && imageContrast!== ''){            
			resourcePath = resourcePath.replace("{" + "imageContrast" + "}" , imageContrast);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]imageContrast.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof numeralFormat !== 'undefined' &&  numeralFormat !== null && numeralFormat!== ''){            
			resourcePath = resourcePath.replace("{" + "numeralFormat" + "}" , numeralFormat);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]numeralFormat.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof pageCount !== 'undefined' &&  pageCount !== null && pageCount!== ''){            
			resourcePath = resourcePath.replace("{" + "pageCount" + "}" , pageCount);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]pageCount.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof pageIndex !== 'undefined' &&  pageIndex !== null && pageIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "pageIndex" + "}" , pageIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]pageIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof paperColor !== 'undefined' &&  paperColor !== null && paperColor!== ''){            
			resourcePath = resourcePath.replace("{" + "paperColor" + "}" , paperColor);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]paperColor.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof pixelFormat !== 'undefined' &&  pixelFormat !== null && pixelFormat!== ''){            
			resourcePath = resourcePath.replace("{" + "pixelFormat" + "}" , pixelFormat);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]pixelFormat.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof resolution !== 'undefined' &&  resolution !== null && resolution!== ''){            
			resourcePath = resourcePath.replace("{" + "resolution" + "}" , resolution);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]resolution.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof scale !== 'undefined' &&  scale !== null && scale!== ''){            
			resourcePath = resourcePath.replace("{" + "scale" + "}" , scale);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]scale.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof tiffCompression !== 'undefined' &&  tiffCompression !== null && tiffCompression!== ''){            
			resourcePath = resourcePath.replace("{" + "tiffCompression" + "}" , tiffCompression);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]tiffCompression.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof dmlRenderingMode !== 'undefined' &&  dmlRenderingMode !== null && dmlRenderingMode!== ''){            
			resourcePath = resourcePath.replace("{" + "dmlRenderingMode" + "}" , dmlRenderingMode);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]dmlRenderingMode.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof dmlEffectsRenderingMode !== 'undefined' &&  dmlEffectsRenderingMode !== null && dmlEffectsRenderingMode!== ''){            
			resourcePath = resourcePath.replace("{" + "dmlEffectsRenderingMode" + "}" , dmlEffectsRenderingMode);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]dmlEffectsRenderingMode.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof tiffBinarizationMethod !== 'undefined' &&  tiffBinarizationMethod !== null && tiffBinarizationMethod!== ''){            
			resourcePath = resourcePath.replace("{" + "tiffBinarizationMethod" + "}" , tiffBinarizationMethod);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]tiffBinarizationMethod.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof zipOutput !== 'undefined' &&  zipOutput !== null && zipOutput!== ''){            
			resourcePath = resourcePath.replace("{" + "zipOutput" + "}" , zipOutput);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]zipOutput.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'PUT'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostAppendDocument
* Append documents to original document.
*
* @param  (String) name  -  Original document name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) storage  -  Original document storage. (optional) 
* @param  (String) folder  -  Original document folder. (optional) 
* @param  (DocumentEntryList) body  -  with a list of documents to append. (required) 
* @returns DocumentResponse (Map)
*/
WordsApi.prototype.PostAppendDocument = function(name, filename, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/appendDocument/?appSid={appSid}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentBookmarks
* Read document bookmarks common info.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns BookmarksResponse (Map)
*/
WordsApi.prototype.GetDocumentBookmarks = function(name, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/bookmarks/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostUpdateDocumentBookmark
* Update document bookmark.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) bookmarkName  -  The bookmark name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (BookmarkData) body  -  with new bookmark data. (required) 
* @returns BookmarkResponse (Map)
*/
WordsApi.prototype.PostUpdateDocumentBookmark = function(name, bookmarkName, filename, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof bookmarkName === 'undefined' || bookmarkName === null && bookmarkName === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/bookmarks/{bookmarkName}/?appSid={appSid}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof bookmarkName !== 'undefined' &&  bookmarkName !== null && bookmarkName!== ''){            
			resourcePath = resourcePath.replace("{" + "bookmarkName" + "}" , bookmarkName);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]bookmarkName.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentBookmarkByName
* Read document bookmark data by its name.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) bookmarkName  -  The bookmark name. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns BookmarkResponse (Map)
*/
WordsApi.prototype.GetDocumentBookmarkByName = function(name, bookmarkName, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof bookmarkName === 'undefined' || bookmarkName === null && bookmarkName === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/bookmarks/{bookmarkName}/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof bookmarkName !== 'undefined' &&  bookmarkName !== null && bookmarkName!== ''){            
			resourcePath = resourcePath.replace("{" + "bookmarkName" + "}" , bookmarkName);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]bookmarkName.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentProperties
* Read document properties info.
*
* @param  (String) name  -  The document&#39;s name. (required) 
* @param  (String) storage  -  The document&#39;s storage. (optional) 
* @param  (String) folder  -  The document&#39;s folder. (optional) 
* @returns DocumentPropertiesResponse (Map)
*/
WordsApi.prototype.GetDocumentProperties = function(name, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/documentProperties/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PutUpdateDocumentProperty
* Add new or update existing document property.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) propertyName  -  The property name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) storage  -  Document&#39;s storage. (optional) 
* @param  (String) folder  -  Document&#39;s folder. (optional) 
* @param  (DocumentProperty) body  -  The property with new value. (required) 
* @returns DocumentPropertyResponse (Map)
*/
WordsApi.prototype.PutUpdateDocumentProperty = function(name, propertyName, filename, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof propertyName === 'undefined' || propertyName === null && propertyName === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/documentProperties/{propertyName}/?appSid={appSid}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof propertyName !== 'undefined' &&  propertyName !== null && propertyName!== ''){            
			resourcePath = resourcePath.replace("{" + "propertyName" + "}" , propertyName);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]propertyName.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'PUT'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* DeleteDocumentProperty
* Delete document property.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) propertyName  -  The property name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) storage  -  Document&#39;s storage. (optional) 
* @param  (String) folder  -  Document&#39;s folder. (optional) 
* @returns SaaSposeResponse (Map)
*/
WordsApi.prototype.DeleteDocumentProperty = function(name, propertyName, filename, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof propertyName === 'undefined' || propertyName === null && propertyName === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/documentProperties/{propertyName}/?appSid={appSid}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof propertyName !== 'undefined' &&  propertyName !== null && propertyName!== ''){            
			resourcePath = resourcePath.replace("{" + "propertyName" + "}" , propertyName);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]propertyName.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'DELETE'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentProperty
* Read document property info by the property name.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) propertyName  -  The property name. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns DocumentPropertyResponse (Map)
*/
WordsApi.prototype.GetDocumentProperty = function(name, propertyName, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof propertyName === 'undefined' || propertyName === null && propertyName === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/documentProperties/{propertyName}/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof propertyName !== 'undefined' &&  propertyName !== null && propertyName!== ''){            
			resourcePath = resourcePath.replace("{" + "propertyName" + "}" , propertyName);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]propertyName.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentDrawingObjects
* Read document drawing objects common info.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns DrawingObjectsResponse (Map)
*/
WordsApi.prototype.GetDocumentDrawingObjects = function(name, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/drawingObjects/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentDrawingObjectByIndex
* Read document drawing object common info by its index or convert to format specified.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) objectIndex  -  The drawing object index. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder full path. (optional) 
* @returns ResponseMessage (Map)
*/
WordsApi.prototype.GetDocumentDrawingObjectByIndex = function(name, objectIndex, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof objectIndex === 'undefined' || objectIndex === null && objectIndex === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/drawingObjects/{objectIndex}/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof objectIndex !== 'undefined' &&  objectIndex !== null && objectIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "objectIndex" + "}" , objectIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]objectIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/octet-stream'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentDrawingObjectByIndexWithFormat
* Read document drawing object common info by its index or convert to format specified.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) objectIndex  -  The drawing object index. (required) 
* @param  (String) format  -  The format to convert (if specified). (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder full path. (optional) 
* @returns ResponseMessage (Map)
*/
WordsApi.prototype.GetDocumentDrawingObjectByIndexWithFormat = function(name, objectIndex, format, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof objectIndex === 'undefined' || objectIndex === null && objectIndex === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof format === 'undefined' || format === null && format === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/drawingObjects/{objectIndex}/?appSid={appSid}&amp;toFormat={toFormat}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof objectIndex !== 'undefined' &&  objectIndex !== null && objectIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "objectIndex" + "}" , objectIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]objectIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof format !== 'undefined' &&  format !== null && format!== ''){            
			resourcePath = resourcePath.replace("{" + "format" + "}" , format);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]format.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/octet-stream'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentDrawingObjectImageData
* Read drawing object image data.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) objectIndex  -  The drawing object index. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns ResponseMessage (Map)
*/
WordsApi.prototype.GetDocumentDrawingObjectImageData = function(name, objectIndex, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof objectIndex === 'undefined' || objectIndex === null && objectIndex === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/drawingObjects/{objectIndex}/imageData/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof objectIndex !== 'undefined' &&  objectIndex !== null && objectIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "objectIndex" + "}" , objectIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]objectIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/octet-stream'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentDrawingObjectOleData
* Get drawing object OLE data.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) objectIndex  -  The object index. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns ResponseMessage (Map)
*/
WordsApi.prototype.GetDocumentDrawingObjectOleData = function(name, objectIndex, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof objectIndex === 'undefined' || objectIndex === null && objectIndex === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/drawingObjects/{objectIndex}/oleData/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof objectIndex !== 'undefined' &&  objectIndex !== null && objectIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "objectIndex" + "}" , objectIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]objectIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/octet-stream'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostDocumentExecuteMailMerge
* Execute document mail merge operation.
*
* @param  (String) name  -  The document name. (required) 
* @param  (Boolean) withRegions  -  With regions flag. (required) 
* @param  (String) mailMergeDataFile  -  Mail merge data. (optional) 
* @param  (String) cleanup  -  Clean up options. (optional) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (Boolean) useWholeParagraphAsRegion  -  Gets or sets a value indicating whether paragraph with TableStart or TableEnd field should be fully included into mail merge region or particular range between TableStart and TableEnd fields.             The default value is true. (optional) 
* @param  (File) file  -   (required) 
* @returns DocumentResponse (Map)
*/
WordsApi.prototype.PostDocumentExecuteMailMerge = function(name, withRegions, mailMergeDataFile, cleanup, filename, storage, folder, useWholeParagraphAsRegion, file, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof withRegions === 'undefined' || withRegions === null && withRegions === ''){
		throw new Error('missing required parameters.');
    }       	
	
	var resourcePath = '/words/{name}/executeMailMerge/{withRegions}/?appSid={appSid}&amp;mailMergeDataFile={mailMergeDataFile}&amp;cleanup={cleanup}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}&amp;useWholeParagraphAsRegion={useWholeParagraphAsRegion}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof withRegions !== 'undefined' &&  withRegions !== null && withRegions!== ''){            
			resourcePath = resourcePath.replace("{" + "withRegions" + "}" , withRegions);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]withRegions.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof mailMergeDataFile !== 'undefined' &&  mailMergeDataFile !== null && mailMergeDataFile!== ''){            
			resourcePath = resourcePath.replace("{" + "mailMergeDataFile" + "}" , mailMergeDataFile);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]mailMergeDataFile.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof cleanup !== 'undefined' &&  cleanup !== null && cleanup!== ''){            
			resourcePath = resourcePath.replace("{" + "cleanup" + "}" , cleanup);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]cleanup.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof useWholeParagraphAsRegion !== 'undefined' &&  useWholeParagraphAsRegion !== null && useWholeParagraphAsRegion!== ''){            
			resourcePath = resourcePath.replace("{" + "useWholeParagraphAsRegion" + "}" , useWholeParagraphAsRegion);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]useWholeParagraphAsRegion.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = file;
    
	/*if(file !== 'undefined' && file !== null && file !== ''){
		postData = fs.readFileSync(file)
	}*/
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'multipart/form-data'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostExecuteTemplate
* Populate document template with data.
*
* @param  (String) name  -  The template document name. (required) 
* @param  (String) cleanup  -  Clean up options. (optional) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (Boolean) useWholeParagraphAsRegion  -  Gets or sets a value indicating whether paragraph with TableStart or TableEnd field should be fully included into mail merge region or particular range between TableStart and TableEnd fields.              The default value is true. (optional) 
* @param  (Boolean) withRegions  -  Merge with regions or not. True by default (optional) 
* @param  (File) file  -   (required) 
* @returns DocumentResponse (Map)
*/
WordsApi.prototype.PostExecuteTemplate = function(name, cleanup, filename, storage, folder, useWholeParagraphAsRegion, withRegions, file, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }       	
	
	if( typeof file === 'undefined' || file === null && file === ''){
		throw new Error('missing required file.');
    }	
	var resourcePath = '/words/{name}/executeTemplate/?appSid={appSid}&amp;cleanup={cleanup}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}&amp;useWholeParagraphAsRegion={useWholeParagraphAsRegion}&amp;withRegions={withRegions}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof cleanup !== 'undefined' &&  cleanup !== null && cleanup!== ''){            
			resourcePath = resourcePath.replace("{" + "cleanup" + "}" , cleanup);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]cleanup.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof useWholeParagraphAsRegion !== 'undefined' &&  useWholeParagraphAsRegion !== null && useWholeParagraphAsRegion!== ''){            
			resourcePath = resourcePath.replace("{" + "useWholeParagraphAsRegion" + "}" , useWholeParagraphAsRegion);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]useWholeParagraphAsRegion.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof withRegions !== 'undefined' &&  withRegions !== null && withRegions!== ''){            
			resourcePath = resourcePath.replace("{" + "withRegions" + "}" , withRegions);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]withRegions.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	if(file !== 'undefined' && file !== null && file !== ''){
		postData = fs.readFileSync(file)
	}
	
	headerParams['Accept'] = 'application/json'
    headerParams['Content-Type'] = 'application/xml'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* DeleteDocumentFields
* Remove fields from document.
*
* @param  (String) name  -  The file name. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns SaaSposeResponse (Map)
*/
WordsApi.prototype.DeleteDocumentFields = function(name, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/fields/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'DELETE'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* DeleteHeadersFooters
* Delete document headers and footers.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) headersFootersTypes  -  List of types of headers and footers. (optional) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document. (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns SaaSposeResponse (Map)
*/
WordsApi.prototype.DeleteHeadersFooters = function(name, headersFootersTypes, filename, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }     	
		
	var resourcePath = '/words/{name}/headersfooters/?appSid={appSid}&amp;headersFootersTypes={headersFootersTypes}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof headersFootersTypes !== 'undefined' &&  headersFootersTypes !== null && headersFootersTypes!== ''){            
			resourcePath = resourcePath.replace("{" + "headersFootersTypes" + "}" , headersFootersTypes);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]headersFootersTypes.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'DELETE'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentHyperlinks
* Read document hyperlinks common info.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns HyperlinksResponse (Map)
*/
WordsApi.prototype.GetDocumentHyperlinks = function(name, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/hyperlinks/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentHyperlinkByIndex
* Read document hyperlink by its index.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) hyperlinkIndex  -  The hyperlink index. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns HyperlinkResponse (Map)
*/
WordsApi.prototype.GetDocumentHyperlinkByIndex = function(name, hyperlinkIndex, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof hyperlinkIndex === 'undefined' || hyperlinkIndex === null && hyperlinkIndex === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/hyperlinks/{hyperlinkIndex}/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof hyperlinkIndex !== 'undefined' &&  hyperlinkIndex !== null && hyperlinkIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "hyperlinkIndex" + "}" , hyperlinkIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]hyperlinkIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostInsertPageNumbers
* Insert document page numbers.
*
* @param  (String) name  -  A document name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (PageNumber) body  -  with the page numbers settings. (required) 
* @returns DocumentResponse (Map)
*/
WordsApi.prototype.PostInsertPageNumbers = function(name, filename, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/insertPageNumbers/?appSid={appSid}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostInsertWatermarkImage
* Insert document watermark image.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) rotationAngle  -  The watermark rotation angle. (optional) 
* @param  (String) image  -  The image file server full name. If the name is empty the image is expected in request content. (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (File) file  -   (required) 
* @returns DocumentResponse (Map)
*/
WordsApi.prototype.PostInsertWatermarkImage = function(name, filename, rotationAngle, image, storage, folder, file, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }      	
	
	var resourcePath = '/words/{name}/insertWatermarkImage/?appSid={appSid}&amp;filename={filename}&amp;rotationAngle={rotationAngle}&amp;image={image}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof rotationAngle !== 'undefined' &&  rotationAngle !== null && rotationAngle!== ''){            
			resourcePath = resourcePath.replace("{" + "rotationAngle" + "}" , rotationAngle);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]rotationAngle.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof image !== 'undefined' &&  image !== null && image!== ''){            
			resourcePath = resourcePath.replace("{" + "image" + "}" , image);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]image.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	if(file !== 'undefined' && file !== null && file !== ''){
		postData = fs.readFileSync(file)
	}
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'multipart/form-data'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostInsertWatermarkText
* Insert document watermark text.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) text  -  The text to insert. (optional) 
* @param  (String) rotationAngle  -  The text rotation angle. (optional) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (WatermarkText) body  -  with the watermark data.            If the parameter is provided the query string parameters are ignored. (required) 
* @returns DocumentResponse (Map)
*/
WordsApi.prototype.PostInsertWatermarkText = function(name, text, rotationAngle, filename, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }      	
		
	var resourcePath = '/words/{name}/insertWatermarkText/?appSid={appSid}&amp;text={text}&amp;rotationAngle={rotationAngle}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof text !== 'undefined' &&  text !== null && text!== ''){            
			resourcePath = resourcePath.replace("{" + "text" + "}" , text);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]text.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof rotationAngle !== 'undefined' &&  rotationAngle !== null && rotationAngle!== ''){            
			resourcePath = resourcePath.replace("{" + "rotationAngle" + "}" , rotationAngle);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]rotationAngle.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* DeleteDocumentMacros
* Remove macros from document.
*
* @param  (String) name  -  The file name. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns SaaSposeResponse (Map)
*/
WordsApi.prototype.DeleteDocumentMacros = function(name, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/macros/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'DELETE'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentFieldNames
* Read document field names.
*
* @param  (String) name  -  The document name. (required) 
* @param  (Boolean) useNonMergeFields  -   (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns FieldNamesResponse (Map)
*/
WordsApi.prototype.GetDocumentFieldNames = function(name, useNonMergeFields, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/mailMergeFieldNames/?appSid={appSid}&amp;useNonMergeFields={useNonMergeFields}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof useNonMergeFields !== 'undefined' &&  useNonMergeFields !== null && useNonMergeFields!== ''){            
			resourcePath = resourcePath.replace("{" + "useNonMergeFields" + "}" , useNonMergeFields);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]useNonMergeFields.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentParagraphs
* Return a list of paragraphs that are contained in the document.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns ParagraphLinkCollectionResponse (Map)
*/
WordsApi.prototype.GetDocumentParagraphs = function(name, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/paragraphs/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentParagraph
* This resource represents one of the paragraphs contained in the document.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) index  -  Paragraph index (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns ParagraphResponse (Map)
*/
WordsApi.prototype.GetDocumentParagraph = function(name, index, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof index === 'undefined' || index === null && index === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/paragraphs/{index}/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof index !== 'undefined' &&  index !== null && index!== ''){            
			resourcePath = resourcePath.replace("{" + "index" + "}" , index);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]index.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* DeleteParagraphFields
* Remove fields from paragraph.
*
* @param  (String) name  -  The file name. (required) 
* @param  (String) index  -  Paragraph index (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns SaaSposeResponse (Map)
*/
WordsApi.prototype.DeleteParagraphFields = function(name, index, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof index === 'undefined' || index === null && index === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/paragraphs/{index}/fields/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof index !== 'undefined' &&  index !== null && index!== ''){            
			resourcePath = resourcePath.replace("{" + "index" + "}" , index);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]index.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'DELETE'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentParagraphRun
* This resource represents one of the paragraphs contained in the document.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) index  -  Paragraph index (required) 
* @param  (String) runIndex  -  Run index (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns RunResponse (Map)
*/
WordsApi.prototype.GetDocumentParagraphRun = function(name, index, runIndex, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof index === 'undefined' || index === null && index === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof runIndex === 'undefined' || runIndex === null && runIndex === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/paragraphs/{index}/runs/{runIndex}/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof index !== 'undefined' &&  index !== null && index!== ''){            
			resourcePath = resourcePath.replace("{" + "index" + "}" , index);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]index.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof runIndex !== 'undefined' &&  runIndex !== null && runIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "runIndex" + "}" , runIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]runIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentParagraphRunFont
* This resource represents one of the paragraphs contained in the document.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) index  -  Paragraph index (required) 
* @param  (String) runIndex  -  Run index (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns FontResponse (Map)
*/
WordsApi.prototype.GetDocumentParagraphRunFont = function(name, index, runIndex, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof index === 'undefined' || index === null && index === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof runIndex === 'undefined' || runIndex === null && runIndex === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/paragraphs/{index}/runs/{runIndex}/font/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof index !== 'undefined' &&  index !== null && index!== ''){            
			resourcePath = resourcePath.replace("{" + "index" + "}" , index);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]index.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof runIndex !== 'undefined' &&  runIndex !== null && runIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "runIndex" + "}" , runIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]runIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostDocumentParagraphRunFont
* This resource represents one of the paragraphs contained in the document.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) index  -  Paragraph index (required) 
* @param  (String) runIndex  -  Run index (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (Font) body  -  Font dto object (required) 
* @returns FontResponse (Map)
*/
WordsApi.prototype.PostDocumentParagraphRunFont = function(name, index, runIndex, storage, folder, filename, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof index === 'undefined' || index === null && index === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof runIndex === 'undefined' || runIndex === null && runIndex === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/paragraphs/{index}/runs/{runIndex}/font/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}&amp;filename={filename}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof index !== 'undefined' &&  index !== null && index!== ''){            
			resourcePath = resourcePath.replace("{" + "index" + "}" , index);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]index.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof runIndex !== 'undefined' &&  runIndex !== null && runIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "runIndex" + "}" , runIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]runIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PutProtectDocument
* Protect document.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (ProtectionRequest) body  -  with protection settings. (required) 
* @returns ProtectionDataResponse (Map)
*/
WordsApi.prototype.PutProtectDocument = function(name, filename, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/protection/?appSid={appSid}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'PUT'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostChangeDocumentProtection
* Change document protection.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (ProtectionRequest) body  -  with protection settings. (required) 
* @returns ProtectionDataResponse (Map)
*/
WordsApi.prototype.PostChangeDocumentProtection = function(name, filename, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/protection/?appSid={appSid}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* DeleteUnprotectDocument
* Unprotect document.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (ProtectionRequest) body  -  with protection settings. (required) 
* @returns ProtectionDataResponse (Map)
*/
WordsApi.prototype.DeleteUnprotectDocument = function(name, filename, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/protection/?appSid={appSid}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'DELETE'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentProtection
* Read document protection common info.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns ProtectionDataResponse (Map)
*/
WordsApi.prototype.GetDocumentProtection = function(name, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/protection/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostReplaceText
* Replace document text.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (ReplaceTextRequest) body  -  with the replace operation settings. (required) 
* @returns ReplaceTextResponse (Map)
*/
WordsApi.prototype.PostReplaceText = function(name, filename, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/replaceText/?appSid={appSid}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* AcceptAllRevisions
* Accept all revisions in document
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document. (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns RevisionsModificationResponse (Map)
*/
WordsApi.prototype.AcceptAllRevisions = function(name, filename, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/revisions/acceptAll/?appSid={appSid}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* RejectAllRevisions
* Reject all revisions in document
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document. (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns RevisionsModificationResponse (Map)
*/
WordsApi.prototype.RejectAllRevisions = function(name, filename, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/revisions/rejectAll/?appSid={appSid}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetSections
* Return a list of sections that are contained in the document.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns SectionLinkCollectionResponse (Map)
*/
WordsApi.prototype.GetSections = function(name, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/sections/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetSection
* Get document section by index.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) sectionIndex  -  Section index (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns SectionResponse (Map)
*/
WordsApi.prototype.GetSection = function(name, sectionIndex, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof sectionIndex === 'undefined' || sectionIndex === null && sectionIndex === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/sections/{sectionIndex}/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof sectionIndex !== 'undefined' &&  sectionIndex !== null && sectionIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "sectionIndex" + "}" , sectionIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]sectionIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* DeleteSectionFields
* Remove fields from section.
*
* @param  (String) name  -  The file name. (required) 
* @param  (String) sectionIndex  -  Section index (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns SaaSposeResponse (Map)
*/
WordsApi.prototype.DeleteSectionFields = function(name, sectionIndex, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof sectionIndex === 'undefined' || sectionIndex === null && sectionIndex === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/sections/{sectionIndex}/fields/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof sectionIndex !== 'undefined' &&  sectionIndex !== null && sectionIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "sectionIndex" + "}" , sectionIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]sectionIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'DELETE'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetSectionPageSetup
* Get page setup of section.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) sectionIndex  -  Section index (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns SectionPageSetupResponse (Map)
*/
WordsApi.prototype.GetSectionPageSetup = function(name, sectionIndex, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof sectionIndex === 'undefined' || sectionIndex === null && sectionIndex === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/sections/{sectionIndex}/pageSetup/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof sectionIndex !== 'undefined' &&  sectionIndex !== null && sectionIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "sectionIndex" + "}" , sectionIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]sectionIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* UpdateSectionPageSetup
* Update page setup of section.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) sectionIndex  -  Section index (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document. (optional) 
* @param  (PageSetup) body  -  Page setup properties dto (required) 
* @returns SectionPageSetupResponse (Map)
*/
WordsApi.prototype.UpdateSectionPageSetup = function(name, sectionIndex, storage, folder, filename, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof sectionIndex === 'undefined' || sectionIndex === null && sectionIndex === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/sections/{sectionIndex}/pageSetup/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}&amp;filename={filename}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof sectionIndex !== 'undefined' &&  sectionIndex !== null && sectionIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "sectionIndex" + "}" , sectionIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]sectionIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* DeleteSectionParagraphFields
* Remove fields from section paragraph.
*
* @param  (String) name  -  The file name. (required) 
* @param  (String) sectionIndex  -  Section index (required) 
* @param  (String) paragraphIndex  -  Paragraph index (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns SaaSposeResponse (Map)
*/
WordsApi.prototype.DeleteSectionParagraphFields = function(name, sectionIndex, paragraphIndex, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof sectionIndex === 'undefined' || sectionIndex === null && sectionIndex === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof paragraphIndex === 'undefined' || paragraphIndex === null && paragraphIndex === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/sections/{sectionIndex}/paragraphs/{paragraphIndex}/fields/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof sectionIndex !== 'undefined' &&  sectionIndex !== null && sectionIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "sectionIndex" + "}" , sectionIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]sectionIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof paragraphIndex !== 'undefined' &&  paragraphIndex !== null && paragraphIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "paragraphIndex" + "}" , paragraphIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]paragraphIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'DELETE'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PutFormField
* Adds form field to paragraph, returns added form field&#39;s data.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) sectionIndex  -  Section index. (required) 
* @param  (String) paragraphIndex  -  Paragraph index. (required) 
* @param  (String) insertBeforeNode  -  Form field will be inserted before node with index. (optional) 
* @param  (String) destFileName  -  Destination file name. (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (FormField) body  -  From field data. (required) 
* @returns FormFieldResponse (Map)
*/
WordsApi.prototype.PutFormField = function(name, sectionIndex, paragraphIndex, insertBeforeNode, destFileName, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof sectionIndex === 'undefined' || sectionIndex === null && sectionIndex === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof paragraphIndex === 'undefined' || paragraphIndex === null && paragraphIndex === ''){
		throw new Error('missing required parameters.');
    }     	
		
	var resourcePath = '/words/{name}/sections/{sectionIndex}/paragraphs/{paragraphIndex}/formfields/?appSid={appSid}&amp;insertBeforeNode={insertBeforeNode}&amp;destFileName={destFileName}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof sectionIndex !== 'undefined' &&  sectionIndex !== null && sectionIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "sectionIndex" + "}" , sectionIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]sectionIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof paragraphIndex !== 'undefined' &&  paragraphIndex !== null && paragraphIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "paragraphIndex" + "}" , paragraphIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]paragraphIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof insertBeforeNode !== 'undefined' &&  insertBeforeNode !== null && insertBeforeNode!== ''){            
			resourcePath = resourcePath.replace("{" + "insertBeforeNode" + "}" , insertBeforeNode);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]insertBeforeNode.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof destFileName !== 'undefined' &&  destFileName !== null && destFileName!== ''){            
			resourcePath = resourcePath.replace("{" + "destFileName" + "}" , destFileName);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]destFileName.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'PUT'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	//postData = new Buffer(body, "utf-8");
    postData = JSON.stringify(body);
    
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostFormField
* Updates form field&#39;s properties, returns updated form field&#39;s data.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) sectionIndex  -  Section index. (required) 
* @param  (String) paragraphIndex  -  Paragraph index. (required) 
* @param  (String) formfieldIndex  -  Form field index. (required) 
* @param  (String) destFileName  -  Destination file name. (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (FormField) body  -  From field data. (required) 
* @returns FormFieldResponse (Map)
*/
WordsApi.prototype.PostFormField = function(name, sectionIndex, paragraphIndex, formfieldIndex, destFileName, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof sectionIndex === 'undefined' || sectionIndex === null && sectionIndex === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof paragraphIndex === 'undefined' || paragraphIndex === null && paragraphIndex === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof formfieldIndex === 'undefined' || formfieldIndex === null && formfieldIndex === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/sections/{sectionIndex}/paragraphs/{paragraphIndex}/formfields/{formfieldIndex}/?appSid={appSid}&amp;destFileName={destFileName}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof sectionIndex !== 'undefined' &&  sectionIndex !== null && sectionIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "sectionIndex" + "}" , sectionIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]sectionIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof paragraphIndex !== 'undefined' &&  paragraphIndex !== null && paragraphIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "paragraphIndex" + "}" , paragraphIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]paragraphIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof formfieldIndex !== 'undefined' &&  formfieldIndex !== null && formfieldIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "formfieldIndex" + "}" , formfieldIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]formfieldIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof destFileName !== 'undefined' &&  destFileName !== null && destFileName!== ''){            
			resourcePath = resourcePath.replace("{" + "destFileName" + "}" , destFileName);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]destFileName.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = new Buffer(body, "utf-8");
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/xml'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* DeleteFormField
* Removes form field from document.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) sectionIndex  -  Section index. (required) 
* @param  (String) paragraphIndex  -  Paragraph index. (required) 
* @param  (String) formfieldIndex  -  Form field index. (required) 
* @param  (String) destFileName  -  Destination file name. (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns SaaSposeResponse (Map)
*/
WordsApi.prototype.DeleteFormField = function(name, sectionIndex, paragraphIndex, formfieldIndex, destFileName, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof sectionIndex === 'undefined' || sectionIndex === null && sectionIndex === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof paragraphIndex === 'undefined' || paragraphIndex === null && paragraphIndex === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof formfieldIndex === 'undefined' || formfieldIndex === null && formfieldIndex === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/sections/{sectionIndex}/paragraphs/{paragraphIndex}/formfields/{formfieldIndex}/?appSid={appSid}&amp;destFileName={destFileName}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof sectionIndex !== 'undefined' &&  sectionIndex !== null && sectionIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "sectionIndex" + "}" , sectionIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]sectionIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof paragraphIndex !== 'undefined' &&  paragraphIndex !== null && paragraphIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "paragraphIndex" + "}" , paragraphIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]paragraphIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof formfieldIndex !== 'undefined' &&  formfieldIndex !== null && formfieldIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "formfieldIndex" + "}" , formfieldIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]formfieldIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof destFileName !== 'undefined' &&  destFileName !== null && destFileName!== ''){            
			resourcePath = resourcePath.replace("{" + "destFileName" + "}" , destFileName);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]destFileName.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'DELETE'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetFormField
* Returns representation of an one of the form field.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) sectionIndex  -  Section index. (required) 
* @param  (String) paragraphIndex  -  Paragraph index. (required) 
* @param  (String) formfieldIndex  -  Form field index. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns FormFieldResponse (Map)
*/
WordsApi.prototype.GetFormField = function(name, sectionIndex, paragraphIndex, formfieldIndex, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof sectionIndex === 'undefined' || sectionIndex === null && sectionIndex === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof paragraphIndex === 'undefined' || paragraphIndex === null && paragraphIndex === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof formfieldIndex === 'undefined' || formfieldIndex === null && formfieldIndex === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/sections/{sectionIndex}/paragraphs/{paragraphIndex}/formfields/{formfieldIndex}/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof sectionIndex !== 'undefined' &&  sectionIndex !== null && sectionIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "sectionIndex" + "}" , sectionIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]sectionIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof paragraphIndex !== 'undefined' &&  paragraphIndex !== null && paragraphIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "paragraphIndex" + "}" , paragraphIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]paragraphIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof formfieldIndex !== 'undefined' &&  formfieldIndex !== null && formfieldIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "formfieldIndex" + "}" , formfieldIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]formfieldIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostSplitDocument
* Split document.
*
* @param  (String) name  -  Original document name. (required) 
* @param  (String) format  -  Format to split. (optional) 
* @param  (String) from  -  Start page. (optional) 
* @param  (String) to  -  End page. (optional) 
* @param  (Boolean) zipOutput  -  ZipOutput or not. (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns SplitDocumentResponse (Map)
*/
WordsApi.prototype.PostSplitDocument = function(name, format, from, to, zipOutput, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }       	
		
	var resourcePath = '/words/{name}/split/?appSid={appSid}&amp;toFormat={toFormat}&amp;from={from}&amp;to={to}&amp;zipOutput={zipOutput}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof format !== 'undefined' &&  format !== null && format!== ''){            
			resourcePath = resourcePath.replace("{" + "format" + "}" , format);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]format.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof from !== 'undefined' &&  from !== null && from!== ''){            
			resourcePath = resourcePath.replace("{" + "from" + "}" , from);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]from.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof to !== 'undefined' &&  to !== null && to!== ''){            
			resourcePath = resourcePath.replace("{" + "to" + "}" , to);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]to.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof zipOutput !== 'undefined' &&  zipOutput !== null && zipOutput!== ''){            
			resourcePath = resourcePath.replace("{" + "zipOutput" + "}" , zipOutput);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]zipOutput.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentStatistics
* Read document statistics.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns StatDataResponse (Map)
*/
WordsApi.prototype.GetDocumentStatistics = function(name, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/statistics/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetDocumentTextItems
* Read document text items.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) storage  -  Document&#39;s storage. (optional) 
* @param  (String) folder  -  Document&#39;s folder. (optional) 
* @returns TextItemsResponse (Map)
*/
WordsApi.prototype.GetDocumentTextItems = function(name, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/textItems/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostUpdateDocumentFields
* Update (reevaluate) fields in document.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns DocumentResponse (Map)
*/
WordsApi.prototype.PostUpdateDocumentFields = function(name, filename, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/updateFields/?appSid={appSid}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* DeleteDocumentWatermark
* Delete watermark (for deleting last watermark from the document).
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @returns DocumentResponse (Map)
*/
WordsApi.prototype.DeleteDocumentWatermark = function(name, filename, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/watermark/?appSid={appSid}&amp;filename={filename}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'DELETE'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostInsertDocumentWatermarkImage
* Insert document watermark image.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) rotationAngle  -  The watermark rotation angle. (optional) 
* @param  (String) image  -  The image file server full name. If the name is empty the image is expected in request content. (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (File) file  -   (required) 
* @returns DocumentResponse (Map)
*/
WordsApi.prototype.PostInsertDocumentWatermarkImage = function(name, filename, rotationAngle, image, storage, folder, file, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }      	
	
	var resourcePath = '/words/{name}/watermark/insertImage/?appSid={appSid}&amp;filename={filename}&amp;rotationAngle={rotationAngle}&amp;image={image}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof rotationAngle !== 'undefined' &&  rotationAngle !== null && rotationAngle!== ''){            
			resourcePath = resourcePath.replace("{" + "rotationAngle" + "}" , rotationAngle);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]rotationAngle.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof image !== 'undefined' &&  image !== null && image!== ''){            
			resourcePath = resourcePath.replace("{" + "image" + "}" , image);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]image.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	if(file !== 'undefined' && file !== null && file !== ''){
		postData = fs.readFileSync(file)
	}
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'multipart/form-data'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostInsertDocumentWatermarkText
* Insert document watermark text.
*
* @param  (String) name  -  The document name. (required) 
* @param  (String) filename  -  Result name of the document after the operation. If this parameter is omitted then result of the operation will be saved as the source document (optional) 
* @param  (String) text  -  The text to insert. (optional) 
* @param  (String) rotationAngle  -  The text rotation angle. (optional) 
* @param  (String) storage  -  The document storage. (optional) 
* @param  (String) folder  -  The document folder. (optional) 
* @param  (WatermarkText) body  -  with the watermark data.            If the parameter is provided the query string parameters are ignored. (required) 
* @returns DocumentResponse (Map)
*/
WordsApi.prototype.PostInsertDocumentWatermarkText = function(name, filename, text, rotationAngle, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }      	
		
	var resourcePath = '/words/{name}/watermark/insertText/?appSid={appSid}&amp;filename={filename}&amp;text={text}&amp;rotationAngle={rotationAngle}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof filename !== 'undefined' &&  filename !== null && filename!== ''){            
			resourcePath = resourcePath.replace("{" + "filename" + "}" , filename);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]filename.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof text !== 'undefined' &&  text !== null && text!== ''){            
			resourcePath = resourcePath.replace("{" + "text" + "}" , text);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]text.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof rotationAngle !== 'undefined' &&  rotationAngle !== null && rotationAngle!== ''){            
			resourcePath = resourcePath.replace("{" + "rotationAngle" + "}" , rotationAngle);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]rotationAngle.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }

/**
* PutComment
* 
*
* @param  (String) name  -   (required) 
* @param  (String) fileName  -   (optional) 
* @param  (String) storage  -   (optional) 
* @param  (String) folder  -   (optional) 
* @param  (CommentDto) body  -   (required) 
* @returns CommentResponse (Map)
*/
WordsApi.prototype.PutComment = function(name, fileName, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/comments/?appSid={appSid}&amp;fileName={fileName}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof fileName !== 'undefined' &&  fileName !== null && fileName!== ''){            
			resourcePath = resourcePath.replace("{" + "fileName" + "}" , fileName);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]fileName.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'PUT'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }

/**
* GetComments
* 
*
* @param  (String) name  -   (required) 
* @param  (String) storage  -   (optional) 
* @param  (String) folder  -   (optional) 
* @returns CommentsResponse (Map)
*/
WordsApi.prototype.GetComments = function(name, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/comments/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* PostComment
* 
*
* @param  (String) name  -   (required) 
* @param  (String) commentIndex  -   (required) 
* @param  (String) fileName  -   (optional) 
* @param  (String) storage  -   (optional) 
* @param  (String) folder  -   (optional) 
* @param  (CommentDto) body  -   (required) 
* @returns CommentResponse (Map)
*/
WordsApi.prototype.PostComment = function(name, commentIndex, fileName, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof commentIndex === 'undefined' || commentIndex === null && commentIndex === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/comments/{commentIndex}/?appSid={appSid}&amp;fileName={fileName}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof commentIndex !== 'undefined' &&  commentIndex !== null && commentIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "commentIndex" + "}" , commentIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]commentIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof fileName !== 'undefined' &&  fileName !== null && fileName!== ''){            
			resourcePath = resourcePath.replace("{" + "fileName" + "}" , fileName);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]fileName.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* GetComment
* 
*
* @param  (String) name  -   (required) 
* @param  (String) commentIndex  -   (required) 
* @param  (String) storage  -   (optional) 
* @param  (String) folder  -   (optional) 
* @returns CommentResponse (Map)
*/
WordsApi.prototype.GetComment = function(name, commentIndex, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof commentIndex === 'undefined' || commentIndex === null && commentIndex === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/comments/{commentIndex}/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof commentIndex !== 'undefined' &&  commentIndex !== null && commentIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "commentIndex" + "}" , commentIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]commentIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
    
/**
* DeleteComment
* 
*
* @param  (String) name  -   (required) 
* @param  (String) commentIndex  -   (required) 
* @param  (String) storage  -   (optional) 
* @param  (String) folder  -   (optional) 
* @param  (String) fileName  -   (optional) 
* @returns SaaSposeResponse (Map)
*/
WordsApi.prototype.DeleteComment = function(name, commentIndex, storage, folder, fileName, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof commentIndex === 'undefined' || commentIndex === null && commentIndex === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/comments/{commentIndex}/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}&amp;fileName={fileName}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof commentIndex !== 'undefined' &&  commentIndex !== null && commentIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "commentIndex" + "}" , commentIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]commentIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof fileName !== 'undefined' &&  fileName !== null && fileName!== ''){            
			resourcePath = resourcePath.replace("{" + "fileName" + "}" , fileName);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]fileName.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'DELETE'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }

/**
* PutField
* 
*
* @param  (String) name  -   (required) 
* @param  (String) sectionIndex  -   (required) 
* @param  (String) paragraphIndex  -   (required) 
* @param  (String) insertBeforeNode  -   (optional) 
* @param  (String) destFileName  -   (optional) 
* @param  (String) storage  -   (optional) 
* @param  (String) folder  -   (optional) 
* @param  (FieldDto) body  -   (required) 
* @returns FieldResponse (Map)
*/
WordsApi.prototype.PutField = function(name, sectionIndex, paragraphIndex, insertBeforeNode, destFileName, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof sectionIndex === 'undefined' || sectionIndex === null && sectionIndex === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof paragraphIndex === 'undefined' || paragraphIndex === null && paragraphIndex === ''){
		throw new Error('missing required parameters.');
    }     	
		
	var resourcePath = '/words/{name}/sections/{sectionIndex}/paragraphs/{paragraphIndex}/fields/?appSid={appSid}&amp;insertBeforeNode={insertBeforeNode}&amp;destFileName={destFileName}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof sectionIndex !== 'undefined' &&  sectionIndex !== null && sectionIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "sectionIndex" + "}" , sectionIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]sectionIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof paragraphIndex !== 'undefined' &&  paragraphIndex !== null && paragraphIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "paragraphIndex" + "}" , paragraphIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]paragraphIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof insertBeforeNode !== 'undefined' &&  insertBeforeNode !== null && insertBeforeNode!== ''){            
			resourcePath = resourcePath.replace("{" + "insertBeforeNode" + "}" , insertBeforeNode);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]insertBeforeNode.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof destFileName !== 'undefined' &&  destFileName !== null && destFileName!== ''){            
			resourcePath = resourcePath.replace("{" + "destFileName" + "}" , destFileName);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]destFileName.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'PUT'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }

/**
* Search
* 
*
* @param  (String) name  -   (required) 
* @param  (String) pattern  -   (required) 
* @param  (String) storage  -   (optional) 
* @param  (String) folder  -   (optional) 
* @returns SearchResponse (Map)
*/
WordsApi.prototype.Search = function(name, pattern, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof pattern === 'undefined' || pattern === null && pattern === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/search/?appSid={appSid}&amp;pattern={pattern}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof pattern !== 'undefined' &&  pattern !== null && pattern!== ''){            
			resourcePath = resourcePath.replace("{" + "pattern" + "}" , pattern);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]pattern.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }
 
/**
* GetField
* 
*
* @param  (String) name  -   (required) 
* @param  (String) sectionIndex  -   (required) 
* @param  (String) paragraphIndex  -   (required) 
* @param  (String) fieldIndex  -   (required) 
* @param  (String) storage  -   (optional) 
* @param  (String) folder  -   (optional) 
* @returns FieldResponse (Map)
*/
WordsApi.prototype.GetField = function(name, sectionIndex, paragraphIndex, fieldIndex, storage, folder, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof sectionIndex === 'undefined' || sectionIndex === null && sectionIndex === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof paragraphIndex === 'undefined' || paragraphIndex === null && paragraphIndex === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof fieldIndex === 'undefined' || fieldIndex === null && fieldIndex === ''){
		throw new Error('missing required parameters.');
    }   	
		
	var resourcePath = '/words/{name}/sections/{sectionIndex}/paragraphs/{paragraphIndex}/fields/{fieldIndex}/?appSid={appSid}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof sectionIndex !== 'undefined' &&  sectionIndex !== null && sectionIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "sectionIndex" + "}" , sectionIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]sectionIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof paragraphIndex !== 'undefined' &&  paragraphIndex !== null && paragraphIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "paragraphIndex" + "}" , paragraphIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]paragraphIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof fieldIndex !== 'undefined' &&  fieldIndex !== null && fieldIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "fieldIndex" + "}" , fieldIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]fieldIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'GET'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = null;
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }

/**
* PostField
* 
*
* @param  (String) name  -   (required) 
* @param  (String) sectionIndex  -   (required) 
* @param  (String) paragraphIndex  -   (required) 
* @param  (String) fieldIndex  -   (required) 
* @param  (String) destFileName  -   (optional) 
* @param  (String) storage  -   (optional) 
* @param  (String) folder  -   (optional) 
* @param  (FieldDto) body  -   (required) 
* @returns FieldResponse (Map)
*/
WordsApi.prototype.PostField = function(name, sectionIndex, paragraphIndex, fieldIndex, destFileName, storage, folder, body, callback) {

    var self = this;
	
	if( typeof name === 'undefined' || name === null && name === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof sectionIndex === 'undefined' || sectionIndex === null && sectionIndex === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof paragraphIndex === 'undefined' || paragraphIndex === null && paragraphIndex === ''){
		throw new Error('missing required parameters.');
    } 
	if( typeof fieldIndex === 'undefined' || fieldIndex === null && fieldIndex === ''){
		throw new Error('missing required parameters.');
    }    	
		
	var resourcePath = '/words/{name}/sections/{sectionIndex}/paragraphs/{paragraphIndex}/fields/{fieldIndex}/?appSid={appSid}&amp;destFileName={destFileName}&amp;storage={storage}&amp;folder={folder}';
	
	resourcePath = resourcePath.replace(new RegExp('\\*', 'g'), "");
	resourcePath = resourcePath.replace(new RegExp('&amp;', 'g'), '&');
	resourcePath = resourcePath.replace('&amp;','&').replace("/?","?").replace("toFormat={toFormat}","format={format}").replace("{path}","{Path}");
	
	
	if(typeof name !== 'undefined' &&  name !== null && name!== ''){            
			resourcePath = resourcePath.replace("{" + "name" + "}" , name);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]name.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof sectionIndex !== 'undefined' &&  sectionIndex !== null && sectionIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "sectionIndex" + "}" , sectionIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]sectionIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof paragraphIndex !== 'undefined' &&  paragraphIndex !== null && paragraphIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "paragraphIndex" + "}" , paragraphIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]paragraphIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof fieldIndex !== 'undefined' &&  fieldIndex !== null && fieldIndex!== ''){            
			resourcePath = resourcePath.replace("{" + "fieldIndex" + "}" , fieldIndex);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]fieldIndex.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof destFileName !== 'undefined' &&  destFileName !== null && destFileName!== ''){            
			resourcePath = resourcePath.replace("{" + "destFileName" + "}" , destFileName);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]destFileName.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof storage !== 'undefined' &&  storage !== null && storage!== ''){            
			resourcePath = resourcePath.replace("{" + "storage" + "}" , storage);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]storage.*?(?=&|\\?|$)', 'g'), "");
		}
	
	if(typeof folder !== 'undefined' &&  folder !== null && folder!== ''){            
			resourcePath = resourcePath.replace("{" + "folder" + "}" , folder);
	}else{
		resourcePath = resourcePath.replace(new RegExp('[&?]folder.*?(?=&|\\?|$)', 'g'), "");
		}
	
	
	if(this.config.debug){console.log('resourcePath :: ' + resourcePath);}
	
    method = 'POST'
    queryParams = {}
    headerParams = {}
    formParams = {}
    files = {}
	postData = JSON.stringify(body);
    
	
	headerParams['Accept'] = 'application/xml,application/json'
    headerParams['Content-Type'] = 'application/json'

	return apiClient.InvokeAPI(resourcePath, method, queryParams, postData, headerParams, files, callback);
  }

module.exports = WordsApi


