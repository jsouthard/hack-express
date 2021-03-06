/*
 *   Copyright 2013 Life Cycle Engineering
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

/*
 *Authors:  Robert Dunigan
 */

/*
 * GET Notes page.
 */

exports.show = function(req, res){
  
  //Authenticate with cookies
  // var auth = req.cookies['AuthSession'], nano;
//   if (!auth) { res.send(401); return; }
//   nano = require('nano')({ url : 'https://localhost:6984', cookie: 'AuthSession=' + auth });
  
  res.render('Notes');
};

/*
 * Submit Network Notes.
 */

exports.submitNetwork = function(req, res){
  res.render('Notes');
};

/*
 * Submit Credentials Notes.
 */

exports.submitCredentials = function(req, res){
  res.render('Notes');
};

/*
 * Submit Crypto Notes.
 */

exports.submitCrypto = function(req, res){
  res.render('Notes');
};

/*
 * Submit Misc Notes.
 */

exports.submitMisc = function(req, res){
  res.render('Notes');
};