// Create web server
// 1. Load modules
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var comments = require('./comments.js');

// 2. Create web server
var server = http.createServer(function(request, response) {
	// 2.1 Get URL
	var url = request.url;
	// 2.2 Get path
	var filePath = '.' + url;
	// 2.3 Check if path exists
	fs.exists(filePath, function(exists) {
		if (exists) {
			// 2.3.1 Read file
			fs.readFile(filePath, function(error, content) {
				if (error) {
					//


